import asyncio
import logging
import os
import random
import re
from dataclasses import dataclass
from pathlib import Path
from typing import Any, Literal

import asyncpg
from dotenv import load_dotenv
from playwright.async_api import (
    Browser,
    BrowserContext,
    Error as PlaywrightError,
    Locator,
    Page,
    async_playwright,
)

load_dotenv()

LOGGER = logging.getLogger("linkedin-bot")
SESSION_PATH = Path("/tmp/session.json")
DEFAULT_VIEWPORT = {"width": 1366, "height": 768}
CHROME_USER_AGENT = (
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36"
)

SECTOR_INVITE_MESSAGES = {
    "btp": (
        "Bonjour {firstname}, je vois que {company} répond aux appels d'offres publics. "
        "On a développé Eligibly.ai pour aider les PME BTP à gagner 70% de temps sur leurs "
        "dossiers. Je serais ravi d'échanger. À bientôt !"
    ),
    "it": (
        "Bonjour {firstname}, j'ai vu le profil de {company} dans le secteur IT/marchés "
        "publics. Eligibly.ai automatise la veille et les réponses aux AO — on gagne en "
        "moyenne 8h/semaine par commercial. Échange rapide ?"
    ),
    "formation": (
        "Bonjour {firstname}, en voyant {company} (secteur formation), j'imagine que les AO "
        "Qualiopi/OPCO sont chronophages. Eligibly.ai aide les OF à répondre 3x plus vite. "
        "On peut en parler ?"
    ),
}

FOLLOW_UP_MESSAGES = {
    "message1": (
        "Bonjour {firstname}, merci d'avoir accepté ! Eligibly.ai analyse les DCE et génère "
        "les mémoires techniques automatiquement. +40% de taux de réussite aux AO. "
        "Une démo de 15 min ? → https://eligibly.ai"
    ),
    "message2": (
        "Bonjour {firstname}, dernière relance — si les marchés publics sont un enjeu pour "
        "{company}, montrez-moi Eligibly.ai en 15 min. Lien : https://eligibly.ai. "
        "Bonne continuation sinon !"
    ),
}

Mode = Literal["invite", "message", "check"]


@dataclass(slots=True)
class Prospect:
    id: str
    linkedin_url: str
    firstname: str | None
    lastname: str | None
    company: str | None
    title: str | None
    sector: str | None
    city: str | None
    step: str
    invitation_sent_at: Any | None
    connected_at: Any | None
    message1_sent_at: Any | None
    message2_sent_at: Any | None
    reply_received: bool
    notes: str | None


class LinkedInRepository:
    def __init__(self, database_url: str) -> None:
        self.database_url = database_url
        self.pool: asyncpg.Pool | None = None

    async def connect(self) -> None:
        self.pool = await asyncpg.create_pool(
            self.database_url,
            min_size=1,
            max_size=4,
            command_timeout=60,
        )

    async def close(self) -> None:
        if self.pool:
            await self.pool.close()

    def _ensure_pool(self) -> asyncpg.Pool:
        if not self.pool:
            raise RuntimeError("Database pool is not initialized.")
        return self.pool

    @staticmethod
    def _to_prospect(record: asyncpg.Record) -> Prospect:
        return Prospect(
            id=str(record["id"]),
            linkedin_url=record["linkedin_url"],
            firstname=record["firstname"],
            lastname=record["lastname"],
            company=record["company"],
            title=record["title"],
            sector=record["sector"],
            city=record["city"],
            step=record["step"],
            invitation_sent_at=record["invitation_sent_at"],
            connected_at=record["connected_at"],
            message1_sent_at=record["message1_sent_at"],
            message2_sent_at=record["message2_sent_at"],
            reply_received=record["reply_received"],
            notes=record["notes"],
        )

    async def fetch_invitation_candidates(self, limit: int) -> list[Prospect]:
        rows = await self._ensure_pool().fetch(
            """
            SELECT *
            FROM linkedin_campaigns
            WHERE step = 'invitation_pending'
              AND reply_received = FALSE
            ORDER BY created_at ASC
            LIMIT $1
            """,
            limit,
        )
        return [self._to_prospect(row) for row in rows]

    async def fetch_message_candidates(self, limit: int) -> list[tuple[Prospect, str]]:
        rows = await self._ensure_pool().fetch(
            """
            SELECT *, 'message1' AS message_stage, connected_at AS due_at
            FROM linkedin_campaigns
            WHERE step = 'connected'
              AND reply_received = FALSE
              AND connected_at IS NOT NULL
              AND connected_at <= NOW() - INTERVAL '4 days'
              AND message1_sent_at IS NULL

            UNION ALL

            SELECT *, 'message2' AS message_stage, message1_sent_at AS due_at
            FROM linkedin_campaigns
            WHERE step = 'message1_sent'
              AND reply_received = FALSE
              AND connected_at IS NOT NULL
              AND connected_at <= NOW() - INTERVAL '8 days'
              AND message2_sent_at IS NULL

            ORDER BY due_at ASC NULLS LAST, created_at ASC
            LIMIT $1
            """,
            limit,
        )
        return [(self._to_prospect(row), row["message_stage"]) for row in rows]

    async def fetch_check_candidates(self, limit: int) -> list[Prospect]:
        rows = await self._ensure_pool().fetch(
            """
            SELECT *
            FROM linkedin_campaigns
            WHERE step IN ('invitation_sent', 'connected', 'message1_sent')
              AND reply_received = FALSE
            ORDER BY COALESCE(message1_sent_at, connected_at, invitation_sent_at, created_at) ASC
            LIMIT $1
            """,
            limit,
        )
        return [self._to_prospect(row) for row in rows]

    async def get_today_invite_count(self) -> int:
        count = await self._ensure_pool().fetchval(
            """
            SELECT COUNT(*)
            FROM linkedin_campaigns
            WHERE invitation_sent_at IS NOT NULL
              AND invitation_sent_at::date = CURRENT_DATE
            """
        )
        return int(count or 0)

    async def get_today_message_count(self) -> int:
        count = await self._ensure_pool().fetchval(
            """
            SELECT COUNT(*)
            FROM linkedin_campaigns
            WHERE
              (message1_sent_at IS NOT NULL AND message1_sent_at::date = CURRENT_DATE)
              OR
              (message2_sent_at IS NOT NULL AND message2_sent_at::date = CURRENT_DATE)
            """
        )
        return int(count or 0)

    async def mark_invitation_sent(self, prospect_id: str) -> None:
        await self._ensure_pool().execute(
            """
            UPDATE linkedin_campaigns
            SET step = 'invitation_sent',
                invitation_sent_at = NOW(),
                updated_at = NOW()
            WHERE id = $1
            """,
            prospect_id,
        )

    async def mark_connected(self, prospect_id: str) -> None:
        await self._ensure_pool().execute(
            """
            UPDATE linkedin_campaigns
            SET connected_at = COALESCE(connected_at, NOW()),
                step = CASE WHEN step = 'invitation_sent' THEN 'connected' ELSE step END,
                updated_at = NOW()
            WHERE id = $1
            """,
            prospect_id,
        )

    async def mark_message_sent(self, prospect_id: str, stage: str) -> None:
        if stage == "message1":
            query = """
                UPDATE linkedin_campaigns
                SET message1_sent_at = NOW(),
                    step = 'message1_sent',
                    updated_at = NOW()
                WHERE id = $1
            """
        else:
            query = """
                UPDATE linkedin_campaigns
                SET message2_sent_at = NOW(),
                    step = 'message2_sent',
                    updated_at = NOW()
                WHERE id = $1
            """
        await self._ensure_pool().execute(query, prospect_id)

    async def mark_reply_received(self, prospect_id: str) -> None:
        await self._ensure_pool().execute(
            """
            UPDATE linkedin_campaigns
            SET reply_received = TRUE,
                step = 'reply_received',
                updated_at = NOW()
            WHERE id = $1
            """,
            prospect_id,
        )

    async def append_note(self, prospect_id: str, note: str) -> None:
        await self._ensure_pool().execute(
            """
            UPDATE linkedin_campaigns
            SET notes = CONCAT_WS(E'\n', NULLIF(notes, ''), $2),
                updated_at = NOW()
            WHERE id = $1
            """,
            prospect_id,
            note,
        )

    async def log_action(
        self,
        prospect_id: str | None,
        action: str,
        status: str,
        error: str | None = None,
    ) -> None:
        await self._ensure_pool().execute(
            """
            INSERT INTO linkedin_logs (prospect_id, action, status, error)
            VALUES ($1, $2, $3, $4)
            """,
            prospect_id,
            action,
            status,
            error,
        )


class LinkedInBrowser:
    def __init__(self) -> None:
        self.email = os.getenv("LINKEDIN_EMAIL")
        self.password = os.getenv("LINKEDIN_PASSWORD")
        if not self.email or not self.password:
            raise RuntimeError("LINKEDIN_EMAIL and LINKEDIN_PASSWORD must be configured.")

        self.headless = os.getenv("HEADLESS", "true").lower() != "false"
        self.playwright = None
        self.browser: Browser | None = None
        self.context: BrowserContext | None = None

    async def start(self) -> None:
        self.playwright = await async_playwright().start()
        self.browser = await self.playwright.chromium.launch(
            headless=self.headless,
            args=[
                "--disable-blink-features=AutomationControlled",
                "--disable-dev-shm-usage",
                "--no-sandbox",
            ],
        )
        self.context = await self.browser.new_context(
            storage_state=str(SESSION_PATH) if SESSION_PATH.exists() else None,
            user_agent=CHROME_USER_AGENT,
            viewport=DEFAULT_VIEWPORT,
            timezone_id="Europe/Paris",
            locale="fr-FR",
        )
        await self.context.add_init_script(
            """
            Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
            window.chrome = { runtime: {} };
            """
        )
        await self.ensure_authenticated()

    async def close(self) -> None:
        if self.context:
            await self.context.storage_state(path=str(SESSION_PATH))
            await self.context.close()
        if self.browser:
            await self.browser.close()
        if self.playwright:
            await self.playwright.stop()

    def _ensure_context(self) -> BrowserContext:
        if not self.context:
            raise RuntimeError("Browser context is not initialized.")
        return self.context

    async def ensure_authenticated(self) -> None:
        page = await self._ensure_context().new_page()
        try:
            await page.goto("https://www.linkedin.com/feed/", wait_until="domcontentloaded")
            await self.random_pause()
            if await self.is_logged_in(page):
                return

            await page.goto("https://www.linkedin.com/login", wait_until="domcontentloaded")
            await self.random_pause()
            await self.random_scroll(page)

            email_input = page.locator("#username")
            password_input = page.locator("#password")
            await email_input.wait_for(state="visible", timeout=15000)
            await self.human_type(page, email_input, self.email)
            await self.human_type(page, password_input, self.password)
            await self.random_click(page, page.locator('button[type="submit"]'))
            await self.random_pause()

            checkpoint_text = page.locator(
                "text=/security check|captcha|vérification de sécurité/i"
            )
            if await checkpoint_text.count():
                raise RuntimeError(
                    "LinkedIn triggered a checkpoint/captcha. Complete it manually, then rerun."
                )

            await page.wait_for_url(re.compile(r"linkedin\.com/(feed|checkpoint).*"), timeout=20000)
            if "checkpoint" in page.url:
                raise RuntimeError(
                    "LinkedIn redirected to a checkpoint. Complete it manually, then rerun."
                )

            if not await self.is_logged_in(page):
                raise RuntimeError("LinkedIn login did not reach an authenticated session.")
        finally:
            await self._ensure_context().storage_state(path=str(SESSION_PATH))
            await page.close()

    async def is_logged_in(self, page: Page) -> bool:
        selectors = [
            'input[placeholder*="Rechercher"]',
            'input[placeholder*="Search"]',
            '[data-test-global-nav-link="feed"]',
            "nav.global-nav",
        ]
        for selector in selectors:
            try:
                await page.locator(selector).first.wait_for(state="visible", timeout=3000)
                return True
            except PlaywrightError:
                continue
        return False

    async def random_pause(self) -> None:
        await asyncio.sleep(random.uniform(3, 8))

    async def random_scroll(self, page: Page) -> None:
        distance = random.randint(180, 900)
        await page.evaluate("(y) => window.scrollBy({ top: y, behavior: 'smooth' })", distance)
        await asyncio.sleep(random.uniform(0.4, 1.3))

    async def human_type(self, page: Page, locator: Locator, text: str) -> None:
        await locator.click()
        await self.random_scroll(page)
        for character in text:
            await locator.type(character, delay=int(random.uniform(0.05, 0.15) * 1000))

    async def random_click(self, page: Page, locator: Locator) -> None:
        await locator.wait_for(state="visible", timeout=15000)
        await self.random_scroll(page)
        await locator.click()
        await self.random_pause()

    async def open_profile(self, url: str) -> Page:
        page = await self._ensure_context().new_page()
        await page.goto(url, wait_until="domcontentloaded")
        await self.random_pause()
        await self.random_scroll(page)
        return page

    async def _find_first_visible(
        self,
        page: Page,
        selectors: list[str],
        timeout: int = 5000,
    ) -> Locator | None:
        for selector in selectors:
            locator = page.locator(selector).first
            try:
                await locator.wait_for(state="visible", timeout=timeout)
                return locator
            except PlaywrightError:
                continue
        return None

    async def _open_more_actions_menu(self, page: Page) -> bool:
        more_button = await self._find_first_visible(
            page,
            [
                'button:has-text("Plus")',
                'button:has-text("More")',
                'button[aria-label*="Plus"]',
                'button[aria-label*="More"]',
            ],
            timeout=3000,
        )
        if not more_button:
            return False
        await self.random_click(page, more_button)
        return True

    async def send_invitation(self, prospect: Prospect, message: str) -> dict[str, Any]:
        page = await self.open_profile(prospect.linkedin_url)
        try:
            invite_button = await self._find_first_visible(
                page,
                [
                    'button:has-text("Inviter")',
                    'button:has-text("Se connecter")',
                    'button:has-text("Connect")',
                    'button[aria-label*="Inviter"]',
                    'button[aria-label*="Se connecter"]',
                    'button[aria-label*="Connect"]',
                ],
            )
            if not invite_button and await self._open_more_actions_menu(page):
                invite_button = await self._find_first_visible(
                    page,
                    [
                        '[role="menu"] button:has-text("Inviter")',
                        '[role="menu"] button:has-text("Se connecter")',
                        '[role="menu"] button:has-text("Connect")',
                    ]
                )

            if not invite_button:
                return {
                    "success": False,
                    "status": "invite_button_not_found",
                    "detail": "No invite action was visible on the profile.",
                }

            await self.random_click(page, invite_button)

            add_note_button = await self._find_first_visible(
                page,
                [
                    'button:has-text("Ajouter une note")',
                    'button:has-text("Add a note")',
                ],
                timeout=6000,
            )
            if add_note_button:
                await self.random_click(page, add_note_button)
                note_input = await self._find_first_visible(
                    page,
                    ['textarea[name="message"]', 'textarea#custom-message'],
                    timeout=6000,
                )
                if not note_input:
                    return {
                        "success": False,
                        "status": "invite_note_input_not_found",
                        "detail": "Invite note input was not found.",
                    }
                await note_input.fill("")
                await self.human_type(page, note_input, message)

            send_button = await self._find_first_visible(
                page,
                [
                    'button:has-text("Envoyer")',
                    'button:has-text("Send")',
                ],
                timeout=6000,
            )
            if not send_button:
                return {
                    "success": False,
                    "status": "invite_send_button_not_found",
                    "detail": "Invite send button was not found.",
                }

            await self.random_click(page, send_button)
            return {"success": True, "status": "invitation_sent"}
        finally:
            await page.close()

    async def send_message(self, prospect: Prospect, message: str) -> dict[str, Any]:
        page = await self.open_profile(prospect.linkedin_url)
        try:
            message_button = await self._find_first_visible(
                page,
                [
                    'button:has-text("Message")',
                    'button[aria-label*="Message"]',
                ],
            )
            if not message_button:
                return {
                    "success": False,
                    "status": "message_button_not_found",
                    "detail": "No direct message action was visible on the profile.",
                }

            await self.random_click(page, message_button)
            composer = await self._find_first_visible(
                page,
                [
                    'div[role="textbox"][contenteditable="true"]',
                    "div.msg-form__contenteditable",
                    'textarea[name="message"]',
                    "textarea",
                ],
                timeout=10000,
            )
            if not composer:
                return {
                    "success": False,
                    "status": "message_composer_not_found",
                    "detail": "Message composer was not found.",
                }

            await composer.fill("")
            await self.human_type(page, composer, message)
            send_button = await self._find_first_visible(
                page,
                [
                    'button:has-text("Envoyer")',
                    'button:has-text("Send")',
                    'button[type="submit"]',
                ],
                timeout=6000,
            )
            if not send_button:
                return {
                    "success": False,
                    "status": "message_send_button_not_found",
                    "detail": "Message send button was not found.",
                }

            await self.random_click(page, send_button)
            return {"success": True, "status": "message_sent"}
        finally:
            await page.close()

    async def check_connection(self, prospect: Prospect) -> dict[str, Any]:
        page = await self.open_profile(prospect.linkedin_url)
        try:
            message_button = await self._find_first_visible(
                page,
                [
                    'button:has-text("Message")',
                    'button[aria-label*="Message"]',
                ],
                timeout=4000,
            )
            if not message_button:
                return {
                    "success": True,
                    "status": "pending",
                    "connected": False,
                    "reply_detected": False,
                }

            await self.random_click(page, message_button)
            await self.random_scroll(page)
            reply_detected = await self._detect_reply(page)
            return {
                "success": True,
                "status": "connected",
                "connected": True,
                "reply_detected": reply_detected,
            }
        finally:
            await page.close()

    async def _detect_reply(self, page: Page) -> bool:
        reply_selectors = [
            ".msg-s-message-list__event.clearfix:not(.msg-s-message-group--self)",
            '.msg-s-message-list__event-listitem:not([data-view-name="msg-s-message-group-self"])',
            '[data-view-name*="message-list-item"] [data-test-message-author-name]',
        ]
        for selector in reply_selectors:
            try:
                count = await page.locator(selector).count()
                if count > 0:
                    return True
            except PlaywrightError:
                continue
        return False


class LinkedInAutomationService:
    def __init__(self) -> None:
        database_url = os.getenv("DATABASE_URL")
        if not database_url:
            raise RuntimeError("DATABASE_URL is not configured.")
        self.repository = LinkedInRepository(database_url)
        self.browser: LinkedInBrowser | None = None
        self.invite_limit = int(os.getenv("MAX_DAILY_INVITES", "15"))
        self.message_limit = int(os.getenv("MAX_DAILY_MESSAGES", "15"))

    async def run(self, mode: Mode, limit: int | None = None) -> dict[str, Any]:
        await self.repository.connect()
        try:
            if mode == "invite":
                result = await self._run_invites(limit)
            elif mode == "message":
                result = await self._run_messages(limit)
            else:
                result = await self._run_checks(limit)
            result["mode"] = mode
            return result
        finally:
            if self.browser:
                await self.browser.close()
            await self.repository.close()

    async def _ensure_browser_started(self) -> LinkedInBrowser:
        if not self.browser:
            self.browser = LinkedInBrowser()
            await self.browser.start()
        return self.browser

    async def _run_invites(self, limit: int | None) -> dict[str, Any]:
        sent_today = await self.repository.get_today_invite_count()
        remaining = max(self.invite_limit - sent_today, 0)
        batch_limit = min(limit or remaining or 1, remaining) if remaining else 0
        if batch_limit <= 0:
            return {
                "processed": 0,
                "sent_today": sent_today,
                "remaining_today": remaining,
                "results": [],
            }

        prospects = await self.repository.fetch_invitation_candidates(batch_limit)
        if not prospects:
            return {
                "processed": 0,
                "sent_today": sent_today,
                "remaining_today": remaining,
                "results": [],
            }
        await self._ensure_browser_started()
        return await self._process_invites(prospects, sent_today, remaining)

    async def _run_messages(self, limit: int | None) -> dict[str, Any]:
        sent_today = await self.repository.get_today_message_count()
        remaining = max(self.message_limit - sent_today, 0)
        batch_limit = min(limit or remaining or 1, remaining) if remaining else 0
        if batch_limit <= 0:
            return {
                "processed": 0,
                "sent_today": sent_today,
                "remaining_today": remaining,
                "results": [],
            }

        prospects = await self.repository.fetch_message_candidates(batch_limit)
        if not prospects:
            return {
                "processed": 0,
                "sent_today": sent_today,
                "remaining_today": remaining,
                "results": [],
            }
        await self._ensure_browser_started()
        return await self._process_messages(prospects, sent_today, remaining)

    async def _run_checks(self, limit: int | None) -> dict[str, Any]:
        batch_limit = limit or int(os.getenv("MAX_CHECKS_PER_RUN", "25"))
        prospects = await self.repository.fetch_check_candidates(batch_limit)
        if not prospects:
            return {
                "processed": 0,
                "succeeded": 0,
                "failed": 0,
                "results": [],
            }
        await self._ensure_browser_started()
        results: list[dict[str, Any]] = []
        success_count = 0
        browser = await self._ensure_browser_started()

        for prospect in prospects:
            try:
                outcome = await browser.check_connection(prospect)
                if outcome.get("connected"):
                    await self.repository.mark_connected(prospect.id)
                if outcome.get("reply_detected"):
                    await self.repository.mark_reply_received(prospect.id)
                await self.repository.log_action(
                    prospect.id,
                    "check_connection",
                    outcome["status"],
                )
                results.append(
                    {
                        "prospect_id": prospect.id,
                        "linkedin_url": prospect.linkedin_url,
                        **outcome,
                    }
                )
                success_count += 1
            except Exception as exc:  # pragma: no cover - browser variance
                await self.repository.log_action(
                    prospect.id,
                    "check_connection",
                    "failed",
                    str(exc),
                )
                await self.repository.append_note(prospect.id, f"Check failed: {exc}")
                results.append(
                    {
                        "prospect_id": prospect.id,
                        "linkedin_url": prospect.linkedin_url,
                        "success": False,
                        "status": "failed",
                        "detail": str(exc),
                    }
                )

        return {
            "processed": len(results),
            "succeeded": success_count,
            "failed": len(results) - success_count,
            "results": results,
        }

    async def _process_invites(
        self,
        prospects: list[Prospect],
        sent_today: int,
        remaining: int,
    ) -> dict[str, Any]:
        results: list[dict[str, Any]] = []
        success_count = 0
        browser = await self._ensure_browser_started()

        for prospect in prospects:
            message = build_invite_message(prospect)
            try:
                outcome = await browser.send_invitation(prospect, message)
                if outcome["success"]:
                    await self.repository.mark_invitation_sent(prospect.id)
                    success_count += 1
                else:
                    await self.repository.append_note(
                        prospect.id, f"Invite skipped: {outcome['detail']}"
                    )
                await self.repository.log_action(
                    prospect.id,
                    "send_invitation",
                    outcome["status"],
                    None if outcome["success"] else outcome.get("detail"),
                )
                results.append(
                    {
                        "prospect_id": prospect.id,
                        "linkedin_url": prospect.linkedin_url,
                        **outcome,
                    }
                )
            except Exception as exc:  # pragma: no cover - browser variance
                await self.repository.log_action(
                    prospect.id,
                    "send_invitation",
                    "failed",
                    str(exc),
                )
                await self.repository.append_note(prospect.id, f"Invite failed: {exc}")
                results.append(
                    {
                        "prospect_id": prospect.id,
                        "linkedin_url": prospect.linkedin_url,
                        "success": False,
                        "status": "failed",
                        "detail": str(exc),
                    }
                )

        return {
            "processed": len(results),
            "succeeded": success_count,
            "failed": len(results) - success_count,
            "sent_today": sent_today + success_count,
            "remaining_today": max(remaining - success_count, 0),
            "results": results,
        }

    async def _process_messages(
        self,
        prospects: list[tuple[Prospect, str]],
        sent_today: int,
        remaining: int,
    ) -> dict[str, Any]:
        results: list[dict[str, Any]] = []
        success_count = 0
        browser = await self._ensure_browser_started()

        for prospect, stage in prospects:
            message = build_follow_up_message(prospect, stage)
            try:
                outcome = await browser.send_message(prospect, message)
                if outcome["success"]:
                    await self.repository.mark_connected(prospect.id)
                    await self.repository.mark_message_sent(prospect.id, stage)
                    success_count += 1
                else:
                    await self.repository.append_note(
                        prospect.id, f"Message skipped ({stage}): {outcome['detail']}"
                    )
                await self.repository.log_action(
                    prospect.id,
                    f"send_{stage}",
                    outcome["status"],
                    None if outcome["success"] else outcome.get("detail"),
                )
                results.append(
                    {
                        "prospect_id": prospect.id,
                        "linkedin_url": prospect.linkedin_url,
                        "message_stage": stage,
                        **outcome,
                    }
                )
            except Exception as exc:  # pragma: no cover - browser variance
                await self.repository.log_action(
                    prospect.id,
                    f"send_{stage}",
                    "failed",
                    str(exc),
                )
                await self.repository.append_note(
                    prospect.id, f"Message failed ({stage}): {exc}"
                )
                results.append(
                    {
                        "prospect_id": prospect.id,
                        "linkedin_url": prospect.linkedin_url,
                        "message_stage": stage,
                        "success": False,
                        "status": "failed",
                        "detail": str(exc),
                    }
                )

        return {
            "processed": len(results),
            "succeeded": success_count,
            "failed": len(results) - success_count,
            "sent_today": sent_today + success_count,
            "remaining_today": max(remaining - success_count, 0),
            "results": results,
        }


def normalize_sector(sector: str | None) -> str:
    if not sector:
        return "it"
    lowered = sector.strip().lower()
    if "btp" in lowered or "construction" in lowered or "travaux" in lowered:
        return "btp"
    if "formation" in lowered or "qualiopi" in lowered or "opco" in lowered:
        return "formation"
    return "it"


def display_firstname(prospect: Prospect) -> str:
    return prospect.firstname or "bonjour"


def display_company(prospect: Prospect) -> str:
    return prospect.company or "votre entreprise"


def build_invite_message(prospect: Prospect) -> str:
    template = SECTOR_INVITE_MESSAGES[normalize_sector(prospect.sector)]
    return template.format(
        firstname=display_firstname(prospect),
        company=display_company(prospect),
    )


def build_follow_up_message(prospect: Prospect, stage: str) -> str:
    template = FOLLOW_UP_MESSAGES[stage]
    return template.format(
        firstname=display_firstname(prospect),
        company=display_company(prospect),
    )

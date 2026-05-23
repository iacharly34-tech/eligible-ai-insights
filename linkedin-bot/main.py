import logging
import os
from typing import Literal

from dotenv import load_dotenv
from fastapi import FastAPI, Header, HTTPException, Query
from fastapi.responses import JSONResponse
import uvicorn

from linkedin_bot import LinkedInAutomationService

load_dotenv()

logging.basicConfig(
    level=os.getenv("LOG_LEVEL", "INFO"),
    format="%(asctime)s %(levelname)s %(name)s %(message)s",
)

app = FastAPI(title="Eligibly LinkedIn Bot", version="1.0.0")


def get_bind_port() -> int:
    raw_port = os.getenv("PORT", "8000")
    try:
        return int(raw_port)
    except ValueError as exc:
        raise RuntimeError(f"Invalid PORT value: {raw_port}") from exc


def extract_webhook_secret(
    x_webhook_secret: str | None,
    authorization: str | None,
) -> str | None:
    if x_webhook_secret:
        return x_webhook_secret

    if not authorization:
        return None

    scheme, _, token = authorization.partition(" ")
    if scheme.lower() == "bearer" and token:
        return token.strip()

    stripped = authorization.strip()
    return stripped or None


def verify_webhook_secret(webhook_secret: str | None) -> None:
    expected_secret = os.getenv("WEBHOOK_SECRET")
    if not expected_secret:
        raise HTTPException(
            status_code=500,
            detail="WEBHOOK_SECRET is not configured on the service.",
        )
    if webhook_secret != expected_secret:
        raise HTTPException(status_code=401, detail="Invalid webhook secret.")


@app.get("/health")
async def healthcheck() -> dict[str, str]:
    return {"status": "ok"}


@app.post("/run")
async def run_bot(
    mode: Literal["invite", "message", "check"] = Query(...),
    limit: int | None = Query(default=None, ge=1, le=50),
    x_webhook_secret: str | None = Header(default=None),
    authorization: str | None = Header(default=None),
) -> JSONResponse:
    verify_webhook_secret(extract_webhook_secret(x_webhook_secret, authorization))
    service = LinkedInAutomationService()
    try:
        result = await service.run(mode=mode, limit=limit)
    except HTTPException:
        raise
    except Exception as exc:  # pragma: no cover - safety wrapper
        logging.exception("LinkedIn bot run failed")
        raise HTTPException(status_code=500, detail=str(exc)) from exc
    return JSONResponse(result)


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=get_bind_port())

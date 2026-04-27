import logging
import os
from typing import Literal

from dotenv import load_dotenv
from fastapi import FastAPI, Header, HTTPException, Query
from fastapi.responses import JSONResponse

from linkedin_bot import LinkedInAutomationService

load_dotenv()

logging.basicConfig(
    level=os.getenv("LOG_LEVEL", "INFO"),
    format="%(asctime)s %(levelname)s %(name)s %(message)s",
)

app = FastAPI(title="Eligibly LinkedIn Bot", version="1.0.0")


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
) -> JSONResponse:
    verify_webhook_secret(x_webhook_secret)
    service = LinkedInAutomationService()
    try:
        result = await service.run(mode=mode, limit=limit)
    except HTTPException:
        raise
    except Exception as exc:  # pragma: no cover - safety wrapper
        logging.exception("LinkedIn bot run failed")
        raise HTTPException(status_code=500, detail=str(exc)) from exc
    return JSONResponse(result)

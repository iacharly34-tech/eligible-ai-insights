FROM mcr.microsoft.com/playwright/python:v1.53.0-noble

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=1 \
    PORT=8000

WORKDIR /app

COPY linkedin-bot/requirements.txt /tmp/requirements.txt

RUN pip install --upgrade pip \
    && pip install -r /tmp/requirements.txt

COPY linkedin-bot /app

EXPOSE 8000

CMD ["python", "main.py"]

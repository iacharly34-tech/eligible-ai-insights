# Railway deploy guide - LinkedIn bot Eligibly

## Objectif

Faire une seule fois le branchement entre Railway, le bot LinkedIn Playwright et Vercel. Ensuite le cron Vercel pourra declencher le bot automatiquement chaque matin.

## 1. Creer le service Railway

1. Aller sur Railway.app.
2. Creer un compte puis choisir `New Project`.
3. Choisir `Deploy from GitHub`.
4. Connecter le repository contenant le dossier `linkedin-bot/`.
5. Laisser Railway deployer depuis la racine du repository: le fichier `railway.toml` en racine force l'usage de `linkedin-bot/Dockerfile`.
6. Le Dockerfile doit partir d'une image Playwright officielle (`mcr.microsoft.com/playwright/python:...`) pour eviter les echecs d'installation Chromium/system deps pendant le build Railway.
7. Ne pas renseigner de config-as-code custom vers un sous-dossier, sinon Railway peut ignorer la config racine et repartir sur un build non desire.

## 1.b Pourquoi ce Dockerfile

- Railway lit bien `configFile=/railway.toml` a la racine pour ce service.
- Le build Docker doit donc rester compatible avec un contexte de build repo-root.
- Une image de base Playwright officielle embarque deja Chromium et ses dependances Linux, ce qui supprime la partie la plus fragile du build.
- Un `.dockerignore` racine doit limiter le contexte au seul dossier `linkedin-bot/` pour ne pas envoyer tout le site marketing dans l'image du bot.

## 2. Ajouter les variables d'environnement Railway

Ajouter exactement ces variables dans Railway:

- `LINKEDIN_EMAIL`
- `LINKEDIN_PASSWORD`
- `DATABASE_URL`
- `WEBHOOK_SECRET`
- `MAX_DAILY_INVITES=15`
- `MAX_DAILY_MESSAGES=15`
- `MAX_CHECKS_PER_RUN=25`
- `HEADLESS=true`
- `PORT=8000` (optionnel si l'application ecoute deja `process.env.PORT`; utile seulement pour forcer Railway a verifier ce port)

Pour `WEBHOOK_SECRET`, generer une chaine aleatoire longue et privee. Exemple de commande locale:

```bash
openssl rand -hex 32
```

## 3. Recuperer l'URL Railway

1. Une fois le deploy termine, copier l'URL publique Railway.
2. Conserver cette URL, par exemple:

```text
https://eligibly-linkedin-bot-production.up.railway.app
```

## 4. Ajouter les variables cote Vercel

Dans le projet Vercel d'Eligibly, ajouter:

- `RAILWAY_BOT_URL` = URL publique Railway
- `WEBHOOK_SECRET` = la meme valeur que dans Railway

Si Daniel prefere utiliser NanoCorp CLI:

```bash
nanocorp vercel env set RAILWAY_BOT_URL production
nanocorp vercel env set WEBHOOK_SECRET production
```

## 5. Mode de declenchement attendu

Le cron Vercel appellera ensuite:

```text
POST {RAILWAY_BOT_URL}/run?mode=invite
POST {RAILWAY_BOT_URL}/run?mode=check
POST {RAILWAY_BOT_URL}/run?mode=message
```

Header obligatoire:

```text
X-Webhook-Secret: {WEBHOOK_SECRET}
```

## 6. Checklist finale Daniel

- Le service Railway repond sur `GET /health`
- `POST /run?mode=invite` repond en `200`
- `POST /run?mode=check` repond en `200`
- `POST /run?mode=message` repond en `200`
- `RAILWAY_BOT_URL` est bien present dans Vercel
- `WEBHOOK_SECRET` est identique dans Railway et Vercel

## Ce que Daniel fait une seule fois

1. Creer Railway et deployer le repository; la config racine enverra automatiquement Railway vers `linkedin-bot/Dockerfile`.
2. Ajouter `LINKEDIN_EMAIL`, `LINKEDIN_PASSWORD`, `DATABASE_URL`, `WEBHOOK_SECRET`.
3. Copier l'URL Railway dans `RAILWAY_BOT_URL` cote Vercel.
4. Ajouter aussi `WEBHOOK_SECRET` cote Vercel.

Apres cela, le cron Vercel peut piloter le bot automatiquement chaque matin.

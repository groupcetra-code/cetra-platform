# Google Cloud Run Deployment

This repository is a Next.js app configured to run on Google Cloud Run via Docker.

## Files Added

- `Dockerfile` - Builds the app and runs `npm start` on port `8080`
- `.dockerignore` - Keeps local files out of the container build
- `.gcloudignore` - Keeps local artifacts out of Cloud SDK upload

## Local Build

```bash
npm install
npm run build
docker build -t cetra-platform .
```

## Deploy to Cloud Run

1. Install the Google Cloud SDK: https://cloud.google.com/sdk/docs/install
2. Authenticate:

```bash
gcloud auth login
```

3. Set your project and region:

```bash
gcloud config set project YOUR_PROJECT_ID
gcloud config set run/region YOUR_REGION
```

4. Deploy:

```bash
gcloud run deploy cetra-platform \
  --image gcr.io/YOUR_PROJECT_ID/cetra-platform \
  --platform managed \
  --allow-unauthenticated \
  --port 8080
```

If you prefer building and pushing in one step:

```bash
gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/cetra-platform

gcloud run deploy cetra-platform --image gcr.io/YOUR_PROJECT_ID/cetra-platform --platform managed --allow-unauthenticated --port 8080
```

## Cloud Build Automation

You can execute the Cloud Build workflow in this repo with:

```bash
gcloud builds submit --config cloudbuild.yaml . \
  --substitutions=_REGION=us-central1,_SERVICE_NAME=cetra-platform,NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL,NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

This builds the app, pushes the image to Container Registry, and deploys Cloud Run automatically.

## Environment Variables

Your Supabase keys are loaded from environment variables in `Lib/supabase.ts`:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Set them in Cloud Run after deployment or via `gcloud run deploy`:

```bash
gcloud run deploy cetra-platform \
  --image gcr.io/YOUR_PROJECT_ID/cetra-platform \
  --set-env-vars NEXT_PUBLIC_SUPABASE_URL=...,NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

## Notes

- The app uses Next.js 16 App Router and requires a Node container.
- The container exposes port `8080` for Cloud Run.

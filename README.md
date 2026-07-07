# MFatehM — Portfolio

Personal portfolio website of **Muhammad Fateh Mehmood** — PhD student in
Mechanical Engineering at Purdue University (Boiling and Two-Phase Flow
Laboratory).

## Stack

Plain HTML + CSS. No build step, no dependencies.

- `index.html` — home (about, research interests, skills, highlights)
- `experience.html` — research, industry, and leadership experience
- `projects.html` — selected projects
- `education.html` — degrees, honors, certifications
- `css/style.css` — shared styles (light/dark via `prefers-color-scheme`)
- `vercel.json` — clean URLs (`/experience` instead of `/experience.html`)

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

Hosted on [Vercel](https://vercel.com). Import this repo as a new project —
no framework preset or build command needed. Every push to `main` redeploys.

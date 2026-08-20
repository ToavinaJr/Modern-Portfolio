# ToavinaJr — Developer Portfolio

Professional portfolio for **Toavina Sylvianno Randriamihaingoson**, a Software Engineer and Full-Stack Developer based in Antananarivo, Madagascar and available for remote opportunities.

![Portfolio preview](public/images/og-portfolio.png)

**Live site:** [portfolio-toavinajr.vercel.app](https://portfolio-toavinajr.vercel.app)

## About

The site presents selected full-stack, frontend, C++/Qt and AI integration work. It separates professional teaching experience from practical software engineering projects and avoids unverified proficiency scores or employment claims.

## Tech Stack

- React 19, TypeScript and Vite
- Tailwind CSS
- Configurable OpenAI or Groq integration through server-side endpoints
- Vercel deployment

## Features

- Responsive portfolio with light and dark themes
- Five featured project case studies plus supporting projects
- AI Portfolio Assistant grounded in curated profile data
- Accessible navigation, skip link, visible focus states and reduced-motion support
- Per-page metadata, Open Graph cards, JSON-LD, sitemap and robots rules
- Formspree contact form with validation and spam honeypot

## Architecture

```text
Browser (React + TypeScript)
          ↓
Portfolio data and case-study views
          ↓
/api/chat server boundary
          ↓
Curated knowledge retrieval → Groq LLM
```

Portfolio content lives in typed data modules. The chat API reconstructs trusted context server-side, applies input and rate limits, and keeps the provider key outside the browser.

## AI Assistant

The assistant only answers questions about the documented profile, education, experience, skills, projects, availability and contact options. Its prompt forbids invented employers, results, proficiency levels and experience duration. Missing or unrelated information receives an explicit refusal.

Create a local `.env` from `.env.example`. Set `AI_PROVIDER=openai` (the default) with `OPENAI_API_KEY`, or set `AI_PROVIDER=groq` with `GROQ_API_KEY`. The optional model variables are `OPENAI_MODEL` (default: `gpt-4.1-mini`) and `GROQ_MODEL` (default: `openai/gpt-oss-20b`).

## SEO

The portfolio includes canonical metadata, Open Graph and Twitter cards, a sitemap, robots rules and Schema.org `Person`, `WebSite`, `ProfilePage`, and project-level `SoftwareApplication` data.

## Accessibility

The interface includes semantic landmarks, a skip link, keyboard-operable navigation, labelled controls, status announcements, descriptive image text, visible focus indicators and `prefers-reduced-motion` handling.

## Running Locally

```bash
git clone https://github.com/ToavinaJr/Modern-Portfolio.git
cd Modern-Portfolio
npm install
npm run dev
```

## Quality Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Project Structure

```text
api/                 Vercel serverless chat endpoint
server/              Local chat development server
public/              Images, resume, sitemap and robots rules
src/components/      Interactive UI components
src/data/            Typed portfolio and knowledge content
src/lib/             Knowledge retrieval logic
src/                 Application shell, styles and shared types
```

## License

No license has been declared. All rights are reserved unless the repository owner states otherwise.

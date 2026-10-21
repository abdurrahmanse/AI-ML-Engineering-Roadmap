# AI/ML Researcher Roadmap

> A comprehensive, interactive 16-level journey from complete beginner to published AI/ML researcher and research scientist — covering scientific computing, mathematics, statistical rigor, literature gap analysis, deep learning reproduction, controlled ablations, generative diffusion, HPC systems, peer-reviewed publication (NeurIPS/ICML), doctoral viva defense, and research careers.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-ai--ml--research--roadmap.vercel.app-BC52EE?style=flat-square&logo=vercel)](https://ai-ml-research-roadmap.vercel.app)
[![Astro](https://img.shields.io/badge/Astro-7.0+-BC52EE?style=flat-square&logo=astro)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

---

## Overview

**AI/ML Researcher Roadmap** provides an end-to-end pedagogical blueprint designed for complete beginners, undergraduate researchers, graduate students, doctoral candidates, and future research scientists. It maps **16 progressive levels**, source-authored modules, structured sessions, practical capstones, and an accelerated **100 Days of AI/ML Research** track across the complete research lifecycle.

- **Live Platform:** [https://ai-ml-research-roadmap.vercel.app](https://ai-ml-research-roadmap.vercel.app)
- **Companion Engineering Roadmap:** [https://ai-ml-engineering-roadmap.vercel.app/](https://ai-ml-engineering-roadmap.vercel.app/)
- **Primary Roadmap:** 16 progressive levels spanning the complete scientific research lifecycle: 0. Computing, Python & Learning Habits
  1. Mathematics for Data Science
  2. Probability, Statistics & Uncertainty
  3. Research Literacy and Problem Formulation
  4. Data Collection, SQL & Data Stewardship
  5. Classical Machine Learning and Baselines
  6. Deep Learning Foundations
  7. Modern Architectures: Sequences, Graphs and Transformers
  8. Experimental Design, Evaluation & Causal Reasoning
  9. Generative Models and Foundation-Model Use
  10. Research Systems, MLOps and Scaling
  11. Interpretability, Robustness and Fairness
  12. Multimodal and Domain Research
  13. Independent Research and Project Leadership
  14. Thesis-Grade Research Portfolio
  15. Publication, Defense and Research Career
- **Research phases:** The visual progression is structured across 7 rigorous academic research phases:
  Foundations → Data & modeling → Generative research → Trustworthy AI → Cross-disciplinary research → Thesis portfolio → Publishing, defense & careers.
- **Source data:** All level content is read from the canonical `AI RESEARCH ROADMAP/` folder at build time and emitted into `src/data/levels.json`.
- **Accelerated Route:** Curated 100-Day companion research curriculum with empirical research study projects and research interview defense preparation.

---

## Key Features

- **Interactive 16-Level Curriculum:** Visual phase-mapped roadmap with hierarchical module trees, session meters, research modes, evidence artifacts, and verifiable learning objectives.
- **Dynamic Dual-Theme System:** Curated Light & Dark themes with theme-reactive gradient typography, glassmorphism navigation, and smooth CSS transitions.
- **Client-Side Progress Tracking:** Completion persistence via `localStorage` with real-time multi-tab synchronization and visual completion indicators.
- **Conference-Grade Research Capstones:** Rigorous project briefs with empirical methodologies, theoretical derivations, baseline comparisons, and outcome criteria.
- **Zero-Runtime UI Overhead:** 100% static output, sub-second page loads, minimal client script (~3 KB), WCAG AA color contrast compliance, and full keyboard navigation.
- **Dynamic Open Graph Generation:** Programmatic SVG-to-PNG social share cards for all pages and individual levels generated at compile time.

---

## Tech Stack

| Layer             | Technology                                              | Description                                            |
| ----------------- | ------------------------------------------------------- | ------------------------------------------------------ |
| **Framework**     | [Astro](https://astro.build)                            | Static Site Generator (SSG) with zero-JS default       |
| **Styling**       | [Tailwind CSS v4](https://tailwindcss.com) + CSS Tokens | Modern CSS variables with `@theme` token binding       |
| **Icons**         | [Lucide](https://lucide.dev) (`@iconify-json/lucide`)   | Inlined SVG icons compiled statically at build time    |
| **Typography**    | Rajdhani                                                | Used consistently across the roadmap with display swap |
| **Social Images** | `@resvg/resvg-js` + Sharp                               | Headless build-time Open Graph image generation        |

---

## Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation & Development

```bash
# Clone the repository
git clone https://github.com/abdurrahmanse/AI-ML-Roadmap.git
cd AI-ML-Roadmap/ai-ml-research-roadmap

# Install dependencies
npm install

# Start local development server
npm run dev
```

The application will be accessible at `http://localhost:4321`.

### Production Build

```bash
# Parse curriculum and generate static bundle in ./dist
npm run build

# Preview production build locally
npm run preview

# Run Astro's type and project checks
npm run check

# Verify verbatim objective rendering
npm run verify
```

---

## Project Structure

```
.
├── AI RESEARCH ROADMAP/     # Source curriculum specification files (level*.txt)
├── public/                  # Static assets and favicons
├── scripts/
│   ├── parse-levels.mjs     # Compiles level*.txt into structured data
│   ├── sign-topics.mjs      # Verifies and signs curriculum topic signatures
│   └── verify-text.mjs      # Validates verbatim objective rendering
├── src/
│   ├── components/          # Reusable Astro UI components
│   ├── data/                # Generated JSON and typed TypeScript schemas
│   ├── layouts/             # Base HTML template and metadata layouts
│   ├── lib/                 # Curriculum parsing helpers & OG image generation
│   ├── pages/               # Astro file-based routing
│   │   ├── 100-days/        # Accelerated 100-day research curriculum pages
│   │   ├── level/[n].astro  # Dynamic 16-level detail views
│   │   └── index.astro      # Interactive visual roadmap
│   ├── scripts/             # Lightweight client runtime (~3 KB)
│   └── styles/              # Design tokens and Tailwind global styles
├── astro.config.mjs         # Astro & Vite pipeline configuration
└── vercel.json              # Deployment and caching configuration
```

---

## Content Pipeline

All curriculum data originates strictly from the `AI RESEARCH ROADMAP/level*.txt` files. Filenames describe the learner journey, while stable module IDs (`M{level}.{module}` and `P{level}.{project}`) keep progress and deep links durable. The build pipeline parses these files into type-safe JSON schemas:

```
level*.txt ──► npm run parse ──► src/data/levels.json ──► src/data/levels.ts ──► Static Pages
```

- **Verbatim Authenticity:** Objectives render verbatim from source specifications without modification. Verified automatically via `npm run verify`.
- **Topic Distillation:** Detailed research objectives are mapped to skimmable summary topics with expandable full details via native `<details>` disclosures.
- **Graceful Degradation:** Incomplete curriculum units surface actionable maintainer notices at build time rather than rendering synthetic data.

---

## Deployment

The project compiles to pure static HTML/CSS/JS with zero server dependencies and deploys seamlessly to static hosting providers (Vercel, Cloudflare Pages, Netlify, or GitHub Pages).

### Vercel Configuration

Domain resolution and metadata canonicals resolve dynamically via `astro.config.mjs`:

```bash
# Set production domain override (optional)
SITE_URL=https://ai-ml-research-roadmap.vercel.app
```

The deployment automatically provisions:

- Canonical `<link rel="canonical">` and Open Graph metadata
- Dynamic XML sitemaps (`sitemap-index.xml`)
- Strict caching policies for generated social share assets

---

## Quality Assurance & Verification

```bash
# Parse curriculum and sign topic signatures
npm run parse

# Validate that all objectives match source text verbatim
npm run verify

# Build and validate production artifacts
npm run build
```

---

## License

This project is open-source and available under the [MIT License](LICENSE).

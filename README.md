# AI/ML Roadmaps

> Comprehensive, interactive, source-authored learning paths and visual roadmaps for modern AI/ML Engineering and AI/ML Scientific Research.

[![Live Demo: Engineering Roadmap](https://img.shields.io/badge/Live%20Demo-Engineering%20Roadmap-38BDF8?style=flat-square&logo=vercel)](https://ai-ml-engineering-roadmap.vercel.app/)
[![Live Demo: Research Roadmap](https://img.shields.io/badge/Live%20Demo-Research%20Roadmap-BC52EE?style=flat-square&logo=vercel)](https://ai-ml-research-roadmap.vercel.app)
[![Astro](https://img.shields.io/badge/Astro-7.0+-BC52EE?style=flat-square&logo=astro)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

---

## 🌐 Live Deployments

Explore the interactive roadmap web applications live:

| Roadmap | Live Application URL | Focus & Target Audience | Documentation |
|---|---|---|---|
| 🛠️ **AI/ML Engineering Roadmap** | **[ai-ml-engineering-roadmap.vercel.app](https://ai-ml-engineering-roadmap.vercel.app/)** | Software engineers, AI builders, and ML engineers shipping production AI systems, LLM apps, RAG, and agentic workflows. | [Engineering Docs](ai-ml-engineering-roadmap/README.md) |
| 🔬 **AI/ML Research Roadmap** | **[ai-ml-research-roadmap.vercel.app](https://ai-ml-research-roadmap.vercel.app)** | Researchers, graduate students, and scientists pursuing novel modeling, empirical rigor, and peer-reviewed publication (NeurIPS/ICML). | [Research Docs](ai-ml-research-roadmap/README.md) |

---

## 📚 Projects Overview

This repository contains two independent, production-grade [Astro](https://astro.build) applications sharing a unified design system and curriculum compilation pipeline:

### 1. [AI/ML Engineering Roadmap](https://ai-ml-engineering-roadmap.vercel.app/)
- **Live URL:** [https://ai-ml-engineering-roadmap.vercel.app/](https://ai-ml-engineering-roadmap.vercel.app/)
- **Directory:** [`ai-ml-engineering-roadmap/`](ai-ml-engineering-roadmap/)
- **Curriculum Scope:** 16 progressive levels, 165 modules, 286 sessions, and 13 portfolio capstones.
- **Core Topics:** Python & system foundations, LLM fundamentals, Prompt Engineering, Vector Databases & RAG, Autonomous Agents, Model Evaluation & Red Teaming, Fine-Tuning & Quantization, Scalable Serving, and LLMOps.
- **Accelerated Route:** Includes the **100 Days of AI Engineering** companion curriculum for fast-track upskilling and technical interviews.

### 2. [AI/ML Research Roadmap](https://ai-ml-research-roadmap.vercel.app)
- **Live URL:** [https://ai-ml-research-roadmap.vercel.app](https://ai-ml-research-roadmap.vercel.app)
- **Directory:** [`ai-ml-research-roadmap/`](ai-ml-research-roadmap/)
- **Curriculum Scope:** 16 progressive levels, structured sessions, empirical ablation milestones, and thesis-grade portfolio projects.
- **Core Topics:** Scientific computing & reproducibility, Matrix calculus & numerical autograd from scratch, Probability & statistical testing (Wilcoxon, FDR), Systematic literature review (PRISMA 2020), Classical ML baselines, Modern transformers & graph networks, Generative diffusion, Distributed HPC scaling, Trustworthy AI, Thesis writing, and Doctoral viva defense.
- **Accelerated Route:** Includes the **100 Days of AI/ML Research** curriculum designed around paper reproductions and empirical research studies.

---

## ✨ Shared Platform Features

- **Level-by-Level Navigation:** Visual phase maps with hierarchical module trees, session progress meters, and verifiable learning objectives.
- **Dynamic Dual-Theme System:** Curated Light and Dark themes with theme-reactive gradient typography, glassmorphism headers, and smooth transitions.
- **Client-Side Progress Tracking:** Completion persistence via browser `localStorage` with multi-tab synchronization and zero account requirements.
- **Source-Authored Curriculum Pipeline:** Human-readable text specifications (`level*.txt`) compiled into type-safe JSON and TypeScript schemas at build time.
- **Verbatim Verification:** Automated build-time checks verifying that all displayed objectives match canonical source specifications word-for-word.
- **Performance & Accessibility:** Pure static HTML output with sub-second page loads, minimal client script (~3 KB), WCAG AA contrast compliance, and full keyboard navigation.
- **Social Sharing:** Compile-time Open Graph image generation (`@resvg/resvg-js` + Sharp) for every level and page.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18.0.0 or later
- [npm](https://www.npmjs.com/) v9.0.0 or later

### Clone the Repository

```bash
git clone https://github.com/abdurrahmanse/AI-ML-Roadmap.git
cd AI-ML-Roadmap
```

### Running the AI/ML Engineering Roadmap Locally

```bash
cd ai-ml-engineering-roadmap
npm install
npm run dev
```

Visit [http://localhost:4321](http://localhost:4321) in your browser.

### Running the AI/ML Research Roadmap Locally

```bash
cd ai-ml-research-roadmap
npm install
npm run dev
```

Visit [http://localhost:4321](http://localhost:4321) in your browser.

---

## 🛠️ Build and Validation Commands

Run these commands from either application directory (`ai-ml-engineering-roadmap/` or `ai-ml-research-roadmap/`):

```bash
# Parse curriculum and compile static production site to ./dist
npm run build

# Verify that rendered objectives match the source curriculum verbatim
npm run verify

# Run Astro's type and project checks
npm run check

# Re-parse source level specifications and sign topic signatures
npm run parse

# Preview an existing production build locally
npm run preview
```

---

## 📁 Repository Structure

```text
.
├── README.md                      # Monorepo documentation with live platform links
├── ai-ml-engineering-roadmap/      # Engineering Roadmap Astro application
│   ├── AI ENGINEER ROADMAP/       # Source curriculum specifications (level*.txt)
│   ├── public/                    # Static assets, icons, and favicons
│   ├── scripts/                   # Parsing, signing, and verification utilities
│   ├── src/                       # Astro application source (components, pages, layouts)
│   │   ├── components/            # Reusable UI components
│   │   ├── data/                  # Compiled curriculum schemas & JSON
│   │   ├── layouts/               # HTML base templates & SEO metadata
│   │   └── pages/                 # Routing (/index, /level/[n], /100-days)
│   ├── astro.config.mjs           # Astro & Vite configuration (site: ai-ml-engineering-roadmap.vercel.app)
│   ├── package.json               # Scripts & dependencies
│   └── README.md                  # Detailed engineering roadmap documentation
└── ai-ml-research-roadmap/         # Research Roadmap Astro application
    ├── AI RESEARCH ROADMAP/       # Source curriculum specifications (level*.txt)
    ├── public/                    # Static assets, icons, and favicons
    ├── scripts/                   # Parsing, signing, and verification utilities
    ├── src/                       # Astro application source (components, pages, layouts)
    │   ├── components/            # Reusable UI components
    │   ├── data/                  # Compiled curriculum schemas & JSON
    │   ├── layouts/               # HTML base templates & SEO metadata
    │   └── pages/                 # Routing (/index, /level/[n], /100-days)
    ├── astro.config.mjs           # Astro & Vite configuration (site: ai-ml-research-roadmap.vercel.app)
    ├── package.json               # Scripts & dependencies
    └── README.md                  # Detailed research roadmap documentation
```

---

## 🚢 Deployment

Both applications are statically pre-rendered and deployed to Vercel:

- **AI/ML Engineering Roadmap:** [https://ai-ml-engineering-roadmap.vercel.app/](https://ai-ml-engineering-roadmap.vercel.app/)
- **AI/ML Research Roadmap:** [https://ai-ml-research-roadmap.vercel.app](https://ai-ml-research-roadmap.vercel.app)

To override the canonical production domain during builds or custom hosting deployments:

```bash
# For engineering
SITE_URL=https://ai-ml-engineering-roadmap.vercel.app npm run build

# For research
SITE_URL=https://ai-ml-research-roadmap.vercel.app npm run build
```

---

## 📖 Sub-Project Documentation

- [AI/ML Engineering Roadmap Documentation](ai-ml-engineering-roadmap/README.md)
- [AI/ML Research Roadmap Documentation](ai-ml-research-roadmap/README.md)

---

## 🤝 Contributing

Contributions that clarify learning objectives, improve source curriculum accuracy, strengthen capstone briefs, or enhance UX are welcome:

1. Fork the repository and create your branch (`git checkout -b feat/curriculum-improvement`).
2. Make curriculum edits directly in the respective `AI * ROADMAP/level*.txt` files rather than generated files under `src/data/`.
3. Run `npm run verify` and `npm run check` to ensure all tests pass.
4. Commit your changes and submit a pull request.

---

## 📄 License

This project is open-source and licensed under the [MIT License](LICENSE).

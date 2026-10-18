# AI/ML Roadmaps

> Interactive, source-authored learning paths for AI/ML engineering and research.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-abdurrahmans.vercel.app-6c5ce7?style=flat-square&logo=vercel)](https://abdurrahmans.vercel.app)
[![Astro](https://img.shields.io/badge/Astro-7.0+-BC52EE?style=flat-square&logo=astro)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)

## Projects

This repository contains two independent Astro applications:

- **[AI/ML Engineering Roadmap](ai-ml-engineering-roadmap/README.md)** — a practical path from software engineering foundations through LLMs, RAG, agents, evaluation, security, and production operations.
- **[AI/ML Research Roadmap](ai-ml-research-roadmap/README.md)** — a research-focused path from computing and mathematics through experimentation, trustworthy AI, publication, and research careers.

Both applications provide 16 progressive levels, interactive progress tracking, structured learning objectives, capstone projects, and an accelerated 100-day learning track. The curriculum is stored as readable text specifications and compiled into each Astro application during development and production builds.

## Shared Features

- Level-by-level navigation with measurable session progress
- Light and dark themes with accessible keyboard navigation
- Client-side progress persistence using browser storage
- Source-authored curriculum parsed into typed data during the build
- Static output suitable for Vercel, Netlify, Cloudflare Pages, or GitHub Pages

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm 9 or later

Clone the repository, choose an application, and run it from that application's directory:

```bash
git clone https://github.com/abdurrahmanse/AI-ML-Roadmap.git
cd AI-ML-Roadmap

# AI/ML Engineering Roadmap
cd ai-ml-engineering-roadmap
npm install
npm run dev
```

To run the research roadmap instead:

```bash
cd ../ai-ml-research-roadmap
npm install
npm run dev
```

Open `http://localhost:4321` in your browser to explore the selected roadmap.

### Build and Validate

Run these commands from either application directory:

```bash
# Parse curriculum and generate the production site
npm run build

# Verify that rendered objectives match the source curriculum
npm run verify

# Run Astro's type and project checks
npm run check
```

Additional scripts are available for focused workflows:

```bash
# Parse source curriculum files
npm run parse

# Regenerate topic signatures
npm run topics

# Preview an existing production build
npm run preview
```

## Repository Structure

```text
.
├── ai-ml-engineering-roadmap/
│   ├── AI ENGINEER ROADMAP/   # Engineering curriculum specifications
│   ├── public/                # Static assets
│   ├── scripts/               # Parsing and verification utilities
│   ├── src/                   # Astro application source
│   ├── package.json           # Project scripts and dependencies
│   └── README.md              # Engineering roadmap documentation
└── ai-ml-research-roadmap/
    ├── AI RESEARCH ROADMAP/   # Research curriculum specifications
    ├── public/                # Static assets
    ├── scripts/               # Parsing and verification utilities
    ├── src/                   # Astro application source
    ├── package.json           # Project scripts and dependencies
    └── README.md              # Research roadmap documentation
```

Curriculum content is maintained in each application's roadmap directory and compiled into typed data during the build process. This keeps the learning material readable, reviewable, and separate from the presentation layer. Changes to curriculum text should be made in the relevant `level*.txt` files rather than generated files under `src/data/`.

## Documentation

See the [engineering documentation](ai-ml-engineering-roadmap/README.md) and [research documentation](ai-ml-research-roadmap/README.md) for application-specific features, content pipelines, deployment details, and implementation notes.

## Contributing

Contributions that improve curriculum accuracy, clarify learning objectives, strengthen examples, or enhance the learning experience are welcome. Keep changes focused, explain the motivation, and run the relevant verification commands before opening a pull request.

## License

This project is open source and available under the MIT License.

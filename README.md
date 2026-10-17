# AI/ML Engineering Roadmap

> A structured, practical learning path for building production-ready AI and machine learning systems.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-abdurrahmans.vercel.app-6c5ce7?style=flat-square&logo=vercel)](https://abdurrahmans.vercel.app)
[![Astro](https://img.shields.io/badge/Astro-7.0+-BC52EE?style=flat-square&logo=astro)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)

## Overview

The **AI/ML Engineering Roadmap** is an interactive curriculum for software engineers who want to design, build, evaluate, secure, and operate modern AI systems. It combines engineering fundamentals with hands-on coverage of large language models, retrieval-augmented generation, agentic workflows, evaluation, multimodal applications, and production operations.

The curriculum is organized into **16 progressive levels**, spanning more than **165 modules** and **286 structured learning sessions**. Each level is designed to build on the previous one, moving from core software engineering practices to advanced AI architecture and implementation.

## What You Will Learn

- **Software engineering foundations** for reliable development, testing, debugging, and deployment
- **LLM fundamentals and orchestration**, including APIs, tool use, and workflow design
- **Prompt and context engineering** for more capable and dependable AI applications
- **Retrieval-augmented generation (RAG)**, embeddings, vector search, and knowledge pipelines
- **AI agents** and multi-agent architectures with appropriate control and observability
- **Evaluation and AI security** for measuring quality, reducing risk, and protecting systems
- **AI system design and LLMOps** for scalable, maintainable production deployments
- **Managed AI platforms, multimodal systems, and fine-tuning**
- **Portfolio projects and interview preparation** to translate learning into demonstrable outcomes

## Highlights

- Interactive roadmap with level-by-level navigation
- Clear learning objectives and session-based progress tracking
- Practical capstone projects based on production engineering scenarios
- Accelerated **100 Days of AI Engineering** learning track
- Static, fast, accessible web experience with light and dark themes
- Local progress persistence using browser storage

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm 9 or later

### Run Locally

```bash
git clone https://github.com/abdurrahmanse/AI-ML-Engineering-Roadmap.git
cd AI-ML-Engineering-Roadmap/ai-ml-engineering-roadmap
npm install
npm run dev
```

Open `http://localhost:4321` in your browser to explore the roadmap.

### Build and Verify

```bash
# Validate curriculum data and generate the production site
npm run build

# Verify that rendered objectives match the source curriculum
npm run verify

# Run Astro's type and project checks
npm run check
```

## Repository Structure

```text
.
└── ai-ml-engineering-roadmap/
    ├── AI ENGINEER ROADMAP/   # Source curriculum specifications
    ├── public/                # Static assets
    ├── scripts/               # Parsing and verification utilities
    ├── src/                   # Astro application source
    ├── package.json           # Project scripts and dependencies
    └── README.md              # Detailed application documentation
```

Curriculum content is maintained in the `AI ENGINEER ROADMAP/` directory and compiled into typed data during the build process. This keeps the learning material readable, reviewable, and separate from the presentation layer.

## Documentation

For the complete feature set, content pipeline, deployment details, and implementation notes, see the [application documentation](ai-ml-engineering-roadmap/README.md).

## Contributing

Contributions that improve curriculum accuracy, clarify learning objectives, strengthen examples, or enhance the learning experience are welcome. Please keep changes focused, explain the motivation, and run the relevant verification commands before opening a pull request.

## License

This project is open source and available under the MIT License.
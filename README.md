# AI/ML Roadmap

<p align="center">
  <strong>Interactive, source-verified learning roadmaps for modern AI/ML Engineering and Scientific Research.</strong>
</p>

---

## 🎯 Choose Your Track

| Track | Live Platform | Focus & Target Audience | Key Curriculum |
|---|---|---|---|
| 🛠️ **AI/ML Engineering** | **[Launch App ↗](https://ai-ml-engineering-roadmap.vercel.app/)** | Software engineers, AI builders & MLOps practitioners shipping production AI systems. | • Foundations to Autonomous Agents<br>• RAG & Vector Databases<br>• Fine-Tuning & Quantization<br>• LLMOps, Evaluation & Red Teaming<br>• 13 Portfolio Capstones + 100-Day Track |
| 🔬 **AI/ML Research** | **[Launch App ↗](https://ai-ml-research-roadmap.vercel.app)** | Researchers, graduate students & scientists pursuing novel modeling and peer-reviewed publication. | • Mathematical Foundations & Autograd<br>• Statistical Testing & Empirical Rigor<br>• Paper Reproduction Baselines<br>• Distributed HPC & Scalable Training<br>• Thesis Writing + 100-Day Research Track |

---

## ⚡ Highlights

- **Interactive Visual Roadmaps:** 16 progressive levels with module breakdowns, session meters, and verifiable outcomes.
- **Client-Side Progress:** Zero-login persistence via browser `localStorage` with multi-tab synchronization.
- **Source-Verified Content:** Build-time compiler scripts ensure rendered lessons match canonical specifications verbatim.
- **Ultra-Fast & Accessible:** Pure static SSG via Astro (~3 KB runtime JS), dark/light themes, and WCAG AA compliance.

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** v18+ & **npm** v9+

### Installation & Run

```bash
# 1. Clone the repository
git clone https://github.com/abdurrahmanse/AI-ML-Roadmap.git
cd AI-ML-Roadmap

# 2. Run the Engineering Roadmap (port 4321)
cd ai-ml-engineering-roadmap
npm install && npm run dev

# OR Run the Research Roadmap (port 4321)
cd ../ai-ml-research-roadmap
npm install && npm run dev
```

### Key Scripts
Run inside either project directory:
- `npm run dev` — Start local development server
- `npm run build` — Compile static production build
- `npm run verify` — Validate curriculum text against source specifications
- `npm run check` — Run Astro diagnostics and type checks

---

## 📂 Repository Layout

```text
AI-ML-Roadmap/
├── ai-ml-engineering-roadmap/    # AI/ML Engineering Astro application & curriculum
│   ├── AI ENGINEER ROADMAP/      # Source level specifications (.txt)
│   └── src/                      # Astro components, layouts, and pages
├── ai-ml-research-roadmap/       # AI/ML Research Astro application & curriculum
│   ├── AI RESEARCH ROADMAP/      # Source level specifications (.txt)
│   └── src/                      # Astro components, layouts, and pages
└── README.md
```

---

## 🤝 Contributing & License

Contributions that improve curriculum clarity, fix typos, or enhance UX are welcome. Please edit source curriculum in `AI * ROADMAP/level*.txt` rather than generated data files, and verify with `npm run verify`.

This project is open-source and licensed under the [MIT License](LICENSE).

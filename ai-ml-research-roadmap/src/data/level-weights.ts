/**
 * How much each level matters, scored out of 10 with a reason, from two angles:
 * research screening (RA position / Graduate Admissions / Research Scientist interviews)
 * and day-to-day academic research lab work (thesis progress, paper writing, experiment rigor).
 * Shown side by side at the top of every level page. Keyed by level number.
 * Wrap a phrase in **double asterisks** to show it in bold.
 */
export interface LevelWeight {
  score: number;
  reason: string;
}

export const WEIGHT_MAX = 10;

/** How much the level matters in AI/ML research interviews and scientific screening. */
export const interviewWeights: Record<number, LevelWeight> = {
  0: {
    score: 8,
    reason:
      'Research labs evaluate your **scientific computing hygiene and reproducibility**: remote Linux cluster administration, containerized environments (Docker/Singularity), vectorized NumPy pipelines, and deterministic hardware seeds.',
  },
  1: {
    score: 10,
    reason:
      'Elite research screening aggressively tests **rigorous mathematical foundations**: vector spaces, low-rank approximations via SVD, matrix differential calculus for autograd, convex optimization, and KKT conditions.',
  },
  2: {
    score: 10,
    reason:
      'Distinguishes rigorous scientists from naive coders: **probabilistic modeling, information theory, MLE/MAP derivations, non-parametric hypothesis testing (Wilcoxon), FDR correction, and conformal prediction**.',
  },
  3: {
    score: 9,
    reason:
      'The definitive benchmark for research independence: **navigating bibliographic databases (ArXiv, IEEE, ACM, PubMed), Keshav three-pass paper reading, synthesizing taxonomies, formulating hypotheses, and OSF pre-registration**.',
  },
  4: {
    score: 9,
    reason:
      'Essential for real-world research credibility: **curating multi-domain data (MIMIC-IV clinical signals, CIC-IDS network flows), eliminating patient and temporal leakage, inter-annotator agreement, and Datasheets for Datasets**.',
  },
  5: {
    score: 9,
    reason:
      'Demonstrates methodological maturity across paradigms: **implementing canonical learning models (SVM duals, CART, tree ensembles like XGBoost/LightGBM/CatBoost, PCA/UMAP) and establishing rock-solid tabular baselines**.',
  },
  6: {
    score: 10,
    reason:
      'Core representation learning mastery: **building modular autograd engines and backprop from scratch in pure NumPy, standardizing weight initializations, and reproducing landmark vision architectures (ResNet, ViT, U-Net)**.',
  },
  7: {
    score: 10,
    reason:
      'Foundational for state-of-the-art architectures: **deriving scaled dot-product attention, FlashAttention tiling, rotary positional embeddings (RoPE), Graph Neural Networks (GCN/GAT), and selective State Space Models (Mamba)**.',
  },
  8: {
    score: 10,
    reason:
      'The single biggest factor in peer review acceptance: **designing multi-factor ablation studies (OFAT), compute-matched baselines, multi-seed statistical significance, and taxonomy-driven error analysis**.',
  },
  9: {
    score: 9,
    reason:
      'Crucial for modern generative modeling and simulation: **deriving evidence lower bounds (ELBO) for VAEs, Wasserstein GANs with gradient penalty, score-based DDPMs, Continuous Flow Matching, and sample quality metrics (FID/IS)**.',
  },
  10: {
    score: 9,
    reason:
      'High-performance research computing: **navigating SLURM supercomputing clusters, multi-node PyTorch FSDP, DeepSpeed ZeRO-3 sharding, Megatron tensor parallelism, and profiling Model FLOPs Utilization (MFU)**.',
  },
  11: {
    score: 9,
    reason:
      'The frontier of agentic behavior and foundation models: **formulating Bellman equations, implementing PPO, deriving Chinchilla scaling laws, and performing preference alignment (DPO, KTO, test-time compute)**.',
  },
  12: {
    score: 9,
    reason:
      'Crucial for modern knowledge-grounded AI: **designing multi-stage RAG pipelines, RAG Triad faithfulness evaluation, Neo4j knowledge graphs, GraphRAG community summaries, and multi-agent systems via LangGraph**.',
  },
  13: {
    score: 9,
    reason:
      'Mandatory for high-stakes deployment and regulatory standards (FDA AI): **axiomatic attribution (SHAP, Integrated Gradients), mechanistic interpretability with Sparse Autoencoders, adversarial PGD attacks, and differential privacy**.',
  },
  14: {
    score: 10,
    reason:
      'The **culmination of independent research preparation**: delivering **vision-language foundation models (CLIP, LLaVA), cross-disciplinary translations, pilot feasibility studies, and formal Thesis Prospectus authoring**.',
  },
  15: {
    score: 10,
    reason:
      'Directly prepares you for **doctoral viva defense, research job talks, and top-tier publishing**: mastering LaTeX manuscript production, point-by-point OpenReview rebuttals, avoiding predatory venues, and career positioning.',
  },
};

/** How much the level matters in day-to-day AI/ML research lab work. */
export const jobWeights: Record<number, LevelWeight> = {
  0: {
    score: 10,
    reason:
      'Daily lab survival requires **flawless remote cluster management, automated experiment tracking, and reproducible virtual environments**; without them, scientific results cannot be verified.',
  },
  1: {
    score: 10,
    reason:
      'The bedrock of novel algorithm design: **deriving analytical gradients, verifying convexity, diagnosing ill-conditioned Hessians, and customizing optimization update rules for bespoke architectures**.',
  },
  2: {
    score: 10,
    reason:
      'Underpins every published claim: **evaluating uncertainty, conducting valid non-parametric significance testing, and bounding false discovery rates** prevents lab retractions and false breakthroughs.',
  },
  3: {
    score: 9,
    reason:
      'Prevents wasting months on solved problems: **rapidly surveying literature across IEEE, ACM, and PubMed, identifying genuine delta gaps, authoring pre-registrations, and enforcing ethical lab standards**.',
  },
  4: {
    score: 10,
    reason:
      'Real-world research begins with pristine data: **ingesting complex clinical signals and cybersecurity telemetry, auditing for subtle target leakage, and documenting provenance with Datasheets for Datasets**.',
  },
  5: {
    score: 9,
    reason:
      'Essential for scientific benchmarking: **establishing rigorous, well-tuned classical baselines (XGBoost/LightGBM, SVM, Random Forest) before claiming empirical superiority for complex neural networks**.',
  },
  6: {
    score: 10,
    reason:
      'Designing and modifying core architectures: **debugging custom gradient backpropagation, resolving vanishing/exploding gradients, and adapting deep vision backbones for domain challenges**.',
  },
  7: {
    score: 10,
    reason:
      'Powers state-of-the-art NLP, multimodal, and structured systems: **implementing attention variants, GPU-accelerated FlashAttention, graph message passing, and linear state space models**.',
  },
  8: {
    score: 10,
    reason:
      'The absolute gold standard of credible science: **isolating component contributions via systematic ablations, ensuring compute-equal comparisons, and executing multi-seed error analysis**.',
  },
  9: {
    score: 9,
    reason:
      'Central to generative modeling and synthetic data: **training stable diffusion architectures, Continuous Flow Matching vector fields, and evaluating mode collapse and memorization**.',
  },
  10: {
    score: 10,
    reason:
      'Executing large-scale experiments on shared supercomputers requires **SLURM scheduling mastery, FSDP memory sharding, and maximizing MFU** to get the most from hardware allocations.',
  },
  11: {
    score: 9,
    reason:
      'Guides experimental planning and alignment: **extrapolating compute-optimal scaling frontiers, fine-tuning domain models via LoRA/QLoRA, and aligning foundation models with human preferences**.',
  },
  12: {
    score: 9,
    reason:
      'Enables grounded, factual intelligence: **constructing entity-dense knowledge graphs, running GraphRAG hierarchical retrievals, and orchestrating sandboxed tool-calling agentic loops**.',
  },
  13: {
    score: 9,
    reason:
      'Ensuring model safety and scientific transparency: **auditing representations with Sparse Autoencoders, defending against adversarial evasion, and enforcing strict differential privacy guarantees**.',
  },
  14: {
    score: 10,
    reason:
      'Translating research into substantial scholarship: **bridging multimodal representation learning with domain sciences, running pilot validations, and drafting doctoral thesis chapters**.',
  },
  15: {
    score: 10,
    reason:
      'Directly governs scientific impact and professional standing: **authoring camera-ready LaTeX manuscripts, defending against skeptical peer review, leading oral defenses, and directing lab research**.',
  },
};

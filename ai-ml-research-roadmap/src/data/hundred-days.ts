/**
 * 100 Days of AI/ML Research — accelerated track through the 16-level curriculum.
 * Covers math foundations, deep learning, representation learning, generative
 * models, reasoning & alignment, and scaled empirical research methodology.
 */
import type { PhaseId } from "./levels";

export const TOTAL_DAYS = 100;
export const DAYS_BASE = "/100-days";

export interface Bullet {
  title: string;
  text: string;
}

export interface Unit {
  id: string;
  title: string;
  icon: string;
  days: [number, number];
  bullets: Bullet[];
  mentalModel?: string;
  tryIt?: string;
  outcome?: string;
  part?: number;
}

export interface Part {
  title: string;
  intro?: string;
}

export interface SkippedTopic {
  topic: string;
  why: string;
  where: { level: number; href: string }[];
}

export interface DaysModule {
  number: number;
  slug: string;
  title: string;
  phase: PhaseId;
  icon: string;
  summary: string;
  days: [number, number];
  before: string;
  outcome: string;
  units: Unit[];
  skipped: SkippedTopic[];
  parts?: Part[];
  coursesFrom: { level: number; only?: string[] }[];
  shortVersionOf?: number;
  alsoCovers?: { level: number; topic: string; plural?: boolean }[];
  condensesLevels: number[];
}

export const hundredDaysModules: DaysModule[] = [
  {
    number: 1,
    slug: "math-foundations-research-computing",
    title: "Math & Research Computing",
    phase: "foundations",
    icon: "sigma",
    summary:
      "Master the mathematical bedrock of AI research: linear algebra, calculus, probability, information theory, statistical learning theory, and AI-assisted research workflows.",
    days: [1, 15],
    before:
      "Basic calculus, introductory linear algebra, and Python (NumPy).",
    outcome:
      "Derive SVD and PAC bounds analytically, compute KL divergences, and use LLM coding agents responsibly for experiment scaffolding.",
    coursesFrom: [{ level: 0 }, { level: 1 }, { level: 2 }],
    shortVersionOf: 1,
    alsoCovers: [
      { level: 0, topic: "Research computing & AI-assisted workflows" },
      { level: 2, topic: "Probability, entropy & statistical learning" },
    ],
    condensesLevels: [0, 1, 2],
    units: [
      {
        id: "1.1",
        title: "Linear Algebra & SVD",
        icon: "grid-3x3",
        days: [1, 3],
        bullets: [
          {
            title: "Vector spaces & SVD",
            text: "Eigenvalues, spectral decomposition, and Eckart-Young-Mirsky low-rank approximation.",
          },
          {
            title: "Matrix norms",
            text: "L1, L2, Frobenius, and nuclear norms as geometric regularization constraints.",
          },
          {
            title: "Autograd internals",
            text: "Reverse-mode automatic differentiation; forward activation cache; backward topological pass.",
          },
        ],
        mentalModel: "High-dim data → Orthogonal rotation → Singular value scaling",
        tryIt: "Compute SVD of a data matrix and verify low-rank reconstruction error against Eckart-Young bounds.",
        outcome: "Derive SVD and implement reverse-mode autograd from scratch.",
      },
      {
        id: "1.2",
        title: "Probability & Information Theory",
        icon: "dice-5",
        days: [4, 7],
        bullets: [
          {
            title: "Distributions & MLE",
            text: "Joint densities, Bayes theorem, Gaussian conditioning, and maximum likelihood.",
          },
          {
            title: "KL divergence & entropy",
            text: "Shannon entropy, cross-entropy, Gibbs' inequality, mode-covering vs mode-seeking KL.",
          },
          {
            title: "Wasserstein distance",
            text: "Earth Mover's Distance vs f-divergences for distributions with disjoint supports.",
          },
        ],
        mentalModel: "Uncertainty → Shannon entropy → KL divergence → Optimal transport",
        tryIt: "Calculate analytical KL divergence between two multivariate Gaussians in Python.",
        outcome: "Prove Gibbs' inequality and analyze mode-seeking vs mode-covering divergences.",
      },
      {
        id: "1.3",
        title: "Statistical Learning Theory",
        icon: "chart-spline",
        days: [8, 11],
        bullets: [
          {
            title: "ERM & PAC bounds",
            text: "Empirical Risk Minimization; bounding generalization error via Hoeffding and uniform convergence.",
          },
          {
            title: "VC dimension",
            text: "Shattering coefficients, Sauer-Shelah lemma, and hypothesis class capacity.",
          },
          {
            title: "Convex optimization & KKT",
            text: "Lagrangian duals, Slater qualification, and Karush-Kuhn-Tucker conditions.",
          },
        ],
        mentalModel: "Hypothesis class → VC complexity → Uniform convergence → Generalization",
        tryIt: "Compute VC dimension for linear decision boundaries in D dimensions.",
        outcome: "Derive formal sample complexity bounds for PAC learnability.",
      },
      {
        id: "1.4",
        title: "AI-Assisted Research Workflows",
        icon: "bot",
        days: [12, 15],
        bullets: [
          {
            title: "LLMs for literature acceleration",
            text: "Use ChatGPT/Claude/Gemini to map research landscapes — always verify every generated citation.",
          },
          {
            title: "Coding agent scaffolding",
            text: "Use GitHub Copilot or Cursor to scaffold experiment code; treat output as a first draft.",
          },
          {
            title: "Hallucination auditing",
            text: "Cross-check every AI-generated citation against Google Scholar or Semantic Scholar.",
          },
          {
            title: "Hypothesis brainstorming",
            text: "Prompt LLMs to identify tensions between papers; verify mechanistically before testing.",
          },
        ],
        mentalModel: "AI tools accelerate discovery — they do not replace mathematical rigour or citation verification.",
        tryIt: "Use an LLM to map a research topic, then manually verify every citation and flag any hallucinations.",
        outcome: "Use AI coding agents responsibly to scaffold experiments while maintaining scientific integrity.",
      },
    ],
    skipped: [
      {
        topic: "Second-order optimization (L-BFGS)",
        why: "Modern foundation models use first-order AdamW due to O(D²) Hessian memory",
        where: [{ level: 1, href: "/level/1/#m1-4" }],
      },
      {
        topic: "Classical parametric ANOVA testing",
        why: "Deep learning benchmarks rely on non-parametric bootstrap and permutation tests",
        where: [{ level: 2, href: "/level/2/#m2-4" }],
      },
    ],
  },
  {
    number: 2,
    slug: "deep-learning-transformers",
    title: "Deep Learning & Transformers",
    phase: "foundations",
    icon: "sparkles",
    summary:
      "Transformer internals, loss landscape geometry, adaptive optimization, FlashAttention, sub-quadratic SSMs, and the mathematics of modern LLM components.",
    days: [16, 35],
    before: "Level 1 math foundations, matrix decompositions, and autograd.",
    outcome:
      "Derive RoPE and online Softmax, train an autoregressive Transformer, and connect math to LLM scaling laws.",
    coursesFrom: [{ level: 6 }, { level: 7 }],
    shortVersionOf: 6,
    alsoCovers: [{ level: 7, topic: "Transformer architectures & SSMs" }],
    condensesLevels: [6, 7],
    units: [
      {
        id: "2.1",
        title: "Loss Landscapes & Optimization",
        icon: "mountain",
        days: [16, 20],
        bullets: [
          {
            title: "Universal approximation & depth",
            text: "Cybenko/Hornik theorems; exponential expressivity of depth over width.",
          },
          {
            title: "Hessian spectrum & flat minima",
            text: "Non-convex saddle points, SAM minimax objective, double descent curve.",
          },
          {
            title: "AdamW & normalization",
            text: "Decoupled weight decay, Kaiming init, LayerNorm vs RMSNorm.",
          },
        ],
        mentalModel: "Non-convex surface → Hessian curvature → Flat basin → Generalization",
        tryIt: "Compute top Hessian eigenvalues via power iteration on a trained network.",
        outcome: "Quantify loss sharpness and explain double descent in overparameterized regimes.",
      },
      {
        id: "2.2",
        title: "Transformer Attention & RoPE",
        icon: "brain-circuit",
        days: [21, 26],
        bullets: [
          {
            title: "Scaled dot-product attention",
            text: "Q/K/V projections, 1/√d_k scaling, causal masking, Multi-Head and Grouped-Query Attention.",
          },
          {
            title: "Rotary Position Embeddings (RoPE)",
            text: "2D complex rotations preserving relative distances; YaRN context length extension.",
          },
          {
            title: "Pre-LN vs Post-LN stability",
            text: "Why Pre-LN enables deep scaling without warmup via direct residual gradient flow.",
          },
        ],
        mentalModel: "Tokens → Rotated Q/K → Causal Softmax → Weighted V → Residual update",
        tryIt: "Implement RoPE rotation matrices and apply them to 2D tensor slices in PyTorch.",
        outcome: "Build modular Multi-Head Attention with RoPE and Grouped-Query Attention.",
      },
      {
        id: "2.3",
        title: "FlashAttention & SSMs",
        icon: "zap",
        days: [27, 31],
        bullets: [
          {
            title: "GPU memory hierarchy & roofline",
            text: "HBM vs on-chip SRAM; compute-bound vs memory-bandwidth-bound classification.",
          },
          {
            title: "FlashAttention & online Softmax",
            text: "Tiling attention in SRAM to avoid materializing the N×N matrix; backward recomputation.",
          },
          {
            title: "Mamba / SSMs",
            text: "Linear dynamical systems, continuous-to-discrete, hardware-aware associative scan.",
          },
        ],
        mentalModel: "Global HBM → SRAM tiling → Online Softmax → Linear associative scan",
        tryIt: "Implement online Softmax normalization incrementally over chunked token batches.",
        outcome: "Explain FlashAttention memory savings and derive online Softmax tiling.",
      },
      {
        id: "2.4",
        title: "LLM Math: Attention, Scaling & Loss Geometry",
        icon: "square-function",
        days: [32, 35],
        bullets: [
          {
            title: "Attention as matrix multiplication",
            text: "Derive Scaled Dot-Product Attention from first principles; trace every tensor dimension.",
          },
          {
            title: "Softmax & cross-entropy",
            text: "Connect probability distributions to language model training via cross-entropy.",
          },
          {
            title: "Neural scaling laws",
            text: "Interpret Kaplan et al. power laws; understand what D, N, C trade-offs mean.",
          },
          {
            title: "Loss landscape geometry",
            text: "Connect Hessian curvature, flat minima, and why gradient descent works on non-convex LLM objectives.",
          },
        ],
        mentalModel: "Math → Transformer components → Scaling laws → Training dynamics",
        tryIt: "Derive the attention gradient analytically and verify with autograd on a toy 2-head model.",
        outcome: "Connect your mathematical foundations directly to modern LLM architecture choices.",
      },
    ],
    skipped: [
      {
        topic: "Legacy LSTM/GRU recurrent architectures",
        why: "Self-attention and state space models have superseded sequential recurrent gating",
        where: [{ level: 7, href: "/level/7/#m7-1" }],
      },
    ],
  },
  {
    number: 3,
    slug: "representation-retrieval-rag-research",
    title: "Representations, Retrieval & RAG",
    phase: "retrieval",
    icon: "scan",
    summary:
      "Self-supervised and contrastive representation learning, dense metric retrieval, hybrid RAG pipelines, and rigorous evaluation methodology for retrieval-augmented systems.",
    days: [36, 52],
    before: "Transformer architectures and vector calculus.",
    outcome:
      "Derive InfoNCE as a mutual information bound, implement ArcFace, build a hybrid RAG pipeline, and design a controlled RAG evaluation study.",
    coursesFrom: [{ level: 3 }, { level: 4 }, { level: 5 }, { level: 12 }],
    shortVersionOf: 5,
    alsoCovers: [
      { level: 3, topic: "Manifold learning & dimensionality reduction" },
      { level: 4, topic: "Data acquisition & RAG dataset curation" },
      { level: 12, topic: "Dense retrieval & RAG research methodology" },
    ],
    condensesLevels: [3, 4, 5, 12],
    units: [
      {
        id: "3.1",
        title: "Self-Supervised Representation Learning",
        icon: "shapes",
        days: [36, 40],
        bullets: [
          {
            title: "Manifold hypothesis & PCA",
            text: "High-dim data concentrating on sub-manifolds; PCA via Rayleigh quotients.",
          },
          {
            title: "Contrastive learning & InfoNCE",
            text: "SimCLR positive/negative pairs; InfoNCE as mutual information lower bound.",
          },
          {
            title: "Collapse prevention",
            text: "BYOL stop-gradient; Wang & Isola alignment and uniformity on the unit hypersphere.",
          },
        ],
        mentalModel: "Augmented views → Contrastive repulsion → Mutual information bound → Uniform hypersphere",
        tryIt: "Compute alignment and uniformity scores for learned representations on the unit hypersphere.",
        outcome: "Derive InfoNCE and prove its connection to mutual information maximization.",
      },
      {
        id: "3.2",
        title: "Metric Learning & Dense Retrieval",
        icon: "search",
        days: [41, 45],
        bullets: [
          {
            title: "Triplet loss & ArcFace",
            text: "Anchor-positive-negative geometries; additive angular margin cos(θ+m) on the hypersphere.",
          },
          {
            title: "Bi-encoder vs cross-encoder",
            text: "Dense embedding spaces vs all-to-all cross-attention reranking; MRR@k and NDCG@k.",
          },
          {
            title: "CKA representation probing",
            text: "Centered Kernel Alignment for cross-layer representation similarity analysis.",
          },
        ],
        mentalModel: "Metric margin → Geodesic angular separation → Fast approximate nearest-neighbor indexing",
        tryIt: "Implement CKA from scratch and compare representations across two networks.",
        outcome: "Implement ArcFace angular loss and compute CKA similarity matrices.",
      },
      {
        id: "3.3",
        title: "Hybrid RAG Pipelines",
        icon: "database",
        days: [46, 49],
        bullets: [
          {
            title: "Chunking & vector indexing",
            text: "Semantic chunking strategies; HNSW and IVF-PQ vector indices; BM25 sparse search.",
          },
          {
            title: "Hybrid retrieval & reranking",
            text: "Reciprocal Rank Fusion (RRF); cross-encoder reranking for precision.",
          },
          {
            title: "GraphRAG & knowledge graphs",
            text: "Entity extraction, Leiden community detection, hierarchical corpus summarization.",
          },
        ],
        mentalModel: "Query → Hybrid dense+sparse recall → Cross-encoder reranking → Grounded generation",
        tryIt: "Build a hybrid RAG pipeline with BM25 + dense embeddings + cross-encoder reranker, measuring Recall@5.",
        outcome: "Design, implement, and evaluate a multi-stage hybrid RAG pipeline.",
      },
      {
        id: "3.4",
        title: "Researching RAG Systems",
        icon: "microscope",
        days: [50, 52],
        bullets: [
          {
            title: "The RAG Triad evaluation",
            text: "Context relevance, groundedness/faithfulness, and answer relevance measured separately.",
          },
          {
            title: "Controlled RAG ablation studies",
            text: "Isolate chunking strategy, embedding model, and reranker contributions independently.",
          },
          {
            title: "LLM-as-judge calibration",
            text: "Measure judge agreement with humans; detect and correct position bias and verbosity bias.",
          },
        ],
        mentalModel: "Decompose RAG into independently measurable components — don't evaluate only holistically.",
        tryIt: "Design a controlled study isolating retrieval vs generation quality using RAGAS on 200 domain questions.",
        outcome: "Design rigorous RAG evaluation studies that separately measure retrieval and generation quality.",
      },
    ],
    skipped: [
      {
        topic: "BM25 inverted index engineering",
        why: "Covered in standard IR; research focus is on dense metric spaces and neural representations",
        where: [{ level: 12, href: "/level/12/#m12-1" }],
      },
    ],
  },
  {
    number: 4,
    slug: "generative-models-llm-research",
    title: "Generative Models & LLM Research",
    phase: "production",
    icon: "flame",
    summary:
      "VAEs, GANs, DDPM diffusion, flow matching, generative evaluation metrics, and controlled experiments for studying LLMs as generative systems.",
    days: [53, 70],
    before: "Probability theory, calculus, and neural network optimization.",
    outcome:
      "Derive probability flow ODEs, implement flow matching, evaluate FID/memorization, and design controlled studies on in-context learning and hallucination.",
    coursesFrom: [{ level: 9 }],
    shortVersionOf: 9,
    alsoCovers: [
      { level: 14, topic: "Multimodal generative representations" },
    ],
    condensesLevels: [9, 14],
    units: [
      {
        id: "4.1",
        title: "VAEs & GANs",
        icon: "layers",
        days: [53, 57],
        bullets: [
          {
            title: "ELBO & reparameterization",
            text: "Intractable posteriors; ELBO via Jensen's inequality; z = μ + σ·ε trick.",
          },
          {
            title: "GAN minimax game",
            text: "Zero-sum formulation; optimal discriminator yields Jensen-Shannon Divergence.",
          },
          {
            title: "WGAN-GP",
            text: "Earth Mover's Distance via Kantorovich-Rubinstein duality; 1-Lipschitz gradient penalty.",
          },
        ],
        mentalModel: "Intractable marginal → Variational bound / Minimax game → Differentiable generation",
        tryIt: "Implement a VAE with reparameterization trick and inspect latent space interpolations.",
        outcome: "Derive ELBO and prove that optimal GAN discriminators evaluate Jensen-Shannon divergence.",
      },
      {
        id: "4.2",
        title: "Diffusion & Flow Matching",
        icon: "waves",
        days: [58, 63],
        bullets: [
          {
            title: "DDPM forward & reverse",
            text: "Closed-form forward q(x_t|x_0); noise prediction objective ε_θ(x_t, t).",
          },
          {
            title: "Score-based SDEs & ODE",
            text: "Anderson reverse SDE; Probability Flow ODE for deterministic sampling.",
          },
          {
            title: "Optimal Transport Flow Matching",
            text: "Straight-line paths x_t = (1−t)x_0 + tx_1; constant velocity u_t = x_1 − x_0.",
          },
          {
            title: "Classifier-Free Guidance (CFG)",
            text: "Unconditional dropout during training; guided score extrapolation at inference.",
          },
        ],
        mentalModel: "Data → Progressive noise → Score-based reverse → Straight OT flow matching",
        tryIt: "Implement DDPM from scratch and train an OT Flow Matching model; compare step counts for quality.",
        outcome: "Implement DDPM and OT Flow Matching; derive Probability Flow ODE for accelerated sampling.",
      },
      {
        id: "4.3",
        title: "Generative Evaluation & Memorization",
        icon: "chart-bar",
        days: [64, 67],
        bullets: [
          {
            title: "FID & Inception Score",
            text: "Fréchet Inception Distance; IS limitations; precision and recall for distributions.",
          },
          {
            title: "Memorization auditing",
            text: "Nearest-neighbor latent distances to training samples; Carlini membership inference.",
          },
        ],
        mentalModel: "Distribution fidelity requires measuring both quality (precision) and diversity (recall).",
        tryIt: "Compute FID and precision/recall curves; audit nearest-neighbor distances for memorization.",
        outcome: "Evaluate generative models with FID/Precision/Recall and conduct memorization audits.",
      },
      {
        id: "4.4",
        title: "Researching LLMs as Generative Systems",
        icon: "flask-conical",
        days: [68, 70],
        bullets: [
          {
            title: "In-context learning experiments",
            text: "Isolate label format vs label correctness vs example ordering in ICL (Min et al. 2022).",
          },
          {
            title: "Hallucination rate measurement",
            text: "Define operationalized hallucination for a specific domain; measure as fraction of unverifiable claims.",
          },
          {
            title: "Memorization detection",
            text: "Apply Carlini et al. prefix-probing to test whether LLMs reproduce training documents.",
          },
        ],
        mentalModel: "Every impressive LLM capability claim is a hypothesis to falsify — not a fact to celebrate.",
        tryIt: "Test ICL with 4 conditions (correct labels, wrong labels, no labels, no examples) using McNemar tests.",
        outcome: "Design controlled ICL experiments, measure hallucination rates, and detect LLM memorization.",
      },
    ],
    skipped: [
      {
        topic: "Sequential pixel autoregression (PixelCNN)",
        why: "Continuous diffusion and flow matching have replaced pixel autoregression in research",
        where: [{ level: 9, href: "/level/9/#m9-1" }],
      },
    ],
  },
  {
    number: 5,
    slug: "reasoning-alignment-safety",
    title: "Reasoning, Alignment & Safety",
    phase: "agentic",
    icon: "brain-circuit",
    summary:
      "RL foundations, PPO, DPO preference alignment, mechanistic interpretability, adversarial robustness, and rigorous AI safety research methodology.",
    days: [71, 87],
    before: "Sequence models, reinforcement learning theory, and optimization.",
    outcome:
      "Derive DPO, train a process reward model, implement SAEs, measure jailbreak success rates with confidence intervals, and evaluate alignment tax.",
    coursesFrom: [{ level: 11 }, { level: 13 }],
    shortVersionOf: 11,
    alsoCovers: [
      { level: 12, topic: "Autonomous agent loops & multi-agent orchestration" },
      { level: 13, topic: "Mechanistic interpretability & adversarial robustness" },
    ],
    condensesLevels: [11, 12, 13],
    units: [
      {
        id: "5.1",
        title: "RL & Policy Optimization",
        icon: "target",
        days: [71, 75],
        bullets: [
          {
            title: "MDPs & Bellman equations",
            text: "MDP formulation; Bellman optimality operator as a contraction mapping.",
          },
          {
            title: "Policy Gradient & PPO",
            text: "Likelihood ratio derivation; PPO clipped surrogate constraining update ratios.",
          },
          {
            title: "RLHF & DPO",
            text: "Bradley-Terry reward modeling; DPO closed-form policy eliminates separate RM and RL.",
          },
        ],
        mentalModel: "State → Action → Bellman return → Advantage → Clipped PPO update",
        tryIt: "Derive DPO loss mathematically from the Bradley-Terry preference probability formula.",
        outcome: "Derive Bellman equations, implement PPO, and align a model using DPO.",
      },
      {
        id: "5.2",
        title: "Reasoning & Test-Time Compute",
        icon: "git-fork",
        days: [76, 79],
        bullets: [
          {
            title: "Chain-of-thought & Tree of Thoughts",
            text: "Why CoT expands computational class; MCTS/BFS/DFS over thought trees.",
          },
          {
            title: "Process Reward Models (PRMs)",
            text: "Step-level credit assignment vs outcome-only ORMs; Best-of-N guided by PRMs.",
          },
          {
            title: "Test-time compute scaling",
            text: "Power-law accuracy gains from sampling, search, and revision at inference.",
          },
        ],
        mentalModel: "Problem → Thought tree → PRM step verification → Test-time search",
        tryIt: "Implement Best-of-N rejection sampling guided by step-level PRM scoring.",
        outcome: "Train a step-level Process Reward Model and evaluate test-time compute Pareto frontiers.",
      },
      {
        id: "5.3",
        title: "Mechanistic Interpretability",
        icon: "cpu",
        days: [80, 83],
        bullets: [
          {
            title: "Induction heads & circuits",
            text: "QK/OV circuit decomposition; two-layer induction circuits for ICL pattern completion.",
          },
          {
            title: "Sparse Autoencoders (SAEs)",
            text: "Superposition theory; L1-sparsity SAEs extracting monosemantic features from residual streams.",
          },
          {
            title: "Activation steering",
            text: "Contrastive activation subtraction; injecting concept vectors into the residual stream.",
          },
        ],
        mentalModel: "Residual stream → Linear concept direction → Circuit decomposition → Monosemantic feature",
        tryIt: "Train a SAE on open LLM activations and identify interpretable monosemantic features.",
        outcome: "Identify induction heads, train Sparse Autoencoders, and implement activation steering.",
      },
      {
        id: "5.4",
        title: "AI Safety Research Methodology",
        icon: "shield-check",
        days: [84, 87],
        bullets: [
          {
            title: "Alignment tax measurement",
            text: "Design controlled study measuring performance delta from safety fine-tuning across benchmark suite.",
          },
          {
            title: "Jailbreak success rate study",
            text: "Pre-register attack taxonomy; measure attack success rate per category with 95% CI.",
          },
          {
            title: "Safety benchmark validity",
            text: "Evaluate TruthfulQA/HarmBench for construct validity; test annotator agreement on 'harmful'.",
          },
        ],
        mentalModel: "AI safety research requires pre-registered hypotheses, CIs, and honest negative results — not ad-hoc anecdotes.",
        tryIt: "Design a jailbreak study: 3 attack categories × 20 cases; measure refusal rate with confidence intervals.",
        outcome: "Design pre-registered red team studies and measure alignment tax with controlled benchmarks.",
      },
    ],
    skipped: [
      {
        topic: "Prompt engineering heuristics and template tricks",
        why: "Research focus is on DPO loss functions, SAE circuits, and algorithmic search (PRMs/MCTS)",
        where: [{ level: 11, href: "/level/11/#m11-4" }],
      },
    ],
  },
  {
    number: 6,
    slug: "scaled-systems-empirical-research",
    title: "Scaled Systems & Research Publication",
    phase: "trust",
    icon: "microscope",
    summary:
      "Distributed training at scale, Chinchilla scaling laws, MFU profiling, ablation study design, finding research gaps, building a research portfolio, and publishing at top venues.",
    days: [88, 100],
    before: "Transformer architectures, distributed computing basics, and evaluation.",
    outcome:
      "Configure FSDP with MFU profiling, design fair ablation suites, identify a research gap, draft a conference manuscript, and build a publish-ready portfolio.",
    coursesFrom: [{ level: 8 }, { level: 10 }, { level: 14 }, { level: 15 }],
    shortVersionOf: 10,
    alsoCovers: [
      { level: 8, topic: "Ablation science & fair baselines" },
      { level: 14, topic: "Research portfolio & thesis scoping" },
      { level: 15, topic: "Publication, defense & research careers" },
    ],
    condensesLevels: [8, 10, 14, 15],
    units: [
      {
        id: "6.1",
        title: "Scaling Laws & Distributed Training",
        icon: "chart-line",
        days: [88, 91],
        bullets: [
          {
            title: "Chinchilla scaling laws",
            text: "Compute-optimal N and D scale equally; inference-optimal over-training rationale.",
          },
          {
            title: "3D parallelism & FSDP",
            text: "ZeRO stages, Tensor Parallelism (Megatron-LM), Pipeline Parallelism, ring All-Reduce.",
          },
          {
            title: "Model FLOPs Utilization (MFU)",
            text: "Profiling with PyTorch Profiler/Nsight; roofline model; MFU vs HFU.",
          },
        ],
        mentalModel: "Compute budget → Power-law envelope → Optimal N/D ratio → FSDP sharding → MFU audit",
        tryIt: "Fit Chinchilla power-law coefficients; compute empirical MFU for a training run.",
        outcome: "Configure PyTorch FSDP, calculate MFU, and apply Chinchilla scaling for compute budgeting.",
      },
      {
        id: "6.2",
        title: "Ablation Science & Fair Baselines",
        icon: "flask-conical",
        days: [92, 94],
        bullets: [
          {
            title: "Compute-parity baselines",
            text: "Equal tuning budgets via Optuna Bayesian search; avoid the under-tuned baseline trap.",
          },
          {
            title: "Destructive & constructive ablations",
            text: "Remove components one-by-one; add proposed components step-by-step onto minimal baseline.",
          },
          {
            title: "Statistical significance",
            text: "Multi-seed (N≥5), paired Wilcoxon test, bootstrap 95% CI, error slicing across subgroups.",
          },
        ],
        mentalModel: "An ablation table is an autopsy proving which components actually drive empirical gains.",
        tryIt: "Execute a 6-row ablation table on a sequence model; compute Wilcoxon p-values across 5 seeds.",
        outcome: "Design fair ablation suites with statistical significance and compute-parity baselines.",
      },
      {
        id: "6.3",
        title: "Finding a Research Gap",
        icon: "telescope",
        days: [95, 96],
        bullets: [
          {
            title: "Frontier mapping",
            text: "Audit NeurIPS/ICML/ICLR/ACL papers; classify by saturation, emerging, and white-space.",
          },
          {
            title: "Tension identification method",
            text: "Scan Limitations sections of 20 recent top-conference papers; recurring themes are validated gaps.",
          },
          {
            title: "Gap → hypothesis pipeline",
            text: "Gap → Research question → Falsifiable hypothesis → Null hypothesis → Compute cost estimate.",
          },
        ],
        mentalModel: "A gap worth pursuing is acknowledged by multiple authors, accessible with your compute, and specific enough to falsify.",
        tryIt: "Write a 2-page research proposal: gap evidence, falsifiable hypothesis, experiment design, novelty check.",
        outcome: "Systematically identify an academically accessible research gap and formulate a falsifiable hypothesis.",
      },
      {
        id: "6.4",
        title: "Portfolio, Publication & Research Careers",
        icon: "graduation-cap",
        days: [97, 100],
        bullets: [
          {
            title: "Research portfolio in the LLM era",
            text: "GitHub repos with compelling READMEs, HuggingFace model cards, Zenodo DOIs, academic website.",
          },
          {
            title: "Manuscript & peer review",
            text: "5-sentence abstract, introduction funnel, booktabs tables, point-by-point reviewer rebuttals.",
          },
          {
            title: "Research careers in the LLM era",
            text: "Academic vs industry gaps; open-model-based research identity; interdisciplinary opportunities.",
          },
          {
            title: "Predatory journal detection",
            text: "Think-Check-Submit protocol; DOAJ/DBLP verification; fake metric red flags.",
          },
        ],
        mentalModel: "A modern AI research portfolio argues you have a scientific perspective, execution skills, and communication ability.",
        tryIt: "Write a 1-page Research Career Positioning Statement answering: your unique question, open models, target venues, domain.",
        outcome: "Build an open-science portfolio, draft a publication-ready manuscript, and navigate research careers in the LLM era.",
      },
    ],
    skipped: [
      {
        topic: "SLURM job array scripting and cluster administration",
        why: "Engineering operations; research focus is on scaling theory, 3D parallelism, and MFU efficiency",
        where: [{ level: 10, href: "/level/10/#m10-1" }],
      },
    ],
  },
];

export const daysModuleHref = (m: DaysModule) => `${DAYS_BASE}/${m.slug}/`;

/** "Day 1" or "Days 5–6". */
export const dayRange = ([a, b]: [number, number]) =>
  a === b ? `Day ${a}` : `Days ${a}–${b}`;

/** The module that is the short version of a roadmap level. */
export const shortVersionOfLevel = (n: number): DaysModule | undefined =>
  hundredDaysModules.find((m) => m.shortVersionOf === n);

/** A module that covers a roadmap level's topic without being its short version. */
export function coveredInModule(
  n: number,
): { module: DaysModule; topic: string; plural: boolean } | undefined {
  for (const m of hundredDaysModules) {
    const hit = m.alsoCovers?.find((c) => c.level === n);
    if (hit)
      return { module: m, topic: hit.topic, plural: hit.plural ?? false };
  }
  return undefined;
}

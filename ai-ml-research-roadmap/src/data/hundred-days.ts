/**
 * 100 Days of AI/ML Research — an intensive accelerated track to the 16-level
 * research roadmap. Covers mathematical foundations, deep learning theory,
 * representation learning, generative modeling, reasoning, scaling laws, and publication.
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
}

export const hundredDaysModules: DaysModule[] = [
  {
    number: 1,
    slug: "mathematical-foundations-learning-theory",
    title: "Mathematical Foundations & Statistical Learning",
    phase: "foundations",
    icon: "sigma",
    summary:
      "Master the core mathematical bedrock of AI research: linear algebra, matrix decompositions, multivariable calculus, probability, information theory, and statistical generalization bounds.",
    days: [1, 15],
    before:
      "Basic multivariable calculus, introductory linear algebra, and scientific Python (NumPy).",
    outcome:
      "Derive SVD and autograd equations analytically, formulate PAC generalization bounds, and compute analytical KL divergences.",
    coursesFrom: [{ level: 0 }, { level: 1 }],
    shortVersionOf: 0,
    alsoCovers: [{ level: 1, topic: "Statistical learning theory" }],
    units: [
      {
        id: "1.1",
        title: "Vector Spaces, Linear Mappings & SVD",
        icon: "matrix",
        days: [1, 3],
        bullets: [
          {
            title: "Vector spaces and basis",
            text: "Linear independence, basis representations, and geometric projections in high dimensions.",
          },
          {
            title: "Eigenvalues and spectral theorem",
            text: "Spectral decomposition of symmetric positive semi-definite matrices and quadratic forms.",
          },
          {
            title: "Singular Value Decomposition (SVD)",
            text: "Full, thin, and truncated SVD; the Eckart-Young-Mirsky theorem for low-rank matrix approximation.",
          },
          {
            title: "Matrix and vector norms",
            text: "L1, L2, Frobenius, and nuclear norms as geometric regularization constraints.",
          },
        ],
        mentalModel: "High-dimensional data → Orthogonal coordinate rotation → Singular value scaling",
        tryIt: "Compute the SVD of a data matrix and verify low-rank reconstruction error against Eckart-Young bounds.",
        outcome: "Derive SVD decompositions analytically and calculate optimal low-rank matrix approximations.",
      },
      {
        id: "1.2",
        title: "Multivariable Calculus & Autograd Internals",
        icon: "function-square",
        days: [4, 6],
        bullets: [
          {
            title: "Jacobian and Hessian tensors",
            text: "First-order gradients and second-order curvature matrices for vector-valued multivariable functions.",
          },
          {
            title: "Multivariate chain rule",
            text: "Computing tensor contractions across composite computational directed acyclic graphs (DAGs).",
          },
          {
            title: "Forward vs reverse automatic differentiation",
            text: "Reverse-mode accumulation (backpropagation) achieving O(1) complexity per gradient evaluation.",
          },
          {
            title: "Numerical stability and LogSumExp",
            text: "Preventing floating-point underflow and overflow in Softmax and cross-entropy evaluations.",
          },
        ],
        mentalModel: "Computational DAG → Forward activation cache → Reverse topological gradient accumulation",
        tryIt: "Implement a 2-layer autograd tensor engine in pure NumPy with finite difference verification.",
        outcome: "Implement reverse-mode automatic differentiation from first principles with verified gradient checks.",
      },
      {
        id: "1.3",
        title: "Probability, Entropy & Information Theory",
        icon: "dice-5",
        days: [7, 10],
        bullets: [
          {
            title: "Multivariate distributions & Bayes theorem",
            text: "Joint densities, marginalization, Gaussian conditioning, and maximum likelihood estimation (MLE).",
          },
          {
            title: "Shannon entropy and cross-entropy",
            text: "Quantifying information surprise and proving cross-entropy equivalence to KL divergence.",
          },
          {
            title: "Kullback-Leibler (KL) divergence",
            text: "Asymmetry, Gibbs' inequality, and mode-covering (forward KL) vs mode-seeking (reverse KL) dynamics.",
          },
          {
            title: "Wasserstein distance & optimal transport",
            text: "Earth Mover's Distance versus f-divergences for probability distributions with disjoint supports.",
          },
        ],
        mentalModel: "Data uncertainty → Shannon entropy → Relative divergence → Optimal transport geometry",
        tryIt: "Calculate analytical KL divergence between two multivariate Gaussian distributions in Python.",
        outcome: "Prove Gibbs' inequality and analyze distribution divergence across mode-seeking and mode-covering regimes.",
      },
      {
        id: "1.4",
        title: "Statistical Learning Theory & PAC Bounds",
        icon: "chart-spline",
        days: [11, 15],
        bullets: [
          {
            title: "Empirical Risk Minimization (ERM)",
            text: "True risk vs empirical risk, inductive bias necessity, and the bias-variance decomposition.",
          },
          {
            title: "PAC learnability and sample complexity",
            text: "Bounding generalization error using Hoeffding's inequality and uniform convergence over hypothesis classes.",
          },
          {
            title: "Vapnik-Chervonenkis (VC) dimension",
            text: "Shattering coefficients, growth functions, Sauer-Shelah lemma, and capacity bounds.",
          },
          {
            title: "Convex optimization & KKT duality",
            text: "Convex functions, Lagrangian duals, Slater qualification, and the Karush-Kuhn-Tucker conditions.",
          },
        ],
        mentalModel: "Hypothesis class capacity → Rademacher / VC complexity → Uniform convergence generalization bounds",
        tryIt: "Compute the VC dimension for linear decision boundaries in D dimensions.",
        outcome: "Derive formal sample complexity bounds for PAC learnability under uniform convergence.",
      },
    ],
    skipped: [
      {
        topic: "Classical non-parametric density estimation",
        why: "Modern deep learning focuses primarily on parametric foundation architectures",
        where: [{ level: 1, href: "/level/1/#m1-4" }],
      },
      {
        topic: "Exact graphical model junction tree algorithms",
        why: "Exact inference is NP-hard; modern AI relies on sampling and variational inference",
        where: [{ level: 1, href: "/level/1/#m1-5" }],
      },
    ],
  },
  {
    number: 2,
    slug: "deep-learning-mechanics-transformers",
    title: "Deep Learning Mechanics & Transformer Internals",
    phase: "foundations",
    icon: "sparkles",
    summary:
      "The theoretical mechanics of deep neural networks: expressivity, loss landscapes, adaptive optimization (AdamW), normalization, and Transformer self-attention architecture internals.",
    days: [16, 35],
    before: "Level 0 mathematical foundations and autograd mechanics.",
    outcome:
      "Analyze Hessian spectra, derive RoPE and online Softmax (FlashAttention), and train an autoregressive Transformer.",
    coursesFrom: [{ level: 2 }, { level: 3 }],
    shortVersionOf: 2,
    alsoCovers: [{ level: 3, topic: "Transformer architectures" }],
    units: [
      {
        id: "2.1",
        title: "Expressivity & Loss Surface Geometry",
        icon: "mountain",
        days: [16, 20],
        bullets: [
          {
            title: "Universal approximation theorems",
            text: "Cybenko and Hornik theorems; exponential expressivity of network depth over width.",
          },
          {
            title: "Loss landscapes & Hessian spectrum",
            text: "Non-convex optimization, escaping saddle points, and dominant Hessian eigenvalue dynamics.",
          },
          {
            title: "Flat vs sharp minima & SAM",
            text: "Why flat basins generalize better; Sharpness-Aware Minimization (SAM) minimax objective.",
          },
          {
            title: "Implicit regularization & double descent",
            text: "Overparameterization, minimum-norm interpolation, and the modern double descent curve.",
          },
        ],
        mentalModel: "Non-convex loss surface → Hessian curvature → Flat basin selection → Generalization",
        tryIt: "Compute top Hessian eigenvalues via power iteration on a trained multi-layer network.",
        outcome: "Quantify loss sharpness and explain generalization in overparameterized regimes.",
      },
      {
        id: "2.2",
        title: "Adaptive Optimization & Normalization Dynamics",
        icon: "trending-up",
        days: [21, 25],
        bullets: [
          {
            title: "Stochastic optimization & momentum",
            text: "SGD convergence rates, Polyak momentum, and Nesterov acceleration on ill-conditioned ravines.",
          },
          {
            title: "Adam vs AdamW decoupled weight decay",
            text: "Why standard L2 penalty fails in adaptive optimizers; proving decoupled weight decay mechanics.",
          },
          {
            title: "Signal propagation & initialization",
            text: "Xavier and Kaiming (He) variance preservation; maintaining dynamical isometry in deep networks.",
          },
          {
            title: "LayerNorm vs RMSNorm",
            text: "Channel-wise normalization, scale invariance, and computational efficiency in modern LLMs.",
          },
        ],
        mentalModel: "Variance preservation → Decoupled adaptive updates → Stable gradient propagation",
        tryIt: "Implement AdamW and RMSNorm with analytical backward gradients from scratch.",
        outcome: "Derive AdamW update rules and explain variance-preserving weight initialization.",
      },
      {
        id: "2.3",
        title: "Transformer Anatomy, RoPE & Causal Attention",
        icon: "brain-circuit",
        days: [26, 30],
        bullets: [
          {
            title: "Scaled dot-product attention",
            text: "Queries, keys, values; the 1/sqrt(d_k) scale factor; causal lower-triangular masking.",
          },
          {
            title: "Multi-Head & Grouped-Query Attention",
            text: "Subspace representation learning; GQA key-value head sharing to reduce KV cache memory.",
          },
          {
            title: "Rotary Position Embeddings (RoPE)",
            text: "2D complex rotations preserving relative distance; YaRN and context length extrapolation.",
          },
          {
            title: "Pre-LN vs Post-LN stability",
            text: "Gradient flow through residual streams; why Pre-LN enables deep Transformer scaling without warmup.",
          },
        ],
        mentalModel: "Tokens → Rotated Q/K → Causal Scaled Softmax → Weighted V → Residual stream update",
        tryIt: "Implement RoPE rotation matrices and apply them to 2D tensor slices in PyTorch.",
        outcome: "Build modular Multi-Head Attention with RoPE and Grouped-Query Attention from scratch.",
      },
      {
        id: "2.4",
        title: "Hardware-Aware Attention & Sub-Quadratic SSMs",
        icon: "zap",
        days: [31, 35],
        bullets: [
          {
            title: "GPU memory hierarchy & roofline model",
            text: "High Bandwidth Memory (HBM) vs on-chip SRAM; compute-bound vs memory-bandwidth bound layers.",
          },
          {
            title: "FlashAttention & online Softmax",
            text: "Tiling attention without materializing N x N matrices in HBM; backward pass activation recomputation.",
          },
          {
            title: "KV cache memory & decoding dynamics",
            text: "Autoregressive generation memory footprints; PagedAttention memory fragmentation solutions.",
          },
          {
            title: "Structured State Space Models (Mamba)",
            text: "Linear dynamical systems, continuous-to-discrete transforms, and hardware-aware associative scan.",
          },
        ],
        mentalModel: "Global HBM → SRAM Tiling → Online Softmax → Linear associative state scan",
        tryIt: "Implement online Softmax normalization incrementally over chunked token batches.",
        outcome: "Explain the memory-bandwidth bottleneck of standard attention and derive online Softmax tiling.",
      },
    ],
    skipped: [
      {
        topic: "Legacy LSTM and GRU architectures",
        why: "Attention and state space models have superseded recurrent gating in modern AI research",
        where: [{ level: 3, href: "/level/3/#m3-1" }],
      },
    ],
  },
  {
    number: 3,
    slug: "representation-learning-latent-spaces",
    title: "Representation Learning & Metric Latent Spaces",
    phase: "retrieval",
    icon: "scan",
    summary:
      "Explore how neural representations form without human labels: contrastive learning (InfoNCE), self-supervised objectives, metric learning, hyperspherical geometries, and dense latent retrieval.",
    days: [36, 50],
    before: "Transformer architectures and vector calculus.",
    outcome:
      "Derive InfoNCE as a mutual information bound, implement ArcFace, and probe latent geometry using Centered Kernel Alignment.",
    coursesFrom: [{ level: 4 }],
    shortVersionOf: 4,
    alsoCovers: [{ level: 4, topic: "Representation learning" }],
    units: [
      {
        id: "3.1",
        title: "The Manifold Hypothesis & Self-Supervised Objectives",
        icon: "shapes",
        days: [36, 40],
        bullets: [
          {
            title: "Manifold hypothesis & dimensionality reduction",
            text: "High-dimensional data concentrating on non-linear sub-manifolds; PCA derivation via Rayleigh quotients.",
          },
          {
            title: "t-SNE and UMAP geometries",
            text: "Student-t distribution resolving crowding; Riemannian metric spaces in non-linear projections.",
          },
          {
            title: "Masked Autoencoders (MAE)",
            text: "Reconstructing masked visual patches; why high masking ratios (75%+) force semantic feature extraction.",
          },
          {
            title: "Masked language modeling (BERT)",
            text: "Bidirectional contextual conditioning; token masking and cloze task representations.",
          },
        ],
        mentalModel: "High-dimensional space → Non-linear manifold unfolding → Self-supervised pretext reconstruction",
        tryIt: "Implement PCA analytically using SVD and plot variance explained across principal dimensions.",
        outcome: "Derive PCA mathematically and explain the self-supervised reconstruction objective of MAE.",
      },
      {
        id: "3.2",
        title: "Contrastive Learning Theory & InfoNCE",
        icon: "split",
        days: [41, 45],
        bullets: [
          {
            title: "Contrastive learning & SimCLR",
            text: "Positive pair pulling, negative pair pushing, non-linear projection heads, and data augmentations.",
          },
          {
            title: "InfoNCE loss & mutual information",
            text: "Proving InfoNCE optimizes a variational lower bound on mutual information between augmented views.",
          },
          {
            title: "Representation collapse prevention",
            text: "How BYOL and SimSiam prevent trivial constant solutions using stop-gradient operators without negatives.",
          },
          {
            title: "Hyperspherical alignment & uniformity",
            text: "Wang & Isola metrics quantifying representation clustering and uniform distribution over S^(d-1).",
          },
        ],
        mentalModel: "Augmented views → Contrastive repulsion → Mutual information lower bound → Uniform hypersphere",
        tryIt: "Compute Wang & Isola alignment and uniformity scores for learned representations on the unit hypersphere.",
        outcome: "Derive the InfoNCE loss function and prove its connection to mutual information maximization.",
      },
      {
        id: "3.3",
        title: "Metric Learning & Dense Latent Retrieval",
        icon: "search",
        days: [46, 50],
        bullets: [
          {
            title: "Triplet loss & negative mining",
            text: "Anchor-positive-negative geometries, margin parameters, and hard vs semi-hard negative mining.",
          },
          {
            title: "ArcFace angular margin loss",
            text: "Additive angular margin cos(theta + m) enforcing geodesic intra-class compactness on the hypersphere.",
          },
          {
            title: "Bi-encoder vs cross-encoder retrieval",
            text: "Dual-encoder embedding spaces vs all-to-all cross-attention reranking; MRR@k and NDCG@k metrics.",
          },
          {
            title: "Representation probing & CKA",
            text: "Linear probing protocols and Centered Kernel Alignment (CKA) for cross-layer representation similarity.",
          },
        ],
        mentalModel: "Metric margin → Geodesic angular separation → Fast approximate nearest-neighbor indexing",
        tryIt: "Implement Centered Kernel Alignment (CKA) from scratch and compare representations across two networks.",
        outcome: "Implement ArcFace angular loss and compute CKA representation similarity matrices across network layers.",
      },
    ],
    skipped: [
      {
        topic: "TF-IDF and BM25 sparse retrieval engines",
        why: "Covered thoroughly in engineering curricula; research focus is on dense metric representations",
        where: [{ level: 4, href: "/level/4/#m4-4" }],
      },
    ],
  },
  {
    number: 4,
    slug: "generative-modeling-diffusion-flow-matching",
    title: "Generative Modeling: Diffusion, SDEs & Flow Matching",
    phase: "production",
    icon: "flame",
    summary:
      "Explore the theoretical mathematics of continuous deep generative models: variational autoencoders, generative adversarial networks, reverse-time SDEs, score matching, and continuous flow matching.",
    days: [51, 68],
    before: "Probability theory, multivariable calculus, and neural network optimization.",
    outcome:
      "Derive continuous probability flow ODEs, implement optimal transport flow matching, and evaluate samples with FID.",
    coursesFrom: [{ level: 11 }],
    shortVersionOf: 11,
    alsoCovers: [{ level: 11, topic: "Generative modeling" }],
    units: [
      {
        id: "4.1",
        title: "Variational Autoencoders & WGAN Minimax Theory",
        icon: "layers",
        days: [51, 55],
        bullets: [
          {
            title: "Latent variable models & ELBO",
            text: "Intractable marginal likelihoods; deriving Evidence Lower Bound (ELBO) via Jensen's inequality.",
          },
          {
            title: "The reparameterization trick",
            text: "Backpropagating through stochastic latent nodes by isolating Gaussian noise: z = mu + sigma * eps.",
          },
          {
            title: "GAN minimax game theory",
            text: "Zero-sum game formulation; proving optimal discriminator yields Jensen-Shannon Divergence.",
          },
          {
            title: "Wasserstein GAN & gradient penalty",
            text: "Earth Mover's Distance via Kantorovich-Rubinstein duality; 1-Lipschitz continuity constraints (WGAN-GP).",
          },
        ],
        mentalModel: "Intractable marginal → Variational bound / Minimax game → Differentiable latent generation",
        tryIt: "Implement a VAE with the reparameterization trick and inspect latent space interpolations.",
        outcome: "Derive the ELBO and prove that optimal GAN discriminators evaluate the Jensen-Shannon divergence.",
      },
      {
        id: "4.2",
        title: "Score-Based Modeling & Denoising Diffusion (DDPM)",
        icon: "waves",
        days: [56, 60],
        bullets: [
          {
            title: "Score matching & Langevin dynamics",
            text: "Modeling score functions s(x) = \nabla_x log p(x) without intractable partition function Z.",
          },
          {
            title: "DDPM forward and reverse processes",
            text: "Markov chain forward noising q(x_t|x_{t-1}) and reverse denoising transitions p_theta(x_{t-1}|x_t).",
          },
          {
            title: "Closed-form forward marginals",
            text: "Sampling x_t directly at arbitrary timestep t using cumulative variance schedule alpha_bar_t.",
          },
          {
            title: "Noise prediction objective",
            text: "Deriving the simplified L2 objective predicting injected Gaussian noise epsilon_theta(x_t, t).",
          },
        ],
        mentalModel: "Data distribution → Progressive Gaussian noise injection → Reverse score-based denoising",
        tryIt: "Derive the closed-form forward sampling formula q(x_t|x_0) on paper from Gaussian convolution.",
        outcome: "Implement an end-to-end DDPM training and sampling loop in PyTorch.",
      },
      {
        id: "4.3",
        title: "Continuous SDEs & Probability Flow ODEs",
        icon: "git-commit",
        days: [61, 64],
        bullets: [
          {
            title: "Forward Itô SDEs",
            text: "Continuous-time diffusion dx = f(x, t) dt + g(t) dw transforming data into isotropic Gaussian noise.",
          },
          {
            title: "Anderson reverse-time SDE theorem",
            text: "Proving reversal is an SDE driven by drift, diffusion, and the score function \nabla_x log p_t(x).",
          },
          {
            title: "Probability Flow ODE",
            text: "Deterministic ODE sharing identical marginal densities; deterministic sampling and exact likelihoods.",
          },
          {
            title: "Accelerated samplers (DDIM / DPM-Solver)",
            text: "Non-Markovian deterministic sampling accelerating inference from 1000 steps down to 15-20 steps.",
          },
        ],
        mentalModel: "Stochastic differential trajectory → Deterministic probability flow ODE → Accelerated numerical integration",
        tryIt: "Implement a DDIM deterministic sampler and verify latent inversion accuracy.",
        outcome: "Formulate the Probability Flow ODE and implement accelerated deterministic diffusion sampling.",
      },
      {
        id: "4.4",
        title: "Flow Matching & Optimal Transport in Latent Spaces",
        icon: "route",
        days: [65, 68],
        bullets: [
          {
            title: "Continuous Normalizing Flows (CNFs)",
            text: "Push-forward density modeling via time-dependent vector fields v_t(x) without simulation at train time.",
          },
          {
            title: "Optimal Transport Flow Matching (OT-FM)",
            text: "Straight-line displacement paths x_t = (1 - t) * x_0 + t * x_1 with constant target velocity u_t = x_1 - x_0.",
          },
          {
            title: "Diffusion Transformers (DiT)",
            text: "Replacing convolutional U-Nets with Transformer backbones using adaptive layer normalization (AdaLN).",
          },
          {
            title: "Classifier-Free Guidance (CFG)",
            text: "Extrapolating conditional velocity fields over unconditional fields to amplify prompt adherence.",
          },
        ],
        mentalModel: "Noise distribution → Straight-line optimal transport path → Instant velocity regression",
        tryIt: "Train an Optimal Transport Flow Matching model on a 2D synthetic dataset and inspect trajectory straightness.",
        outcome: "Implement continuous Flow Matching with optimal transport and Classifier-Free Guidance.",
      },
    ],
    skipped: [
      {
        topic: "Autoregressive pixel generation (PixelCNN)",
        why: "Continuous diffusion and flow matching have replaced sequential pixel autoregression in research",
        where: [{ level: 11, href: "/level/11/#m11-3" }],
      },
    ],
  },
  {
    number: 5,
    slug: "reasoning-alignment-test-time-compute",
    title: "Reasoning, Alignment & Test-Time Compute",
    phase: "agentic",
    icon: "brain-circuit",
    summary:
      "The theoretical frontiers of AI reasoning and alignment: search over thought trees, process reward models (PRMs), test-time compute scaling laws, DPO preference optimization, and mechanistic interpretability.",
    days: [69, 85],
    before: "Sequence models, reinforcement learning theory, and optimization dynamics.",
    outcome:
      "Train a process reward model, fit test-time compute scaling curves, derive DPO loss, and steer activations with mechanistic probes.",
    coursesFrom: [{ level: 5 }, { level: 6 }, { level: 8 }],
    shortVersionOf: 6,
    alsoCovers: [
      { level: 5, topic: "Reinforcement learning" },
      { level: 8, topic: "Alignment theory" },
    ],
    units: [
      {
        id: "5.1",
        title: "Reinforcement Learning & Policy Optimization",
        icon: "target",
        days: [69, 73],
        bullets: [
          {
            title: "Markov Decision Processes & Bellman contraction",
            text: "MDP formulation; proving Bellman optimality operator is a contraction mapping via Banach theorem.",
          },
          {
            title: "Policy Gradient Theorem & REINFORCE",
            text: "Likelihood ratio derivation; proving state baselines reduce gradient variance with zero bias.",
          },
          {
            title: "Generalized Advantage Estimation (GAE)",
            text: "Compounding n-step TD errors with exponential factor lambda to balance bias and variance.",
          },
          {
            title: "Proximal Policy Optimization (PPO)",
            text: "PPO clipped surrogate objective constraining policy update ratios without second-order Hessians.",
          },
        ],
        mentalModel: "Environment state → Policy action → Bellman return → Advantage estimation → Clipped update",
        tryIt: "Derive the Policy Gradient Theorem analytically using the log-derivative identity.",
        outcome: "Derive the Bellman contraction mapping and implement Generalized Advantage Estimation.",
      },
      {
        id: "5.2",
        title: "Reasoning, Thought Trees & Process Supervision",
        icon: "git-fork",
        days: [74, 78],
        bullets: [
          {
            title: "Chain-of-thought circuit expressivity",
            text: "Why intermediate reasoning tokens expand the computational class of constant-depth Transformers.",
          },
          {
            title: "Tree of Thoughts (ToT) & MCTS search",
            text: "Search over combinatorial thought spaces via BFS, DFS, and Monte Carlo Tree Search lookaheads.",
          },
          {
            title: "Outcome vs Process Reward Models (PRMs)",
            text: "Credit assignment failure in ORMs; training step-level PRMs to evaluate each reasoning step.",
          },
          {
            title: "Test-time compute scaling laws",
            text: "Power-law accuracy gains from inference compute (Best-of-N, tree search, revision loops).",
          },
        ],
        mentalModel: "Problem formulation → Combinatorial thought tree → PRM step verification → Test-time search",
        tryIt: "Implement Best-of-N rejection sampling guided by intermediate step-level scoring.",
        outcome: "Train a step-level Process Reward Model and evaluate test-time compute scaling Pareto frontiers.",
      },
      {
        id: "5.3",
        title: "Alignment Theory: RLHF, DPO & Robustness",
        icon: "heart-handshake",
        days: [79, 82],
        bullets: [
          {
            title: "RLHF & reward hacking",
            text: "Bradley-Terry pairwise reward modeling; Goodhart's law and overoptimization in proxy rewards.",
          },
          {
            title: "Direct Preference Optimization (DPO)",
            text: "Deriving closed-form optimal policy and eliminating the separate reward model and RL loop.",
          },
          {
            title: "DPO generalizations (IPO, KTO, SimPO)",
            text: "Identity preference optimization, unpaired binary feedback, and margin-scaled objectives.",
          },
          {
            title: "Adversarial attacks & safety bounds",
            text: "Projected Gradient Descent (PGD), token-level gradient jailbreaks (GCG), and alignment tax trade-offs.",
          },
        ],
        mentalModel: "Human preference data → Implicit reward substitution → Analytical DPO gradient update",
        tryIt: "Derive the DPO loss function mathematically from the Bradley-Terry preference probability formula.",
        outcome: "Derive and implement Direct Preference Optimization with reference policy KL regularization.",
      },
      {
        id: "5.4",
        title: "Mechanistic Interpretability & Activation Steering",
        icon: "cpu",
        days: [83, 85],
        bullets: [
          {
            title: "Linear representation hypothesis",
            text: "Semantic concepts represented as linear directions (one-dimensional subspaces) in activation space.",
          },
          {
            title: "QK-circuits and OV-circuits",
            text: "Decomposing attention into where information moves (QK) and what information is written (OV).",
          },
          {
            title: "Induction heads & in-context learning",
            text: "Two-layer attention circuits detecting and continuing repeated sequence patterns [A][B] ... [A] -> [B].",
          },
          {
            title: "Superposition & Sparse Autoencoders (SAEs)",
            text: "Models packing non-orthogonal features into high dimensions; using SAEs to extract monosemantic features.",
          },
        ],
        mentalModel: "Residual stream → Linear concept direction → Attention circuit decomposition → Monosemantic feature",
        tryIt: "Extract a concept steering vector by contrastive activation subtraction and inject it during generation.",
        outcome: "Identify induction heads in Transformer attention layers and implement activation steering vectors.",
      },
    ],
    skipped: [
      {
        topic: "Prompt engineering heuristics and templates",
        why: "Research focus is on internal mechanisms, representation steering, and algorithmic search",
        where: [{ level: 8, href: "/level/8/#m8-4" }],
      },
    ],
  },
  {
    number: 6,
    slug: "scaling-laws-distributed-systems-research",
    title: "Scaling Laws, Distributed Systems & Empirical Research",
    phase: "trust",
    icon: "microscope",
    summary:
      "Large-scale empirical foundation model research: Chinchilla scaling laws, 3D parallelism (Megatron/ZeRO), benchmark contamination detection, and scientific publication and defense.",
    days: [86, 100],
    before: "Transformer architectures, distributed computing basics, and scientific evaluation.",
    outcome:
      "Fit Chinchilla scaling law curves, configure FSDP with MFU profiling, audit benchmark contamination, and draft conference papers.",
    coursesFrom: [{ level: 9 }, { level: 10 }, { level: 7 }, { level: 15 }],
    shortVersionOf: 9,
    alsoCovers: [
      { level: 10, topic: "Distributed ML systems" },
      { level: 7, topic: "Empirical benchmarking" },
      { level: 15, topic: "Research publication" },
    ],
    units: [
      {
        id: "6.1",
        title: "Foundation Model Scaling Laws & Pre-Training",
        icon: "chart-line",
        days: [86, 90],
        bullets: [
          {
            title: "Kaplan vs Chinchilla scaling laws",
            text: "Power-law loss relationships; why Chinchilla proves parameters and tokens should scale equally.",
          },
          {
            title: "FLOPs calculation in Transformers",
            text: "Computing theoretical FLOPs: 6 * N * D per training step across forward and backward passes.",
          },
          {
            title: "Inference-optimal over-training",
            text: "Why modern open models train on 15T+ tokens to amortize long-term inference serving costs.",
          },
          {
            title: "Pre-training loss spikes & stability",
            text: "Attention logit explosion, QK-Norm stabilization, z-loss regularization, and WSD learning rates.",
          },
        ],
        mentalModel: "Compute budget C → Power-law envelope → Optimal parameter-to-token ratio → Stable pre-training",
        tryIt: "Fit power-law scaling coefficients to a matrix of parameter counts, token budgets, and loss values.",
        outcome: "Calculate compute-optimal parameter-to-token allocations and implement loss spike guards.",
      },
      {
        id: "6.2",
        title: "3D Parallelism, ZeRO & Distributed Training Systems",
        icon: "network",
        days: [91, 95],
        bullets: [
          {
            title: "Model FLOPs Utilization (MFU)",
            text: "Measuring real hardware execution efficiency against theoretical peak floating-point throughput.",
          },
          {
            title: "Tensor Parallelism (Megatron-LM)",
            text: "Splitting weight matrices column-wise and row-wise across GPUs with All-Reduce communications.",
          },
          {
            title: "ZeRO & Fully Sharded Data Parallel (FSDP)",
            text: "Sharding optimizer states (ZeRO-1), gradients (ZeRO-2), and parameters (ZeRO-3) across cluster ranks.",
          },
          {
            title: "Ring All-Reduce communication",
            text: "Proving communication volume 2 * ((N - 1) / N) * S is independent of the number of GPUs N.",
          },
        ],
        mentalModel: "Cluster interconnect → Tensor parallelism across NVLink → FSDP parameter sharding across nodes",
        tryIt: "Compute the exact memory footprint of a 7B model under DDP vs ZeRO-1 vs ZeRO-3.",
        outcome: "Configure PyTorch FSDP with activation checkpointing and calculate empirical Model FLOPs Utilization.",
      },
      {
        id: "6.3",
        title: "Benchmarking Science, Publication & Research Defense",
        icon: "graduation-cap",
        days: [96, 100],
        bullets: [
          {
            title: "Benchmark contamination & n-gram detection",
            text: "Scanning pre-training corpora with 13-gram overlap and MinHash LSH to detect test set leakage.",
          },
          {
            title: "Bradley-Terry Elo comparative evaluation",
            text: "Maximum likelihood estimation of latent model quality from pairwise match outcomes.",
          },
          {
            title: "Anatomy of an accepted conference paper",
            text: "Structure of NeurIPS/ICML papers: falsifiable hypotheses, fair baselines, ablations, and error analysis.",
          },
          {
            title: "OpenReview rebuttals & research defense",
            text: "Writing persuasive author responses, executing discussion experiments, and delivering job talks.",
          },
        ],
        mentalModel: "Unpolluted benchmark → Pairwise Elo rating → Reproducible artifact → Peer-reviewed defense",
        tryIt: "Fit a Bradley-Terry model to simulated pairwise comparison outcomes and plot Elo ratings with error bars.",
        outcome: "Perform benchmark contamination scans, fit Bradley-Terry Elo ratings, and write conference rebuttals.",
      },
    ],
    skipped: [
      {
        topic: "Cloud billing dashboards and quota management",
        why: "Engineering operations; research focus is on computational theory, MFU efficiency, and scaling",
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

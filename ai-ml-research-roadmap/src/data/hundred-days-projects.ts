/**
 * Projects — the "After the 100 days" portfolio section of 100 Days of AI/ML
 * Research. Hand-authored content, rendered by src/pages/100-days/projects.astro.
 */

export const PROJECTS_HREF = '/100-days/projects/';

export interface Project {
  number: number;
  title: string;
  level: string;
  build: string;
  forWho: string;
  skills: string;
  /** Module numbers this project builds on. */
  buildsOn: number[];
  mustHaves: string[];
  stretch: string;
  data: string;
  done: string;
}

export const projectsSummary =
  'Turn what you learned into a research portfolio: execute two or three rigorous empirical studies that each investigate a distinct hypothesis, adhering to top-tier conference standards (NeurIPS/ICML).';

export const whyBuild =
  'Every aspiring research scientist needs proven experimental artifacts. These research projects demonstrate scientific range: mathematical formulation, rigorous baselines, ablation studies, and reproducible code repositories.';

export const howToUse: string[] = [
  'Build two or three research projects, not ten shallow scripts.',
  'Make each project address a distinct theoretical or empirical hypothesis.',
  'Align project selection with target research lab roles.',
  'Finish each project with a formal LaTeX report and public reproduction artifact.',
];

export const guidelines: string[] = [
  'A clear, falsifiable scientific hypothesis',
  'A strong, fair baseline with equal tuning compute',
  'Controlled ablations isolating each proposed component',
  'Multiple random seeds with 95% bootstrap confidence intervals',
  'A public GitHub repository with Dockerized reproduction scripts',
  'Hardware FLOPs Utilization (MFU) and training compute reported',
  'A LaTeX research paper adhering to conference formatting guidelines',
  'Comprehensive error analysis and failure case dissection',
];

export const checklist: string[] = [
  'I can explain the core scientific hypothesis and contribution in two sentences.',
  'I measured a strong, uncompromised baseline under identical evaluation conditions.',
  'My test set has verified statistical power with bootstrap confidence intervals.',
  'My ablations isolate the exact contribution of each parameter and loss term.',
  'I verified zero test set contamination in my training data.',
  'No non-deterministic operations corrupt my empirical reproduction results.',
  'It is fully reproducible via a single Dockerized script or notebook.',
  'I report MFU, total FLOPs, and GPU wall-clock training time.',
  'My report covers methodology, theoretical grounding, negative results, and failure cases.',
  'I have a clear academic presentation or job talk slide deck.',
  'I can answer: Why this inductive bias? Where does this fail? What happens at 10x compute scale?',
];

export const projects: Project[] = [
  {
    number: 1,
    title: 'Self-Supervised Latent Representation Reproduction',
    level: 'Intermediate',
    build:
      'A complete reproduction of a seminal self-supervised learning paper (e.g. SimCLR or Masked Autoencoder) on an unlabelled benchmark, measuring representation geometry and linear probing transfer.',
    forWho: 'Researchers studying representation learning, pre-training dynamics, and self-supervised vision/language encoders.',
    skills: 'Contrastive learning, InfoNCE, data augmentations, linear probing, CKA representation alignment.',
    buildsOn: [1, 2, 3],
    mustHaves: [
      'Implement data augmentation pipeline, projection head, and InfoNCE loss from scratch.',
      'Track alignment and uniformity metrics over the unit hypersphere across training epochs.',
      'Evaluate learned representations using frozen linear classification probes.',
      'Measure Centered Kernel Alignment (CKA) across intermediate network layers.',
    ],
    stretch: 'Compare contrastive learning against non-contrastive methods (BYOL/SimSiam); test out-of-distribution transfer.',
    data: 'Standard computer vision or domain-specific scientific image benchmarks (CIFAR-100, TinyImageNet, MedMNIST).',
    done: 'Linear probe top-1 accuracy curves across 5 random seeds are reported, complete with CKA similarity heatmaps.',
  },
  {
    number: 2,
    title: 'Sub-Quadratic State Space vs Attention Hybrid Benchmark',
    level: 'Advanced',
    build:
      'An architectural benchmark comparing hybrid Mamba / Transformer sequence models against vanilla multi-head attention on long-context associative recall.',
    forWho: 'Architectural researchers investigating efficient alternatives to quadratic attention.',
    skills: 'State space models, associative scan, hardware-aware kernels, synthetic associative recall probes.',
    buildsOn: [2, 6],
    mustHaves: [
      'Implement a discrete State Space Model layer with hardware-efficient parallel associative scan.',
      'Benchmark long-context needle-in-a-haystack associative recall across context lengths from 2K to 32K tokens.',
      'Measure training throughput (tokens/second) and peak KV cache memory footprint.',
      'Isolate the exact ratio of attention layers to SSM layers required for optimal associative memory retention.',
    ],
    stretch: 'Integrate custom Triton associative scan kernels; evaluate on real-world long-context language modeling.',
    data: 'Synthetic passkey retrieval datasets and long-context pre-training subsets (OpenWebText / SlimPajama).',
    done: 'Associative recall accuracy curves and memory scaling benchmarks across varying sequence lengths are reported.',
  },
  {
    number: 3,
    title: 'Process Reward Model & Tree-Search Reasoning Engine',
    level: 'Advanced',
    build:
      'A step-level Process Reward Model (PRM) fine-tuned to guide Monte Carlo Tree Search (MCTS) decoding on mathematical reasoning benchmarks.',
    forWho: 'Researchers working on reasoning frontiers, test-time compute scaling, and verifiable generation.',
    skills: 'Process supervision, reward modeling, MCTS, Best-of-N rejection sampling, reasoning verifiers.',
    buildsOn: [1, 4, 5],
    mustHaves: [
      'Construct a step-delimited dataset with binary step-level correctness annotations.',
      'Train a Process Reward Model and compare step-score calibration against an Outcome Reward Model.',
      'Implement MCTS tree search and Best-of-N rejection sampling guided by the trained PRM.',
      'Plot test-time compute scaling curves measuring problem accuracy against total tokens generated.',
    ],
    stretch: 'Incorporate external symbolic Python execution verifiers; distill search traces into a smaller student model.',
    data: 'GSM8K, MATH, or synthetically generated multi-step algorithmic reasoning datasets.',
    done: 'Accuracy versus test-time compute Pareto frontiers comparing greedy, Best-of-N, and MCTS search are reported.',
  },
  {
    number: 4,
    title: 'Mechanistic Interpretability Circuit Dissection',
    level: 'Intermediate to Advanced',
    build:
      'A mechanistic analysis isolating and ablating attention circuits and induction heads responsible for in-context learning in an open-weight foundation model.',
    forWho: 'Alignment and interpretability researchers investigating internal representations and causal circuits.',
    skills: 'Mechanistic interpretability, activation patching, QK/OV circuit decomposition, sparse autoencoders.',
    buildsOn: [2, 5],
    mustHaves: [
      'Locate induction heads using prefix-repetition copy scores and attention pattern analysis.',
      'Perform causal activation patching to prove which attention heads write to target task subspaces.',
      'Extract concept steering vectors and demonstrate targeted suppression or elevation of model behaviors.',
      'Analyze polysemanticity using a trained Sparse Autoencoder (SAE) on MLP activations.',
    ],
    stretch: 'Map full indirect object identification (IOI) circuit; evaluate steering vector transfer across model scales.',
    data: 'Synthetic linguistic probe datasets, factual assertion pairs, and open-weight model checkpoints.',
    done: 'Attribution patching heatmaps, circuit connectivity graphs, and steering vector intervention evaluations are reported.',
  },
  {
    number: 5,
    title: 'Continuous Optimal Transport Flow Matching',
    level: 'Advanced',
    build:
      'A continuous-time Flow Matching generative model implemented from mathematical first principles with straight-line optimal transport trajectories.',
    forWho: 'Generative modeling researchers working on diffusion, continuous SDEs, and flow matching.',
    skills: 'Flow matching, optimal transport, ODE numerical solvers, Classifier-Free Guidance (CFG).',
    buildsOn: [1, 2, 4],
    mustHaves: [
      'Derive and implement the optimal transport vector field target velocity u_t(x_1|x_0).',
      'Train a velocity network without ODE simulation using simple regression loss.',
      'Implement numerical ODE integration samplers (Euler, Midpoint, RK4) with Classifier-Free Guidance.',
      'Evaluate generative fidelity (FID) and sample generation speed across step budgets (4 to 50 steps).',
    ],
    stretch: 'Compare straight-line OT paths against standard curved DDPM probability flow ODE paths.',
    data: '2D synthetic distributions, physical dynamical systems data, or image datasets (MNIST, CIFAR-10).',
    done: 'Trajectory curvature metrics, step-budget FID curves, and visual generation samples are reported.',
  },
  {
    number: 6,
    title: 'LoRA Spectral Dynamics & Representation Drift Analysis',
    level: 'Intermediate',
    build:
      'A theoretical and empirical study of singular value decay, subspace conservation, and catastrophic forgetting during Low-Rank Adaptation (LoRA vs DoRA).',
    forWho: 'Researchers studying parameter-efficient adaptation, intrinsic dimensionality, and continual learning.',
    skills: 'SVD, spectral analysis, Grassmannian distance, catastrophic forgetting, CKA representation drift.',
    buildsOn: [1, 2, 6],
    mustHaves: [
      'Compute Singular Value Decomposition (SVD) of weight updates Delta W across adaptation ranks r.',
      'Measure principal angle alignment between LoRA subspaces and full parameter fine-tuning update matrices.',
      'Evaluate catastrophic forgetting on general-domain language benchmarks before and after task adaptation.',
      'Perform Centered Kernel Alignment (CKA) across layers to map depth-wise representation shift.',
    ],
    stretch: 'Implement Task Vector arithmetic and evaluate multi-task model merging via TIES-Merging and DARE.',
    data: 'Domain specialization benchmarks (scientific QA, legal summarization, medical classification).',
    done: 'Singular value spectra, CKA drift heatmaps, and general-domain retention scores are reported.',
  },
  {
    number: 7,
    title: 'Benchmark Contamination Scanner & Bradley-Terry Evaluator',
    level: 'Intermediate',
    build:
      'An automated evaluation framework that scans pre-training corpora for benchmark contamination and fits Bradley-Terry Elo ratings from pairwise comparisons.',
    forWho: 'Empirical research scientists focusing on evaluation methodology, leaderboards, and reproducibility.',
    skills: 'Contamination detection, n-gram indexing, Bradley-Terry modeling, bootstrap confidence intervals.',
    buildsOn: [1, 5],
    mustHaves: [
      'Implement an efficient 13-gram overlap and MinHash LSH contamination detection scanner.',
      'Quantify verbatim and paraphrased test set overlap in pre-training dataset slices.',
      'Implement a debiased, position-swapped LLM-as-a-Judge with position bias cancellation.',
      'Fit a Bradley-Terry model to pairwise outputs and calculate Elo ratings with 95% bootstrap intervals.',
    ],
    stretch: 'Measure length bias correlations; detect memorization via Carlini prefix-probing techniques.',
    data: 'Public pre-training slices (Common Crawl / FineWeb) and popular benchmark test sets (GSM8K, HumanEval).',
    done: 'Contamination certificates, Elo rating tables with confidence intervals, and judge bias metrics are reported.',
  },
  {
    number: 8,
    title: 'Synthetic Reasoning Engine with Deterministic Verifiers',
    level: 'Intermediate to Advanced',
    build:
      'A programmatic data generation and filtering engine producing multi-step reasoning traces validated by formal solvers to prevent model collapse.',
    forWho: 'Researchers studying synthetic data curation, distillation, and reasoning capability elicitation.',
    skills: 'Synthetic data synthesis, execution-based verification, model collapse mitigation, student distillation.',
    buildsOn: [3, 4, 6],
    mustHaves: [
      'Synthesize complex multi-step reasoning problems paired with ground-truth verifiable solutions.',
      'Validate intermediate reasoning steps deterministically using Python execution and formal logic solvers.',
      'Fine-tune a student foundation model on verified data and measure downstream generalization gains.',
      'Demonstrate empirical prevention of model collapse compared to unverified recursive generation.',
    ],
    stretch: 'Implement backtranslation for automated problem generation; perform diversity clustering.',
    data: 'Algorithmic puzzle generators, formal math problems, and competitive programming specs.',
    done: 'Verification pass rates, student distillation benchmark curves, and error categorization tables are reported.',
  },
  {
    number: 9,
    title: 'Distributed Training & MFU Profiler (FSDP / Megatron)',
    level: 'Advanced',
    build:
      'A distributed training pipeline scaling a multi-billion parameter model across GPUs with PyTorch FSDP, profiled for Model FLOPs Utilization (MFU).',
    forWho: 'Systems researchers working on large-scale distributed training, 3D parallelism, and memory efficiency.',
    skills: 'FSDP, activation checkpointing, Ring All-Reduce, PyTorch Profiler, MFU calculation.',
    buildsOn: [2, 6],
    mustHaves: [
      'Implement Fully Sharded Data Parallelism (FSDP) with custom Transformer layer wrapping.',
      'Integrate backward activation checkpointing and mixed-precision BF16 training.',
      'Calculate theoretical peak FLOPs and compute empirical Model FLOPs Utilization (MFU).',
      'Profile communication versus computation overlap using PyTorch Profiler traces.',
    ],
    stretch: 'Implement manual 2-GPU Tensor Parallelism linear layers; evaluate CPU offloading overhead.',
    data: 'Pre-training text tokens and synthetic transformer workload benchmarks.',
    done: 'MFU benchmark tables, scaling efficiency curves, and PyTorch Profiler timeline traces are reported.',
  },
  {
    number: 10,
    title: 'Direct Preference Optimization vs PPO Alignment Study',
    level: 'Advanced',
    build:
      'A comparative empirical study analyzing training stability, reward overoptimization, and KL divergence in Direct Preference Optimization (DPO) versus PPO.',
    forWho: 'Alignment researchers studying post-training preference tuning, safety bounds, and reinforcement learning.',
    skills: 'DPO, RLHF, Bradley-Terry loss, reward hacking, KL drift tracking.',
    buildsOn: [4, 5],
    mustHaves: [
      'Derive and implement the DPO loss function with reference policy regularization.',
      'Train an alignment model on pairwise human preference datasets (e.g. UltraFeedback).',
      'Track implicit reward margin, reference policy KL divergence, and generation length over training.',
      'Evaluate alignment on conversational benchmark suites while monitoring general-capability retention.',
    ],
    stretch: 'Compare DPO against IPO and KTO; analyze sensitivity to reference policy temperature scaling.',
    data: 'Standard preference datasets (Anthropic HH-RLHF, UltraFeedback, Open SHP).',
    done: 'Implicit reward trajectories, win-rate evaluations, and length-bias ablation figures are reported.',
  },
];

export const portfolios: { role: string; projects: number[] }[] = [
  { role: 'Foundation Model & Architecture Researcher', projects: [1, 2, 9] },
  { role: 'Post-Training & Alignment Researcher', projects: [3, 6, 10] },
  { role: 'Generative Modeling & Diffusion Researcher', projects: [1, 5, 8] },
  { role: 'Mechanistic Interpretability & Safety Researcher', projects: [4, 7, 10] },
];

export const portfolioNote = 'Your research capstone experiments count too. Pair them with two projects that demonstrate diverse scientific competencies.';

export const avoid: { title: string; body: string }[] = [
  {
    title: 'Another ungrounded prompt-engineering demo',
    body: 'Academic research requires formal hypotheses and verifiable empirical metrics, not trial-and-error prompt tweaking.',
  },
  {
    title: 'Unverified benchmark claims',
    body: 'Never report a metric improvement without statistical significance testing, standard deviations, and contamination checks.',
  },
  {
    title: 'Non-reproducible private training runs',
    body: 'Research without public code, random seeds, and reproducible data pipelines is treated with skepticism by the community.',
  },
  {
    title: 'Evaluating without strong baselines',
    body: 'Comparing a novel method against weak, un-tuned baselines invalidates your scientific contribution.',
  },
];

export const projectAnchor = (n: number) => `project-${n}`;

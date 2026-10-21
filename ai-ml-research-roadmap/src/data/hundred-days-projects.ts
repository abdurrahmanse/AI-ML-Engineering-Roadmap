/**
 * Projects — portfolio section of 100 Days of AI/ML Research.
 * Ten rigorous empirical research projects aligned to the updated curriculum.
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
  'Build two or three rigorous empirical research projects that each investigate a distinct hypothesis, meeting top-venue standards (NeurIPS/ICML/ACL).';

export const whyBuild =
  'Research scientists are evaluated on scientific range and reproducibility. These projects demonstrate mathematical formulation, fair baselines, ablation studies, statistical significance, and open-source artifacts.';

export const howToUse: string[] = [
  'Choose two or three projects — not ten shallow demos.',
  'Each project must address a distinct, falsifiable scientific hypothesis.',
  'Align selection with your target research area.',
  'Finish with a LaTeX report and public GitHub + Zenodo artifact.',
];

export const guidelines: string[] = [
  'A clear, falsifiable scientific hypothesis',
  'A strong baseline with equal tuning compute (compute parity)',
  'Controlled ablations isolating each proposed component',
  'Multi-seed (N≥5) results with 95% bootstrap confidence intervals',
  'A public GitHub repo with Dockerized reproduction scripts',
  'Hardware MFU and training compute reported',
  'A LaTeX paper adhering to conference formatting guidelines',
  'Error analysis and failure case taxonomy',
];

export const checklist: string[] = [
  'I can state the scientific hypothesis and contribution in two sentences.',
  'My baseline was tuned with the same compute budget as my proposed method.',
  'My test set has verified statistical power with bootstrap CIs.',
  'My ablations isolate the exact contribution of each component and loss term.',
  'I verified zero test set contamination in my training data.',
  'Results are reproducible via a single Dockerized script or notebook.',
  'I report MFU, total FLOPs, and GPU wall-clock training time.',
  'My report covers methodology, negative results, limitations, and failure cases.',
  'I have a conference-style slide deck for presentation or job talk.',
  'I can answer: Why this baseline? Where does this fail? What at 10× compute?',
];

export const projects: Project[] = [
  {
    number: 1,
    title: 'Self-Supervised Representation Reproduction',
    level: 'Intermediate',
    build:
      'Full reproduction of SimCLR or MAE on an unlabelled benchmark, measuring representation geometry and linear probing transfer.',
    forWho: 'Researchers studying representation learning, pre-training dynamics, and self-supervised encoders.',
    skills: 'Contrastive learning, InfoNCE, data augmentations, linear probing, CKA alignment.',
    buildsOn: [1, 2, 3],
    mustHaves: [
      'Implement projection head and InfoNCE loss from scratch.',
      'Track Wang & Isola alignment and uniformity metrics over training.',
      'Evaluate with frozen linear probes across 5 random seeds.',
      'Compute CKA similarity across intermediate network layers.',
    ],
    stretch: 'Compare contrastive vs non-contrastive (BYOL/SimSiam); test out-of-distribution transfer.',
    data: 'CIFAR-100, TinyImageNet, or MedMNIST domain benchmarks.',
    done: 'Linear probe accuracy curves across 5 seeds with CKA heatmaps are reported.',
  },
  {
    number: 2,
    title: 'Controlled RAG Evaluation Study',
    level: 'Intermediate',
    build:
      'A controlled ablation study of a RAG pipeline separating retrieval quality from generation quality using the RAG Triad.',
    forWho: 'Researchers studying retrieval-augmented generation, evaluation methodology, and hallucination.',
    skills: 'RAG Triad (RAGAS), hybrid retrieval, cross-encoder reranking, LLM-as-judge calibration.',
    buildsOn: [1, 3],
    mustHaves: [
      'Build a hybrid RAG pipeline with BM25 + dense retriever + cross-encoder reranker.',
      'Measure Context Relevance, Faithfulness, and Answer Relevance using RAGAS independently.',
      'Design controlled ablation varying chunking strategy, embedding model, and reranker presence.',
      'Measure LLM-as-judge calibration against human annotators on 50-question calibration set.',
    ],
    stretch: 'Compare vector RAG vs GraphRAG on global sensemaking queries; measure citation accuracy.',
    data: '200+ domain questions with ground-truth passages from an open corpus.',
    done: 'RAG Triad scores per ablation condition with judge calibration Spearman correlation reported.',
  },
  {
    number: 3,
    title: 'Process Reward Model & Tree-Search Reasoning',
    level: 'Advanced',
    build:
      'A step-level Process Reward Model (PRM) guiding Monte Carlo Tree Search decoding on math reasoning benchmarks.',
    forWho: 'Researchers working on reasoning frontiers, test-time compute scaling, and verifiable generation.',
    skills: 'Process supervision, reward modeling, MCTS, Best-of-N, reasoning verifiers.',
    buildsOn: [1, 2, 5],
    mustHaves: [
      'Build a step-delimited dataset with binary step-level correctness annotations.',
      'Train a PRM and compare step-score calibration against an Outcome Reward Model.',
      'Implement MCTS tree search and Best-of-N guided by the PRM.',
      'Plot test-time compute scaling curves (accuracy vs tokens generated).',
    ],
    stretch: 'Integrate Python execution verifiers; distill search traces into a smaller student model.',
    data: 'GSM8K, MATH, or synthetic multi-step algorithmic reasoning datasets.',
    done: 'Accuracy vs test-time compute Pareto frontiers comparing greedy, Best-of-N, and MCTS reported.',
  },
  {
    number: 4,
    title: 'Mechanistic Interpretability Circuit Study',
    level: 'Intermediate–Advanced',
    build:
      'Mechanistic analysis isolating and ablating attention circuits and induction heads in an open-weight LLM.',
    forWho: 'Alignment and interpretability researchers investigating causal circuits and monosemantic features.',
    skills: 'Mechanistic interpretability, activation patching, QK/OV decomposition, SAEs.',
    buildsOn: [2, 5],
    mustHaves: [
      'Locate induction heads using prefix-repetition copy scores and attention pattern analysis.',
      'Perform causal activation patching to prove which heads write to target subspaces.',
      'Extract concept steering vectors and demonstrate targeted behavior suppression or elevation.',
      'Analyze polysemanticity with a Sparse Autoencoder (SAE) on MLP activations.',
    ],
    stretch: 'Map the full IOI circuit; evaluate steering vector transfer across model scales.',
    data: 'Synthetic linguistic probe datasets and open-weight model checkpoints (Llama-3, Gemma-2).',
    done: 'Attribution patching heatmaps, circuit connectivity graphs, and steering evaluations reported.',
  },
  {
    number: 5,
    title: 'Optimal Transport Flow Matching',
    level: 'Advanced',
    build:
      'Continuous-time Flow Matching generative model with straight-line OT trajectories from mathematical first principles.',
    forWho: 'Generative modeling researchers working on diffusion, continuous SDEs, and flow matching.',
    skills: 'Flow matching, optimal transport, ODE solvers, Classifier-Free Guidance.',
    buildsOn: [1, 2, 4],
    mustHaves: [
      'Derive and implement the OT target velocity u_t(x_1|x_0) = x_1 − x_0.',
      'Train a velocity network without ODE simulation via simple regression loss.',
      'Implement Euler, Midpoint, and RK4 ODE samplers with CFG.',
      'Evaluate FID and generation speed across step budgets (4 to 50 steps).',
    ],
    stretch: 'Compare straight OT paths against DDPM probability flow ODE paths; measure trajectory curvature.',
    data: '2D synthetic distributions or image datasets (MNIST, CIFAR-10).',
    done: 'Trajectory curvature, step-budget FID curves, and generation samples reported.',
  },
  {
    number: 6,
    title: 'LLM In-Context Learning & Hallucination Study',
    level: 'Intermediate',
    build:
      'Controlled study isolating what ICL examples teach LLMs, and measuring domain hallucination rates with statistical rigor.',
    forWho: 'Researchers studying LLM generalization, evaluation methodology, and hallucination measurement.',
    skills: 'ICL experimental design, hallucination auditing, McNemar tests, bootstrap CIs.',
    buildsOn: [1, 4],
    mustHaves: [
      'Run 4-condition ICL experiment (correct labels, wrong labels, no labels, no examples) on 500 test cases.',
      'Compute McNemar significance tests comparing all condition pairs.',
      'Measure hallucination rate in a specific domain as fraction of unverifiable claims.',
      'Report 95% bootstrap CIs for all accuracy and hallucination rate measurements.',
    ],
    stretch: 'Apply Carlini prefix-probing to detect memorization; test ICL under distribution shift.',
    data: 'Open domain classification dataset + domain corpus for hallucination audit.',
    done: 'ICL condition accuracy table with significance tests and hallucination rate CI reported.',
  },
  {
    number: 7,
    title: 'LoRA Spectral Dynamics & Catastrophic Forgetting',
    level: 'Intermediate',
    build:
      'Theoretical and empirical study of singular value decay, subspace drift, and catastrophic forgetting during LoRA vs full fine-tuning.',
    forWho: 'Researchers studying parameter-efficient adaptation, intrinsic dimensionality, and continual learning.',
    skills: 'SVD, spectral analysis, Grassmannian distance, catastrophic forgetting, CKA drift.',
    buildsOn: [1, 2, 6],
    mustHaves: [
      'Compute SVD of weight updates ΔW across adaptation ranks r.',
      'Measure principal angle alignment between LoRA subspaces and full fine-tuning update matrices.',
      'Evaluate general-domain benchmark retention before and after task adaptation.',
      'Compute CKA across layers to map depth-wise representation shift.',
    ],
    stretch: 'Implement Task Vector arithmetic; evaluate multi-task model merging via TIES-Merging and DARE.',
    data: 'Domain specialization benchmarks (scientific QA, legal, medical classification).',
    done: 'Singular value spectra, CKA drift heatmaps, and general-domain retention curves reported.',
  },
  {
    number: 8,
    title: 'AI Safety Red Team Study',
    level: 'Intermediate–Advanced',
    build:
      'A pre-registered red team study measuring jailbreak attack success rates and defense effectiveness on an open aligned model.',
    forWho: 'AI safety and security researchers studying alignment failure modes and adversarial evaluation.',
    skills: 'Red teaming, attack taxonomy design, McNemar tests, responsible disclosure, adversarial evaluation.',
    buildsOn: [5, 6],
    mustHaves: [
      'Pre-register: 3 attack categories × 20 test cases; define success threshold before running experiments.',
      'Measure attack success rate per category with 95% CI; compare across categories using McNemar test.',
      'Test one defensive system prompt; measure reduction in attack success rate vs false positive rate.',
      'Write a 3-page responsible disclosure report documenting findings and recommended defenses.',
    ],
    stretch: 'Test transfer across 2 open models; measure whether defenses generalize across attack categories.',
    data: 'Open aligned model (Llama-3-8B-Instruct, Mistral-Instruct, or Gemma-Instruct).',
    done: 'Attack success rates with CIs, defense effectiveness table, and responsible disclosure report.',
  },
  {
    number: 9,
    title: 'Distributed Training & MFU Profiler',
    level: 'Advanced',
    build:
      'Distributed training pipeline scaling a multi-billion parameter model across GPUs with PyTorch FSDP, profiled for MFU.',
    forWho: 'Systems researchers working on large-scale distributed training, 3D parallelism, and memory efficiency.',
    skills: 'FSDP, activation checkpointing, Ring All-Reduce, PyTorch Profiler, MFU calculation.',
    buildsOn: [2, 6],
    mustHaves: [
      'Implement FSDP with custom Transformer layer wrapping and BF16 mixed precision.',
      'Integrate backward activation checkpointing; implement fault-tolerant checkpointing.',
      'Calculate theoretical peak FLOPs and measure empirical MFU across batch sizes.',
      'Profile communication vs computation overlap using PyTorch Profiler traces.',
    ],
    stretch: 'Implement manual 2-GPU Tensor Parallelism; evaluate CPU offloading overhead vs FSDP.',
    data: 'Pre-training text tokens and synthetic transformer workload benchmarks.',
    done: 'MFU benchmark tables, scaling efficiency curves, and Profiler timeline traces reported.',
  },
  {
    number: 10,
    title: 'DPO vs PPO Alignment Comparison',
    level: 'Advanced',
    build:
      'Comparative study of training stability, reward overoptimization, and KL divergence in DPO versus PPO alignment.',
    forWho: 'Alignment researchers studying post-training preference tuning, safety bounds, and RL stability.',
    skills: 'DPO, RLHF/PPO, Bradley-Terry loss, reward hacking, KL drift tracking, alignment tax.',
    buildsOn: [2, 5],
    mustHaves: [
      'Derive and implement DPO loss with reference policy regularization from scratch.',
      'Train on a preference dataset (UltraFeedback or Anthropic HH-RLHF).',
      'Track implicit reward margin, KL divergence from reference, and generation length over training.',
      'Measure alignment tax: benchmark the aligned model vs base on MMLU and domain tasks.',
    ],
    stretch: 'Compare DPO vs IPO and KTO; analyze sensitivity to reference policy temperature.',
    data: 'Preference datasets (Anthropic HH-RLHF, UltraFeedback, Open SHP).',
    done: 'Implicit reward curves, win-rate evaluations, alignment tax metrics, and KL drift plots reported.',
  },
];

export const portfolios: { role: string; projects: number[] }[] = [
  { role: 'Foundation Model & Architecture Researcher', projects: [1, 7, 9] },
  { role: 'Post-Training & Alignment Researcher', projects: [3, 8, 10] },
  { role: 'Generative Modeling & Diffusion Researcher', projects: [1, 5, 6] },
  { role: 'Mechanistic Interpretability & Safety Researcher', projects: [4, 8, 10] },
  { role: 'Evaluation & RAG Research Scientist', projects: [2, 6, 7] },
];

export const portfolioNote = 'Your capstone experiments from the 100-day curriculum count too. Pair them with two projects demonstrating distinct scientific competencies.';

export const avoid: { title: string; body: string }[] = [
  {
    title: 'Ungrounded prompt-engineering demos',
    body: 'Research requires formal falsifiable hypotheses and verifiable empirical metrics — not trial-and-error prompt tweaking.',
  },
  {
    title: 'Unverified benchmark claims',
    body: 'Never report a metric improvement without statistical significance tests, standard deviations, and contamination checks.',
  },
  {
    title: 'Non-reproducible private training runs',
    body: 'Research without public code, random seeds, and reproducible pipelines is treated with skepticism by the community.',
  },
  {
    title: 'Evaluating without compute-parity baselines',
    body: 'Comparing a tuned novel method against an un-tuned baseline invalidates the scientific contribution entirely.',
  },
];

export const projectAnchor = (n: number) => `project-${n}`;

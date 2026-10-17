/**
 * How much each level matters, scored out of 10 with a reason, from two angles:
 * research interviews (PhD / Research Scientist screening) and day-to-day lab work.
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
      'Research labs evaluate your **scientific hygiene and reproducibility**: managing remote Linux compute servers, containerized environments, deterministic hardware seeds, and experiment tracking with W&B.',
  },
  1: {
    score: 9,
    reason:
      'Distinguishes a true researcher from a coder: **critically deconstructing literature, identifying genuine research gaps, and formulating falsifiable Research Questions (RQs)**.',
  },
  2: {
    score: 10,
    reason:
      'Top research screening aggressively tests **applied mathematics and statistical hypothesis testing**: SVD, matrix calculus for autograd, non-parametric tests (Wilcoxon), and bootstrap confidence intervals.',
  },
  3: {
    score: 10,
    reason:
      'A core differentiator in research defense: **controlled experimental design, multi-factor ablation matrices, compute-matched baselines, and eliminating data leakage**.',
  },
  4: {
    score: 9,
    reason:
      'Evaluates research engineering excellence: **custom autograd operators, numerical stability (BF16/FP16), loss surgery, and GPU memory snapshot profiling** in PyTorch and JAX.',
  },
  5: {
    score: 9,
    reason:
      'The foundational core of modern AI modeling: **multi-head attention derivations, RoPE rotational geometry, State Space Models (Mamba), and self-supervised InfoNCE representation learning**.',
  },
  6: {
    score: 9,
    reason:
      'Crucial for generative AI researchers: **variational inference (ELBO), continuous-time score-based diffusion (SDEs/ODEs), Optimal Transport Flow Matching, and FID distribution evaluation**.',
  },
  7: {
    score: 10,
    reason:
      'The frontier of post-training and reasoning research: **Bellman optimality, PPO policy optimization, Tree-of-Thoughts, guided MCTS search, and Process Reward Models (PRMs)**.',
  },
  8: {
    score: 9,
    reason:
      'Essential for evaluation science: **construct validity, inter-annotator agreement (Krippendorff’s alpha), suffix-array contamination auditing, and calibrated LLM-as-a-judge pipelines**.',
  },
  9: {
    score: 9,
    reason:
      'Critical for large-scale research: **operating on SLURM supercomputing clusters, NCCL Ring All-Reduce, multi-node FSDP, 3D Parallelism, and Model FLOPs Utilization (MFU)**.',
  },
  10: {
    score: 9,
    reason:
      'Directs multi-million dollar compute budgets: **Kaplan vs Chinchilla power-law scaling regressions, loss spike diagnostics (QK-Norm), and data mixture annealing**.',
  },
  11: {
    score: 8,
    reason:
      'Highly valued in frontier AI safety and interpretability labs: **linear representation probing, circuit discovery (induction heads), Sparse Autoencoders (SAEs), and activation steering**.',
  },
  12: {
    score: 9,
    reason:
      'Core to foundation model alignment: **Bradley-Terry preference theory, DPO derivations, reward over-optimization, GCG adversarial jailbreaks, and algorithmic fairness audits**.',
  },
  13: {
    score: 8,
    reason:
      'Cross-disciplinary frontiers: **cross-modal contrastive alignment (SigLIP), vision-language projectors (LLaVA), AlphaFold/ESM structural biology, and Physics-Informed ML (PINNs)**.',
  },
  14: {
    score: 10,
    reason:
      'The **single biggest factor in landing top research positions**: delivering **end-to-end conference-grade projects with rigorous ablations, verified codebases, and preprints**.',
  },
  15: {
    score: 10,
    reason:
      'Directly mirrors the **research job talk, thesis defense, and OpenReview rebuttal**: presenting research vision, disarming skeptical reviewers, and drafting competitive grant proposals.',
  },
};

/** How much the level matters in day-to-day AI/ML research lab work. */
export const jobWeights: Record<number, LevelWeight> = {
  0: {
    score: 10,
    reason:
      'Daily lab survival requires **flawless remote server management, automated tracking, and reproducible virtual environments**; without them, experiments become untraceable.',
  },
  1: {
    score: 9,
    reason:
      'Prevents wasting months on solved problems: **rapidly surveying literature, tracking daily ArXiv preprints, and isolating genuine scientific gaps** is the daily habit of productive researchers.',
  },
  2: {
    score: 9,
    reason:
      'Underpins every paper submission: **proving statistical significance and computing effect sizes** ensures your published findings are solid and unassailable.',
  },
  3: {
    score: 10,
    reason:
      'The bedrock of sound science: **designing rigorous ablation studies and fair baseline comparisons** is what transforms speculative ideas into accepted papers.',
  },
  4: {
    score: 10,
    reason:
      'Daily research execution: **implementing custom PyTorch/JAX modules, stabilizing mixed-precision gradients, and eliminating memory bottlenecks** is what research scientists do every day.',
  },
  5: {
    score: 9,
    reason:
      'Designing and modifying architectures: **adapting attention blocks, experimenting with state space recurrences, and probing latent representations** drives core lab innovation.',
  },
  6: {
    score: 9,
    reason:
      'Generative modeling is the foundation of modern media, scientific simulations, and physical policies: **training flow matching and diffusion models** is central to modern labs.',
  },
  7: {
    score: 10,
    reason:
      'Frontier foundation model labs focus intensively on **test-time compute scaling, step-level process supervision, and guided tree-search algorithms**.',
  },
  8: {
    score: 10,
    reason:
      'Without rigorous measurement, research is blind: **curating pristine benchmarks, eliminating contamination, and calibrating evaluations** ensures real progress.',
  },
  9: {
    score: 10,
    reason:
      'Running large experiments on shared supercomputers requires **SLURM scheduling mastery, FSDP memory sharding, and maximizing MFU** to get the most from hardware.',
  },
  10: {
    score: 9,
    reason:
      'Guides experimental planning: **extrapolating scaling laws and preventing loss spikes** saves tens of thousands of GPU hours during large-scale pre-training runs.',
  },
  11: {
    score: 8,
    reason:
      'Understanding what models actually learn: **tracing causal circuits, probing representations, and steering activations** provides deep insights into neural behavior.',
  },
  12: {
    score: 9,
    reason:
      'Ensuring model safety and compliance: **tuning preferences with DPO, red-teaming against jailbreaks, and auditing for fairness** is mandatory before any public deployment.',
  },
  13: {
    score: 8,
    reason:
      'Pioneering interdisciplinary breakthroughs: **bridging machine learning with structural biology, chemistry, and physics** represents the highest-impact frontier of AI.',
  },
  14: {
    score: 9,
    reason:
      'Executing comprehensive research studies from hypothesis to publication **is the primary measure of a research scientist’s productivity and impact**.',
  },
  15: {
    score: 10,
    reason:
      'Writing accepted conference papers, **defending against tough reviewer critiques, winning grant funding, and directing research directions** defines scientific leadership.',
  },
};

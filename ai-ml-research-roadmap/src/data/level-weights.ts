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
      'Research labs evaluate your **scientific hygiene and reproducibility**: managing remote Linux compute servers, containerized environments, deterministic hardware seeds, and experiment tracking with W&B.',
  },
  1: {
    score: 9,
    reason:
      'The definitive prerequisite for joining a research team: **deconstructing laboratory publications, formulating research pitches, passing RA technical screening, and onboarding into an active lab**.',
  },
  2: {
    score: 9,
    reason:
      'Distinguishes an independent researcher from a coder: **navigating major bibliographic databases (ArXiv, IEEE, ACM, PubMed), Keshav 3-pass paper reading, and Zotero reference management**.',
  },
  3: {
    score: 10,
    reason:
      'Top research screening aggressively tests **applied mathematics and statistical hypothesis testing**: SVD, matrix calculus for autograd, non-parametric tests (Wilcoxon), and bootstrap confidence intervals.',
  },
  4: {
    score: 9,
    reason:
      'Essential for real-world research credibility: **curating domain datasets (MIMIC-IV, CheXpert, CIC-IDS-2017, Ember), handling extreme class imbalance, and eliminating patient-level and temporal data leakage**.',
  },
  5: {
    score: 9,
    reason:
      'Proves methodological maturity across paradigms: **systematically evaluating tree ensembles (XGBoost/LightGBM) against deep tabular models (TabNet), and training 2D/3D CNNs for medical scans**.',
  },
  6: {
    score: 9,
    reason:
      'Core representation learning mastery: **deriving multi-head attention, applying Graph Neural Networks (GCN/GAT) to cybersecurity threat topologies and molecules, and linear State Space Models (Mamba)**.',
  },
  7: {
    score: 9,
    reason:
      'Crucial for modern generative AI and simulation: **variational inference (ELBO), score-based diffusion (SDEs/ODEs), Continuous Flow Matching (OT-CFM), and privacy-preserving data synthesis**.',
  },
  8: {
    score: 10,
    reason:
      'A core differentiator in paper reviews and defense: **designing multi-factor ablation studies (OFAT), compute-matched baselines, decontaminating evaluation sets, and fair hyperparameter sweeps**.',
  },
  9: {
    score: 9,
    reason:
      'Critical for large-scale research execution: **navigating SLURM supercomputing clusters, multi-node PyTorch FSDP, DeepSpeed ZeRO-3, and profiling Model FLOPs Utilization (MFU)**.',
  },
  10: {
    score: 9,
    reason:
      'Directs high-impact foundation model research: **Kaplan and Chinchilla scaling laws, pre-training loss stability (QK-Norm, z-loss), and Domain-Adaptive Pre-Training (DAPT) for medicine and cybersecurity**.',
  },
  11: {
    score: 9,
    reason:
      'Mandatory for high-stakes deployment and regulatory standards (FDA AI): **axiomatic feature attribution (SHAP, Integrated Gradients), linear probing, circuit activation patching, and Sparse Autoencoders (SAEs)**.',
  },
  12: {
    score: 9,
    reason:
      'The frontier of safety and robustness: **white-box adversarial attacks (PGD), problem-space malware evasion, preference alignment (DPO/RLHF), and auditing algorithmic fairness across demographic subgroups**.',
  },
  13: {
    score: 9,
    reason:
      'High-impact cross-disciplinary frontiers: **contrastive vision-language pre-training (CLIP, SigLIP), multimodal medical decoders (LLaVA-Med), and fusing raw network telemetry with threat intelligence**.',
  },
  14: {
    score: 10,
    reason:
      'The **single biggest factor in landing top research positions and defending theses**: delivering **end-to-end conference-grade projects with rigorous ablations, verified codebases, and preprints**.',
  },
  15: {
    score: 10,
    reason:
      'Directly mirrors the **research job talk, thesis defense, and OpenReview rebuttal**: publishing in top journals (IEEE TPAMI, JMLR, Nature, Lancet, IEEE TIFS) and conferences (NeurIPS, ICML, CVPR, USENIX Security).',
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
    score: 10,
    reason:
      'The gateway to productive research: **securing laboratory funding, establishing clear scientific mentorship, and executing collaborative research workflows**.',
  },
  2: {
    score: 9,
    reason:
      'Prevents wasting months on solved problems: **rapidly surveying literature across IEEE, ACM, and PubMed, tracking daily ArXiv preprints, and isolating genuine scientific gaps** is a daily habit.',
  },
  3: {
    score: 10,
    reason:
      'Underpins every paper submission: **proving statistical significance and computing effect sizes (Cohen\'s d, bootstrap CIs)** ensures your published findings are solid and unassailable.',
  },
  4: {
    score: 10,
    reason:
      'Real research begins with pristine data: **ingesting complex clinical and cybersecurity datasets, preventing identity leakage, and authoring formal Datasheets for Datasets**.',
  },
  5: {
    score: 9,
    reason:
      'Selecting the right tool for the scientific question: **benchmarking tree ensembles against deep neural networks and training 3D medical segmentation models** drives empirical discovery.',
  },
  6: {
    score: 9,
    reason:
      'Designing and modifying architectures: **adapting attention blocks, experimenting with graph message passing for threat topologies, and testing linear state space models**.',
  },
  7: {
    score: 9,
    reason:
      'Generative modeling is the foundation of data synthesis, medical imaging, and threat simulation: **training flow matching and diffusion models** is central to modern labs.',
  },
  8: {
    score: 10,
    reason:
      'The bedrock of sound science: **designing rigorous ablation studies and fair baseline comparisons** is what transforms speculative ideas into accepted papers.',
  },
  9: {
    score: 10,
    reason:
      'Running large experiments on shared supercomputers requires **SLURM scheduling mastery, FSDP memory sharding, and maximizing MFU** to get the most from hardware allocations.',
  },
  10: {
    score: 9,
    reason:
      'Guides experimental planning: **extrapolating scaling laws, stabilizing pre-training loss spikes, and fine-tuning domain foundation models with QLoRA/DoRA** saves thousands of GPU hours.',
  },
  11: {
    score: 9,
    reason:
      'Understanding what models actually learn: **tracing causal circuits, probing representations, and extracting monosemantic concepts with SAEs** satisfies rigorous peer review.',
  },
  12: {
    score: 9,
    reason:
      'Ensuring model safety and compliance: **tuning preferences with DPO, defending against adversarial evasion in malware, and auditing for demographic parity** is mandatory before deployment.',
  },
  13: {
    score: 9,
    reason:
      'Pioneering interdisciplinary breakthroughs: **bridging machine learning with clinical healthcare, radiology, and cybersecurity threat intelligence** represents the highest-impact frontier of AI.',
  },
  14: {
    score: 10,
    reason:
      'Executing comprehensive research studies from hypothesis to publication **is the primary measure of a research scientist’s productivity and doctoral dissertation completion**.',
  },
  15: {
    score: 10,
    reason:
      'Writing accepted conference and journal papers, **defending against tough reviewer critiques, winning grant funding, and directing research directions** defines scientific leadership.',
  },
};

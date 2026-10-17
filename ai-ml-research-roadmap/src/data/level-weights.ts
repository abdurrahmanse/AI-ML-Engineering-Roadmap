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
    score: 10,
    reason:
      'Top research labs (DeepMind, FAIR, OpenAI, top universities) **screen aggressively on linear algebra, multivariable calculus, and probability**. If you cannot derive gradients, handle SVD, or compute expectations on a whiteboard, **you will not pass research screening**.',
  },
  1: {
    score: 9,
    reason:
      'Foundational ML theory is a **core pillar of research scientist interviews**. Expect rigorous questions on PAC learnability, bias-variance trade-offs, VC dimension, and convex optimization duality.',
  },
  2: {
    score: 9,
    reason:
      'Top research rounds dive deeply into **optimization geometry and generalization**: AdamW vs SGD dynamics, Hessian spectrum, flat vs sharp minima, and double descent.',
  },
  3: {
    score: 10,
    reason:
      'The **most interrogated architectural topic in modern AI research**. Expect whiteboard derivations of scaled dot-product attention, RoPE mechanics, and FlashAttention IO complexity.',
  },
  4: {
    score: 8,
    reason:
      'Self-supervised learning and representation geometry are **major research evaluation topics**: contrastive loss (InfoNCE), collapse avoidance, and metric spaces (ArcFace, CKA).',
  },
  5: {
    score: 9,
    reason:
      'Reinforcement learning is **vital for modern foundation model alignment and reasoning research**. Interviewers probe Bellman optimality, policy gradients, and PPO mechanics.',
  },
  6: {
    score: 10,
    reason:
      'The **hottest frontier in AI research today**. Expect rigorous questions on process reward models (PRMs), tree search, test-time compute scaling laws, and self-correction bounds.',
  },
  7: {
    score: 9,
    reason:
      'Distinguishes rigorous research scientists from casual practitioners: **statistical hypothesis testing, bootstrap confidence intervals, and benchmark contamination**.',
  },
  8: {
    score: 8,
    reason:
      'Research labs increasingly emphasize **mechanistic interpretability, circuits, and preference theory (DPO/KTO)**. Knowing how to steer models and identify induction heads sets you apart.',
  },
  9: {
    score: 9,
    reason:
      'Crucial for research scientists working on foundation models. Expect questions on **Kaplan vs Chinchilla scaling laws, compute-optimal allocation, and loss spike mitigation**.',
  },
  10: {
    score: 8,
    reason:
      'Essential for large-scale research: **Megatron tensor parallelism, ZeRO/FSDP memory sharding, and Ring All-Reduce communication**.',
  },
  11: {
    score: 9,
    reason:
      'Mathematical questions on **continuous SDEs, score matching, probability flow ODEs, and flow matching** are standard in generative AI research interviews.',
  },
  12: {
    score: 8,
    reason:
      'Perceptual research questions on **contrastive vision-language alignment (SigLIP), ViT tokenization, and cross-attention adapters**.',
  },
  13: {
    score: 8,
    reason:
      'Interviewers test your theoretical grasp of **LoRA singular value spectra, intrinsic dimensionality, and catastrophic forgetting mitigation (EWC)**.',
  },
  14: {
    score: 10,
    reason:
      'The **single biggest factor in landing research positions**. Top labs evaluate you on your **reproducible research code, ablation rigor, and published preprints**.',
  },
  15: {
    score: 10,
    reason:
      'Directly mirrors the **research job talk and defense**. Defending experimental choices, answering hostile reviewer critiques, and presenting your research vision.',
  },
};

/** How much the level matters in day-to-day AI/ML research lab work. */
export const jobWeights: Record<number, LevelWeight> = {
  0: {
    score: 10,
    reason:
      'The mathematical bedrock **underpins every theoretical derivation and paper you read or write**. Every novel loss function or architecture begins with linear algebra and multivariable calculus.',
  },
  1: {
    score: 8,
    reason:
      'Provides the **formal language of generalization**. Helps you rigorously assess whether an empirical improvement is theoretically justified or an artifact of overfitting.',
  },
  2: {
    score: 10,
    reason:
      'Understanding loss surfaces and optimization is **essential for stabilizing deep training runs**. When large models diverge or plateau, optimization theory tells you what to adjust.',
  },
  3: {
    score: 10,
    reason:
      'Transformers form the **foundation of modern foundation models**. Modifying attention blocks, caching KV states, and understanding sub-quadratic alternatives is daily research work.',
  },
  4: {
    score: 9,
    reason:
      'High-quality representations are the **currency of pre-training and zero-shot transfer**. Knowing how to probe and align latent spaces determines success across modalities.',
  },
  5: {
    score: 9,
    reason:
      'From post-training alignment (RLHF/RLVR) to autonomous reasoning agents, **sequential decision theory governs frontier model optimization**.',
  },
  6: {
    score: 10,
    reason:
      'Pioneering the shift from pure pre-training scale to **inference-time deliberative compute (System 2 reasoning)** is the core focus of frontier foundation model labs.',
  },
  7: {
    score: 10,
    reason:
      'Without scientific measurement, **machine learning research is blind**. Ensuring unpolluted benchmarks and statistical significance prevents publishing false empirical claims.',
  },
  8: {
    score: 9,
    reason:
      'Fundamental to understanding what large models learn and **ensuring safe, reliable, and steerable AI systems** before frontier deployment.',
  },
  9: {
    score: 10,
    reason:
      'Directs **multi-million dollar compute budgets**. Knowing power-law scaling coefficients ensures optimal parameter-to-token trade-offs.',
  },
  10: {
    score: 9,
    reason:
      'Training frontier models requires **maximizing Model FLOPs Utilization (MFU)** and avoiding out-of-memory bottlenecks across GPU clusters.',
  },
  11: {
    score: 9,
    reason:
      'Flow matching and diffusion have **revolutionized generative media, scientific simulation, and robotics policies**.',
  },
  12: {
    score: 9,
    reason:
      'Foundation models are intrinsically multimodal. **Bridging vision, audio, and language representations** is central to current lab roadmaps.',
  },
  13: {
    score: 8,
    reason:
      'Rapidly specializing foundation models and merging task vectors **enables fast experimental iteration without retraining from scratch**.',
  },
  14: {
    score: 8,
    reason:
      'Proven ability to take a research hypothesis from conception through controlled ablations to a published artifact **is the definition of the job**.',
  },
  15: {
    score: 9,
    reason:
      'Writing accepted papers, conducting constructive peer reviews, and **directing a multi-year research program** determines your scientific trajectory.',
  },
};

/**
 * Interview Prep — 100 questions for AI/ML Research interviews.
 * Covers math, deep learning, representations, generative models,
 * reasoning & alignment, AI safety, and empirical research methodology.
 */

export const INTERVIEW_HREF = '/100-days/interview-prep/';

export type QuestionType = 'Concept' | 'Scenario' | 'Debugging' | 'Design' | 'Defense';

export interface Question {
  number: number;
  type: QuestionType;
  question: string;
  /** What a strong answer covers. */
  answer: string;
}

export interface QuestionGroup {
  title: string;
  /** The 100 Days module this group matches, if any. */
  module?: number;
  intro?: string;
  questions: Question[];
}

export const interviewSummary =
  '100 questions AI/ML research interviews keep returning to — from math foundations and transformer internals to generative models, alignment, AI safety methodology, and research paper defense.';

export const questionTypes: { type: QuestionType; meaning: string }[] = [
  { type: 'Concept', meaning: 'explain the mathematical formulation, theorem, or mechanism.' },
  { type: 'Scenario', meaning: 'design an experiment, formulate a hypothesis, or evaluate a research claim.' },
  { type: 'Debugging', meaning: 'diagnose loss spikes, optimization divergence, or gradient collapse.' },
  { type: 'Design', meaning: 'design an architecture, pre-training curriculum, or evaluation protocol.' },
  { type: 'Defense', meaning: 'defend experimental choices, baselines, and trade-offs under skeptical critique.' },
];

type Row = [QuestionType, string, string];

function group(title: string, start: number, rows: Row[], extra: Partial<QuestionGroup> = {}): QuestionGroup {
  return {
    title,
    ...extra,
    questions: rows.map(([type, question, answer], i) => ({ number: start + i, type, question, answer })),
  };
}

export const questionGroups: QuestionGroup[] = [
  group('Math, Probability & Statistical Learning', 1, [
    ['Concept', 'What is SVD and why is it central to deep learning theory?', 'SVD factors any real matrix into orthogonal U, V and diagonal Σ; Eckart-Young-Mirsky proves truncated SVD gives the optimal low-rank approximation; it underpins LoRA rank analysis, embedding compression, and Hessian spectrum studies.'],
    ['Concept', 'Derive the multivariate chain rule in tensor notation.', 'Chain rule contracts the Jacobian of the outer operation with the Jacobian of the inner operation; summation indices ensure correct partial derivative accumulation along computational paths.'],
    ['Concept', 'What is the difference between forward-mode and reverse-mode automatic differentiation?', 'Forward-mode tracks derivatives alongside forward evaluation (useful when input dim << output dim); reverse-mode stores intermediate activations then traverses backward — essential for deep learning where scalar loss depends on millions of parameters.'],
    ['Concept', 'Why is cross-entropy loss equivalent to minimizing KL divergence?', 'H(p, q) = H(p) + D_KL(p‖q); because the true distribution p is fixed during training, minimizing cross-entropy is mathematically identical to minimizing KL divergence to the model distribution.'],
    ['Concept', 'Explain mode-covering vs mode-seeking behavior in KL divergence.', 'Forward KL D_KL(p‖q) forces q to spread over all modes of p (mode-covering); reverse KL D_KL(q‖p) drives q to collapse into one dominant mode (mode-seeking) — crucial for VAEs and RL.'],
    ['Concept', 'What is ERM and why is inductive bias necessary?', 'Empirical Risk Minimization minimizes training loss as a proxy for true risk; without inductive bias, No Free Lunch theorems prove no algorithm can generalize to unseen samples.'],
    ['Concept', 'What does the PAC learning framework bound?', 'PAC bounds the number of training samples N to ensure generalization error ≤ ε with probability ≥ 1−δ; for finite hypothesis classes, N ≥ (1/ε)(log|H| + log(1/δ)).'],
    ['Concept', 'Define VC dimension. Give an example with infinite VC dimension despite one parameter.', 'VC dimension is the maximum cardinality of a point set that can be shattered by hypothesis class H; sin(ωx) has infinite VC dimension despite having only one scalar parameter ω.'],
    ['Concept', 'What are the KKT conditions for constrained optimization?', 'Necessary first-order conditions: primal feasibility, dual feasibility, complementary slackness λ_i·g_i(x)=0, and stationarity (∇Lagrangian=0); sufficient under convexity and Slater qualification.'],
    ['Scenario', 'A reviewer claims your empirical improvement is a statistical fluke. How do you prove them wrong?', 'Resample with non-parametric bootstrap over 10,000 replicates; construct 95% CIs; perform paired Wilcoxon signed-rank test with Benjamini-Hochberg FDR correction across benchmark tasks.'],
    ['Scenario', 'An optimization run shows severe numerical underflow during Softmax evaluation. How do you fix it?', 'Apply LogSumExp: subtract x_max = max(x_i) from all logits before exponentiating; mathematically preserves the output distribution while keeping all exponentials in [0, 1].'],
    ['Concept', 'How do LLMs and coding agents fit into responsible research workflows?', 'LLMs accelerate literature mapping, hypothesis brainstorming, and code scaffolding, but every generated citation must be verified against Semantic Scholar/Google Scholar, and AI-generated code must be treated as a first draft requiring review.'],
  ], { module: 1 }),

  group('Deep Learning Mechanics & Transformer Internals', 13, [
    ['Concept', 'State the Universal Approximation Theorem and the depth vs width trade-off.', 'Cybenko/Hornik proved a single hidden layer can approximate any continuous function on compact sets; depth yields exponential increases in linear regions, separating complex manifolds with exponentially fewer parameters.'],
    ['Concept', 'Why do flat minima generalize better, and how does SAM enforce this?', 'Flat minima have smaller Hessian spectral norms, so small parameter shifts cause minimal test loss increases; SAM optimizes a minimax objective explicitly penalizing worst-case local perturbations.'],
    ['Concept', 'Why is L2 regularization not equivalent to weight decay in Adam?', 'In Adam with L2 penalty, regularization gradients are divided by the moving average of squared gradients, shrinking large-gradient params less; AdamW decouples weight decay by subtracting λ·θ directly, restoring true exponential decay.'],
    ['Concept', 'Derive the Kaiming (He) initialization variance condition.', 'With ReLU (zeroing half the distribution), weights must have Var(w) = 2/n_in to preserve signal variance across layers.'],
    ['Concept', 'Explain the Double Descent phenomenon.', 'Belkin et al. showed test risk peaks near the interpolation threshold, then decreases monotonically as overparameterization enables minimum-norm implicit regularization to select smooth interpolating solutions.'],
    ['Concept', 'Why does Transformer self-attention scale by 1/√d_k?', 'If Q and K have unit variance, their dot product has variance d_k; without scaling, large embeddings push Softmax into saturated regions with near-zero gradients.'],
    ['Concept', 'Explain RoPE mathematically.', 'RoPE rotates 2D query/key slices by angle proportional to position m: R_m·q; since R_m^T·R_n = R_{n-m}, the dot product depends solely on relative displacement (m−n), encoding relative position with linear mechanics.'],
    ['Concept', 'Why is standard attention memory-bandwidth bound, and how does FlashAttention fix it?', 'Standard attention materializes N×N into slow HBM; FlashAttention tiles in fast SRAM using online softmax, computing exact output without ever writing the N×N matrix to HBM.'],
    ['Concept', 'What is Grouped-Query Attention and why does it speed up decoding?', 'GQA shares single K/V heads across groups of Q heads; this reduces KV cache size by the grouping factor, cutting memory bandwidth bottlenecks during autoregressive generation.'],
    ['Concept', 'Explain how Mamba achieves linear time complexity.', 'Mamba discretizes continuous-time state space equations into a recurrent form O(1) for inference and a parallel associative scan O(N) for training, with hardware-aware kernel fusion.'],
    ['Concept', 'How do scaling laws connect to transformer math?', 'Attention FLOPs scale as O(N·d·T²); total training FLOPs ≈ 6ND; Chinchilla shows optimal N and D scale equally — this links directly to the attention matrix size and embedding dimension choices.'],
    ['Debugging', 'A 50-layer Transformer shows NaN losses 10,000 steps into training. What do you check?', 'Inspect attention logit explosion (apply QK-Norm or clipping), FP16 dynamic loss scaling underflow (switch to BF16), or learning rate spikes (add cosine warmup or WSD schedule).'],
    ['Scenario', 'How would you test whether a model uses in-context learning or task memorization?', 'Evaluate on inverted input-label mappings; ICL models adapt to inverted mappings, memorization models continue predicting canonical pre-training labels regardless.'],
  ], { module: 2 }),

  group('Representations, Retrieval & RAG Research', 26, [
    ['Concept', 'State the Manifold Hypothesis and its implications.', 'Real-world high-dim data concentrates near lower-dimensional non-linear sub-manifolds; deep representations learn coordinate charts that unfold these manifolds into linearly separable spaces.'],
    ['Concept', 'Derive InfoNCE and explain its mutual information connection.', 'InfoNCE computes cross-entropy classifying the true positive pair among distractors; minimizing InfoNCE maximizes a variational lower bound on mutual information I(X;Y) between augmented views.'],
    ['Concept', 'What is representation collapse and how does BYOL prevent it without negatives?', 'Collapse maps all inputs to a trivial constant; BYOL avoids it via asymmetric architectures (online encoder + momentum target) with a predictor head and stop-gradient operator.'],
    ['Concept', 'Why does ArcFace produce more discriminative embeddings than standard Softmax?', 'ArcFace adds angular margin m directly in the cosine domain: cos(θ+m), enforcing geodesic class separation on the hypersphere and maximizing intra-class compactness.'],
    ['Concept', 'Compare bi-encoder and cross-encoder retrieval architectures.', 'Bi-encoders independently map queries and passages for fast pre-computed indexing (sub-linear MIPS); cross-encoders process pairs jointly through full self-attention for superior accuracy at O(N) latency.'],
    ['Concept', 'What is CKA and why is it preferred over CCA for representation comparison?', 'CKA computes normalized HSIC between kernel matrices; unlike CCA, it is invariant to orthogonal rotations and isotropic scaling, reliably capturing similarity across layers of different widths.'],
    ['Scenario', 'A retrieval model achieves high Recall@10 but poor NDCG@10. What does this indicate?', 'High Recall@10 means relevant docs appear in the top 10; low NDCG@10 means ranking quality is poor — relevant docs cluster at positions 8–10 rather than 1–2.'],
    ['Concept', 'Explain the RAG Triad evaluation framework.', 'The triad measures Context Relevance (did retrieval find the right passage?), Groundedness/Faithfulness (is the answer derived from context?), and Answer Relevance (does the answer address the question?) — separately.'],
    ['Concept', 'What is Reciprocal Rank Fusion (RRF)?', 'RRF merges ranked lists from multiple retrieval systems by summing 1/(k+rank) over all systems for each document, where k is a constant (default 60); it outperforms linear score fusion on heterogeneous retrievers.'],
    ['Concept', 'How does GraphRAG differ from standard vector RAG?', 'GraphRAG builds a knowledge graph via LLM entity extraction, applies Leiden community detection, and generates hierarchical summaries enabling global sensemaking queries; vector RAG supports only local passage retrieval.'],
    ['Design', 'Design a controlled ablation study for a RAG pipeline.', 'Hold constant: embedding model, LLM, evaluation set, prompt template. Vary one component at a time: chunking strategy, retrieval k, reranker presence. Measure Context Relevance and Faithfulness separately using RAGAS across all conditions.'],
    ['Scenario', 'How do you detect and correct position bias in an LLM-as-judge evaluation?', 'Run counterbalanced presentation orders (A vs B, then B vs A); measure how often the judge prefers whichever response appears first; apply a correction factor; report Spearman correlation with human annotators on a calibration set.'],
    ['Concept', 'What is hard negative mining and why does it matter for contrastive learning?', 'Random negatives produce near-zero gradient updates because they are trivially dissimilar; hard negatives (close in embedding space but semantically irrelevant) provide high-gradient signals that refine decision boundaries.'],
  ], { module: 3 }),

  group('Generative Models & LLM Research Methodology', 39, [
    ['Concept', 'Why is marginal likelihood p_θ(x) intractable in deep latent variable models?', 'Computing p_θ(x) requires integrating the joint p_θ(x,z) over continuous latent z; in high dimensions, this has no analytical solution and Monte Carlo has exponential variance.'],
    ['Concept', 'Explain the Reparameterization Trick in VAEs.', 'Sampling z~N(μ,σ²) is non-differentiable; reparameterization writes z=μ+σ⊙ε with ε~N(0,I), enabling analytical backpropagation through μ and σ.'],
    ['Concept', 'Prove that the minimax GAN objective minimizes Jensen-Shannon Divergence.', 'Under optimal discriminator D*(x)=p_data(x)/(p_data+p_g), substituting into the objective yields 2·JSD(p_data‖p_g)−2·log(2), minimized iff p_g=p_data.'],
    ['Concept', 'Why does WGAN-GP prevent vanishing gradients?', 'WGAN replaces JSD with Earth Mover\'s Distance via Kantorovich-Rubinstein duality; under a 1-Lipschitz constraint (gradient penalty), it provides continuous, non-saturating linear gradients even with disjoint supports.'],
    ['Concept', 'Derive the closed-form forward marginal q(x_t|x_0) in DDPM.', 'Cumulative Gaussian convolution yields x_t = √ᾱ_t·x_0 + √(1−ᾱ_t)·ε, where ᾱ_t is the cumulative product of (1−β_s) across timesteps s=1…t.'],
    ['Concept', 'What is the Probability Flow ODE in diffusion models?', 'A deterministic ODE sharing exact marginal probability trajectories as the reverse SDE; enables deterministic sampling, fast higher-order solvers, exact log-likelihoods, and latent inversion.'],
    ['Concept', 'Why are straight-line OT Flow Matching paths superior to diffusion paths?', 'OT paths define constant velocity u_t=x_1−x_0; straight trajectories minimize kinetic energy, allowing ODE integration in 4–8 steps without trajectory truncation error.'],
    ['Concept', 'Explain Classifier-Free Guidance (CFG).', 'CFG trains one model with unconditional label dropout; at inference, score is extrapolated: v_guided = v_uncond + w·(v_cond−v_uncond), where w>1 amplifies prompt adherence at the cost of diversity.'],
    ['Concept', 'What is FID and what are its statistical limitations?', 'FID fits Gaussians to Inception-v3 activations and computes Wasserstein-2 distance; limitations: assumes normality in feature space, sensitive to image resizing, biased on small evaluation sets.'],
    ['Design', 'Design a controlled study of in-context learning in an open LLM.', 'Use 4 conditions: correct labels, wrong labels, no labels, no examples; run 500 test cases per condition; compute McNemar significance tests comparing all condition pairs — following Min et al. (2022).'],
    ['Scenario', 'How do you measure hallucination rate in a domain QA system?', 'Define hallucination as claims unverifiable from source corpus; generate 500 answers; manually verify a random 100-answer subset; extrapolate rate with 95% bootstrap CI. Measure separately for different question types.'],
    ['Concept', 'How do you detect LLM training data memorization?', 'Apply Carlini et al. prefix-probing: prompt model with prefix from suspected training document; compare perplexity on the true continuation vs a counterfactual continuation; memorization is confirmed when the original has significantly lower perplexity.'],
    ['Scenario', 'A diffusion model generates sharp images but blurry textures. What is failing?', 'The VAE decoder is under-trained or lacks adversarial perceptual loss (LPIPS/patch discriminator); the diffusion backbone may be correct but the autoencoder stage cannot decode fine-grained high-frequency detail.'],
  ], { module: 4 }),

  group('Reasoning, Alignment & AI Safety Research', 52, [
    ['Concept', 'Why does Chain-of-Thought increase computational capacity of fixed-depth Transformers?', 'A fixed-depth Transformer has constant parallel depth; generating intermediate reasoning tokens enables sequential serial computation across multiple forward passes, expanding expressivity to P-complete problems.'],
    ['Concept', 'Explain the credit assignment failure in Outcome Reward Models (ORMs).', 'ORMs assign one scalar for final answer correctness; a 10-step proof with a sign error on step 10 receives equal penalty on all 10 steps, providing noisy, misleading gradients.'],
    ['Concept', 'How do PRMs improve reasoning verification over ORMs?', 'PRMs score every individual reasoning step, identifying the exact error location and providing precise step-level guidance for Best-of-N and MCTS search algorithms.'],
    ['Concept', 'Derive DPO from the Bradley-Terry model.', 'The optimal RLHF policy satisfies π*(y|x) ∝ π_ref(y|x)·exp(r(x,y)/β); substituting the implicit reward r=β·log(π/π_ref) into the Bradley-Terry loss eliminates the separate reward model and RL loop.'],
    ['Concept', 'What is reward hacking in RLHF?', 'A policy exploits biases in the learned reward model (e.g. producing overly long or polite responses) to achieve high proxy reward without satisfying true human intent — a manifestation of Goodhart\'s law.'],
    ['Concept', 'Explain superposition and polysemanticity in neural networks.', 'Polysemanticity: single neurons activate for multiple unrelated concepts. Superposition: models compress more features than physical neuron dimensions by packing almost-orthogonal vectors in high-dimensional space.'],
    ['Concept', 'How do Sparse Autoencoders resolve superposition?', 'SAEs train an L1-regularized overcomplete autoencoder on hidden activations; the high-dimensional sparse latent vectors disentangle superposed representations into monosemantic, interpretable features.'],
    ['Concept', 'What is activation steering and how does it differ from prompting?', 'Activation steering adds a concept vector α·v to the residual stream during generation; unlike prompting, it cannot be jailbroken by adversarial tokens and persists reliably over long contexts.'],
    ['Design', 'Design a scientific study measuring the alignment tax.', 'Compare base, SFT, and RLHF/DPO-aligned model versions across a comprehensive benchmark suite (MMLU, GSM8K, HumanEval, domain tasks); measure the performance delta attributable to alignment alone, reporting it as a separate metric.'],
    ['Scenario', 'Design a rigorous jailbreaking study on an open aligned model.', 'Pre-register: 3 attack categories (direct requests, roleplay-wrapped, indirect goal completion), 20 cases each, success rate threshold that constitutes a meaningful finding. Measure refusal rate per category with 95% CI; test defensive system prompt using McNemar\'s test.'],
    ['Concept', 'What is the Alignment Tax?', 'Performance degradation in raw capability, mathematical reasoning, or creative expressivity that occurs when models undergo aggressive safety and preference tuning.'],
    ['Scenario', 'How do you evaluate whether an AI safety benchmark has construct validity?', 'Test whether human annotators agree with the benchmark\'s notion of "harmful" on a 100-question sample; compute inter-rater agreement (Cohen\'s κ); identify cases where the benchmark\'s scoring function systematically disagrees with human judgment.'],
    ['Defense', 'How do you defend a red team research study against the critique that results are only valid in a lab setting?', 'Demonstrate that attack conditions match realistic deployment constraints: the attacker model was limited to black-box access, attacks used only publicly available techniques, and success rate was measured on diverse real-world task types — not adversarially chosen toy examples.'],
  ], { module: 5 }),

  group('Scaled Systems, Ablation Science & Research Careers', 65, [
    ['Concept', 'State the Chinchilla scaling law and explain compute-optimal allocation.', 'L(N,D) = E + A/N^α + B/D^β; under budget C = 6ND, loss is minimized when N ∝ C^0.5 and D ∝ C^0.5 — parameters and tokens scale equally.'],
    ['Concept', 'Why do modern open models train beyond Chinchilla optimal?', 'Chinchilla minimizes training compute; over-training smaller models on 15T+ tokens amortizes inference serving costs over billions of queries during the model lifetime.'],
    ['Concept', 'What is Model FLOPs Utilization (MFU)?', 'MFU = achieved FLOPs / theoretical peak hardware FLOPs; it measures how close training execution is to the theoretical silicon limit, penalizing memory overhead and communication bubbles.'],
    ['Concept', 'Explain Megatron-LM Tensor Parallelism.', 'Column-wise splitting for Q/K/V projections, row-wise for output; first MLP linear column-wise, second row-wise; requires only two All-Reduce communications per Transformer block.'],
    ['Concept', 'Compare the three ZeRO stages.', 'ZeRO-1 shards optimizer states (4× reduction); ZeRO-2 shards optimizer states + gradients; ZeRO-3 shards all three — achieving linear memory reduction proportional to cluster size.'],
    ['Concept', 'Derive Ring All-Reduce communication volume.', 'Reduce-Scatter + All-Gather each send ((N-1)/N)·S bytes per GPU, totaling 2·((N-1)/N)·S — proving communication is independent of the number of GPUs N.'],
    ['Concept', 'Why is BF16 preferred over FP16 for pre-training?', 'BF16 has an 8-bit exponent matching FP32 dynamic range, preventing underflow without dynamic loss scaling; FP16\'s 5-bit exponent frequently suffers underflow during large gradient updates.'],
    ['Concept', 'What is the under-tuned baseline trap in AI research?', 'Comparing a heavily tuned novel method against a baseline with default hyperparameters; the apparent improvement disappears when baselines receive equal tuning compute — this invalidates the paper\'s scientific claim.'],
    ['Concept', 'How do you find a research gap using the tension identification method?', 'Scan the Limitations sections of 20 recent top-conference papers in your focus area; recurring limitations acknowledged by multiple authors but unaddressed by any represent validated, community-confirmed research gaps.'],
    ['Scenario', 'How would you defend your ablation table if a reviewer claims you under-tuned one baseline?', 'Provide the exact hyperparameter search protocol and budget used for all baselines; if challenged, re-run that specific baseline with the requested configuration and report updated numbers transparently.'],
    ['Concept', 'What research areas give academics a competitive advantage over industry in the LLM era?', 'Evaluation methodology, mechanistic interpretability of open models, hallucination measurement, domain-specific AI applications, data-centric methods, AI safety benchmarking — all accessible without frontier model compute.'],
    ['Design', 'Design a publication-ready empirical results table.', 'Use LaTeX booktabs; include method, dataset, and metric columns; bold only the best result per row; add ± standard deviation from ≥5 seeds; report Wilcoxon p-value for best vs second-best; add a column for parameter count.'],
    ['Defense', 'Explain why you chose LoRA over full fine-tuning in your research.', 'LoRA prevents catastrophic forgetting of base representations by constraining updates to low-rank manifolds; provides modular task switching; enables spectral analysis of task adaptation subspaces; and reduces compute by 3–10× for the same task performance.'],
    ['Defense', 'Structure a 45-minute research job talk.', '5 min: research vision and open problem; 15 min: deep-dive on breakthrough paper (intuition → proof → ablations); 10 min: complementary second work; 10 min: 3–5 year research agenda with concrete questions; 5 min: conclusions and Q&A.'],
    ['Scenario', 'A reviewer says your benchmark contamination check was insufficient. How do you respond?', 'Implement 13-gram verbatim overlap scanning + MinHash LSH fuzzy matching over the full pre-training corpus; report contamination percentage per benchmark; re-run evaluation on a held-out non-contaminated subset and compare performance.'],
  ], { module: 6 }),
];

export const practiceSteps: { title: string; body: string }[] = [
  {
    title: 'Derive from first principles.',
    body: 'Work out key equations and explain mechanisms out loud, then compare with the canonical reference.',
  },
  {
    title: 'Ground with empirical citations.',
    body: 'Anchor every answer with canonical papers (Kaplan, Chinchilla, Vaswani, DPO, SAE papers) and specific empirical results.',
  },
  {
    title: 'Sketch architectures on a whiteboard.',
    body: 'Give yourself 30 minutes per design question to diagram layers, tensor shapes, communication patterns, and ablation matrices.',
  },
  {
    title: 'Run a mock research defense.',
    body: 'Ask a peer, mentor, or AI model to interview you across three realistic evaluation rounds:',
  },
  { title: 'Score yourself after each round,', body: 'from 1 (weak) to 4 (rigorous), on:' },
  { title: 'Iterate', body: 'until you consistently score 3 or higher on every dimension across all rounds.' },
];

export const mockRounds: { title: string; body: string }[] = [
  {
    title: 'Round 1, Theory, Math & Debugging:',
    body: 'three questions from statistical theory, loss divergence, scaling laws, and distributed training stragglers.',
  },
  { title: 'Round 2, Research System Design:', body: 'one comprehensive question from architectures, generative models, or RAG evaluation protocol design.' },
  { title: 'Round 3, Paper & Project Defense:', body: 'questions defending your research methodology, ablation validity, safety study design, and contributions against skeptical critique.' },
];

export const rubric: { title: string; body: string }[] = [
  { title: 'Theoretical Rigour:', body: 'did you ground your explanation in sound mathematics, proofs, or inductive biases?' },
  { title: 'Empirical Soundness:', body: 'did you define controlled baselines, ablation studies, and statistical significance?' },
  { title: 'System Trade-offs:', body: 'did you balance FLOPs, memory (MFU), latency, and parameter scaling?' },
  { title: 'Safety & Ethics:', body: 'did you acknowledge alignment tax, fairness trade-offs, and responsible disclosure norms?' },
  { title: 'Communication & Defense:', body: 'was your defense structured, precise, and conference-ready?' },
];

export const questionAnchor = (n: number) => `q-${n}`;

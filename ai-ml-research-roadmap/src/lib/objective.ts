/**
 * Presentation helpers for objective text.
 *
 * The source sentences are long (median 89 chars, p90 135) and arrive as an
 * undifferentiated list, which reads as a wall. These helpers add scanning
 * structure WITHOUT changing a single word:
 *
 *  - `splitLead`  — where a sentence already contains a "lead: detail" break,
 *                   surface the lead so the eye can skip the enumeration.
 *  - `markTerms`  — bold the concrete technical nouns so a reader can find
 *                   "pytest" or "pgvector" without reading the whole line.
 */

/** Concrete, unambiguous technical nouns — products, protocols, formats, APIs.
 *  Deliberately excludes generic vocabulary ("streaming", "tracing", "memory"),
 *  which would highlight half the sentence and defeat the purpose. */
const TERMS = [
  // languages, runtimes, tooling & frameworks
  'Python', 'PyTorch', 'JAX', 'Triton', 'CUDA', 'pytest', 'uv', 'pyproject.toml', '.gitignore', '.dockerignore',
  'Pydantic', 'dataclass', 'FastAPI', 'Flask', 'Docker', 'Dockerfile', 'Git', 'GitHub',
  'PostgreSQL', 'SQL', 'pgvector', 'Qdrant', 'curl', 'Postman', 'Bruno',
  'OpenAPI', 'Swagger', 'JSON Schema', 'JSON', 'CSV', 'HTTP', 'REST', 'README', 'LaTeX', 'ArXiv', 'OpenReview',
  // architectures & core models
  'Transformer', 'Transformers', 'FlashAttention', 'Multi-Head Attention', 'RoPE', 'ALiBi', 'RMSNorm',
  'Mamba', 'S4', 'SSM', 'SSMs', 'RWKV', 'ViT', 'CLIP', 'SigLIP', 'LLaVA', 'Flamingo', 'Chinchilla',
  // optimization & training algorithms
  'AdamW', 'Adam', 'SGD', 'Muon', 'Lion', 'Nesterov', 'L2', 'Weight Decay', 'SVD', 'PCA', 'autograd',
  // distributed systems & hardware
  'DDP', 'FSDP', 'ZeRO', 'ZeRO-1', 'ZeRO-2', 'ZeRO-3', 'Megatron-LM', 'Tensor Parallelism', 'Pipeline Parallelism',
  'Ring All-Reduce', 'NCCL', 'NVLink', 'MFU', 'HFU', 'FLOPs', 'A100', 'H100',
  // reinforcement learning & reasoning
  'MDP', 'MDPs', 'Bellman', 'DQN', 'PPO', 'TRPO', 'SAC', 'MCTS', 'Tree of Thoughts', 'Chain of Thought',
  'PRM', 'PRMs', 'ORM', 'ORMs', 'ToT', 'ReAct',
  // alignment & interpretability
  'RLHF', 'RLAIF', 'DPO', 'KTO', 'ORPO', 'SimPO', 'SFT', 'PEFT', 'LoRA', 'QLoRA', 'DoRA', 'EWC',
  'Mechanistic Interpretability', 'Representation Engineering', 'RepE', 'SAE', 'SAEs', 'CKA',
  // generative modeling & vision
  'Diffusion', 'DDPM', 'DDIM', 'SDE', 'SDEs', 'ODE', 'ODEs', 'Flow Matching', 'Score Matching',
  'ELBO', 'VAE', 'VAEs', 'GAN', 'GANs', 'WGAN-GP', 'VQ-VAE', 'VQ-GAN', 'NeRF',
  // evaluation & benchmarks
  'MMLU-Pro', 'MMLU', 'TruthfulQA', 'GSM8K', 'MATH', 'HumanEval', 'SWE-bench', 'GPQA', 'SimpleQA',
  'Bradley-Terry', 'Elo', 'BLEU', 'ROUGE', 'F1', 'Recall@k', 'Precision@k', 'MRR',
  // self-supervised learning
  'InfoNCE', 'SimCLR', 'BYOL', 'Barlow Twins', 'DINO', 'MoCo', 'ArcFace',
  // governance & safety
  'PII', 'EU AI Act', 'DPDP',
  /* Deliberately absent: 'LLM' / 'LLMs'. They are the subject of nearly every
     sentence on the site, so highlighting them is noise rather than an anchor. */
];

const escapeHtml = (s: string): string =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const escapeRe = (s: string): string => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/* Longest first so "QLoRA" wins over "LoRA" and "Graph RAG" over "RAG". */
const TERM_RE = new RegExp(
  `(?<![\\w@.-])(${[...TERMS].sort((a, b) => b.length - a.length).map(escapeRe).join('|')})(?![\\w@])`,
  'g',
);

/**
 * Drops trailing list punctuation. Several source files write a run-on list one
 * fragment per line ("at least 3 useful tools," / "explicit state,"); as
 * standalone bullets those trailing commas read as typos.
 */
export const trimTrailingPunctuation = (s: string): string => s.replace(/[,;]\s*$/, '');

/** HTML-escaped text with technical terms wrapped in <b class="term">. */
export function markTerms(text: string): string {
  return escapeHtml(text).replace(TERM_RE, '<b class="term">$1</b>');
}

/**
 * Splits "Understand relational data modeling: tables, rows, columns…" into a
 * lead and the detail that follows. Returns `lead: null` when the sentence has
 * no such break (about 89% of them) — those render as a single run of text.
 */
export function splitLead(text: string): { lead: string | null; rest: string } {
  const m = text.match(/^(.{15,85}?[:;])\s+(.+)$/s);
  if (!m) return { lead: null, rest: text };
  return { lead: m[1], rest: m[2] };
}

/** Convenience: both treatments applied, ready for `set:html`. */
export function renderObjective(text: string): { lead: string | null; rest: string } {
  const { lead, rest } = splitLead(trimTrailingPunctuation(text));
  return { lead: lead ? markTerms(lead) : null, rest: markTerms(rest) };
}

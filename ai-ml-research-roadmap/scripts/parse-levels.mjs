/**
 * Build-time parser: level*.txt  ->  src/data/levels.json
 *
 * The .txt files are the single source of truth for all level content. Nothing
 * here invents copy: every string written to levels.json is lifted verbatim
 * from a source file. Where a field cannot be found, the level gets an entry in
 * `todos[]` instead of a plausible-looking guess.
 *
 * Run: npm run parse   (also runs automatically before dev/build)
 */
import { readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const CONTENT_DIRS = [join(root, 'AI RESEARCH ROADMAP')];

const PHASES = [
  { id: 'foundations', name: 'Research Foundations', levels: [0, 1, 2, 3], theme: 'scientific computing, linear algebra, applied statistics & literature gap analysis', purpose: 'Become a reliable contributor who can enter a lab, find a gap, and formulate falsifiable hypotheses.', color: 'blue', icon: 'terminal' },
  { id: 'retrieval', name: 'Data & Modeling', levels: [4, 5, 6], theme: 'domain datasets, classical ML baselines, deep learning architectures & computer vision', purpose: 'Turn real-world data and model architectures into testable, reproducible research baselines.', color: 'cyan', icon: 'database' },
  { id: 'agentic', name: 'Architectures & Experiments', levels: [7, 8, 9], theme: 'sequence models, GNNs, controlled ablations, fair benchmarking & generative diffusion/flow', purpose: 'Design controlled experiments and generative systems with rigorous statistical baselines.', color: 'violet', icon: 'flask-conical' },
  { id: 'trust', name: 'Scaled Systems & LLMs', levels: [10, 11, 12], theme: 'HPC scaling, foundation models, alignment (RLHF/DPO), RAG, AI agents & knowledge graphs', purpose: 'Scale training to clusters and engineer agentic, retrieval-augmented systems.', color: 'emerald', icon: 'shield-check' },
  { id: 'production', name: 'Trustworthy AI', levels: [13], theme: 'interpretability (SAEs/XAI), adversarial robustness, algorithmic fairness & lab leadership', purpose: 'Deconstruct model mechanisms, audit trustworthiness, and direct rigorous research programs.', color: 'rose', icon: 'microscope' },
  { id: 'frontier', name: 'Thesis Scoping', levels: [14], theme: 'thesis topic selection, research prospectus, controlled capstones & evidence documentation', purpose: 'Own a substantial empirical study from proposal through reproducible evidence.', color: 'pink', icon: 'trophy' },
  { id: 'interview', name: 'Publishing & Defense', levels: [15], theme: 'manuscripts, journal/conference selection, peer review rebuttals, thesis viva & research careers', purpose: 'Publish ethically, survive peer review, defend your thesis, and launch a research career.', color: 'slate', icon: 'graduation-cap' },
];


/* One Lucide icon per level for AI/ML research. */
const LEVEL_ICONS = {
  0: 'terminal', 1: 'sigma', 2: 'chart-column', 3: 'book-open', 4: 'database',
  5: 'layers', 6: 'network', 7: 'git-branch', 8: 'sliders-horizontal', 9: 'sparkles',
  10: 'cpu', 11: 'brain-circuit', 12: 'bot', 13: 'shield-check', 14: 'trophy',
  15: 'graduation-cap',
};

/* Curated progression metadata keeps the technical syllabus in the source
 * files while making the research-career journey explicit in generated data. */
const LEVEL_GUIDANCE = {
  0: { proficiency: 'Beginner', researchStage: 'Establish research computing foundations', lifecycle: 'Shell → Python → SQL & Algorithms → Docker → Git', artifact: 'Reproducible research laboratory environment', careerSignal: 'Can set up deterministic, isolated computing environments and experiment harnesses.' },
  1: { proficiency: 'Beginner', researchStage: 'Build mathematical and optimization intuition', lifecycle: 'Linear algebra → calculus → optimization theory', artifact: 'Numerical optimization engine & gradient solver', careerSignal: 'Can derive, analyze, and numerically verify loss functions and optimization dynamics.' },
  2: { proficiency: 'Beginner', researchStage: 'Master statistical inference and uncertainty', lifecycle: 'Probability → estimation → hypothesis testing', artifact: 'Statistical rigor & hypothesis audit package', careerSignal: 'Can design non-parametric hypothesis tests and calculate bootstrap confidence intervals.' },
  3: { proficiency: 'Developing', researchStage: 'Identify literature gaps and scope questions', lifecycle: 'Search → synthesis → gap analysis → proposal', artifact: 'PRISMA systematic review & research proposal', careerSignal: 'Can turn broad curiosity into a falsifiable, preregistered research study.' },
  4: { proficiency: 'Developing', researchStage: 'Curate, govern, and audit research data', lifecycle: 'Acquisition → leakage audit → annotation → datasheet', artifact: 'Audited multi-domain dataset & Datasheet', careerSignal: 'Can curate research data while strictly preventing group, temporal, and feature leakage.' },
  5: { proficiency: 'Developing', researchStage: 'Establish robust classical baselines', lifecycle: 'Feature pipeline → classical models → error taxonomy', artifact: 'Reproducible classical ML baseline study', careerSignal: 'Can benchmark linear models, SVMs, and gradient boosted trees with calibration and significance.' },
  6: { proficiency: 'Intermediate', researchStage: 'Build neural models and reproduce literature', lifecycle: 'Tensors → autograd → CNN/ViT → reproduction', artifact: 'PyTorch deep learning reproduction report', careerSignal: 'Can implement neural architectures from scratch and reproduce published empirical claims.' },
  7: { proficiency: 'Intermediate', researchStage: 'Select sequence, NLP, and graph architectures', lifecycle: 'Transformers → attention → GNNs → state space (Mamba)', artifact: 'Sequence & relational architecture study', careerSignal: 'Can connect architectural inductive biases to relational, sequential, and long-context data.' },
  8: { proficiency: 'Advanced', researchStage: 'Design controlled experiments and ablations', lifecycle: 'Hypothesis → OFAT ablations → compute parity → tests', artifact: 'Publication-ready benchmark & ablation suite', careerSignal: 'Can isolate genuine scientific contributions under strict budget parity and statistical tests.' },
  9: { proficiency: 'Advanced', researchStage: 'Develop and evaluate generative systems', lifecycle: 'VAE → GAN → diffusion (DDPM) → flow matching', artifact: 'Diffusion & flow matching benchmark', careerSignal: 'Can implement and evaluate generative models using FID, precision, recall, and memorization audits.' },
  10: { proficiency: 'Advanced', researchStage: 'Scale training across HPC clusters', lifecycle: 'SLURM → DDP/FSDP → profiling → MFU tracking', artifact: 'Multi-node distributed training & MFU suite', careerSignal: 'Can orchestrate distributed GPU training and profile hardware efficiency on cluster nodes.' },
  11: { proficiency: 'Advanced', researchStage: 'Train, fine-tune, and align foundation models', lifecycle: 'Scaling laws → PEFT/LoRA → SFT → RLHF/DPO', artifact: 'Domain LLM adaptation & alignment study', careerSignal: 'Can train and align large language models using preference optimization and scaling principles.' },
  12: { proficiency: 'Advanced', researchStage: 'Engineer RAG, AI agents, and knowledge graphs', lifecycle: 'Retrieval → RAG Triad → GraphRAG → ReAct agents', artifact: 'Enterprise GraphRAG & multi-agent system', careerSignal: 'Can build grounded retrieval systems, neuro-symbolic knowledge graphs, and tool-using agents.' },
  13: { proficiency: 'Research-ready', researchStage: 'Audit model trust, interpretability, and safety', lifecycle: 'XAI → mechanistic SAEs → adversarial attacks → fairness', artifact: 'Mechanistic interpretability & robustness audit', careerSignal: 'Can reverse-engineer neural circuits, defend against adversarial attacks, and audit fairness.' },
  14: { proficiency: 'Research-ready', researchStage: 'Scope thesis topics and multimodal research', lifecycle: 'Multimodal VLM → domain translation → thesis proposal', artifact: 'Multimodal capstone & thesis prospectus', careerSignal: 'Can formulate a multi-chapter dissertation prospectus and translate AI across scientific domains.' },
  15: { proficiency: 'Career-ready', researchStage: 'Publish, defend dissertation, and launch career', lifecycle: 'Manuscript → peer review → rebuttal → viva defense', artifact: 'Camera-ready paper, rebuttal dossier & defense deck', careerSignal: 'Can write top-tier manuscripts, navigate peer review, defend a viva voce, and interview for research roles.' },
};

/* Keyword -> Lucide icon for module rows. */
const MODULE_ICON_RULES = [
  // unmistakable, subject-defining terms
  [/capstone|ship a|ship it|portfolio & |portfolio and /i, 'flag'],
  [/thesis|viva voce|oral defense|prospectus|dissertation|committee/i, 'graduation-cap'],
  [/peer review|rebuttal|reviewer response|manuscript/i, 'file-check-2'],
  [/predatory|publication venue|think-check-submit|open science/i, 'newspaper'],
  [/job talk|research career|faculty|postdoc/i, 'briefcase'],
  [/reinforcement learning|bellman|\bdqn\b|\bppo\b|policy gradient|q-learning|actor-critic/i, 'trophy'],
  [/knowledge graph|graphrag|\brdf\b|neuro-symbolic/i, 'share-2'],
  [/sparse autoencoder|\bsae\b|mechanistic/i, 'microscope'],
  [/adversarial|evasion attack|\bpgd\b|\bfgsm\b|autoattack/i, 'shield-alert'],
  [/fairness|demographic parity|equalized odds/i, 'scale'],
  [/linear algebra|vector space|decomposition|\bsvd\b/i, 'sigma'],
  [/vector calculus|matrix calculus|jacobian|hessian/i, 'binary'],
  [/convex optimization|first-order|adamw|\bl-bfgs\b/i, 'target'],
  [/probability distribution|random variable|entropy/i, 'sparkles'],
  [/maximum likelihood|\bmle\b|\bmap\b|bayesian/i, 'compass'],
  [/hypothesis testing|non-parametric|wilcoxon|fdr/i, 'chart-column'],
  [/bootstrap|conformal prediction|uncertainty/i, 'radar'],
  [/support vector machine|\bsvm\b|kernel trick/i, 'layers'],
  [/decision tree|\bcart\b|random forest/i, 'git-fork'],
  [/xgboost|lightgbm|catboost|gradient boost/i, 'flame'],
  [/graph neural network|\bgnn\b|\bgcn\b|\bgat\b/i, 'share-2'],
  [/state space model|\bssm\b|mamba/i, 'zap'],
  [/diffusion|flow matching|\bvae\b|\bgan\b|\bddpm\b/i, 'sparkles'],
  [/slurm|\bhpc\b|distributed data parallel|\bfsdt\b|\bzero\b/i, 'cpu'],
  [/multimodal|\bclip\b|\bllava\b|whisper/i, 'audio-lines'],
  [/\bmcp\b|model context protocol|\ba2a\b/i, 'plug-zap'],
  [/langgraph|graph-based|state machine/i, 'git-branch'],
  [/sandbox|code execution|sandboxed/i, 'terminal'],
  [/red.?team|jailbreak|injection|exfiltration/i, 'bug'],
  [/guardrail|moderation|guardrails/i, 'shield-half'],
  [/privacy|\bpii\b|secrets|data privacy/i, 'lock'],
  [/threat model|security|secure/i, 'shield'],
  [/responsib|governance|ethic|compliance|regulat/i, 'scale'],

  // interview level: these read as "<topic> interview scenarios", so they must
  // be matched before the topic rules claim them
  [/interview strategy|role positioning/i, 'compass'],
  [/llmops & production debugging|production debugging/i, 'activity'],
  [/staying current|chasing hype/i, 'newspaper'],
  [/portfolio defense|project & portfolio/i, 'presentation'],
  [/behavioral communication|communication for/i, 'speech'],

  // eval sub-topics (an entire level is "evals" — split it finely)
  [/introduction to/i, 'book-open'],
  [/offline vs online|offline and online/i, 'arrow-left-right'],
  [/benchmarking|anatomy of a benchmark|leaderboard/i, 'chart-column'],
  [/evolution of|progression of/i, 'trending-up'],
  [/custom model eval|custom eval/i, 'crosshair'],
  [/eval suite|building an eval/i, 'list-checks'],
  [/eval-driven|continuous loop/i, 'repeat'],
  [/metrics? &|evaluation methods/i, 'ruler'],
  [/rag eval/i, 'search-check'],
  [/agent eval/i, 'bot'],
  [/evals in ci|regression testing/i, 'git-pull-request'],
  [/production evals|feedback loop/i, 'refresh-cw'],

  // llmops sub-topics
  [/what llmops adds/i, 'workflow'],
  [/preparing your apps/i, 'wrench'],
  [/incidents?|rollbacks?/i, 'siren'],

  // fine-tuning sub-topics
  [/should you fine.?tune/i, 'circle-question-mark'],
  [/preference tuning|\bdpo\b/i, 'thumbs-up'],
  [/reinforcement fine.?tuning|\brft\b/i, 'award'],
  [/distill/i, 'shrink'],
  [/\blora\b|qlora/i, 'layers'],
  [/data curation/i, 'file-text'],

  // modality sub-topics
  [/multimodal foundations|beyond text/i, 'shapes'],
  [/images? become tokens/i, 'grid-2x2'],
  [/sound becomes tokens|audio becomes tokens/i, 'audio-waveform'],
  [/documents?, charts|visual rag/i, 'scan-text'],
  [/multimodal embeddings|cross-modal/i, 'vector-square'],
  [/image generation|video generation/i, 'image'],
  [/realtime voice|voice agent/i, 'audio-lines'],
  [/vision|document understanding/i, 'eye'],
  [/speech|\bstt\b|\btts\b/i, 'mic'],
  [/on-device|\bedge\b/i, 'smartphone'],

  // rag & context sub-topics
  [/rag with frameworks/i, 'boxes'],
  [/similarity & semantic|semantic search/i, 'radar'],
  [/vector database|ann search/i, 'database'],
  [/sparse & hybrid|hybrid retrieval/i, 'blend'],
  [/retrieval evaluation/i, 'flask-conical'],
  [/rag architecture|when to use it/i, 'network'],
  [/baseline rag|from scratch/i, 'hammer'],
  [/rag variants|advanced patterns/i, 'git-fork'],
  [/context window as a resource/i, 'gauge'],
  [/selection & assembly|context selection/i, 'list-filter'],
  [/compression|compaction/i, 'archive'],
  [/long-context strategies/i, 'scroll-text'],

  // ops & delivery (must precede the broad deploy/test rules below)
  [/ci\/cd/i, 'infinity'],
  [/containeriz|application serving/i, 'container'],
  [/three ways to consume|consumption path/i, 'git-fork'],
  [/platform anatomy|bedrock|vertex ai|azure ai foundry/i, 'layout-grid'],
  [/identity, networking|tenancy/i, 'key-round'],
  [/regions?, residency|residency & compliance/i, 'globe-lock'],
  [/capacity, quotas|quotas? & cost/i, 'gauge'],
  [/open-weight model platform|inference provider/i, 'server-cog'],
  [/model routers?|llm gateway/i, 'route'],
  [/managed building blocks|build or buy/i, 'blocks'],
  [/portability|lock-in|migration/i, 'arrow-left-right'],
  [/managed ai platform|managed platform/i, 'cloud-cog'],
  [/\baws\b|deployment on/i, 'cloud-upload'],
  [/experiment tracking/i, 'git-compare'],
  [/application development|app development/i, 'hammer'],

  // practice areas
  [/judge|llm-as-a/i, 'gavel'],
  [/golden dataset|test.case|test set|regression|\bci\b/i, 'clipboard-check'],
  [/eval|metric/i, 'flask-conical'],
  [/observab|tracing|monitor|alert|dashboard|feedback loop/i, 'activity'],
  [/cost|econom|pricing|budget|billing/i, 'wallet'],
  [/cach(e|ing)/i, 'database-zap'],
  [/latency|inference optim|throughput|performance optim/i, 'zap'],
  [/deploy|container|docker|ci\/cd|serving|llmops vs|prompt & config/i, 'ship'],

  // retrieval stack
  [/rerank/i, 'arrow-down-up'],
  [/query transform|rag-fusion|hyde/i, 'shuffle'],
  [/\brag\b|retriev/i, 'search'],
  [/embedding|vector|similarity|semantic search/i, 'vector-square'],
  [/chunk/i, 'scissors'],
  [/ingest|document processing|\bpdf\b|data curation|persistence/i, 'file-text'],

  // agents & context
  [/harness/i, 'cable'],
  [/multi-agent|orchestrator|crew|team|specialist/i, 'users'],
  [/memory|offload|state/i, 'save'],
  [/context window|compress|compact|context selection|context engineering|long-context|context cach/i, 'layout-panel-left'],
  [/react|planning|reflection/i, 'route'],
  [/tools? for|designing good tools|tool calling|function \/ tool|function call|tool context|tool security/i, 'wrench'],
  [/reliab|failure recovery|retries|robust|fallback|graceful/i, 'life-buoy'],
  [/framework|librar/i, 'boxes'],

  // model & prompt craft
  [/tokeniz/i, 'scissors-line-dashed'],
  [/attention|transformer|inside an llm/i, 'brain-circuit'],
  [/pretrain|post-train|how llms learn|training/i, 'graduation-cap'],
  [/sampling|generation param|temperature/i, 'sigma'],
  [/reasoning|test-time|decomposition/i, 'workflow'],
  [/choosing|landscape|model routing|gateway|routing/i, 'git-fork'],
  [/fine.?tun|lora|qlora|\bdpo\b|\brft\b|distill|preference/i, 'sliders-horizontal'],
  [/system prompt|anatomy of a prompt|few-shot|zero-shot|prompt/i, 'message-square-code'],
  [/structured output|schema|\bjson\b/i, 'braces'],
  [/grounding|citation|abstention/i, 'quote'],
  [/stream/i, 'radio'],
  [/async|concurren|batch/i, 'split'],

  // engineering fundamentals
  [/ai-assisted|coding agent|agentic coding|pair programming/i, 'bot-message-square'],
  [/\bgit\b|collaborat|version control/i, 'git-branch'],
  [/\bapi\b|http|rest|endpoint|fastapi|web:/i, 'globe'],
  [/database|\bsql\b|postgres/i, 'database'],
  [/python/i, 'terminal'],

  // modalities & applications
  [/multimodal|vision|image|speech|voice|audio|realtime|on-device|\bedge\b/i, 'audio-lines'],
  [/research/i, 'telescope'],
  [/resume|screening|business/i, 'briefcase'],
  [/architecture|system.design|pipeline|orchestrat|case stud/i, 'network'],
  [/workflow|multi-step/i, 'workflow'],

  [/capabilit(y|ies) & failure|failure modes/i, 'triangle-alert'],
  [/controlling output|output control/i, 'type'],
  [/q&a platform|document q&a/i, 'messages-square'],

  // broadest terms last
  [/what (is|an)|actually is|fundamentals|101|foundations/i, 'book-open'],
  [/agent|autonom/i, 'bot'],
  [/\bmodel\b|inference/i, 'cpu'],
];

const MODULE_RE = /^([MP])(\d+)\.(\d+)\s*[·•]\s*(.+?)\s*[—–-]+\s*\(?sessions:\s*(\d+)\)?\s*(\[gap\])?\s*$/i;
const NAMED_CAPSTONE_RE = /^Level\s+(\d+)\s+Capstone\s*[·•]\s*(.+?)\s*$/i;
const LEVEL_TITLE_RE = /^Level\s+(\d+)\s*[·•]\s*(.+?)\s*$/;
const COMPLETION_RE = /^Level\s+\d+\s+completion outcome\s*$/i;
const SESSION_SUB_RE = /^Session\s+\d+\s*[·•]\s*(.+)$/i;

/**
 * Some modules group their objectives under bare sub-headings that carry no
 * "Session N ·" prefix ("Component-level evaluation", "Failure recovery",
 * "Coding assistant"). Objectives in these files are always full sentences
 * ending in a period, so a short capitalised line with no terminal punctuation
 * is a heading rather than content.
 *
 * `inColonList` is the guard that makes this safe: after a line ending in a
 * colon, short capitalised lines are the items being introduced, not headings.
 * That is what keeps the RAG Triad's "Contextual Relevancy / Faithfulness /
 * Answer Relevance" as list items. Arrows and middots mark flow and option
 * lines, which are content too.
 */
function isBareSubheading(line, inColonList) {
  return (
    !inColonList &&
    line.length <= 45 &&
    !/[.,;:!?]$/.test(line) && // objectives are full sentences; headings are not
    !/[→·•]/.test(line) && //     arrows and middots mark flow and option lines
    /^[A-Z]/.test(line) //        headings are capitalised, list fragments are not
  );
}

const LABELS = [
  ['outcome', /^Outcome:\s*/i],
  ['tryIt', /^Try:\s*/i],
  ['mentalModel', /^Mental model:\s*/i],
  ['finalResult', /^Final result:\s*/i],
];

function researchModeFor(name) {
  if (/capstone|project|portfolio|publication|manuscript|thesis|defense|job talk/i.test(name)) return 'Ship evidence';
  if (/evaluation|benchmark|ablation|testing|review|audit|statistics|hypothesis/i.test(name)) return 'Evaluate claims';
  if (/dataset|data|curat|privacy|ethic|governance/i.test(name)) return 'Prepare evidence';
  if (/literature|paper|reference|research problem|proposal|mentorship|outreach/i.test(name)) return 'Formulate questions';
  if (/deploy|system|hpc|distributed|parallel|compute|infrastructure|environment|tooling/i.test(name)) return 'Build research systems';
  return 'Study and implement';
}

function competencyTagsFor(text) {
  const tags = [];
  const rules = [
    [/linux|ssh|docker|conda|environment|git|version control|reproduc/i, 'research infrastructure'],
    [/paper|literature|bibliograph|reference|proposal|mentor|outreach/i, 'research communication'],
    [/math|calculus|probability|statistic|hypothesis|testing|bootstrap/i, 'mathematical reasoning'],
    [/dataset|data|curat|preprocess|leakage|missing|privacy/i, 'data stewardship'],
    [/machine learning|classification|regression|cnn|vision|deep learning/i, 'modeling'],
    [/transformer|attention|graph|gnn|sequence|state space/i, 'architecture design'],
    [/diffusion|generative|flow|variational|synthesis/i, 'generative modeling'],
    [/benchmark|ablation|evaluation|metric|baseline|experiment/i, 'empirical evaluation'],
    [/hpc|distributed|parallel|gpu|slurm|scaling|profil/i, 'systems scaling'],
    [/foundation model|fine.?tun|lora|pre.?train|alignment|rlhf|dpo/i, 'foundation models'],
    [/explain|interpret|shap|circuit|sae|causal/i, 'model interpretability'],
    [/robust|adversarial|fairness|bias|safety|security/i, 'trustworthy AI'],
    [/multimodal|cross.?disciplin|vision.?language|clinical|cyber/i, 'applied research'],
    [/publish|paper|review|rebuttal|thesis|defense|career|interview|job talk/i, 'research career'],
  ];
  for (const [re, tag] of rules) if (re.test(text)) tags.push(tag);
  return [...new Set(tags)];
}

function findContentDir() {
  for (const dir of CONTENT_DIRS) {
    if (existsSync(dir) && readdirSync(dir).some((f) => /^level\d+.*\.txt$/i.test(f))) return dir;
  }
  throw new Error(`No level*.txt files found in:\n  ${CONTENT_DIRS.join('\n  ')}`);
}

function pickModuleIcon(name) {
  for (const [re, icon] of MODULE_ICON_RULES) if (re.test(name)) return icon;
  return 'circle-dot';
}

function parseLevel(file, raw) {
  const lines = raw.split(/\r?\n/).map((l) => l.trim());
  const todos = [];

  const titleLine = lines.find((l) => LEVEL_TITLE_RE.test(l));
  if (!titleLine) throw new Error(`${file}: no "Level N · Title" line`);
  const [, numStr, title] = titleLine.match(LEVEL_TITLE_RE);
  const number = Number(numStr);

  // Scope / Goal one-liner, plus the optional metadata line L1 carries.
  const scopeLine = lines.find((l) => /^(Scope|Goal):\s*/i.test(l));
  const scope = scopeLine ? scopeLine.replace(/^(Scope|Goal):\s*/i, '') : '';
  if (!scope) todos.push('Missing "Scope:"/"Goal:" line — level has no one-line summary.');

  const metaLine = lines.find((l) => /^Prerequisites:/i.test(l)) || '';
  const prereqStated = metaLine ? (metaLine.match(/^Prerequisites:\s*([^·]+)/i)?.[1] || '').trim() : '';
  /* Every level a stated line names, in the order it names them ("None" names
     none). With no line at all, a level assumes the one before it. */
  const prerequisites = metaLine
    ? [...new Set([...prereqStated.matchAll(/Level\s+(\d+)/gi)].map((m) => Number(m[1])))]
    : number > 0 ? [number - 1] : [];

  const modules = [];
  const completionOutcomes = [];
  let cur = null;
  let inCompletion = false;
  let group = null;
  let inColonList = false;

  const pushLine = (line) => {
    if (!cur) return;
    for (const [key, re] of LABELS) {
      if (re.test(line)) { cur[key] = line.replace(re, ''); return; }
    }
    const sub = line.match(SESSION_SUB_RE);
    if (sub) { group = sub[1]; inColonList = false; return; }

    if (isBareSubheading(line, inColonList)) { group = line; return; }

    // A colon opens a short list whose items must not be read as headings.
    if (/:$/.test(line)) inColonList = true;
    else if (/\.$/.test(line)) inColonList = false;

    // Everything after the module's Outcome: is commentary, not an objective.
    if (cur.outcome || cur.finalResult) {
      cur.notes.push(line);
    } else {
      const objective = line.replace(/^[-•]\s+/, '');
      cur.objectives.push(group ? { text: objective, group } : { text: objective });
    }
  };

  for (const line of lines) {
    if (!line) continue;

    if (COMPLETION_RE.test(line)) { inCompletion = true; cur = null; continue; }
    if (inCompletion) {
      if (/^By the end of this level/i.test(line)) continue;
      completionOutcomes.push(line);
      continue;
    }

    const m = line.match(MODULE_RE);
    if (m) {
      const [, kind, lvl, idx, name, sessions, gap] = m;
      cur = {
        id: `${kind.toUpperCase()}${lvl}.${idx}`,
        name,
        sessionCount: Number(sessions),
        icon: pickModuleIcon(name),
        objectives: [], notes: [],
        isCapstone: /capstone/i.test(name),
        isGap: Boolean(gap),
      };
      cur.researchMode = researchModeFor(name);
      group = null;
      inColonList = false;
      modules.push(cur);
      continue;
    }

    const nc = line.match(NAMED_CAPSTONE_RE);
    if (nc) {
      cur = {
        id: `L${nc[1]} Capstone`,
        name: nc[2],
        sessionCount: null, // this file states no session count for its capstone
        icon: 'flag',
        objectives: [], notes: [],
        isCapstone: true,
        isGap: false,
      };
      cur.researchMode = 'Ship evidence';
      group = null;
      inColonList = false;
      modules.push(cur);
      continue;
    }

    if (line === titleLine || line === scopeLine || line === metaLine) continue;
    pushLine(line);
  }

  if (!modules.length) todos.push('No modules parsed — check the module header format.');
  /*
   * Most source files express level completion as module-level Outcome lines
   * rather than a separate "By the end..." section. Preserve an explicit
   * completion section when present, then use those authored module outcomes as
   * the level's measurable exit criteria. This keeps the data useful to
   * progress UIs without inventing a second summary.
   */
  const authoredModuleOutcomes = modules
    .map((module) => module.outcome || module.finalResult)
    .filter(Boolean);
  const exitOutcomes = [...new Set([...completionOutcomes, ...authoredModuleOutcomes])];
  for (const module of modules) {
    module.evidence = module.tryIt || module.finalResult || module.outcome || null;
    module.competencyTags = competencyTagsFor(
      [module.name, ...module.objectives.map((objective) => objective.text), module.outcome || ''].join(' '),
    );
  }

  const capstone = modules.find((m) => m.isCapstone) || null;
  /* A projects level is entirely P-prefixed builds, so it has no separate
     capstone — detected structurally rather than by hardcoding its number. */
  const isProjectsLevel = modules.length > 0 && modules.every((m) => m.id.startsWith('P'));
  if (!capstone && !isProjectsLevel) todos.push('No capstone/ship-it module found.');

  const totalSessions = modules.reduce((n, m) => n + (m.sessionCount || 0), 0);

  // Cross-check against a stated duration where the file gives one.
  const stated = raw.match(/Suggested duration:\s*(\d+)\s*sessions/i);
  if (stated && Number(stated[1]) !== totalSessions) {
    todos.push(`Stated duration (${stated[1]}) != sum of module sessions (${totalSessions}).`);
  }

  const phase = PHASES.find((p) => p.levels.includes(number));
  const guidance = LEVEL_GUIDANCE[number];
  if (!guidance) throw new Error(`${file}: missing progression metadata for level ${number}`);
  const durationMatch = raw.match(/Suggested duration:\s*\d+\s*sessions\s*\(~(\d+)\s*weeks?\)/i);

  return {
    number,
    slug: `level-${number}`,
    title,
    sourceFile: file,
    scope,
    prereqStated: prereqStated || null,
    prerequisites,
    phase: phase.id,
    icon: LEVEL_ICONS[number] || 'circle-dot',
    modules,
    project: capstone ? capstone.id : null,
    moduleCount: modules.length,
    objectiveCount: modules.reduce((count, module) => count + module.objectives.length, 0),
    capstoneCount: modules.filter((module) => module.isCapstone).length,
    assessmentStandard: capstone
      ? 'Complete the objectives, submit the evidence artifact, and defend the capstone result with limitations.'
      : 'Complete the objectives and produce the module evidence artifact before progressing.',
    totalSessions,
    statedSessions: stated ? Number(stated[1]) : null,
    estimatedWeeks: durationMatch ? Number(durationMatch[1]) : null,
    ...guidance,
    completionOutcomes: exitOutcomes,
    todos,
  };
}

const dir = findContentDir();
const files = readdirSync(dir)
  .filter((f) => /^level\d+.*\.txt$/i.test(f))
  .sort((a, b) => Number(a.match(/\d+/)[0]) - Number(b.match(/\d+/)[0]));

const levels = files.map((f) => parseLevel(f, readFileSync(join(dir, f), 'utf8')))
  .sort((a, b) => a.number - b.number);

const expected = Array.from({ length: 16 }, (_, i) => i);
const missing = expected.filter((n) => !levels.some((l) => l.number === n));
if (missing.length) throw new Error(`Missing level files for: ${missing.join(', ')}`);

const out = {
  generatedFrom: dir.replace(root, '.'),
  totalLevels: levels.length,
  totalSessions: levels.reduce((n, l) => n + l.totalSessions, 0),
  totalModules: levels.reduce((n, l) => n + l.modules.length, 0),
  phases: PHASES,
  levels,
};

mkdirSync(join(root, 'src/data'), { recursive: true });
writeFileSync(join(root, 'src/data/levels.json'), JSON.stringify(out, null, 2));

const flagged = levels.filter((l) => l.todos.length);
console.log(`parsed ${levels.length} levels · ${out.totalModules} modules · ${out.totalSessions} sessions`);
for (const l of flagged) for (const t of l.todos) console.log(`  TODO L${l.number}: ${t}`);

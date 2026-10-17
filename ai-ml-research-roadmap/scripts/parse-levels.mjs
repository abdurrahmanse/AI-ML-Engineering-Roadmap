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

const CONTENT_DIRS = [join(root, 'AI RESEARCH ROADMAP'), join(root, 'AI-ml RESEARCH ROADMAP')];

const PHASES = [
  { id: 'foundations', name: 'Research Foundations & Lab Onboarding', levels: [0, 1, 2, 3], theme: 'scientific computing, problem formulation, literature search & applied statistics', purpose: 'Become a reliable contributor who can enter a lab, find a gap, and make defensible claims.', color: 'blue', icon: 'terminal' },
  { id: 'retrieval', name: 'Data Curation & Modeling Paradigms', levels: [4, 5, 6], theme: 'domain datasets, classical ML, deep learning, computer vision, graphs and sequence models', purpose: 'Turn real-world data and model architectures into testable research baselines.', color: 'cyan', icon: 'database' },
  { id: 'agentic', name: 'Generative Models & Experimental Science', levels: [7, 8, 9], theme: 'generative modeling, controlled ablations, fair benchmarks and scaled experimental systems', purpose: 'Design controlled experiments and scale them far enough to reveal meaningful behavior.', color: 'violet', icon: 'flask-conical' },
  { id: 'trust', name: 'Scaled Systems, Trustworthy AI & Alignment', levels: [10, 11, 12], theme: 'foundation models, interpretability, robustness, fairness and alignment for high-impact domains', purpose: 'Study powerful models critically and evaluate their behavior, risks, and limits.', color: 'emerald', icon: 'shield-check' },
  { id: 'production', name: 'Cross-Disciplinary Research', levels: [13], theme: 'multimodal methods and domain collaboration', purpose: 'Translate research questions across disciplines and lead collaborative studies.', color: 'rose', icon: 'microscope' },
  { id: 'frontier', name: 'Thesis & Research Portfolio', levels: [14], theme: 'thesis-grade evidence, reproducibility, and research communication', purpose: 'Own a substantial study from protocol through evidence and portfolio.', color: 'pink', icon: 'trophy' },
  { id: 'interview', name: 'Publishing, Defense & Careers', levels: [15], theme: 'journals, conferences, peer review, viva, interviews, and research careers', purpose: 'Publish, defend, and carry research into academic or industrial employment.', color: 'slate', icon: 'graduation-cap' },
];

/* One Lucide icon per level for AI/ML research. */
const LEVEL_ICONS = {
  0: 'terminal', 1: 'briefcase', 2: 'book-open', 3: 'sigma', 4: 'database',
  5: 'layers', 6: 'network', 7: 'sparkles', 8: 'sliders-horizontal', 9: 'cpu',
  10: 'scale', 11: 'search', 12: 'shield-check', 13: 'eye', 14: 'trophy',
  15: 'graduation-cap',
};

/* Curated progression metadata keeps the technical syllabus in the source
 * files while making the research-career journey explicit in generated data. */
const LEVEL_GUIDANCE = {
  0: { proficiency: 'Beginner', researchStage: 'Become technically independent', lifecycle: 'Compute → code → document', artifact: 'Reproducible beginner data project', careerSignal: 'Can learn, code, and communicate without copying blindly.' },
  1: { proficiency: 'Beginner', researchStage: 'Build mathematical intuition', lifecycle: 'Equations → geometry → optimization', artifact: 'Mathematical model notebook', careerSignal: 'Can explain the quantitative foundations of model behavior.' },
  2: { proficiency: 'Beginner', researchStage: 'Reason about uncertainty', lifecycle: 'Probability → estimation → inference', artifact: 'Uncertainty and bias audit', careerSignal: 'Can interpret data without overstating what it proves.' },
  3: { proficiency: 'Developing', researchStage: 'Learn how research works', lifecycle: 'Literature → question → proposal', artifact: 'Literature review and research proposal', careerSignal: 'Can turn an interest into a feasible, testable study.' },
  4: { proficiency: 'Developing', researchStage: 'Make data research-ready', lifecycle: 'Acquire → govern → document', artifact: 'Auditable dataset and benchmark pipeline', careerSignal: 'Can turn messy data into governed evidence.' },
  5: { proficiency: 'Developing', researchStage: 'Establish trustworthy baselines', lifecycle: 'Feature → model → error analysis', artifact: 'Reproducible baseline study', careerSignal: 'Can choose simple models and establish a credible control.' },
  6: { proficiency: 'Intermediate', researchStage: 'Build neural models', lifecycle: 'Tensor → gradient → training', artifact: 'Deep-learning reproduction report', careerSignal: 'Can implement, debug, and reproduce a neural method.' },
  7: { proficiency: 'Intermediate', researchStage: 'Choose modern architectures', lifecycle: 'Structure → architecture → validation', artifact: 'Architecture selection study', careerSignal: 'Can connect model design to data structure and evidence.' },
  8: { proficiency: 'Advanced', researchStage: 'Design defensible experiments', lifecycle: 'Measure → ablate → identify', artifact: 'Peer-review-ready benchmark', careerSignal: 'Can isolate contributions and state causal limits.' },
  9: { proficiency: 'Advanced', researchStage: 'Use generative systems responsibly', lifecycle: 'Generate → adapt → evaluate', artifact: 'Generative system evaluation', careerSignal: 'Can evaluate foundation-model behavior beyond a demo.' },
  10: { proficiency: 'Advanced', researchStage: 'Scale research software', lifecycle: 'Package → operate → scale', artifact: 'Reproducible research platform', careerSignal: 'Can run reliable experiments across people, machines, and budgets.' },
  11: { proficiency: 'Advanced', researchStage: 'Make systems trustworthy', lifecycle: 'Explain → attack → mitigate', artifact: 'Trustworthy-AI evaluation', careerSignal: 'Can measure model risk and communicate residual harm.' },
  12: { proficiency: 'Advanced', researchStage: 'Translate across domains', lifecycle: 'Fuse → collaborate → deploy', artifact: 'Cross-disciplinary multimodal study', careerSignal: 'Can turn domain needs into valid technical research.' },
  13: { proficiency: 'Research-ready', researchStage: 'Lead independent work', lifecycle: 'Gap → plan → pilot', artifact: 'Independent study plan', careerSignal: 'Can lead a scoped research project and make go/no-go decisions.' },
  14: { proficiency: 'Research-ready', researchStage: 'Produce thesis-grade evidence', lifecycle: 'Protocol → evidence → portfolio', artifact: 'Thesis or conference research portfolio', careerSignal: 'Can own a project from proposal through reproducible results.' },
  15: { proficiency: 'Career-ready', researchStage: 'Publish, defend, and launch', lifecycle: 'Write → review → defend → interview', artifact: 'Research scientist launch portfolio', careerSignal: 'Can communicate research to reviewers, committees, and employers.' },
};

/* Keyword -> Lucide icon for module rows. */
const MODULE_ICON_RULES = [
  // unmistakable, subject-defining terms
  [/capstone|ship a|ship it|portfolio & |portfolio and /i, 'flag'],
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

export interface ResearchGuideSection {
  id: string;
  icon: string;
  eyebrow: string;
  title: string;
  summary: string;
  steps: string[];
  href: string;
  linkLabel: string;
}

export const researchGuide: ResearchGuideSection[] = [
  {
    id: 'start',
    icon: 'compass',
    eyebrow: '01 · Start here',
    title: 'Enter research with a plan',
    summary: 'Pick a question, find a mentor, map prereqs, and set a twelve-month plan.',
    steps: [
      'Assess foundations and pick a focused problem.',
      'Map the literature before choosing a model.',
      'Write a proposal with hypotheses and decision gates.',
    ],
    href: '/level/3/',
    linkLabel: 'Research literacy →',
  },
  {
    id: 'read',
    icon: 'book-open',
    eyebrow: '02 · Read papers',
    title: 'Turn papers into working knowledge',
    summary: 'Read strategically, reproduce key claims, and track open problems.',
    steps: [
      'Three-pass read: claim → method → limitations.',
      'Trace citations and log inclusion decisions.',
      'Reimplement a baseline before proposing improvements.',
    ],
    href: '/level/3/#m3-1',
    linkLabel: 'Reading workflow →',
  },
  {
    id: 'run',
    icon: 'flask-conical',
    eyebrow: '03 · Run studies',
    title: 'Make evidence you can defend',
    summary: 'From baselines to controlled experiments, ablations, and reproducible artifacts.',
    steps: [
      'Pre-register: question, metric, baseline, analysis.',
      'Track seeds, configs, compute, and negative results.',
      'Separate confirmatory from exploratory findings.',
    ],
    href: '/level/8/',
    linkLabel: 'Experimental design →',
  },
  {
    id: 'publish',
    icon: 'file-check-2',
    eyebrow: '04 · Publish well',
    title: 'Choose the right venue',
    summary: 'Match the venue to your contribution, audience, and review model.',
    steps: [
      'Select by scope, novelty bar, format, and ethics policy.',
      'Package manuscript, code, data statement, and cover letter.',
      'Respond to reviews with evidence and a change table.',
    ],
    href: '/level/15/#m15-1',
    linkLabel: 'Prepare a submission →',
  },
  {
    id: 'assess',
    icon: 'graduation-cap',
    eyebrow: '05 · Assess & defend',
    title: 'Prepare for vivas and interviews',
    summary: 'Practice fundamentals, design choices, limitations, and communication.',
    steps: [
      'Map theory, methods, statistics, and ethics gaps.',
      'Rehearse a thesis viva with skeptical follow-ups.',
      'Use a rubric to close coding and behavioral round gaps.',
    ],
    href: '/100-days/interview-prep/',
    linkLabel: 'Interview prep →',
  },
  {
    id: 'career',
    icon: 'briefcase-business',
    eyebrow: '06 · Build a career',
    title: 'Convert work into opportunities',
    summary: 'Make your work legible to labs and industry through a focused portfolio.',
    steps: [
      'Compare PhD, postdoc, scientist, and applied paths.',
      'Build 2–3 deep projects, not many shallow demos.',
      'Plan mentors, references, and your next question.',
    ],
    href: '/100-days/projects/',
    linkLabel: 'Portfolio projects →',
  },
];

export const journalTypes = [
  ['Society or flagship journal', 'Archival contributions with extensive peer review.'],
  ['Transactions journal', 'Method-focused papers with detailed experiments.'],
  ['Application or domain journal', 'AI/ML evaluated in medicine, climate, or security.'],
  ['Methods or survey journal', 'New methods, benchmarks, or synthesis work.'],
  ['Workshop, short paper, or demo', 'Early ideas and community feedback.'],
  ['Preprint and artifact release', 'Fast public dissemination; complements peer review.'],
] as const;

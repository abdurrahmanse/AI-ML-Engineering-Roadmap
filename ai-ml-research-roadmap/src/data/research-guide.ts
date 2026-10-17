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
    summary: 'Choose a question, find a mentor or lab, map prerequisites, and set a realistic twelve-month learning and publication plan.',
    steps: [
      'Assess your foundations and choose a focused problem area.',
      'Build a literature map before choosing a model or dataset.',
      'Write a proposal with hypotheses, risks, ethics, and decision gates.',
    ],
    href: '/level/3/',
    linkLabel: 'Open research literacy',
  },
  {
    id: 'read',
    icon: 'book-open',
    eyebrow: '02 · Read papers',
    title: 'Turn papers into working knowledge',
    summary: 'Read strategically, reproduce important claims, compare methods fairly, and maintain a literature matrix that exposes open problems.',
    steps: [
      'Use a three-pass read: claim and structure, method and evidence, limitations.',
      'Trace citations and record inclusion and exclusion decisions.',
      'Reimplement a baseline before proposing an improvement.',
    ],
    href: '/level/3/#m3-1',
    linkLabel: 'Learn the reading workflow',
  },
  {
    id: 'run',
    icon: 'flask-conical',
    eyebrow: '03 · Run studies',
    title: 'Make evidence you can defend',
    summary: 'Move from data stewardship and baselines to controlled experiments, uncertainty, causal reasoning, ablations, and reproducible artifacts.',
    steps: [
      'Pre-register the primary question, metric, baseline, and analysis.',
      'Track seeds, configurations, compute, negative results, and decisions.',
      'Separate confirmatory findings from exploratory discoveries.',
    ],
    href: '/level/8/',
    linkLabel: 'Explore experimental design',
  },
  {
    id: 'publish',
    icon: 'file-check-2',
    eyebrow: '04 · Publish well',
    title: 'Choose the right publication path',
    summary: 'Understand conferences, journals, workshops, preprints, and artifact tracks; match the venue to your contribution, audience, and review model.',
    steps: [
      'Select a venue by scope, novelty bar, format, timeline, and ethics policy.',
      'Package the manuscript, code, data statement, supplementary material, and cover letter.',
      'Respond to reviews with evidence, a change table, and calibrated claims.',
    ],
    href: '/level/15/#m15-1',
    linkLabel: 'Prepare a submission',
  },
  {
    id: 'assess',
    icon: 'graduation-cap',
    eyebrow: '05 · Assess & defend',
    title: 'Prepare for exams, vivas, and interviews',
    summary: 'Practice the reasoning that committees and research hiring panels test: fundamentals, design choices, limitations, communication, and collaboration.',
    steps: [
      'Build an oral-exam map across theory, methods, statistics, and ethics.',
      'Rehearse a thesis viva and job talk with skeptical follow-up questions.',
      'Use a rubric to close gaps in coding, paper discussion, and behavioral rounds.',
    ],
    href: '/100-days/interview-prep/',
    linkLabel: 'Open interview preparation',
  },
  {
    id: 'career',
    icon: 'briefcase-business',
    eyebrow: '06 · Build a career',
    title: 'Convert work into opportunities',
    summary: 'Make your evidence legible to labs, universities, and industry teams through a focused portfolio, research statement, CV, and collaboration record.',
    steps: [
      'Compare research assistant, PhD, postdoctoral, scientist, and applied paths.',
      'Build two or three deep projects instead of a collection of shallow demos.',
      'Plan mentors, references, applications, and your next research question.',
    ],
    href: '/100-days/projects/',
    linkLabel: 'Choose portfolio projects',
  },
];

export const journalTypes = [
  ['Society or flagship journal', 'Deep, archival contributions with extensive review and a broad or specialist readership.'],
  ['Transactions journal', 'Technical, method-focused papers with detailed experiments and reproducibility expectations.'],
  ['Application or domain journal', 'AI/ML work evaluated in a substantive domain such as medicine, climate, biology, or security.'],
  ['Methods or survey journal', 'New methods, benchmarks, systematic reviews, or carefully scoped synthesis work.'],
  ['Workshop, short paper, or demo track', 'Early ideas, focused results, position papers, and community feedback before a larger study.'],
  ['Preprint and artifact release', 'Fast public dissemination and reusable code or data; useful complements, not substitutes for peer review.'],
] as const;

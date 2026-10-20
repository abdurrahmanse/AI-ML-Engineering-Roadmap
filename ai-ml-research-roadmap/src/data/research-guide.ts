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
    eyebrow: '01 · Scope',
    title: 'Gaps & Hypotheses',
    summary: 'Turn literature curiosity into falsifiable research questions and preregistrations.',
    steps: [
      'Search arXiv, IEEE & PubMed',
      'Isolate genuine literature deltas',
      'Preregister studies on OSF',
    ],
    href: '/level/3/',
    linkLabel: 'Research literacy →',
  },
  {
    id: 'reproduce',
    icon: 'book-open',
    eyebrow: '02 · Baselines',
    title: 'Paper Reproduction',
    summary: 'Reproduce landmark papers and establish compute-matched baselines first.',
    steps: [
      'Code autograd from scratch',
      'Verify standard benchmarks',
      'Tune competitive classical models',
    ],
    href: '/level/6/',
    linkLabel: 'Deep learning →',
  },
  {
    id: 'run',
    icon: 'flask-conical',
    eyebrow: '03 · Experiments',
    title: 'Controlled Ablations',
    summary: 'Isolate causal mechanisms with compute parity and statistical tests.',
    steps: [
      'Run OFAT & factorial sweeps',
      'Report mean ± std over 5+ seeds',
      'Audit against data leakage',
    ],
    href: '/level/8/',
    linkLabel: 'Ablation design →',
  },
  {
    id: 'publish',
    icon: 'file-check-2',
    eyebrow: '04 · Writing',
    title: 'Paper & Venues',
    summary: 'Draft publication-ready LaTeX manuscripts and target legitimate venues.',
    steps: [
      'Write claim-driven narratives',
      'Target NeurIPS, ICML, TPAMI',
      'Reject predatory paper mills',
    ],
    href: '/level/15/#m15-1',
    linkLabel: 'Manuscript writing →',
  },
  {
    id: 'rebut',
    icon: 'graduation-cap',
    eyebrow: '05 · Rebuttals',
    title: 'Review & Defense',
    summary: 'Master point-by-point rebuttals and defend your doctoral viva voce.',
    steps: [
      'Build structured rebuttal tables',
      'Run emergency ablation tests',
      'Rehearse oral defense questions',
    ],
    href: '/level/15/#m15-3',
    linkLabel: 'Rebuttal & viva →',
  },
  {
    id: 'career',
    icon: 'briefcase-business',
    eyebrow: '06 · Careers',
    title: 'Labs & Leadership',
    summary: 'Translate research artifacts into faculty, postdoc, or industrial lab roles.',
    steps: [
      'Release citable open-source code',
      'Author competitive grant proposals',
      'Deliver academic job talks',
    ],
    href: '/level/15/#m15-4',
    linkLabel: 'Research careers →',
  },
];

export const journalTypes = [
  ['Top Conferences (NeurIPS, ICML, CVPR, ACL)', 'Premier venues for high-impact algorithmic and empirical breakthroughs.'],
  ['Flagship Journals (JMLR, IEEE TPAMI, Nature MI)', 'Archival monographs with deep theory, comprehensive benchmarks, and proofs.'],
  ['Domain Venues (MICCAI, USENIX Security, KDD)', 'Targeted venues evaluated by clinical, cybersecurity, or data mining experts.'],
  ['Peer-Reviewed Workshops', 'Ideal for pilot studies, negative results, and preliminary thesis proposals.'],
  ['Preprints & Repositories (arXiv, Zenodo)', 'Rapid open-access dissemination establishing discovery priority with code DOIs.'],
  ['Predatory Venue Avoidance', 'Reject spam calls, 48-hour acceptance promises, fake boards, and paper mills.'],
] as const;

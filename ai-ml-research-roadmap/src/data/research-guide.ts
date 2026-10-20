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
    eyebrow: '01 · Scope & Formulation',
    title: 'Isolate Gaps & Plan the Thesis',
    summary: 'Transition from passive literature reading to scoping defensible research questions, identifying genuine delta gaps, and formalizing hypotheses.',
    steps: [
      'Map research landscapes across ArXiv, IEEE Xplore, ACM DL, and PubMed.',
      'Synthesize taxonomies and extract genuine delta gaps rather than derivative tweaks.',
      'Author an OSF pre-registration detailing primary metrics, hypotheses, and decision gates.',
    ],
    href: '/level/3/',
    linkLabel: 'Research literacy & gaps →',
  },
  {
    id: 'reproduce',
    icon: 'book-open',
    eyebrow: '02 · Reproduction & Baselines',
    title: 'Build Rock-Solid Baselines First',
    summary: 'Reproduce landmark papers and establish compute-matched baselines before claiming novel architectural or algorithmic superiority.',
    steps: [
      'Implement core autograd engines, loss formulations, and backprop from first principles.',
      'Validate claims on standard benchmark datasets using exact published hyperparameter grids.',
      'Establish strong classical baselines (XGBoost, SVM, Ensembles) before deploying deep models.',
    ],
    href: '/level/6/',
    linkLabel: 'Deep learning reproduction →',
  },
  {
    id: 'run',
    icon: 'flask-conical',
    eyebrow: '03 · Experimental Design & Ablations',
    title: 'Produce Evidence That Withstands Scrutiny',
    summary: 'Isolate causal mechanisms through systematic destructive and constructive ablations, compute parity, and multi-seed statistical significance.',
    steps: [
      'Execute One-Factor-at-a-Time (OFAT) and full factorial ablation sweeps across components.',
      'Report mean ± std over 5+ random seeds with Wilcoxon signed-rank significance and FDR bounds.',
      'Decontaminate evaluation benchmarks and audit for subtle target, patient, or temporal data leakage.',
    ],
    href: '/level/8/',
    linkLabel: 'Experimental design & ablations →',
  },
  {
    id: 'publish',
    icon: 'file-check-2',
    eyebrow: '04 · Scholarly Writing & Venue Selection',
    title: 'Write for Peer Review & Avoid Predatory Traps',
    summary: 'Draft publication-ready LaTeX manuscripts, target top-tier venues (NeurIPS, ICML, CVPR, JMLR), and rigorously reject predatory outlets.',
    steps: [
      'Structure papers around claim-driven narratives, vector TikZ diagrams, and formal math proofs.',
      'Target tier-1 conferences and flagship IEEE/ACM/JMLR transactions matched to your contribution.',
      'Audit against predatory publishers, hijacked journals, and commercial citation-for-cash mills.',
    ],
    href: '/level/15/#m15-1',
    linkLabel: 'Publishing & venue selection →',
  },
  {
    id: 'rebut',
    icon: 'graduation-cap',
    eyebrow: '05 · Rebuttals & Viva Defense',
    title: 'Win Peer Review & Defend the Thesis',
    summary: 'Master the point-by-point author rebuttal matrix on OpenReview, address reviewer critiques empirically, and defend your doctoral dissertation.',
    steps: [
      'Structure rebuttals with gratitude, categorized change tables, and newly run ablation experiments.',
      'Separate subjective reviewer pushback from methodological gaps with empirical counter-evidence.',
      'Rehearse doctoral viva defense presentations with deep theoretical follow-ups on limitations.',
    ],
    href: '/level/15/#m15-3',
    linkLabel: 'Rebuttals & viva defense →',
  },
  {
    id: 'career',
    icon: 'briefcase-business',
    eyebrow: '06 · Research Leadership & Careers',
    title: 'Direct Labs & Translate Science',
    summary: 'Convert publications and open-source artifacts into tenure-track faculty, research scientist, or industrial AI lab leadership roles.',
    steps: [
      'Curate a defensible research portfolio with verified GitHub reproduction repositories and Docker images.',
      'Direct multidisciplinary teams, author competitive grant proposals, and mentor junior researchers.',
      'Navigate academic job talks, chalk talks, and research scientist screening rounds.',
    ],
    href: '/level/15/#m15-4',
    linkLabel: 'Careers & lab leadership →',
  },
];

export const journalTypes = [
  ['Top-Tier Archival Conferences (NeurIPS, ICML, ICLR, CVPR, ACL)', 'Fast-cycle, hyper-competitive (15–25% acceptance), proceedings-based venues prioritizing major algorithmic, empirical, or theoretical breakthroughs.'],
  ['Flagship Journals & Transactions (JMLR, IEEE TPAMI, Nature MI, IEEE TIFS)', 'Comprehensive, archival monographs with multiple revision rounds; ideal for mature theory, exhaustive benchmark studies, or deep domain translations.'],
  ['Specialized Domain Conferences (USENIX Security, MICCAI, CHIL, KDD)', 'High-prestige venues evaluated by disciplinary experts where domain-specific constraints, clinical validity, or threat models take center stage.'],
  ['Peer-Reviewed Workshops & Short Papers', 'Focused venues co-located with top conferences; ideal for early pilot studies, negative results, emerging benchmark challenges, and preliminary thesis proposals.'],
  ['Open-Access Preprints & Artifact Repositories (arXiv, OSF, Hugging Face)', 'Rapid public dissemination establishing priority of discovery; pairs an archival preprint with containerized code, configuration hashes, and model weights.'],
  ['Predatory Venues & Paper Mill Avoidance', 'Critical warning signs to reject: unsolicited email invitations, guaranteed acceptance within 7 days, hidden author processing charges (APCs), fake editorial boards, and hijacked journal clones.'],
] as const;

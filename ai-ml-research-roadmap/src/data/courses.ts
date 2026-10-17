/**
 * Academic courses, seminal research lecture series, premier publication journals,
 * and foundational textbooks mapped per level for the AI/ML Research Roadmap.
 */

export interface Course {
  title: string;
  status?: "live" | "soon";
  note?: string;
  url?: string;
  source?: string;
}

export const AbdurRahman_ONE_URL = "https://abdurrahmans.vercel.app";
export const AbdurRahman_URL = "https://abdurrahmans.vercel.app";

export const coursesByLevel: Record<number, Course[]> = {
  0: [
    {
      title: "The Missing Semester of Your CS Education",
      status: "live",
      url: "https://missing.csail.mit.edu/",
      source: "MIT CSAIL (Shell, Git, SSH, Containers)",
    },
    {
      title: "Reproducible Data Science & Environment Management",
      status: "live",
      url: "https://the-turing-way.netlify.app/",
      source: "The Turing Way Handbook for Reproducible Research",
    },
    {
      title: "Scientific Experiment Tracking & Laboratory Hygiene",
      status: "live",
      source: "Weights & Biases / MLflow Research Guide",
    },
  ],
  1: [
    {
      title: "How to Join a Research Lab as a Student",
      status: "live",
      source: "Stanford Computer Science Department Guide",
    },
    {
      title: "Securing a Research Assistantship & Academic Networking",
      status: "live",
      source: "CRA-WP Graduate & Undergraduate Research Guidance",
    },
    {
      title: "Formulating Research Proposals & Identifying Open Gaps",
      status: "live",
      source: "National Science Foundation (NSF) Graduate Research Guide",
    },
  ],
  2: [
    {
      title: "How to Read an Academic Paper (The Three-Pass Method)",
      status: "live",
      url: "http://ccr.sigcomm.org/online/files/p83-keshav.pdf",
      source: "S. Keshav (ACM SIGCOMM Computer Communication Review)",
    },
    {
      title: "Navigating Scholarly Databases: IEEE Xplore, ACM DL & PubMed",
      status: "live",
      source: "IEEE / ACM / PubMed Bibliographic Search Masterclass",
    },
    {
      title: "Systematic Literature Review (SLR) & Reference Management with Zotero",
      status: "live",
      source: "ACM Computing Surveys (CSUR) Methodology Standards",
    },
  ],
  3: [
    {
      title: "Mathematics for Machine Learning",
      status: "live",
      url: "https://mml-book.github.io/",
      source: "Deisenroth, Faisal & Ong (Cambridge University Press)",
    },
    {
      title: "All of Statistics: A Concise Course in Statistical Inference",
      status: "live",
      url: "https://link.springer.com/book/10.1007/978-0-387-21736-9",
      source: "Larry Wasserman (Springer Texts in Statistics)",
    },
    {
      title: "Statistical Hypothesis Testing & Power Analysis for AI Experiments",
      status: "live",
      source: "Empirical Methods for Artificial Intelligence (Paul R. Cohen, MIT Press)",
    },
  ],
  4: [
    {
      title: "Clinical Healthcare Datasets & PhysioNet Credentialing",
      status: "live",
      url: "https://physionet.org/about/citi-training/",
      source: "MIT Laboratory for Computational Physiology (MIMIC-IV / CITI)",
    },
    {
      title: "Cybersecurity Telemetry & Benchmark Dataset Extraction",
      status: "live",
      source: "Canadian Institute for Cybersecurity (CIC-IDS) & Ember Malware",
    },
    {
      title: "Datasheets for Datasets & Research Ethics Governance",
      status: "live",
      url: "https://arxiv.org/abs/1803.09010",
      source: "Timnit Gebru et al. (Communications of the ACM)",
    },
  ],
  5: [
    {
      title: "Machine Learning: Tree Ensembles to Deep Architectures",
      status: "live",
      source: "Stanford CS229 (Machine Learning / Andrew Ng)",
    },
    {
      title: "Deep Learning for Medical Computer Vision & Volumetric Segmentation",
      status: "live",
      source: "Medical Segmentation Decathlon & MONAI Research Consortium",
    },
    {
      title: "Self-Supervised Representation Learning (SimCLR, MoCo & MAE)",
      status: "live",
      source: "Meta AI Research & Berkeley EECS Advanced Vision Seminars",
    },
  ],
  6: [
    {
      title: "Machine Learning with Graphs (CS224W)",
      status: "live",
      url: "https://web.stanford.edu/class/cs224w/",
      source: "Stanford CS224W (Jure Leskovec - GNNs for Security & Science)",
    },
    {
      title: "Transformers United & Attention Mechanics (CS25)",
      status: "live",
      url: "https://web.stanford.edu/class/cs25/",
      source: "Stanford CS25 (Transformers & Attention Innovations)",
    },
    {
      title: "Geometric Deep Learning: Grids, Groups, Graphs & Geodesics",
      status: "live",
      url: "https://geometricdeeplearning.com/",
      source: "Bronstein, Bruna, Cohen & Veličković",
    },
  ],
  7: [
    {
      title: "Deep Generative Models (CS236)",
      status: "live",
      url: "https://deepgenerativemodels.github.io/",
      source: "Stanford CS236 (Stefano Ermon - Diffusion, VAEs, SDEs)",
    },
    {
      title: "Continuous Normalizing Flows & Optimal Transport Flow Matching",
      status: "live",
      source: "Yaron Lipman et al. (Meta AI / Weizmann Institute)",
    },
    {
      title: "Privacy-Preserving Synthetic Data & Membership Inference Audits",
      status: "live",
      source: "Harvard Privacy Tools Project & Differential Privacy Research",
    },
  ],
  8: [
    {
      title: "Empirical Experimental Design & Ablation Methodologies",
      status: "live",
      source: "NeurIPS Reproducibility Challenge & Guidelines",
    },
    {
      title: "Fair Baseline Selection & Mitigating the Weak Baseline Fallacy",
      status: "live",
      source: "ACM Computing Surveys (CSUR) Experimental Rigor Protocol",
    },
    {
      title: "Benchmark De-Contamination & Evaluation Science",
      status: "live",
      source: "LMSYS Organization & EleutherAI Evaluation Standards",
    },
  ],
  9: [
    {
      title: "Language Modeling from Scratch (HPC Systems & Supercomputing)",
      status: "live",
      url: "https://stanford-cs336.github.io/spring2024/",
      source: "Stanford CS336 (Distributed Systems, SLURM & MFU Profiling)",
    },
    {
      title: "High Performance Computing for Deep Learning (11-868)",
      status: "live",
      source: "Carnegie Mellon University (CMU 11-868 / Supercomputing)",
    },
    {
      title: "Distributed Training at Scale (Megatron-LM & PyTorch FSDP)",
      status: "live",
      source: "NVIDIA Developer & PyTorch Core Distributed Team",
    },
  ],
  10: [
    {
      title: "Large Language Model Pre-Training Dynamics (CS324)",
      status: "live",
      url: "https://stanford-cs324.github.io/winter2022/",
      source: "Stanford CS324 (Percy Liang - Scaling Laws & Training Dynamics)",
    },
    {
      title: "Domain-Adaptive Pre-Training (DAPT) in Specialized Sectors",
      status: "live",
      source: "Allen Institute for AI (AI2) & BioMedNLP Research",
    },
    {
      title: "Parameter-Efficient Fine-Tuning: LoRA, QLoRA & DoRA",
      status: "live",
      source: "Tim Dettmers et al. (University of Washington / Meta AI)",
    },
  ],
  11: [
    {
      title: "Mechanistic Interpretability of Neural Networks",
      status: "live",
      url: "https://transformer-circuits.pub/",
      source: "Anthropic Research (Transformer Circuits / Elhage et al.)",
    },
    {
      title: "Alignment Research Engineer Accelerator (ARENA 3.0)",
      status: "live",
      url: "https://www.arena.education/",
      source: "Neel Nanda (ARENA Interpretability Curriculum)",
    },
    {
      title: "Axiomatic Feature Attribution: SHAP & Integrated Gradients",
      status: "live",
      source: "Lundberg (Nature Biomedical Engineering) & Sundararajan (ICML)",
    },
  ],
  12: [
    {
      title: "Adversarial Machine Learning & Robust Optimization",
      status: "live",
      source: "Aleksander Mądry (MIT EECS / Center for Deployable Machine Learning)",
    },
    {
      title: "Preference Alignment: Direct Preference Optimization (DPO)",
      status: "live",
      source: "Rafael Rafailov et al. (Stanford University AI Lab)",
    },
    {
      title: "Algorithmic Fairness, Demographic Disparity & Bias Auditing",
      status: "live",
      url: "https://fairmlclass.github.io/",
      source: "Moritz Hardt (UC Berkeley / Max Planck Institute)",
    },
  ],
  13: [
    {
      title: "Visual Recognition and Multimodal Foundations (CS231N)",
      status: "live",
      source: "Stanford CS231N (Fei-Fei Li / Vision-Language Models)",
    },
    {
      title: "Multimodal Clinical AI & Radiology Foundation Models",
      status: "live",
      source: "Nature Medicine / Lancet Digital Health Research Reviews",
    },
    {
      title: "Multimodal Cybersecurity & Threat Intelligence Correlation",
      status: "live",
      source: "USENIX Security / IEEE Symposium on Security and Privacy (S&P)",
    },
  ],
  14: [
    {
      title: "Mastering the AI/ML Doctoral Dissertation & Honors Thesis",
      status: "live",
      source: "MIT EECS / Stanford CS Doctoral Thesis Handbook",
    },
    {
      title: "Conference-Grade Experimental Replication & Artifact Evaluation",
      status: "live",
      source: "ML Reproducibility Challenge & ACM Artifact Evaluation",
    },
    {
      title: "Flagship Research Capstone Execution Protocol",
      status: "live",
      source: "OpenReview Premier Track Proceedings",
    },
  ],
  15: [
    {
      title: "Whitesides' Group: Writing a Scientific Paper",
      status: "live",
      url: "https://doi.org/10.1002/adma.200400767",
      source: "George M. Whitesides (Harvard University / Advanced Materials)",
    },
    {
      title: "How to Write a Great Research Paper & Give a Great Talk",
      status: "live",
      url: "https://www.microsoft.com/en-us/research/academic-program/write-great-research-paper/",
      source: "Simon Peyton Jones (Microsoft Research / University of Cambridge)",
    },
    {
      title: "Navigating Premier Journals & OpenReview Author Rebuttals",
      status: "live",
      source: "IEEE TPAMI, JMLR & Nature Machine Intelligence Author Guides",
    },
  ],
};

export const coursesFor = (level: number): Course[] =>
  coursesByLevel[level] ?? [];

export interface Book {
  title: string;
  author: string;
  url?: string;
  venue?: string;
}

export const booksByLevel: Record<number, Book[]> = {
  0: [
    {
      title: "The Turing Way: A Handbook for Reproducible Data Science",
      author: "The Turing Way Community",
      url: "https://the-turing-way.netlify.app/",
      venue: "Open Science Monograph",
    },
  ],
  1: [
    {
      title: "Tomorrow's Professor: Preparing for Academic Careers in Science & Engineering",
      author: "Richard M. Reis (Stanford University)",
      url: "https://tomprof.stanford.edu/",
      venue: "IEEE Press / Wiley",
    },
  ],
  2: [
    {
      title: "How to Read a Paper",
      author: "S. Keshav (University of Waterloo)",
      url: "http://ccr.sigcomm.org/online/files/p83-keshav.pdf",
      venue: "ACM SIGCOMM Computer Communication Review",
    },
    {
      title: "Writing for Computer Science (3rd ed.)",
      author: "Justin Zobel (University of Melbourne)",
      url: "https://link.springer.com/book/10.1007/978-1-4471-6639-9",
      venue: "Springer Texts in Computer Science",
    },
  ],
  3: [
    {
      title: "Mathematics for Machine Learning",
      author: "Marc Peter Deisenroth, A. Aldo Faisal, Cheng Soon Ong",
      url: "https://mml-book.github.io/",
      venue: "Cambridge University Press",
    },
    {
      title: "All of Statistics: A Concise Course in Statistical Inference",
      author: "Larry Wasserman (Carnegie Mellon University)",
      url: "https://link.springer.com/book/10.1007/978-0-387-21736-9",
      venue: "Springer Texts in Statistics",
    },
  ],
  4: [
    {
      title: "Datasheets for Datasets",
      author: "Timnit Gebru, Jamie Morgenstern, Briana Vecchione, et al.",
      url: "https://arxiv.org/abs/1803.09010",
      venue: "Communications of the ACM (CACM)",
    },
    {
      title: "MIMIC-IV, a Freely Accessible Electronic Health Record Dataset",
      author: "Alistair Johnson, Lucas Bulgarelli, Tom Pollard, et al.",
      url: "https://www.nature.com/articles/s41597-023-01988-w",
      venue: "Nature Scientific Data",
    },
  ],
  5: [
    {
      title: "Deep Learning",
      author: "Ian Goodfellow, Yoshua Bengio, Aaron Courville",
      url: "https://www.deeplearningbook.org/",
      venue: "MIT Press",
    },
    {
      title: "The Elements of Statistical Learning: Data Mining, Inference, and Prediction",
      author: "Trevor Hastie, Robert Tibshirani, Jerome Friedman",
      url: "https://hastie.su.domains/ElemStatLearn/",
      venue: "Springer Series in Statistics",
    },
  ],
  6: [
    {
      title: "Geometric Deep Learning: Grids, Groups, Graphs, Geodesics, and Gauges",
      author: "Michael M. Bronstein, Joan Bruna, Taco Cohen, Petar Veličković",
      url: "https://geometricdeeplearning.com/",
      venue: "MIT Press / Cambridge",
    },
    {
      title: "Speech and Language Processing (3rd ed.)",
      author: "Dan Jurafsky, James H. Martin (Stanford University)",
      url: "https://web.stanford.edu/~jurafsky/slp3/",
      venue: "Pearson / Prentice Hall",
    },
  ],
  7: [
    {
      title: "Probabilistic Machine Learning: Advanced Topics",
      author: "Kevin P. Murphy (Google DeepMind)",
      url: "https://probml.github.io/pml-book/book2.html",
      venue: "MIT Press",
    },
  ],
  8: [
    {
      title: "Empirical Methods for Artificial Intelligence",
      author: "Paul R. Cohen (University of Massachusetts)",
      url: "https://mitpress.mit.edu/9780262032254/empirical-methods-for-artificial-intelligence/",
      venue: "MIT Press",
    },
  ],
  9: [
    {
      title: "High Performance Python: Practical Performant Programming for Humans",
      author: "Micha Gorelick, Ian Ozsvald",
      url: "https://www.oreilly.com/library/view/high-performance-python/9781492055013/",
      venue: "O'Reilly Media",
    },
  ],
  10: [
    {
      title: "Scaling Laws for Neural Language Models",
      author: "Jared Kaplan, Sam McCandlish, Tom Henighan, et al. (OpenAI)",
      url: "https://arxiv.org/abs/2001.08361",
      venue: "ArXiv / OpenAI Research",
    },
    {
      title: "Training Compute-Optimal Large Language Models (Chinchilla)",
      author: "Jordan Hoffmann, Sebastian Borgeaud, Arthur Mensch, et al. (DeepMind)",
      url: "https://arxiv.org/abs/2203.15556",
      venue: "NeurIPS Best Paper Track",
    },
  ],
  11: [
    {
      title: "A Mathematical Framework for Transformer Circuits",
      author: "Nelson Elhage, Neel Nanda, Catherine Olsson, et al. (Anthropic)",
      url: "https://transformer-circuits.pub/2021/framework/index.html",
      venue: "Transformer Circuits Publishing",
    },
    {
      title: "A Unified Approach to Interpreting Model Predictions (SHAP)",
      author: "Scott M. Lundberg, Su-In Lee",
      url: "https://proceedings.neurips.cc/paper/2017/hash/8a20a8621978632d76c43dfd28b67767-Abstract.html",
      venue: "Advances in Neural Information Processing Systems (NeurIPS)",
    },
  ],
  12: [
    {
      title: "Towards Deep Learning Models Resistant to Adversarial Attacks",
      author: "Aleksander Mądry, Aleksandar Makelov, Ludwig Schmidt, et al. (MIT)",
      url: "https://arxiv.org/abs/1706.06083",
      venue: "International Conference on Learning Representations (ICLR)",
    },
    {
      title: "Direct Preference Optimization: Your Language Model Is Secretly a Reward Model",
      author: "Rafael Rafailov, Archit Sharma, Eric Mitchell, et al. (Stanford)",
      url: "https://arxiv.org/abs/2305.18290",
      venue: "NeurIPS Oral Presentation",
    },
  ],
  13: [
    {
      title: "Learning Transferable Visual Models From Natural Language Supervision (CLIP)",
      author: "Alec Radford, Jong Wook Kim, Chris Hallacy, et al. (OpenAI)",
      url: "https://arxiv.org/abs/2103.00020",
      venue: "International Conference on Machine Learning (ICML)",
    },
    {
      title: "Visual Instruction Tuning (LLaVA)",
      author: "Haotian Liu, Chunyuan Li, Qingyang Wu, Yong Jae Lee",
      url: "https://arxiv.org/abs/2304.08485",
      venue: "Advances in Neural Information Processing Systems (NeurIPS)",
    },
  ],
  14: [
    {
      title: "The Craft of Research (4th ed.)",
      author: "Wayne C. Booth, Gregory G. Colomb, Joseph M. Williams",
      url: "https://press.uchicago.edu/ucp/books/book/chicago/C/bo23521678.html",
      venue: "The University of Chicago Press",
    },
  ],
  15: [
    {
      title: "IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)",
      author: "IEEE Computer Society",
      url: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=34",
      venue: "Premier Computer Science Journal (Impact Factor: 20.8)",
    },
    {
      title: "Journal of Machine Learning Research (JMLR)",
      author: "JMLR Editorial Board",
      url: "https://www.jmlr.org/",
      venue: "Premier Open-Access Machine Learning Journal",
    },
    {
      title: "Nature Machine Intelligence",
      author: "Nature Portfolio",
      url: "https://www.nature.com/natmachintell/",
      venue: "High-Impact Interdisciplinary AI Research Journal",
    },
    {
      title: "Lancet Digital Health",
      author: "The Lancet Publishing Group",
      url: "https://www.thelancet.com/journals/landig/home",
      venue: "Top Medical AI & Clinical Informatics Journal",
    },
    {
      title: "IEEE Transactions on Information Forensics and Security (TIFS)",
      author: "IEEE Signal Processing Society",
      url: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=10206",
      venue: "Top Cybersecurity & Forensic Machine Learning Journal",
    },
  ],
};

export const booksFor = (level: number): Book[] => booksByLevel[level] ?? [];

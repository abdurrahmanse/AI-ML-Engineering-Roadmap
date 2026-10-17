/**
 * Academic courses, seminal research lecture series, and foundational textbooks
 * mapped per level for the AI/ML Research Roadmap.
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
      source: "The Turing Way Handbook for Reproducible Research",
    },
    {
      title: "Experiment Tracking & Laboratory Hygiene",
      status: "live",
      source: "Weights & Biases / MLflow Research Guide",
    },
  ],
  1: [
    {
      title: "How to Read a Paper (The Three-Pass Method)",
      status: "live",
      url: "http://ccr.sigcomm.org/online/files/p83-keshav.pdf",
      source: "S. Keshav (ACM SIGCOMM)",
    },
    {
      title: "Research Methodology in Computer Science",
      status: "live",
      source: "Stanford CS Research Methodology Seminar",
    },
    {
      title: "Systematic Literature Review & Taxonomy Formulation",
      status: "live",
      source: "ACM / IEEE Academic Survey Writing Guide",
    },
  ],
  2: [
    {
      title: "Mathematics for Machine Learning",
      status: "live",
      url: "https://mml-book.github.io/",
      source: "Deisenroth, Faisal & Ong (Cambridge University Press)",
    },
    {
      title: "All of Statistics: Statistical Inference for ML",
      status: "live",
      source: "Larry Wasserman (Springer Texts in Statistics)",
    },
    {
      title: "Statistical Hypothesis Testing & Power Analysis for AI",
      status: "live",
      source: "Empirical Methods for Artificial Intelligence (Cohen)",
    },
  ],
  3: [
    {
      title: "Experimental Design & Scientific Benchmarking",
      status: "live",
      source: "NeurIPS Reproducibility & Evaluation Standards",
    },
    {
      title: "Ablation Study Methodology in Deep Learning",
      status: "live",
      source: "Empirical Rigor in Computer Science (ACM Computing Surveys)",
    },
    {
      title: "Hyperparameter Optimization & Validation Protocols",
      status: "live",
      source: "Automated Machine Learning (Frank Hutter et al.)",
    },
  ],
  4: [
    {
      title: "Deep Learning Systems: Algorithms & Implementation",
      status: "live",
      url: "https://dlsyscourse.org/",
      source: "Tianqi Chen & Zico Kolter (CMU / Stanford)",
    },
    {
      title: "Advanced PyTorch Research Internals & Custom Operators",
      status: "live",
      source: "PyTorch Core Autograd Architecture Guide",
    },
    {
      title: "Numerical Stability & Mixed Precision Training",
      status: "live",
      source: "NVIDIA Deep Learning Performance Documentation",
    },
  ],
  5: [
    {
      title: "Transformers United & Attention Mechanics",
      status: "live",
      url: "https://web.stanford.edu/class/cs25/",
      source: "Stanford CS25",
    },
    {
      title: "Natural Language Processing with Deep Learning",
      status: "live",
      url: "https://web.stanford.edu/class/cs224n/",
      source: "Stanford CS224N (Manning)",
    },
    {
      title: "Geometric Deep Learning: Grids, Groups, Graphs & Geodesics",
      status: "live",
      url: "https://geometricdeeplearning.com/",
      source: "Bronstein, Bruna, Cohen & Veličković",
    },
  ],
  6: [
    {
      title: "Deep Generative Models",
      status: "live",
      url: "https://deepgenerativemodels.github.io/",
      source: "Stanford CS236 (Stefano Ermon)",
    },
    {
      title: "Generative AI: Diffusion & Flow Matching",
      status: "live",
      source: "Berkeley CS294 / MIT Generative Modeling Lecture Series",
    },
    {
      title: "Empirical Distribution Evaluation (FID, Precision & Recall)",
      status: "live",
      source: "Foundations of Generative Evaluation (Bińkowski et al.)",
    },
  ],
  7: [
    {
      title: "Deep Reinforcement Learning",
      status: "live",
      url: "https://rail.eecs.berkeley.edu/deeprlcourse/",
      source: "Berkeley CS285 (Sergey Levine)",
    },
    {
      title: "Reinforcement Learning: An Introduction",
      status: "live",
      source: "Richard S. Sutton & Andrew G. Barto (MIT Press)",
    },
    {
      title: "Test-Time Search & Reasoning in Foundation Models",
      status: "live",
      source: "Frontier Reasoning & Tree Search Seminars",
    },
  ],
  8: [
    {
      title: "Benchmark Creation, Datasets & Evaluation Science",
      status: "live",
      source: "NeurIPS Track on Datasets and Benchmarks Guidelines",
    },
    {
      title: "Datasheets for Datasets & Human Annotation Reliability",
      status: "live",
      source: "Timnit Gebru et al. (Communications of the ACM)",
    },
    {
      title: "LLM-as-a-Judge Calibration & Contamination Auditing",
      status: "live",
      source: "LMSYS Organization & Chatbot Arena Research",
    },
  ],
  9: [
    {
      title: "Language Modeling from Scratch (HPC Systems & Architecture)",
      status: "live",
      url: "https://stanford-cs336.github.io/spring2024/",
      source: "Stanford CS336",
    },
    {
      title: "High Performance Computing for Deep Learning",
      status: "live",
      source: "CMU 11-868 / Supercomputing Cluster Architecture",
    },
    {
      title: "Distributed Training at Scale (Megatron & FSDP)",
      status: "live",
      source: "NVIDIA Developer & Meta AI Research Systems Documentation",
    },
  ],
  10: [
    {
      title: "Large Language Model Pre-Training Dynamics",
      status: "live",
      url: "https://stanford-cs324.github.io/winter2022/",
      source: "Stanford CS324 (Percy Liang)",
    },
    {
      title: "Scaling Laws for Neural Language Models",
      status: "live",
      source: "Kaplan et al. (OpenAI) & Hoffmann et al. (DeepMind Chinchilla)",
    },
    {
      title: "Tokenizer Information Theory & Pre-Training Stability",
      status: "live",
      source: "EleutherAI & Hugging Face Research Papers",
    },
  ],
  11: [
    {
      title: "Mechanistic Interpretability of Neural Networks",
      status: "live",
      source: "Anthropic Research (Transformer Circuits / Elhage et al.)",
    },
    {
      title: "Alignment Research Engineer Accelerator (ARENA 3.0)",
      status: "live",
      url: "https://www.arena.education/",
      source: "Neel Nanda (ARENA Interpretability Curriculum)",
    },
    {
      title: "Representation Engineering & Monosemantic Dictionary Learning",
      status: "live",
      source: "Center for AI Safety / Anthropic SAE Research",
    },
  ],
  12: [
    {
      title: "AI Safety, Ethics and Society",
      status: "live",
      url: "https://course.aisafetybook.com/",
      source: "Dan Hendrycks (Center for AI Safety / UC Berkeley)",
    },
    {
      title: "Mathematical Foundations of Alignment & Preference Optimization",
      status: "live",
      source: "Rafailov et al. (Direct Preference Optimization, Stanford)",
    },
    {
      title: "Adversarial Machine Learning & Robust Optimization",
      status: "live",
      source: "Aleksander Mądry (MIT EECS)",
    },
  ],
  13: [
    {
      title: "Multimodal Foundation Models & Vision-Language",
      status: "live",
      source: "Stanford CS231N (Fei-Fei Li) / LLaVA Research Papers",
    },
    {
      title: "AI for Structural Biology & Protein Design",
      status: "live",
      source: "AlphaFold2 (DeepMind) & ESM-2 (Meta AI Research)",
    },
    {
      title: "Physics-Informed Neural Networks & Neural Operators",
      status: "live",
      source: "George Karniadakis (Brown University / Nature Reviews)",
    },
  ],
  14: [
    {
      title: "Mastering the AI/ML Doctoral Dissertation",
      status: "live",
      source: "MIT EECS / Stanford CS Doctoral Thesis Handbook",
    },
    {
      title: "Conference-Grade Experimental Replication",
      status: "live",
      source: "ML Reproducibility Challenge & Papers with Code",
    },
    {
      title: "Flagship Research Project Design",
      status: "live",
      source: "OpenReview Premier Track Proceedings",
    },
  ],
  15: [
    {
      title: "Whitesides' Group: Writing a Paper",
      status: "live",
      url: "https://doi.org/10.1002/adma.200400767",
      source: "George M. Whitesides (Advanced Materials)",
    },
    {
      title: "How to Write a Great Research Paper & Give a Great Talk",
      status: "live",
      source: "Simon Peyton Jones (Microsoft Research / Cambridge)",
    },
    {
      title: "Academic Career & Industry Research Scientist Interview Guide",
      status: "live",
      source: "CRA (Computing Research Association) Academic Careers",
    },
  ],
};

export const coursesFor = (level: number): Course[] =>
  coursesByLevel[level] ?? [];

export interface Book {
  title: string;
  author: string;
  url?: string;
}

export const booksByLevel: Record<number, Book[]> = {
  0: [
    {
      title: "The Turing Way: A Handbook for Reproducible Data Science",
      author: "The Turing Way Community",
      url: "https://the-turing-way.netlify.app/",
    },
  ],
  1: [
    {
      title: "How to Read a Paper",
      author: "S. Keshav (ACM SIGCOMM)",
      url: "http://ccr.sigcomm.org/online/files/p83-keshav.pdf",
    },
  ],
  2: [
    {
      title: "Mathematics for Machine Learning",
      author: "Marc Peter Deisenroth, A. Aldo Faisal, Cheng Soon Ong",
      url: "https://mml-book.github.io/",
    },
    {
      title: "All of Statistics: A Concise Course in Statistical Inference",
      author: "Larry Wasserman",
      url: "https://link.springer.com/book/10.1007/978-0-387-21736-9",
    },
  ],
  3: [
    {
      title: "Empirical Methods for Artificial Intelligence",
      author: "Paul R. Cohen (MIT Press)",
      url: "https://mitpress.mit.edu/9780262032254/empirical-methods-for-artificial-intelligence/",
    },
  ],
  4: [
    {
      title: "Deep Learning Systems",
      author: "Tianqi Chen & Zico Kolter",
      url: "https://dlsyscourse.org/",
    },
  ],
  5: [
    {
      title: "Speech and Language Processing (3rd ed.)",
      author: "Dan Jurafsky, James H. Martin",
      url: "https://web.stanford.edu/~jurafsky/slp3/",
    },
    {
      title: "Geometric Deep Learning: Grids, Groups, Graphs, Geodesics, and Gauges",
      author: "Michael M. Bronstein, Joan Bruna, Taco Cohen, Petar Veličković",
      url: "https://geometricdeeplearning.com/",
    },
  ],
  6: [
    {
      title: "Probabilistic Machine Learning: Advanced Topics",
      author: "Kevin P. Murphy (MIT Press)",
      url: "https://probml.github.io/pml-book/book2.html",
    },
  ],
  7: [
    {
      title: "Reinforcement Learning: An Introduction (2nd ed.)",
      author: "Richard S. Sutton, Andrew G. Barto",
      url: "http://incompleteideas.net/book/the-book-2nd.html",
    },
  ],
  8: [
    {
      title: "Datasheets for Datasets",
      author: "Timnit Gebru, Jamie Morgenstern, Briana Vecchione, et al.",
      url: "https://arxiv.org/abs/1803.09010",
    },
  ],
  9: [
    {
      title: "High Performance Python: Practical Performant Programming for Humans",
      author: "Micha Gorelick, Ian Ozsvald",
      url: "https://www.oreilly.com/library/view/high-performance-python/9781492055013/",
    },
  ],
  10: [
    {
      title: "Scaling Laws for Neural Language Models",
      author: "Jared Kaplan, Sam McCandlish, Tom Henighan, et al. (OpenAI)",
      url: "https://arxiv.org/abs/2001.08361",
    },
  ],
  11: [
    {
      title: "A Mathematical Framework for Transformer Circuits",
      author: "Nelson Elhage, Neel Nanda, Catherine Olsson, et al. (Anthropic)",
      url: "https://transformer-circuits.pub/2021/framework/index.html",
    },
  ],
  12: [
    {
      title: "An Introduction to AI Safety, Ethics, and Society",
      author: "Dan Hendrycks (Center for AI Safety)",
      url: "https://course.aisafetybook.com/",
    },
  ],
  13: [
    {
      title: "Deep Learning for the Life Sciences",
      author: "Bharath Ramsundar, Peter Eastman, Pat Walters, Vijay Pande",
      url: "https://www.oreilly.com/library/view/deep-learning-for/9781492039822/",
    },
  ],
  14: [
    {
      title: "The Craft of Research (4th ed.)",
      author: "Wayne C. Booth, Gregory G. Colomb, Joseph M. Williams",
      url: "https://press.uchicago.edu/ucp/books/book/chicago/C/bo23521678.html",
    },
  ],
  15: [
    {
      title: "Whitesides' Group: Writing a Paper",
      author: "George M. Whitesides (Advanced Materials)",
      url: "https://doi.org/10.1002/adma.200400767",
    },
    {
      title: "How to Write a Great Research Paper",
      author: "Simon Peyton Jones (Microsoft Research / Cambridge)",
      url: "https://www.microsoft.com/en-us/research/academic-program/write-great-research-paper/",
    },
  ],
};

export const booksFor = (level: number): Book[] => booksByLevel[level] ?? [];


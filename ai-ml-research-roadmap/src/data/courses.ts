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
      title: "The Missing Semester of CS Education",
      status: "live",
      url: "https://missing.csail.mit.edu/",
      source: "MIT OpenCourseWare (Shell, Git, SSH, Containers, Profiling)",
    },
    {
      title: "The Turing Way: A Handbook for Reproducible Research",
      status: "live",
      url: "https://the-turing-way.netlify.app/",
      source: "Alan Turing Institute Open Science Consortium",
    },
    {
      title: "Scientific Python & Vectorization Masterclass",
      status: "live",
      source: "NumPy / SciPy Scientific Computing Consortium",
    },
    {
      title: "CS50's Introduction to Databases with SQL",
      status: "live",
      url: "https://cs50.harvard.edu/sql/",
      source: "Harvard University (Relational Schemas, Joins, Aggregations & SQLite)",
    },
  ],
  1: [
    {
      title: "Essence of Linear Algebra & Multivariable Calculus",
      status: "live",
      url: "https://www.3blue1brown.com/topics/linear-algebra",
      source: "Grant Sanderson (3Blue1Brown Mathematical Visualization Series)",
    },
    {
      title: "EE364a: Convex Optimization I",
      status: "live",
      url: "https://web.stanford.edu/class/ee364a/",
      source: "Stephen Boyd (Stanford University)",
    },
    {
      title: "Matrix Calculus for Deep Learning",
      status: "live",
      url: "https://arxiv.org/abs/1802.01528",
      source: "Terence Parr & Jeremy Howard",
    },
  ],
  2: [
    {
      title: "Statistical Inference & Probability Theory",
      status: "live",
      url: "https://link.springer.com/book/10.1007/978-0-387-21736-9",
      source: "Larry Wasserman (Springer Texts in Statistics)",
    },
    {
      title: "Empirical Methods for Artificial Intelligence",
      status: "live",
      url: "https://openlibrary.org/works/OL1861036W/",
      source: "Paul R. Cohen (Academic Press)",
    },
    {
      title: "Statistical Comparisons of Classifiers over Multiple Datasets",
      status: "live",
      url: "https://www.jmlr.org/papers/volume7/demsar06a/demsar06a.pdf",
      source: "Janez Demšar (Journal of Machine Learning Research)",
    },
  ],
  3: [
    {
      title: "How to Read an Academic Paper (The Three-Pass Method)",
      status: "live",
      url: "http://ccr.sigcomm.org/online/files/p83-keshav.pdf",
      source: "S. Keshav (ACM SIGCOMM Computer Communication Review)",
    },
    {
      title: "PRISMA 2020 Statement: Systematic Review Methodology",
      status: "live",
      url: "https://www.bmj.com/content/372/bmj.n71",
      source: "PRISMA Statement Consortium (BMJ / PLOS Medicine)",
    },
    {
      title: "Research Problem Formulation & Open Science Preregistration",
      status: "live",
      url: "https://www.cos.io/initiatives/prereg",
      source: "Center for Open Science (OSF)",
    },
  ],
  4: [
    {
      title: "Clinical Healthcare Datasets & PhysioNet Credentialing",
      status: "live",
      url: "https://physionet.org/about/citi-training/",
      source: "PhysioNet / CITI Program Data Research Credentialing (MIMIC-IV)",
    },
    {
      title: "Cybersecurity Telemetry & Benchmark Datasets",
      status: "live",
      source: "Canadian Institute for Cybersecurity (CIC-IDS) & Ember Malware",
    },
    {
      title: "Datasheets for Datasets & Data Stewardship",
      status: "live",
      url: "https://arxiv.org/abs/1803.09010",
      source: "Timnit Gebru et al. (Communications of the ACM)",
    },
  ],
  5: [
    {
      title: "CS229: Machine Learning",
      status: "live",
      url: "https://cs229.stanford.edu/",
      source: "Stanford University (Andrew Ng & Tengyu Ma)",
    },
    {
      title: "The Elements of Statistical Learning",
      status: "live",
      url: "https://hastie.su.domains/ElemStatLearn/",
      source: "Trevor Hastie, Robert Tibshirani, Jerome Friedman (Springer)",
    },
    {
      title: "XGBoost: A Scalable Tree Boosting System",
      status: "live",
      url: "https://arxiv.org/abs/1603.02754",
      source: "Tianqi Chen & Carlos Guestrin (ACM SIGKDD)",
    },
  ],
  6: [
    {
      title: "CS231n: Deep Learning for Computer Vision",
      status: "live",
      url: "https://cs231n.stanford.edu/",
      source: "Stanford University (Fei-Fei Li, Andrej Karpathy)",
    },
    {
      title: "Deep Residual Learning for Image Recognition (ResNet)",
      status: "live",
      url: "https://arxiv.org/abs/1512.03385",
      source: "Kaiming He, Xiangyu Zhang, Shaoqing Ren, Jian Sun (CVPR 2016)",
    },
    {
      title: "An Image is Worth 16x16 Words: Transformers for Image Recognition",
      status: "live",
      url: "https://arxiv.org/abs/2010.11929",
      source: "Alexey Dosovitskiy et al. (ICLR 2021)",
    },
  ],
  7: [
    {
      title: "CS224N: Natural Language Processing with Deep Learning",
      status: "live",
      url: "https://web.stanford.edu/class/cs224n/",
      source: "Stanford University (Christopher Manning)",
    },
    {
      title: "CS224W: Machine Learning with Graphs",
      status: "live",
      url: "https://web.stanford.edu/class/cs224w/",
      source: "Stanford University (Jure Leskovec)",
    },
    {
      title: "Mamba: Linear-Time Sequence Modeling with Selective State Spaces",
      status: "live",
      url: "https://arxiv.org/abs/2312.00752",
      source: "Albert Gu & Tri Dao",
    },
  ],
  8: [
    {
      title: "NeurIPS ML Reproducibility Challenge & Guidelines",
      status: "live",
      url: "https://reproducibility-challenge.github.io/",
      source: "NeurIPS / Papers with Code Reproducibility Standards",
    },
    {
      title: "Accounting for Variance in Machine Learning Benchmarks",
      status: "live",
      url: "https://proceedings.mlsys.org/paper_files/paper/2021/file/182be0c5cdcd5072bb1864cdee4d3d6e-Paper.pdf",
      source: "Xavier Bouthillier et al. (MLSys 2021)",
    },
    {
      title: "Best Practices for Empirical Evaluation in Artificial Intelligence",
      status: "live",
      source: "ACM Computing Surveys (CSUR) Methodology Standards",
    },
  ],
  9: [
    {
      title: "CS236: Deep Generative Models",
      status: "live",
      url: "https://deepgenerativemodels.github.io/",
      source: "Stanford University (Stefano Ermon)",
    },
    {
      title: "Denoising Diffusion Probabilistic Models (DDPM)",
      status: "live",
      url: "https://arxiv.org/abs/2006.11239",
      source: "Jonathan Ho, Ajay Jain, Pieter Abbeel (NeurIPS 2020)",
    },
    {
      title: "Flow Matching for Generative Modeling",
      status: "live",
      url: "https://arxiv.org/abs/2210.02747",
      source: "Yaron Lipman et al. (Meta AI Research / ICLR 2023)",
    },
  ],
  10: [
    {
      title: "High Performance Computing for Deep Learning",
      status: "live",
      source: "Supercomputing Cluster Architecture, SLURM & GPU Topology",
    },
    {
      title: "Megatron-LM & Distributed Training at Scale",
      status: "live",
      url: "https://github.com/NVIDIA/Megatron-LM",
      source: "NVIDIA Developer & PyTorch Core Distributed Team",
    },
    {
      title: "Model FLOPs Utilization (MFU) & Hardware Profiling",
      status: "live",
      url: "https://arxiv.org/abs/2204.02311",
      source: "PaLM Architecture Systems Report (Google Research)",
    },
  ],
  11: [
    {
      title: "CS285: Deep Reinforcement Learning",
      status: "live",
      url: "https://rail.eecs.berkeley.edu/deeprlcourse/",
      source: "UC Berkeley (Sergey Levine)",
    },
    {
      title: "Training Compute-Optimal Large Language Models (Chinchilla)",
      status: "live",
      url: "https://arxiv.org/abs/2203.15556",
      source: "Jordan Hoffmann et al. (DeepMind / NeurIPS)",
    },
    {
      title: "Direct Preference Optimization: Your Language Model Is a Reward Model",
      status: "live",
      url: "https://arxiv.org/abs/2305.18290",
      source: "Rafael Rafailov et al. (Stanford University / NeurIPS)",
    },
  ],
  12: [
    {
      title: "Retrieval-Augmented Generation for Knowledge-Intensive Tasks",
      status: "live",
      url: "https://arxiv.org/abs/2005.11401",
      source: "Patrick Lewis et al. (Meta AI / NeurIPS 2020)",
    },
    {
      title: "From Local to Global: A Graph RAG Approach to Query-Focused Summarization",
      status: "live",
      url: "https://arxiv.org/abs/2404.16130",
      source: "Microsoft Research (GraphRAG Consortium)",
    },
    {
      title: "ReAct: Synergizing Reasoning and Acting in Language Models",
      status: "live",
      url: "https://arxiv.org/abs/2210.03629",
      source: "Shunyu Yao et al. (Princeton University / ICLR 2023)",
    },
  ],
  13: [
    {
      title: "Transformer Circuits & Mechanistic Interpretability",
      status: "live",
      url: "https://transformer-circuits.pub/",
      source: "Anthropic Research (Chris Olah, Neel Nanda)",
    },
    {
      title: "Towards Deep Learning Models Resistant to Adversarial Attacks",
      status: "live",
      url: "https://arxiv.org/abs/1706.06083",
      source: "Aleksander Mądry et al. (MIT / ICLR 2018)",
    },
    {
      title: "Fairness and Machine Learning: Limitations and Opportunities",
      status: "live",
      url: "https://fairmlbook.org/",
      source: "Solon Barocas, Moritz Hardt, Arvind Narayanan (Academic Press)",
    },
  ],
  14: [
    {
      title: "Learning Transferable Visual Models from Natural Language Supervision (CLIP)",
      status: "live",
      url: "https://arxiv.org/abs/2103.00020",
      source: "Alec Radford et al. (OpenAI / ICML 2021)",
    },
    {
      title: "Visual Instruction Tuning (LLaVA)",
      status: "live",
      url: "https://arxiv.org/abs/2304.08485",
      source: "Haotian Liu et al. (NeurIPS 2023)",
    },
    {
      title: "How to Write a Better Thesis",
      status: "live",
      url: "https://www.mup.com.au/",
      source: "David Evans, Paul Gruba, Justin Zobel (Melbourne University Press)",
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
      source: "Simon Peyton Jones (Microsoft Research / Cambridge)",
    },
    {
      title: "Think-Check-Submit: Avoiding Predatory Journals & Publishing Strategically",
      status: "live",
      url: "https://thinkchecksubmit.org/",
      source: "International Scholarly Publishing Consortium",
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
      venue: "Alan Turing Institute Open Science Monograph",
    },
    {
      title: "Fluent Python: Clear, Concise, and Effective Programming",
      author: "Luciano Ramalho",
      url: "https://www.oreilly.com/library/view/fluent-python-2nd/9781492056348/",
      venue: "O'Reilly Media",
    },
    {
      title: "Algorithms (4th Edition): Data Structures & Analysis",
      author: "Robert Sedgewick, Kevin Wayne",
      url: "https://algs4.cs.princeton.edu/home/",
      venue: "Addison-Wesley Professional",
    },
  ],
  1: [
    {
      title: "Mathematics for Machine Learning",
      author: "Marc Peter Deisenroth, A. Aldo Faisal, Cheng Soon Ong",
      url: "https://mml-book.github.io/",
      venue: "Cambridge University Press",
    },
    {
      title: "Convex Optimization",
      author: "Stephen Boyd, Lieven Vandenberghe",
      url: "https://web.stanford.edu/~boyd/cvxbook/",
      venue: "Cambridge University Press",
    },
  ],
  2: [
    {
      title: "All of Statistics: A Concise Course in Statistical Inference",
      author: "Larry Wasserman",
      url: "https://link.springer.com/book/10.1007/978-0-387-21736-9",
      venue: "Springer Texts in Statistics",
    },
    {
      title: "Empirical Methods for Artificial Intelligence",
      author: "Paul R. Cohen",
      url: "https://openlibrary.org/works/OL1861036W/",
      venue: "MIT Press",
    },
  ],
  3: [
    {
      title: "How to Read a Paper",
      author: "S. Keshav",
      url: "http://ccr.sigcomm.org/online/files/p83-keshav.pdf",
      venue: "ACM SIGCOMM Computer Communication Review",
    },
    {
      title: "Writing for Computer Science (3rd ed.)",
      author: "Justin Zobel",
      url: "https://link.springer.com/book/10.1007/978-1-4471-6639-9",
      venue: "Springer Texts in Computer Science",
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
      title: "The Elements of Statistical Learning: Data Mining, Inference, and Prediction",
      author: "Trevor Hastie, Robert Tibshirani, Jerome Friedman",
      url: "https://link.springer.com/book/10.1007/978-0-387-84858-7",
      venue: "Springer Series in Statistics",
    },
    {
      title: "Pattern Recognition and Machine Learning",
      author: "Christopher M. Bishop",
      url: "https://www.microsoft.com/en-us/research/people/cmbishop/prml-book/",
      venue: "Springer Information Science and Statistics",
    },
  ],
  6: [
    {
      title: "Deep Learning",
      author: "Ian Goodfellow, Yoshua Bengio, Aaron Courville",
      url: "https://www.deeplearningbook.org/",
      venue: "MIT Press",
    },
    {
      title: "Deep Residual Learning for Image Recognition",
      author: "Kaiming He, Xiangyu Zhang, Shaoqing Ren, Jian Sun",
      url: "https://arxiv.org/abs/1512.03385",
      venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
    },
  ],
  7: [
    {
      title: "Speech and Language Processing (3rd ed.)",
      author: "Dan Jurafsky, James H. Martin",
      url: "https://web.stanford.edu/~jurafsky/slp3/",
      venue: "Pearson / Prentice Hall",
    },
    {
      title: "Geometric Deep Learning: Grids, Groups, Graphs, Geodesics, and Gauges",
      author: "Michael M. Bronstein, Joan Bruna, Taco Cohen, Petar Veličković",
      url: "https://geometricdeeplearning.com/",
      venue: "MIT Press",
    },
  ],
  8: [
    {
      title: "Experimental Design and Analysis",
      author: "Howard J. Seltman",
      url: "https://www.stat.cmu.edu/~hseltman/309/Book/Book.pdf",
      venue: "Carnegie Mellon University Open Textbook",
    },
    {
      title: "Accounting for Variance in Machine Learning Benchmarks",
      author: "Xavier Bouthillier, Pierre Delaunay, Mirko Bronzi, et al.",
      url: "https://arxiv.org/abs/2103.03098",
      venue: "MLSys Conference",
    },
  ],
  9: [
    {
      title: "Probabilistic Machine Learning: Advanced Topics",
      author: "Kevin P. Murphy",
      url: "https://probml.github.io/pml-book/book2.html",
      venue: "MIT Press",
    },
    {
      title: "Deep Generative Models: VAEs, GANs, Diffusion, and Score-Based Models",
      author: "Stefano Ermon",
      url: "https://deepgenerativemodels.github.io/",
      venue: "Stanford CS236 Monograph",
    },
  ],
  10: [
    {
      title: "High Performance Python: Practical Performant Programming",
      author: "Micha Gorelick, Ian Ozsvald",
      url: "https://www.oreilly.com/library/view/high-performance-python/9781492055013/",
      venue: "O'Reilly Media",
    },
    {
      title: "Megatron-LM: Training Multi-Billion Parameter Language Models",
      author: "Mohammad Shoeybi, Mostofa Patwary, Raul Puri, et al.",
      url: "https://arxiv.org/abs/1909.08053",
      venue: "NVIDIA Research",
    },
  ],
  11: [
    {
      title: "Reinforcement Learning: An Introduction (2nd ed.)",
      author: "Richard S. Sutton, Andrew G. Barto",
      url: "http://incompleteideas.net/book/the-book-2nd.html",
      venue: "MIT Press",
    },
    {
      title: "Training Compute-Optimal Large Language Models (Chinchilla)",
      author: "Jordan Hoffmann, Sebastian Borgeaud, Arthur Mensch, et al.",
      url: "https://arxiv.org/abs/2203.15556",
      venue: "NeurIPS Best Paper Track",
    },
  ],
  12: [
    {
      title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP",
      author: "Patrick Lewis, Ethan Perez, Aleksandara Piktus, et al.",
      url: "https://arxiv.org/abs/2005.11401",
      venue: "Advances in Neural Information Processing Systems (NeurIPS)",
    },
    {
      title: "From Local to Global: A Graph RAG Approach to Query-Focused Summarization",
      author: "Darren Edge, Ha Trinh, Newman Cheng, et al.",
      url: "https://arxiv.org/abs/2404.16130",
      venue: "Microsoft Research Technical Report",
    },
  ],
  13: [
    {
      title: "Towards Monosemanticity: Decomposing Language Models with Dictionary Learning",
      author: "Trenton Bricken, Adly Templeton, Joshua Batson, et al.",
      url: "https://transformer-circuits.pub/2023/monosemantic-features/index.html",
      venue: "Anthropic Research",
    },
    {
      title: "Towards Deep Learning Models Resistant to Adversarial Attacks",
      author: "Aleksander Mądry, Aleksandar Makelov, Ludwig Schmidt, et al.",
      url: "https://arxiv.org/abs/1706.06083",
      venue: "International Conference on Learning Representations (ICLR)",
    },
  ],
  14: [
    {
      title: "Learning Transferable Visual Models From Natural Language Supervision (CLIP)",
      author: "Alec Radford, Jong Wook Kim, Chris Hallacy, et al.",
      url: "https://arxiv.org/abs/2103.00020",
      venue: "International Conference on Machine Learning (ICML)",
    },
    {
      title: "How to Write a Better Thesis (3rd ed.)",
      author: "David Evans, Paul Gruba, Justin Zobel",
      url: "https://link.springer.com/book/10.1007/978-3-319-04286-2",
      venue: "Springer International Publishing",
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
      title: "The Craft of Research (4th ed.)",
      author: "Wayne C. Booth, Gregory G. Colomb, Joseph M. Williams",
      url: "https://press.uchicago.edu/ucp/books/book/chicago/C/bo23521678.html",
      venue: "University of Chicago Press",
    },
  ],
};

export const booksFor = (level: number): Book[] => booksByLevel[level] ?? [];

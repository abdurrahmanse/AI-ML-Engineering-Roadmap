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
      title: "Linear Algebra & Matrix Decompositions",
      status: "live",
      url: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
      source: "MIT 18.06 (Gilbert Strang)",
    },
    {
      title: "Multivariable Calculus & Differential Geometry",
      status: "live",
      url: "https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/",
      source: "MIT 18.02",
    },
    {
      title: "Probability & Stochastic Processes",
      status: "live",
      url: "https://ocw.mit.edu/courses/6-041-probabilistic-systems-analysis-and-applied-probability-fall-2011/",
      source: "MIT 6.041",
    },
    {
      title: "Automatic Differentiation with JAX & PyTorch",
      status: "live",
      note: "autograd internals",
    },
  ],
  1: [
    {
      title: "Machine Learning & Statistical Learning Theory",
      status: "live",
      url: "https://cs229.stanford.edu/",
      source: "Stanford CS229",
    },
    {
      title: "Convex Optimization",
      status: "live",
      url: "https://web.stanford.edu/class/ee364a/",
      source: "Stanford EE364A (Boyd)",
    },
    {
      title: "Probabilistic Graphical Models",
      status: "live",
      source: "Stanford CS228",
    },
  ],
  2: [
    {
      title: "Deep Learning Foundations & Theory",
      status: "live",
      url: "https://cs230.stanford.edu/",
      source: "Stanford CS230",
    },
    {
      title: "Optimization Dynamics in Deep Networks",
      status: "soon",
      note: "loss surfaces & NTK",
    },
  ],
  3: [
    {
      title: "Transformers & Sequence Modeling",
      status: "live",
      url: "https://web.stanford.edu/class/cs25/",
      source: "Stanford CS25",
    },
    {
      title: "Hardware-Aware Attention (FlashAttention)",
      status: "live",
      note: "Tri Dao lectures",
    },
    {
      title: "Structured State Space Models & Mamba",
      status: "soon",
    },
  ],
  4: [
    {
      title: "Self-Supervised Learning & Representation Theory",
      status: "live",
      source: "NYU Center for Data Science (LeCun)",
    },
    {
      title: "Metric Learning & Dense Latent Spaces",
      status: "live",
    },
  ],
  5: [
    {
      title: "Deep Reinforcement Learning",
      status: "live",
      url: "https://rail.eecs.berkeley.edu/deeprlcourse/",
      source: "Berkeley CS285 (Levine)",
    },
    {
      title: "Reinforcement Learning Foundations",
      status: "live",
      source: "UCL / DeepMind (David Silver)",
    },
  ],
  6: [
    {
      title: "Machine Reasoning & Test-Time Compute",
      status: "live",
      note: "CoT, PRMs & MCTS search",
    },
    {
      title: "Search Algorithms & Thought Trees",
      status: "soon",
    },
  ],
  7: [
    {
      title: "Holistic Evaluation & Benchmarking Science",
      status: "live",
      note: "HELM & EleutherAI harness",
    },
    {
      title: "Statistical Testing for Machine Learning",
      status: "live",
    },
  ],
  8: [
    {
      title: "AI Alignment & Preference Optimization",
      status: "live",
      note: "RLHF, DPO & KTO theory",
    },
    {
      title: "Mechanistic Interpretability & Circuits",
      status: "live",
      url: "https://www.arena.education/",
      source: "ARENA / Anthropic Interpretability",
    },
  ],
  9: [
    {
      title: "Large-Scale Pre-Training & Scaling Laws",
      status: "live",
      note: "Chinchilla & Kaplan scaling",
    },
    {
      title: "Synthetic Data Curation & Model Collapse",
      status: "soon",
    },
  ],
  10: [
    {
      title: "Language Modeling from Scratch & Distributed Systems",
      status: "live",
      url: "https://stanford-cs336.github.io/spring2024/",
      source: "Stanford CS336",
    },
    {
      title: "Megatron-LM & 3D Parallelism",
      status: "live",
      note: "NVIDIA High Performance Deep Learning",
    },
  ],
  11: [
    {
      title: "Deep Generative Models: Diffusion & Flow Matching",
      status: "live",
      url: "https://deepgenerativemodels.github.io/",
      source: "Stanford CS236",
    },
    {
      title: "Score-Based SDEs & Continuous Dynamics",
      status: "live",
      note: "Yang Song lecture series",
    },
  ],
  12: [
    {
      title: "Multimodal Foundation Models & Vision-Language",
      status: "live",
      note: "CLIP, SigLIP & LMMs",
    },
    {
      title: "Spatiotemporal Video Dynamics & Diffusion",
      status: "soon",
    },
  ],
  13: [
    {
      title: "Parameter-Efficient Fine-Tuning & LoRA Spectral Theory",
      status: "live",
    },
    {
      title: "Continual Learning & Catastrophic Forgetting",
      status: "soon",
    },
  ],
  14: [
    {
      title: "Reproducible Deep Learning & Paper Replication",
      status: "live",
      source: "ML Reproducibility Challenge",
    },
  ],
  15: [
    {
      title: "Scientific Paper Writing, Peer Review & Job Talks",
      status: "live",
      note: "NeurIPS / ICML publication prep",
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
      title: "Mathematics for Machine Learning",
      author: "Marc Peter Deisenroth, A. Aldo Faisal, Cheng Soon Ong",
      url: "https://mml-book.github.io/",
    },
  ],
  1: [
    {
      title: "The Elements of Statistical Learning",
      author: "Trevor Hastie, Robert Tibshirani, Jerome Friedman",
      url: "https://hastie.su.domains/ElemStatLearn/",
    },
  ],
  2: [
    {
      title: "Deep Learning",
      author: "Ian Goodfellow, Yoshua Bengio, Aaron Courville",
      url: "https://www.deeplearningbook.org/",
    },
  ],
  3: [
    {
      title: "Speech and Language Processing (3rd ed.)",
      author: "Dan Jurafsky, James H. Martin",
      url: "https://web.stanford.edu/~jurafsky/slp3/",
    },
  ],
  5: [
    {
      title: "Reinforcement Learning: An Introduction",
      author: "Richard S. Sutton, Andrew G. Barto",
      url: "http://incompleteideas.net/book/the-book-2nd.html",
    },
  ],
  11: [
    {
      title: "Probabilistic Machine Learning: Advanced Topics",
      author: "Kevin P. Murphy",
      url: "https://probml.github.io/pml-book/book2.html",
    },
  ],
};

export const booksFor = (level: number): Book[] => booksByLevel[level] ?? [];

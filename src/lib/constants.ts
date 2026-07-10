export const PERSONAL = {
  name: 'Divyanshu Tiwari',
  tagline: 'Building intelligent systems that solve real problems.',
  roles: ['AI/ML Engineer', 'GenAI Developer', 'Full-Stack Builder'],
  email: 'divyanshucloud@gmail.com',
  phone: '+91 8595126184',
  github: 'https://github.com/Divyanshu8595',
  githubUsername: 'Divyanshu8595',
  linkedin: 'https://www.linkedin.com/in/divyanshu-tiwari-43151a20b/',
  kaggle: 'https://www.kaggle.com/divyanshucloud',
  leetcode: 'https://leetcode.com/u/divyanshucloud',
  hackerearth: 'https://www.hackerearth.com/@divyanshucloud/',
  resumePath: '/resume.pdf',
};

export const SKILLS = [
  { category: 'Programming', color: 'orange', items: ['Python', 'Java', 'SQL', 'JavaScript', 'TypeScript'] },
  { category: 'GenAI / LLM', color: 'orange', items: ['Gemini API', 'RAG Systems', 'Prompt Engineering', 'LangChain', 'Vector Databases'] },
  { category: 'ML & Data', color: 'red', items: ['TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Data Visualization'] },
  { category: 'Frontend', color: 'red', items: ['React.js', 'Next.js', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'Databases & Cloud', color: 'green', items: ['MySQL', 'Neo4j', 'Firebase', 'Google Cloud'] },
];

export const FEATURED_PROJECTS = [
  {
    name: 'Sahayak Guru',
    description: 'RAG-based AI teaching assistant that uses Gemini API to answer student queries with context from uploaded course materials. Submitted to Google Cloud Agentic AI Day.',
    tech: ['Gemini API', 'RAG', 'Python', 'LangChain'],
    github: 'https://github.com/Divyanshu8595',
    featured: true,
  },
  {
    name: 'Khetiharii',
    description: 'AI-driven farmer support platform with crop disease detection from leaf images. Built with React frontend, Firebase backend, and Gemini API for intelligent recommendations.',
    tech: ['React', 'Firebase', 'Gemini API', 'ML'],
    github: 'https://github.com/Divyanshu8595',
    featured: false,
  },
  {
    name: 'Customer Churn Prediction',
    description: 'End-to-end ML classification model predicting customer churn for an OTT platform, paired with an interactive analytics dashboard for business insights.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Dashboard'],
    github: 'https://github.com/Divyanshu8595',
    featured: false,
  },
  {
    name: 'Aunty Scanner',
    description: 'Hyperlocal food discovery platform that connects users with nearby home cooks and street food vendors using location-based backend workflows.',
    tech: ['Dart', 'Firebase', 'Google Maps', 'Flutter'],
    github: 'https://github.com/Divyanshu8595/auntyScanner',
    featured: false,
  },
];

export const EXPERIENCE = [
  {
    role: 'LLM Post-Training Intern',
    company: 'Ethara AI',
    period: 'Jan 2026 – Apr 2026',
    description: [
      'Fine-tuned and evaluated large language models for domain-specific tasks',
      'Developed post-training pipelines including RLHF and instruction tuning',
      'Collaborated on data curation and quality assessment for training datasets',
    ],
  },
  {
    role: 'AI/ML Intern',
    company: 'Agivant Technologies',
    period: 'Jun 2025 – Sep 2025',
    description: [
      'Built and deployed ML models for real-world business applications',
      'Worked on data preprocessing pipelines and feature engineering',
      'Contributed to computer vision and NLP-based solutions for clients',
    ],
  },
];

export const ACHIEVEMENTS = [
  { icon: '🏆', title: 'Merit Scholarship', subtitle: '100% tuition waiver from U.P. Government for academic excellence' },
  { icon: '🥈', title: 'Microsoft Imagine Cup 2024', subtitle: 'National Semifinalist — competed among thousands of teams across India' },
  { icon: '🚀', title: 'Google Solution Challenge', subtitle: 'Selected for Bootcamp 2024 — built solutions addressing UN SDGs' },
  { icon: '💻', title: '400+ DSA Problems', subtitle: 'Consistent problem solver across LeetCode, HackerEarth, and more' },
];

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

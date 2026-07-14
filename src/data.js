// All portfolio copy lives here so it's easy to edit without touching components.

export const profile = {
  name: "Fidelis Agba",
  role: "Product Manager",
  tagline: "AI-Focused",
  subline:
    "Product manager with strong AI product sense and 10+ years delivering quality products across multiple domains. I've built AI-enabled products and work comfortably across context engineering, AI UX, LLMs, and evaluation frameworks.",
  location: "Delta, Nigeria",
  email: "agbaphydelis@outlook.com",
  phone: "+234 703 826 4911",
  years: "10+ yrs",
  username: "fid37is",
  links: {
    linkedin: "https://linkedin.com/in/fid37is",
    github: "https://github.com/fid37is",
    twitter: "https://x.com/fid37is",
    instagram: "https://instagram.com/fid37is",
    facebook: "https://facebook.com/fid37iss",
    medium: "https://medium.com/@fid37is",
  },
};

// Used by the Links/Contact section to render a linktree-style list.
// `icon` matches an export name from lucide-react.
export const socials = [
  { key: "linkedin", icon: "Linkedin", label: "LinkedIn", handle: "@fid37is", href: "https://linkedin.com/in/fid37is" },
  { key: "github", icon: "Github", label: "GitHub", handle: "@fid37is", href: "https://github.com/fid37is" },
  { key: "twitter", icon: "Twitter", label: "X (Twitter)", handle: "@fid37is", href: "https://x.com/fid37is" },
  { key: "instagram", icon: "Instagram", label: "Instagram", handle: "@fid37is", href: "https://instagram.com/fid37is" },
  { key: "facebook", icon: "Facebook", label: "Facebook", handle: "fid37is", href: "https://facebook.com/fid37iss" },
  { key: "medium", icon: "Rss", label: "Medium", handle: "@fid37is", href: "https://medium.com/@fid37is" },
];

// Category keys map to the filter slider. Order matters - it mirrors a
// content hierarchy from least to most editorial control.
export const categories = [
  { key: "all", label: "All" },
  { key: "product", label: "Past Product Work" },
  { key: "side", label: "Side Projects" },
  { key: "case", label: "Case Studies" },
  { key: "teardown", label: "Teardowns" },
  { key: "notes", label: "Commentary" },
];

export const work = [
  {
    id: "owtra-launch",
    category: "case",
    tag: "Case Study",
    period: "Feb 2023 - Present",
    title: "Owtra - an AI job application tracker",
    org: "Owtra",
    link: "https://owtra.xyz",
    summary:
      "Founded and built Owtra end to end - an AI-powered job search tool that scores how well a role fits you, surfaces company culture and team insights, and preps you for interviews with tailored questions. Grew to 1,000+ active users on an OAuth 2.0 sign-in flow and an onboarding sequence tuned to cut drop-off.",
    metrics: ["1,000+ active users", "AI company-fit scoring"],
    stack: ["Next.js", "Supabase", "OAuth 2.0"],
  },
  {
    id: "surely-launch",
    category: "case",
    tag: "Case Study",
    period: "Feb 2023 - Present",
    title: "Surely - QA tooling with a built-in AI assistant",
    org: "Surely (testsurely.com)",
    link: "https://testsurely.com",
    summary:
      "Founded and built Surely, an AI-powered QA and test management platform. Designed and shipped an in-app AI assistant that helps users generate test cases from requirements, triage bugs, and navigate the platform - on top of real-time analytics and sprint tracking for QA teams.",
    metrics: ["Built-in AI assistant", "AI test-case generation"],
    stack: ["AI Assistant", "Test Management", "Analytics"],
  },
  {
    id: "cierlo-architecture",
    category: "product",
    tag: "Product Work",
    period: "Feb 2023 - Present",
    title: "Cierlo - hotel management, always on",
    org: "Cierlo",
    link: "https://cierlo.app",
    summary:
      "Founded and built Cierlo, a multi-tenant hotel management system covering reservations, housekeeping, maintenance, and F&B in one place - architected with property-scoped RBAC so multi-property operators keep each property's data cleanly separated.",
    metrics: ["Multi-property RBAC", "Reservations to F&B in one system"],
    stack: ["SaaS Architecture", "REST APIs", "RBAC"],
  },
  {
    id: "automated-validation-platform",
    category: "side",
    tag: "Side Project",
    period: "Aug 2023 - Feb 2024",
    title: "An automated validation platform for complex workflows",
    org: "Baobab Partners",
    summary:
      "Built a proprietary platform to orchestrate identity, session management, and API access testing across complex product workflows, with CI/CD quality gates that blocked deployment on regressions or broken auth flows.",
    metrics: ["60% faster manual testing", "+70% pipeline performance"],
    stack: ["Cypress", "CI/CD", "JavaScript"],
  },
  {
    id: "shift-left-testing",
    category: "teardown",
    tag: "Teardown",
    period: "Feb 2021 - Aug 2023",
    title: "Why testing needed to move left",
    org: "Baobab Partners",
    summary:
      "Testing was tactical and reactive, run late and mostly manual. Rebuilt it as a platform-level roadmap strategy - automated checkpoints integrated early into the SDLC, with full regression coverage on token validation and role-based permissions.",
    metrics: ["Full regression coverage", "Shift-left SDLC checkpoints"],
    stack: ["Token Validation", "RBAC", "SDLC"],
  },
  {
    id: "enterprise-uat",
    category: "product",
    tag: "Product Work",
    period: "Feb 2014 - Feb 2021",
    title: "UAT for enterprise IT architectures",
    org: "Baobab Partners & Hitecpro",
    summary:
      "Built test data management frameworks and automated cross-browser session persistence checks, then led UAT for enterprise IT architectures - validating access boundaries before they reached production.",
    metrics: ["Cross-browser session testing", "Enterprise UAT"],
    stack: ["Python", "JavaScript", "UAT"],
  },
  {
    id: "commentary-placeholder",
    category: "notes",
    tag: "Commentary",
    period: "Ongoing",
    title: "Notes on AI product decisions",
    org: "Independent",
    summary:
      "Short write-ups on context engineering, LLM evaluation, and AI UX patterns worth studying - what a flow gets right, what a launch missed, and why. Add posts here as you publish them.",
    metrics: ["Add your first post"],
    stack: ["Writing"],
  },
];

export const approach = [
  {
    title: "AI is a tool, not the pitch",
    body: "I work across context engineering, LLM evaluation, and AI UX daily, but I stay focused on the problem the product solves, not the model powering it.",
  },
  {
    title: "Ship, then read the data",
    body: "Roadmaps get validated by feedback loops, usage analytics, and cohort analysis - not by how convincing the doc sounds in the room.",
  },
  {
    title: "Founder discipline, product rigor",
    body: "Having founded and built three products from scratch - Owtra, Surely, and Cierlo - using AI-assisted development, I stay close to the roadmap, the retention numbers, and what's actually driving product-market fit.",
  },
];

export const experience = [
  {
    role: "Founder & Chief Product Officer",
    org: "Owtra, Surely & Cierlo Platforms",
    period: "Feb 2023 - Present",
    points: [
      "Founded and built three production SaaS platforms from the ground up, applying AI product strategy and AI-assisted development end to end",
      "Built Owtra, an AI job application tracker with company-fit scoring and interview prep, to 1,000+ active users",
      "Built Surely (testsurely.com), an AI-powered QA platform with a built-in AI assistant that helps users generate test cases and triage bugs",
      "Built Cierlo, a multi-tenant hotel management system with property-scoped RBAC for multi-property operators",
      "Formulated data-driven roadmaps using feedback loops, usage analytics, and cohort analysis to validate product-market fit across all three",
    ],
  },
  {
    role: "Senior QA Engineer & Test Automation Lead",
    org: "Baobab Partners",
    period: "Aug 2023 - Feb 2024",
    points: [
      "Owned end-to-end quality and platform strategy, validating that auth flows and access control met production-grade standards",
      "Designed a proprietary automated validation platform for identity, session management, and API access testing",
      "Implemented CI/CD quality gates that blocked deployment on regressions, auth failures, or privilege boundary violations",
      "Cut manual testing time by 60% and improved pipeline performance by 70% through Cypress and JavaScript optimization",
    ],
  },
  {
    role: "QA Automation Architect & Quality Strategy Lead",
    org: "Baobab Partners",
    period: "Feb 2021 - Aug 2023",
    points: [
      "Elevated testing from tactical execution to a platform-level roadmap strategy",
      "Ensured full regression coverage for token validation frameworks and role-based permissions",
      "Established shift-left infrastructure validation, integrating auth and access-control checkpoints early into the SDLC",
    ],
  },
  {
    role: "Test Automation Engineer / QA Specialist",
    org: "Baobab Partners & Hitecpro",
    period: "Feb 2014 - Feb 2021",
    points: [
      "Built test data management frameworks and automated cross-browser session persistence validation in Python and JavaScript",
      "Led UAT for enterprise IT architectures, validating access boundaries and mitigating privilege escalation paths",
      "Provided technical documentation to cross-functional stakeholders",
    ],
  },
];

export const skills = {
  "AI & Product Intelligence": [
    "AI Product Strategy",
    "AI/ML Fluency",
    "Context Engineering",
    "LLM Evaluation",
    "AI UX",
    "Data-Driven Decision-Making",
    "Cross-Functional Execution",
  ],
  "Product Management": [
    "Product Strategy",
    "Roadmap Ownership",
    "Feature Prioritization",
    "Friction Analysis",
    "User Research",
    "Cohort Analysis",
    "KPIs & OKRs",
    "Agile/Scrum",
  ],
  "Technical & Engineering": [
    "SaaS Architecture",
    "Test Automation",
    "CI/CD Automation",
    "JavaScript",
    "Docker",
    "REST APIs",
    "Supabase",
    "Claude",
    "ChatGPT",
  ],
  "Tools & Platforms": [
    "Jira",
    "Figma",
    "Google Analytics",
    "Monday.com",
    "Asana",
    "Cypress",
    "Performance Monitoring",
  ],
};

export const certifications = [
  "Great Learning - Certified Product Manager",
  "DevCareer & UK-Nigeria Tech Hub - Certified Product Manager",
  "Udacity & Test Automation University - Certified Agile Software Tester",
];

export const education = [
  "B.Sc. Computer Science - University of Calabar, 2012"
];

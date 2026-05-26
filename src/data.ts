import { MetricCard, JobExperience, ProjectInitiative, AchievementItem, EducationItem } from "./types";

export const profileData = {
  name: "Swaraj Kumar Padma",
  initials: "SKP",
  currentTitle: "Executive Director – Engineering & Innovation",
  company: "JLL Technologies",
  location: "Bengaluru, India",
  email: "swaraj.padma358@gmail.com",
  phone: "+91-9676068934",
  linkedin: "https://www.linkedin.com/in/swarajkumarpadma",
  linkedinLabel: "linkedin.com/in/swarajkumarpadma",
  tagline: "Building AI platforms that turn complexity into competitive advantage — delivering $12M+ in measurable, enterprise-scale impact.",
  summaryParagraphs: [
    "I am a technology executive who builds AI and digital platforms from zero to enterprise scale. At JLL Technologies, I architected and shipped the company's first AI-powered platforms — spanning lease intelligence, GenAI expense management, and intelligent automation — before these were board-level mandates.",
    "My edge lies in knowing how legacy systems break, how buying committees think, and what it takes to sell AI into regulated organisations. With deep experience across real estate, financial services, and healthcare, I translate complex technology into bottom-line outcomes that C-suites can defend.",
    "I have grown engineering organisations across four geographies, directed a $13M product portfolio, and led teams through enterprise-scale migrations without a single disruption to business operations. I build cultures grounded in psychological safety, diversity, and relentless focus on value delivery.",
    "ISB-certified in Leadership with AI (2026) — I stay at the frontier because the organisations I serve depend on it."
  ]
};

export const metricCards: MetricCard[] = [
  { value: "19+", label: "Years across real estate, financial services & healthcare" },
  { value: "$12M+", label: "Annualised savings delivered via AI platforms" },
  { value: "$13M", label: "Product portfolio directed at JLL Technologies" },
  { value: "100K+", label: "Leases processed per year via LEAP platform" },
  { value: "650+", label: "Enterprise clients migrated — zero disruption" },
  { value: "4", label: "Geographies with active engineering teams led" }
];

export const competencies: string[] = [
  "AI / ML Platform Architecture",
  "GenAI Strategy & Deployment",
  "Enterprise Digital Transformation",
  "Product Portfolio Management ($13M+)",
  "Multi-Geography Engineering Leadership",
  "Regulated Industry Technology",
  "Stakeholder & Board-Level Communication",
  "Platform Modernisation & Migration",
  "Financial Services Technology",
  "Real Estate Technology",
  "Cross-Functional Team Building",
  "Vision Model Systems",
  "AWS · JLL GPT · PeopleSoft",
  "Mobile Wallet Tokenisation",
  "Source-to-Pay Automation",
  "Intelligent Process Automation",
  "Technical Pre-Sales",
  "C-Suite Influence & Funding Securement",
  "Innovation Hub Building",
  "Diversity, Equity & Inclusion Leadership"
];

export const experienceData: JobExperience[] = [
  {
    id: "job-1",
    startDate: "June 2019",
    endDate: "Present",
    location: "Bengaluru, India (Global Remit)",
    role: "Executive Director – Engineering & Innovation",
    company: "JLL Technologies",
    bullets: [
      "Architected and shipped LEAP — JLL's first AI-powered lease abstraction engine — processing 100K+ leases/year across 650+ clients, delivering $10M in annualised benefits.",
      "Built a GenAI + Vision Model expense platform (AWS, JLL GPT, PeopleSoft) from concept to production, lifting audit coverage from 57% → 100% and generating $2–3M in annualised savings.",
      "Secured C-suite funding for JLL's AI roadmap before formal mandates existed — proving GenAI ROI when the organisation was still evaluating.",
      "Directed a $13M product portfolio and multi-geography engineering org; drove platform evaluations that cut $1.5M+ in licensing costs.",
      "Established Automation Services team as strategic innovation hub, scaling AI solutions across JLL's global back-office; earned CIO 100 Award.",
      "Built and scaled high-performing engineering organisations across multiple geographies with a culture of psychological safety and inclusion."
    ]
  },
  {
    id: "job-2",
    startDate: "January 2015",
    endDate: "June 2019",
    location: "India",
    role: "Delivery Manager",
    company: "Capgemini",
    bullets: [
      "Led 70+ person offshore delivery for a global bank's cards & digital payments platform — the largest offshore programme in the portfolio.",
      "Designed and deployed credit card tokenisation (Apple Pay, Google Pay) across Europe, APAC, and Canada ahead of competitor timelines.",
      "Won new banking clients through technical pre-sales; defined migration strategies that minimised cost and portfolio risk.",
      "Defined the Convergence Pack strategy — a periodic system upgrade framework delivering cost reduction through targeted performance gains."
    ]
  },
  {
    id: "job-3",
    startDate: "August 2007",
    endDate: "December 2014",
    location: "US & India",
    role: "Senior Consultant / Consultant",
    company: "Capgemini",
    bullets: [
      "Defined the \"One Team\" operating model for HSBC Europe & Brazil — cut IT operational costs by 30% and unified siloed engineering teams globally.",
      "Led a 30-member cross-functional team through complex legacy system migrations, process redesign, and cross-functional integration.",
      "Managed career progression and performance appraisals for 10 direct senior reports across geographically distributed teams."
    ]
  },
  {
    id: "job-4",
    startDate: "July 2006",
    endDate: "August 2007",
    location: "India",
    role: "Programmer Analyst",
    company: "Cognizant Technology Solutions",
    bullets: [
      "Built foundational engineering experience developing healthcare domain modules — establishing the technical rigour that underpins 19 years of executive-level delivery."
    ]
  }
];

export const projectInitiatives: ProjectInitiative[] = [
  {
    id: "initiative-1",
    icon: "🔷",
    title: "LEAP — Lease Enterprise Administration Platform",
    subtitle: "AI-Powered · Enterprise Scale · Real Estate",
    desc: "JLL's first AI-powered lease abstraction engine — built from zero. Processes over 100,000 leases per year for 650+ enterprise clients, creating proprietary data assets that form a competitive moat. Orchestrated end-to-end client data migration with zero disruption.",
    impact: "$10M annualised benefits delivered",
    tags: ["AI / ML", "Lease Intelligence", "0 → 1 Build", "650+ Clients"]
  },
  {
    id: "initiative-2",
    icon: "🤖",
    title: "T&E Reimagined — GenAI Expense Platform",
    subtitle: "GenAI · Vision Models · FinOps",
    desc: "Pioneered JLL's first GenAI and Vision Model production deployment. A fully reimagined expense management platform on AWS, JLL GPT & PeopleSoft — transforming manual, error-prone processes into an intelligent automated system with enterprise-grade security.",
    impact: "Audit coverage: 57% → 100% · $2–3M annualised savings",
    tags: ["GenAI", "Vision Models", "AWS", "PeopleSoft"]
  },
  {
    id: "initiative-3",
    icon: "🏆",
    title: "Source-to-Pay Automation",
    subtitle: "Intelligent Automation · CIO 100 Award · Back-Office",
    desc: "Conceived and delivered automated invoice processing and intelligent payment systems replacing manual workflows across JLL's global back-office operations. Achieved substantial cost reduction and dramatically accelerated processing times.",
    impact: "CIO 100 Award Winner · Significant FTE-equivalent benefits",
    tags: ["Automation", "CIO 100", "Back-Office AI", "Global Scale"]
  },
  {
    id: "initiative-4",
    icon: "🌐",
    title: "Mobile Wallet Tokenisation — Global Bank",
    subtitle: "Fintech · Digital Payments · Multi-Market",
    desc: "Led credit card tokenisation (Apple Pay, Google Pay) across Europe, APAC & Canada for a global tier-1 bank. Managed 70+ offshore resources across full programme lifecycle from requirements through post-production handover.",
    impact: "Multi-market launch across 3 regions · 70+ delivery team",
    tags: ["Tokenisation", "Apple Pay", "Google Pay", "RBWM Banking"]
  },
  {
    id: "initiative-5",
    icon: "⚙️",
    title: "HSBC One Team Operating Model",
    subtitle: "Organisational Design · Cost Optimisation · Europe & Brazil",
    desc: "Architected a unified cross-geography operating model for HSBC Europe and Brazil, eliminating redundant silos. Led a 30-member cross-functional team through simultaneous legacy migrations and business process redesign.",
    impact: "30% reduction in IT operational costs",
    tags: ["Org Design", "HSBC", "Legacy Migration", "Cost Optimisation"]
  },
  {
    id: "initiative-6",
    icon: "📊",
    title: "Platform Standardisation & Licensing Reduction",
    subtitle: "Platform Strategy · Vendor Management · ROI",
    desc: "Led enterprise-wide technology platform evaluations and vendor selections with standardised frameworks balancing technical requirements, UX, and ROI. Established a platform foundation that enables rapid development at scale.",
    impact: "$1.5M+ in licensing cost savings delivered",
    tags: ["Vendor Strategy", "Platform Eval", "Cost Savings", "ROI Framework"]
  }
];

export const achievements: AchievementItem[] = [
  {
    id: "ach-1",
    icon: "🏆",
    title: "CIO 100 Award",
    desc: "Recognised for pioneering AI-driven source-to-pay automation at JLL Technologies — one of the top 100 most innovative tech initiatives."
  },
  {
    id: "ach-2",
    icon: "💰",
    title: "$12M+ Annualised Savings",
    desc: "Combined measurable impact of LEAP and T&E platforms, both built from scratch and scaled to global enterprise adoption."
  },
  {
    id: "ach-3",
    icon: "🚀",
    title: "0 → 1 GenAI Capability",
    desc: "Championed JLL's first GenAI and Vision Model production deployments pre-mandate — securing C-suite funding by proving ROI early."
  },
  {
    id: "ach-4",
    icon: "🌐",
    title: "650+ Client Migration — Zero Disruption",
    desc: "Orchestrated an enterprise-wide data migration to the LEAP platform spanning 650+ clients with no disruption to business operations."
  },
  {
    id: "ach-5",
    icon: "🤝",
    title: "State Advisory Committee — YARD NGO",
    desc: "Elected State Advisory Committee Member for YARD NGO, Hyderabad, contributing to youth development and community leadership."
  },
  {
    id: "ach-6",
    icon: "🪂",
    title: "World's Highest Skydive — 18,000 ft",
    desc: "Completed an 18,000 ft skydive in Florida, USA — the same calculated courage that drives bold decisions in the boardroom."
  }
];

export const education: EducationItem[] = [
  {
    id: "edu-1",
    badge: "Certification · 2026",
    degree: "Leadership with AI",
    institution: "Indian School of Business (ISB)",
    year: "April 2026",
    note: "Cutting-edge programme equipping senior executives with strategic frameworks to lead AI-driven transformation."
  },
  {
    id: "edu-2",
    badge: "Degree · 2006",
    degree: "Bachelor of Engineering — Mechanical",
    institution: "Sreenidhi Institute of Science & Technology, JNT University",
    year: "May 2006 · Hyderabad",
    note: "Engineering foundations that inform systems thinking, constraint analysis, and first-principles problem solving."
  }
];

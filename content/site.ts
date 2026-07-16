export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  bullets: string[];
}

export interface Project {
  title: string;
  year: string;
  stack: string[];
  description: string;
}

export interface SiteContent {
  name: string;
  title: string;
  subtitle: string;
  summary: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    website: string;
    github: string;
    linkedin: string;
  };
  experience: Experience[];
  projects: Project[];
  focus: string[];
  techStack: {
    backend: string[];
    frontend: string[];
    devops: string[];
    integrations: string[];
  };
  education: {
    school: string;
    degree: string;
    period: string;
    gpa: string;
  };
  languages: { name: string; level: string }[];
}

export const site: SiteContent = {
  name: "Ahmed Maged",
  title: "Full-Stack Software Engineer",
  subtitle: "Backend-Leaning • Tech Lead",
  summary:
    "Full-stack engineer specializing in end-to-end production systems, including in-house ERPs, high-traffic event platforms, and hardware/payment integrations. I own the entire process from data modeling to deployment and currently lead a team building factory software.",
  contact: {
    email: "ahmedmagedev@gmail.com",
    phone: "+20 106 851 1562",
    location: "New Cairo, Cairo",
    website: "https://ahmedmaged.net",
    github: "https://github.com/AhmedMageddev",
    linkedin: "https://linkedin.com/in/ahmedmageddev",
  },
  experience: [
    {
      role: "Tech Lead",
      company: "Solid Metals",
      period: "May 2025 — Present",
      description:
        "Leading development of a custom in-house ERP covering HR, operations, finance, and more.",
      bullets: [
        "Architecting and building a full ERP from scratch for factory operations",
        "Stack: PostgreSQL, NestJS (REST APIs), Next.js, Docker, CI/CD",
        "Leading a small engineering team through design, delivery, and production support",
      ],
    },
    {
      role: "Software Engineer",
      company: "BME Global",
      period: "Jun 2024 — Jul 2025",
      description:
        "Built tournament-management and exhibitor-management platforms for large-scale events.",
      bullets: [
        "Developed SSGL — a governmental game tournaments management system",
        "Built exhibitor registration and management tools handling high traffic spikes",
        "Owned products from database schema through UI and deployment",
      ],
    },
    {
      role: "Front-End Developer",
      company: "Golden Eagle Tech & Ataki Studio",
      period: "2022 — 2024",
      description:
        "Developed interactive web front ends for gaming studios and entertainment-discovery products.",
      bullets: [
        "Built immersive web experiences for a game studio website",
        "Developed front-end features for an entertainment venue discovery platform",
        "Collaborated on real-time, interactive user interfaces",
      ],
    },
  ],
  projects: [
    {
      title: "Multi-Branch HR Platform",
      year: "2025",
      stack: ["NestJS", "Next.js", "PostgreSQL", "Hikvision"],
      description:
        "Enterprise HR system with multi-branch support and Hikvision biometric device integration for attendance tracking.",
    },
    {
      title: "Consulting Reservation System",
      year: "2024",
      stack: ["Next.js", "NestJS", "PostgreSQL", "Payments"],
      description:
        "Full booking platform with payment-gateway integration for a consulting business.",
    },
    {
      title: "Event Gamification Engine",
      year: "2024",
      stack: ["React", "Firebase", "Real-time", "Leaderboards"],
      description:
        "Real-time activity-gamification and leaderboard system for live event engagement.",
    },
  ],
  focus: [
    "Backend APIs & data modeling",
    "System & hardware integration",
    "Production debugging",
    "Team leadership",
  ],
  techStack: {
    backend: [
      "TypeScript",
      "Node.js",
      "NestJS",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "REST APIs",
    ],
    frontend: ["Next.js", "React", "Vue", "Nuxt", "Tailwind CSS"],
    devops: ["Docker", "CI/CD", "Firebase"],
    integrations: ["Payment gateways", "Hikvision devices", "Hardware APIs"],
  },
  education: {
    school: "Helwan University",
    degree: "B.Sc. Business Information Systems",
    period: "2018–2021",
    gpa: "3.52",
  },
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Professional" },
  ],
};

/**
 * Portfolio profile data — single source of truth.
 * Edit this file to update every section of the website.
 * Sections with empty arrays / blank strings are automatically hidden.
 */

export const profile = {

  /* ───────── Personal ───────── */
  personal: {
    firstName: "Abdelaziz",
    lastName: "Mekouar",
    title: "Software Engineering Student",
    subtitle: "Full-Stack Developer passionate about building modern web applications",
    email: "a.mekouar@esisa.ac.ma",
    phone: "",
    location: "Fez, Morocco",
    avatar: "/avatar.jpg",
  },

  /* ───────── Social ───────── */
  social: {
    github: "https://github.com/amekouar-jpg",
    linkedin: "https://www.linkedin.com/in/abdelaziz-mekouar-6a4ab438a/",
    website: "https://1st-project-5m.vercel.app",
  },

  /* ───────── Stats (hero) ───────── */
  stats: [
    { label: "Projects", value: "4+" },
    { label: "Technologies", value: "10+" },
    { label: "GitHub Repos", value: "4" },
    { label: "Year", value: "2025" },
  ],

  /* ───────── About ───────── */
  about: [
    "Engineering student at ESISA (École Supérieure d'Ingénierie en Sciences Appliquées) in Fez, Morocco, specializing in software engineering and applied sciences.",
    "Focused on building full-stack web applications with modern JavaScript frameworks, REST APIs, and secure authentication systems.",
    "Constantly learning and exploring new technologies — from front-end interfaces to back-end architectures and cloud deployments.",
  ],

  /* ───────── Skills ───────── */
  skills: {
    technical: [
      {
        category: "Frontend",
        icon: "monitor",
        items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Next.js", "Responsive Design"],
      },
      {
        category: "Backend",
        icon: "server",
        items: ["Node.js", "Express.js", "REST API", "JWT Auth", "bcrypt"],
      },
      {
        category: "Database",
        icon: "database",
        items: ["SQLite", "SQL", "Vercel KV"],
      },
      {
        category: "DevOps & Tools",
        icon: "settings",
        items: ["Git", "GitHub", "Vercel", "npm", "VS Code"],
      },
    ],
    soft: [
      { name: "Problem Solving", icon: "lightbulb", description: "Analytical approach to debugging and building efficient solutions." },
      { name: "Self-Learning", icon: "book-open", description: "Continuously acquiring new skills through documentation and practice." },
      { name: "Team Collaboration", icon: "users", description: "Working effectively in group projects and code reviews." },
    ],
  },

  /* ───────── Education ───────── */
  education: [
    {
      period: "2023 – Present",
      degree: "Software Engineering Degree",
      institution: "ESISA – École Supérieure d'Ingénierie en Sciences Appliquées",
      institutionUrl: "https://www.esisa.ac.ma",
      description: "Studying software engineering, algorithms, databases, web development, and applied sciences in Fez, Morocco.",
    },
  ],

  /* ───────── Experience (empty → hidden) ───────── */
  experience: [],

  /* ───────── Publications (empty → hidden) ───────── */
  publications: [],

  /* ───────── Certifications (empty → hidden) ───────── */
  certifications: [],

  /* ───────── Projects ───────── */
  projects: [
    {
      title: "Student Management System",
      description: "Full-stack CRUD application with JWT authentication, Express.js backend, SQLite database, and a modern responsive dashboard. Features include student records management, search, statistics, and secure login.",
      tags: ["Node.js", "Express", "SQLite", "JWT", "HTML/CSS/JS"],
      url: "https://github.com/amekouar-jpg/1st-project",
      live: "https://1st-project-5m.vercel.app",
    },
    {
      title: "Azerty",
      description: "A JavaScript web application exploring interactive UI patterns and modern front-end techniques.",
      tags: ["JavaScript", "HTML", "CSS"],
      url: "https://github.com/amekouar-jpg/azerty",
      live: "",
    },
    {
      title: "IK Project",
      description: "JavaScript-based project demonstrating dynamic web functionality and DOM manipulation.",
      tags: ["JavaScript", "HTML", "CSS"],
      url: "https://github.com/amekouar-jpg/ik",
      live: "",
    },
    {
      title: "Next.js App",
      description: "A Next.js application scaffold for exploring the React framework and server-side rendering capabilities.",
      tags: ["Next.js", "React", "JavaScript"],
      url: "https://github.com/amekouar-jpg/app-nextjs",
      live: "",
    },
  ],
};

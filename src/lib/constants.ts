import {
    PiHouse,
    PiFolder,
    PiSuitcase,
    PiWrench,
    PiNotePencil,
    PiGraduationCap
} from "react-icons/pi";

export const TypeExperience = {
  internship: "Internship",
  fullTime: "Full-Time"
}

export const DATA = {
    fullName: "Fikri Akbar Pratama",
    role: "Full-Stack Developer",
    avatarUrl: "/me.jpeg",
    description: "A passionate developer dedicated to building clean, scalable, and user-centric web applications.",
    shortDescription: "Building clean, scalable, and user-centric web applications.",
    email: "fikriarp.dev@gmail.com",
    location: "Jakarta, Indonesia",
    socials: {
        github: "https://github.com/fkriarp",
        linkedin: "https://linkedin.com/in/fkriarp",
        instagram: "https://instagram.com/fkriarp",
    },

    about: {
        paragraphs: [
          "I'm a full-stack developer with 4+ years of experience building products that people actually enjoy using. My work spans from pixel-perfect UIs to robust backend APIs.",
          "When I'm not coding, you'll find me contributing to open-source, writing about software architecture, or exploring the outdoors with a camera in hand.",
        ],
        stats: [
          { label: "Years Experience", value: "4+" },
          { label: "Projects Shipped", value: "10+" },
          { label: "Open-Source Repos", value: "0" },
        ],
    },

    menus: [
      { label: "home", href: "#home", icon: PiHouse },
      { label: "project", href: "#projects", icon: PiFolder },
      { label: "experience", href: "#experience", icon: PiSuitcase },
      { label: "education", href: "#education", icon: PiGraduationCap },
      { label: "tool", href: "#tools", icon: PiWrench },
      { label: "contact", href: "#contact", icon: PiNotePencil },
    ],

    projects: [
      {
        title: "Pengaduan Masyarakat",
        description:
          "A web-based public complaint management system that enables citizens to submit, track, and manage reports efficiently. Built with responsive UI and secure backend integration to improve public service workflows.",
        tags: ["Laravel", "PostgreSQL", "Bootstrap", "JavaScript"],
        liveUrl: "https://hungrabbitry.github.io/deploy-pending/",
        githubUrl: "https://github.com/fkriarp/pengaduan-masyarakat.git",
        featured: false,
      },
      {
        title: "Indo April",
        description:
          "A cashier and point-of-sale (POS) application designed to manage transactions, product inventory, and sales reporting in real time. Developed with modern web technologies for fast and efficient store operations.",
        tags: ["Laravel", "PostgreSQL", "Bootstrap", "JavaScript"],
        liveUrl: "https://hungrabbitry.github.io/deploy-pending/",
        githubUrl: "https://github.com/fkriarp/indo-april.git",
        featured: false,
      },
      {
        title: "DSA Playground",
        description:
          "An interactive laboratory and visualizer for Linear (Array, Linked List, Stack, Queue) and Non-Linear (BST, Graph) Data Structures with real-time memory address animations, Big-O complexity matrix, and live pseudocode execution.",
        tags: ["JavaScript", "HTML5", "CSS3", "Algorithms", "Data Structures"],
        liveUrl: "https://hungrabbitry.github.io/dsa-playground/",
        githubUrl: "https://github.com/hungrabbitry/dsa-playground.git",
        featured: false,
      },
    ],

    experiences: [
      {
        company: "PT. Four Best Synergy",
        role: "Web Developer Intern",
        period: "January 2025 – June 2025",
        type: TypeExperience.internship,
        description:
          "Contributed to modern full-stack web application development using React and Laravel integrated with PostgreSQL. Built responsive user interface components, implemented business features, and integrated RESTful APIs.",
        tags: ["React", "Laravel", "PostgreSQL"],
      },
      {
        company: "PT. Four Best Synergy",
        role: "Web Developer Intern",
        period: "January 2026 – June 2026",
        type: TypeExperience.internship,
        description:
          "Maintained and enhanced core enterprise modules for the Dealer Management System (DMS) using CodeIgniter and PostgreSQL. Spearheaded codebase refactoring to reduce cognitive complexity, streamline business logic, and improve long-term maintainability.",
        tags: ["CodeIgniter", "PostgreSQL", "PHP", "Code Refactoring"],
      },
      {
        company: "PT. Four Best Synergy",
        role: "Full Stack Developer",
        period: "2026 – Present",
        type: TypeExperience.fullTime, 
        description:
          "Spearheading the backend development and maintenance of the Dealer Management System (DMS). Focused on engineering robust business features and optimizing database queries using CodeIgniter and PostgreSQL to ensure data integrity and system stability.",
        tags: [
          "CodeIgniter",
          "PostgreSQL",
        ],
      },
    ],
 
    education: [
      {
        institution: "SMK Wikrama Bogor",
        degree: "Software and Game Development",
        period: "2023 – 2026",
        description:
          "Graduated with honours. Focused on algorithms, distributed systems, and human-computer interaction.",
        gpa: ""
      },
    ],
 
    tools: [
      {
        category: "Languages",
        items: ["TypeScript", "JavaScript", "PHP", "SQL"],
      },
      {
        category: "Frontend",
        items: ["React", "Next.js", "Tailwind CSS", "Shadcn", "Radix UI"],
      },
      {
        category: "Backend",
        items: ["Node.js", "Express.js", "Laravel", "PostgreSQL", "Redis", "Prisma"],
      },
      {
        category: "Infrastructure",
        items: ["Docker", "Vercel", "GitHub Actions"],
      },
    ],
}

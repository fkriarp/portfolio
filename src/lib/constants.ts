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
    avatarUrl: "/personal-logo.png",
    description: "A passionate developer dedicated to building clean, scalable, and user-centric web applications.",
    shortDescription: "Building clean, scalable, and user-centric web applications.",
    email: "fikri.akbar1p@gmail.com",
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
          { label: "Projects Shipped", value: "30+" },
          { label: "Open-Source Repos", value: "12" },
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
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/fkriarp/pengaduan-masyarakat.git",
        featured: false,
      },
      {
        title: "Indo April - Kasir App",
        description:
          "A cashier and point-of-sale (POS) application designed to manage transactions, product inventory, and sales reporting in real time. Developed with modern web technologies for fast and efficient store operations.",
        tags: ["Laravel", "PostgreSQL", "Bootstrap", "JavaScript"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/fkriarp/indo-april.git",
        featured: false,
      },
    ],

    experiences: [
      {
        company: "PT. Four Best Synergy",
        role: "Web Developer",
        period: "2025 – 2026",
        type: TypeExperience.internship,
        description:
          "Developed and maintained multiple web-based business applications, including a Dealer Management System (DMS). Built backend systems and business features using CodeIgniter and PostgreSQL, while also contributing to modern web application development with React, Next.js, Laravel, and TypeScript. Collaborated with teams to improve system performance, usability, and scalability.",
        tags: [
          "React",
          "TypeScript",
          "Next.js",
          "Laravel",
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
      {
        category: "Workflow",
        items: ["Git", "Figma", "Notion", "Zed"],
      },
    ],
}
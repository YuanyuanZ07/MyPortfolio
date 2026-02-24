// Portfolio content — edit here to update the site.

export const PERSONAL_INFO = {
  name: "Yuanyuan Zhou",
  initials: "YZ",
  title: "Junior Software Developer | IT Programming Student (NSCC, Halifax)",
  summary:
    "An IT Programming student in Halifax who builds web and mobile applications and enjoys solving real-world problems. Interested in civic technology, debugging systems, and improving user workflows.",
  aboutText:
    "An international student in Halifax learning software development, interested in building useful community-focused tools and continuously improving technical and communication skills. Currently seeking entry-level Junior Developer or IT Support opportunities.",
  statusBadge: "Open to opportunities",
  copyright: "© 2026 Yuanyuan Zhou",
  builtWith: "Built with Next.js & Tailwind CSS",
} as const

export const SOCIAL_LINKS = {
  github: {
    url: "https://github.com/YuanyuanZ07",
    display: "github.com/YuanyuanZ07",
    label: "GitHub",
  },
  linkedin: {
    url: "https://linkedin.com/in/yuanyuan-zhou-33791b282",
    display: "linkedin.com/in/yuanyuan-zhou-33791b282",
    label: "LinkedIn",
  },
  email: {
    address: "W0504770@nscc.ca",
    url: "mailto:W0504770@nscc.ca",
    display: "W0504770@nscc.ca",
    label: "Email",
  },
} as const

export const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const

export const FEATURED_PROJECT = {
  title: "Halifax Road Issue Reporting Platform",
  subtitle:
    "Community reporting and ticket-style tracking system for city infrastructure issues",
  description:
    "A civic web application that allows residents to report potholes and street issues, view locations on a map, and track repair status. The goal is to improve communication between citizens and the city.",
  image: {
    src: "/images/map-preview.jpg",
    alt: "Halifax Road Issue Reporting Platform - Interactive map showing reported road issues",
  },
  githubUrl: "https://github.com/YuanyuanZ07/halifax-roadwatch",
  previewUrl: "https://halifax-road-report.vercel.app/", // replace when a live demo is available
  features: [
    "Location-based reporting",
    "Photo upload",
    "Issue status tracking",
    "Interactive map visualization",
  ],
} as const

export const PROJECTS = [
  {
    title: "Weather Desktop App",
    description:
      "Displays real-time weather API data with error handling and clean UI.",
    tags: [".NET", "C#", "REST API"],
    githubUrl: "https://github.com/YuanyuanZ07/Weather",
    iconName: "Cloud" as const,
  },
  {
    title: "Halifax Transit Android App",
    description:
      "Mobile app using Mapbox visualization and live transit data.",
    tags: ["Android", "Mapbox", "API"],
    githubUrl: "https://github.com/YuanyuanZ07/Halifax-Transit-App",
    iconName: "Bus" as const,
  },
] as const

export const SKILL_GROUPS = [
  {
    title: "Frontend",
    iconName: "Monitor" as const,
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Backend",
    iconName: "Server" as const,
    skills: ["Node.js", "Express", "REST APIs"],
  },
  {
    title: "Other",
    iconName: "Wrench" as const,
    skills: ["SQL", "MongoDB", "Git", "Linux", "Android", "Mapbox"],
  },
] as const

export const IT_SUPPORT = {
  description:
    "Experience helping users solve technical problems, debugging issues, and explaining technical concepts to non-technical users. The civic road reporting platform also reflects a ticket-style workflow similar to real support systems.",
  cards: [
    {
      iconName: "Search" as const,
      title: "Problem Identification",
      description:
        "Understanding what the user actually experiences vs what they describe.",
    },
    {
      iconName: "GitBranch" as const,
      title: "Troubleshooting",
      description:
        "Breaking problems into steps and isolating root causes.",
    },
    {
      iconName: "MessageCircle" as const,
      title: "Communication",
      description:
        "Explaining technical solutions clearly to non-technical users.",
    },
  ],
} as const

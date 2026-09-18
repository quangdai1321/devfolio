import type { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  name: "Your Name",
  headline: "Full-Stack Developer",
  intro:
    "I build reliable software products with a focus on performance, usability, and maintainable architecture.",
  about:
    "This portfolio is ready for your real profile. Replace each placeholder with your own background, achievements, and project details.",
  careerJourney:
    "Share your career journey here, such as how you moved into software engineering, key milestones, and what drives your work today.",
  location: "City, Country (Placeholder)",
  availability: "Open to full-time and freelance opportunities",
  cvPath: "/cv-placeholder.pdf",
  contactEmail: "you@example.com",
  socialLinks: [
    { label: "GitHub", href: "https://github.com/your-username" },
    { label: "LinkedIn", href: "https://linkedin.com/in/your-username" },
    { label: "X", href: "https://x.com/your-username" },
    { label: "Portfolio", href: "https://your-domain.example" },
  ],
  skills: [
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "REST APIs",
    "SQL",
    "Testing",
    "CI/CD",
  ],
  experiences: [
    {
      role: "Senior Software Engineer (Placeholder)",
      company: "Company Name",
      period: "2022 - Present",
      summary:
        "Summarize impact here: key ownership areas, product outcomes, and technical leadership contributions.",
    },
    {
      role: "Software Engineer (Placeholder)",
      company: "Company Name",
      period: "2019 - 2022",
      summary:
        "Add details about feature delivery, collaboration, and measurable improvements.",
    },
  ],
  projects: [
    {
      name: "Project Name",
      description:
        "Describe the problem, your solution, and the measurable result. Include links when available.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS"],
      href: "https://github.com/your-username/project-name",
    },
    {
      name: "Project Name",
      description:
        "Another project placeholder. Replace with real repositories or product links.",
      stack: ["React", "Node.js", "PostgreSQL"],
      href: "https://github.com/your-username/project-name-2",
    },
  ],
  education: [
    {
      degree: "Degree Name (Placeholder)",
      institution: "University Name",
      period: "2015 - 2019",
      details:
        "Add relevant coursework, thesis, honors, or activities.",
    },
  ],
  achievements: [
    {
      title: "Achievement Title",
      description:
        "Use this section for awards, speaking sessions, certifications, or open-source milestones.",
    },
    {
      title: "Achievement Title",
      description:
        "Keep achievement entries concise and outcome-focused.",
    },
  ],
};

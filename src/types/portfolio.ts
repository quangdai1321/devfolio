export type SocialLink = {
  label: string;
  href: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  summary: string;
};

export type ProjectItem = {
  name: string;
  description: string;
  stack: string[];
  href: string;
};

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  details: string;
};

export type AchievementItem = {
  title: string;
  description: string;
};

export type PortfolioData = {
  name: string;
  headline: string;
  intro: string;
  about: string;
  careerJourney: string;
  location: string;
  availability: string;
  cvPath: string;
  contactEmail: string;
  socialLinks: SocialLink[];
  skills: string[];
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  achievements: AchievementItem[];
};

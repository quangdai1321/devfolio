import { Section } from "@/components/section";
import { SectionCard } from "@/components/section-card";
import { portfolioData } from "@/data/portfolio";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <header className="sticky top-0 z-10 border-b border-slate-800/90 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#hero" className="font-semibold tracking-tight text-slate-100">
            {portfolioData.name}
          </a>
          <nav className="flex flex-wrap justify-end gap-3 text-xs text-slate-300 md:gap-5 md:text-sm">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-sky-300">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-12">
        <section id="hero" className="scroll-mt-24 space-y-8">
          <p className="text-sm uppercase tracking-[0.18em] text-sky-300">
            Developer Portfolio
          </p>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">
              {portfolioData.headline}
            </h1>
            <p className="max-w-2xl text-lg text-slate-300">{portfolioData.intro}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={portfolioData.cvPath}
              download
              className="rounded-lg bg-sky-400 px-5 py-2.5 font-medium text-slate-950 transition hover:bg-sky-300"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-slate-700 px-5 py-2.5 font-medium hover:border-sky-300 hover:text-sky-300"
            >
              Contact
            </a>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-slate-300">
            {portfolioData.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-slate-800 px-3 py-1.5 hover:border-sky-300 hover:text-sky-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>

        <Section id="about" title="About" subtitle={portfolioData.location}>
          <div className="space-y-4 text-slate-300">
            <p>{portfolioData.about}</p>
            <p>{portfolioData.careerJourney}</p>
            <p className="text-sm text-slate-400">{portfolioData.availability}</p>
          </div>
        </Section>

        <Section id="experience" title="Work Experience">
          <div className="space-y-4">
            {portfolioData.experiences.map((experience) => (
              <SectionCard key={`${experience.company}-${experience.period}`}>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-slate-100">{experience.role}</h3>
                  <p className="text-sm text-slate-400">
                    {experience.company} · {experience.period}
                  </p>
                  <p className="text-slate-300">{experience.summary}</p>
                </div>
              </SectionCard>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <ul className="flex flex-wrap gap-3">
            {portfolioData.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-slate-700 px-4 py-1.5 text-sm text-slate-300"
              >
                {skill}
              </li>
            ))}
          </ul>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid gap-4 md:grid-cols-2">
            {portfolioData.projects.map((project, index) => (
              <SectionCard key={`${project.name}-${index}`}>
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-slate-100">{project.name}</h3>
                  <p className="text-slate-300">{project.description}</p>
                  <p className="text-sm text-slate-400">{project.stack.join(" · ")}</p>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-sky-300 hover:text-sky-200"
                  >
                    View project →
                  </a>
                </div>
              </SectionCard>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education">
          <div className="space-y-4">
            {portfolioData.education.map((item) => (
              <SectionCard key={`${item.institution}-${item.period}`}>
                <h3 className="text-lg font-medium text-slate-100">{item.degree}</h3>
                <p className="text-sm text-slate-400">
                  {item.institution} · {item.period}
                </p>
                <p className="mt-2 text-slate-300">{item.details}</p>
              </SectionCard>
            ))}
          </div>
        </Section>

        <Section id="achievements" title="Achievements">
          <div className="space-y-4">
            {portfolioData.achievements.map((achievement, index) => (
              <SectionCard key={`${achievement.title}-${index}`}>
                <h3 className="text-lg font-medium text-slate-100">{achievement.title}</h3>
                <p className="mt-2 text-slate-300">{achievement.description}</p>
              </SectionCard>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <SectionCard>
            <div className="space-y-3 text-slate-300">
              <p>
                Ready to collaborate? Reach out at{" "}
                <a
                  href={`mailto:${portfolioData.contactEmail}`}
                  className="font-medium text-sky-300 hover:text-sky-200"
                >
                  {portfolioData.contactEmail}
                </a>
                .
              </p>
              <p className="text-sm text-slate-400">
                Replace this placeholder with your preferred contact method,
                timezone, and response expectations.
              </p>
            </div>
          </SectionCard>
        </Section>
      </main>
    </div>
  );
}

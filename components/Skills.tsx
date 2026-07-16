import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { site } from "@/content/site";

const stackCategories = [
  { key: "backend" as const, label: "Backend" },
  { key: "frontend" as const, label: "Frontend" },
  { key: "devops" as const, label: "DevOps" },
  { key: "integrations" as const, label: "Integrations" },
];

export function Skills() {
  return (
    <section id="skills" className="border-b border-border py-20 sm:py-28">
      <div className="container-main">
        <Reveal className="mb-14">
          <p className="section-label mb-3">Expertise</p>
          <h2 className="section-heading">Skills & Focus</h2>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
          <Stagger className="grid gap-8 sm:grid-cols-2">
            {stackCategories.map(({ key, label }) => (
              <StaggerItem key={key}>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                  {label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {site.techStack[key].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.15}>
            <aside className="rounded-xl border border-border bg-surface p-6">
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-foreground">
                Focus
              </h3>
              <ul className="space-y-4">
                {site.focus.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

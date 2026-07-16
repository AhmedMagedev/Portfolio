import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { site } from "@/content/site";

export function Projects() {
  return (
    <section id="projects" className="border-b border-border py-20 sm:py-28">
      <div className="container-main">
        <Reveal className="mb-14">
          <p className="section-label mb-3">Work</p>
          <h2 className="section-heading">Selected Projects</h2>
        </Reveal>

        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {site.projects.map((project) => (
            <StaggerItem
              key={project.title}
              as="article"
              whileHover={{ y: -3 }}
              className="group flex flex-col rounded-xl border border-border bg-surface p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-accent">
                  {project.title}
                </h3>
                <span className="shrink-0 text-sm text-subtle">
                  {project.year}
                </span>
              </div>

              <p className="mb-6 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-background px-3 py-1 text-xs font-medium text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

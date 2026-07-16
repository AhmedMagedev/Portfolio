import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { TimelineDot } from "@/components/motion/TimelineDot";
import { site } from "@/content/site";

export function Experience() {
  return (
    <section id="experience" className="border-b border-border py-20 sm:py-28">
      <div className="container-main">
        <Reveal className="mb-14">
          <p className="section-label mb-3">Career</p>
          <h2 className="section-heading">Experience</h2>
        </Reveal>

        <div className="relative space-y-12">
          <div className="absolute left-[7px] top-2 hidden h-[calc(100%-16px)] w-px bg-border sm:block" />

          <Stagger className="space-y-12">
            {site.experience.map((job) => (
              <StaggerItem
                key={`${job.company}-${job.period}`}
                as="article"
                className="relative sm:pl-10"
              >
                <TimelineDot />

                <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {job.role}
                        <span className="text-muted"> — {job.company}</span>
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {job.description}
                      </p>
                    </div>
                    <time className="shrink-0 text-sm font-medium text-subtle">
                      {job.period}
                    </time>
                  </div>

                  <ul className="mt-5 space-y-2">
                    {job.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

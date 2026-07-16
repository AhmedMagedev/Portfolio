import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { site } from "@/content/site";

export function Education() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-main">
        <div className="grid gap-12 sm:grid-cols-2">
          <Reveal>
            <p className="section-label mb-3">Background</p>
            <h2 className="section-heading mb-6">Education</h2>
            <div className="rounded-xl border border-border bg-surface p-6">
              <h3 className="text-lg font-semibold text-foreground">
                {site.education.school}
              </h3>
              <p className="mt-2 text-sm text-muted">{site.education.degree}</p>
              <div className="mt-4 flex gap-4 text-sm text-subtle">
                <span>{site.education.period}</span>
                <span>GPA: {site.education.gpa}</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="section-label mb-3">Communication</p>
            <h2 className="section-heading mb-6">Languages</h2>
            <Stagger className="space-y-3">
              {site.languages.map((lang) => (
                <StaggerItem
                  key={lang.name}
                  className="flex items-center justify-between rounded-xl border border-border bg-surface px-6 py-4"
                >
                  <span className="font-medium text-foreground">
                    {lang.name}
                  </span>
                  <span className="text-sm text-subtle">{lang.level}</span>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

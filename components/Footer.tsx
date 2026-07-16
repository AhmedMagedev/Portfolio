import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { site } from "@/content/site";

const contactLinks = [
  {
    label: "Email",
    href: `mailto:${site.contact.email}`,
    value: site.contact.email,
  },
  {
    label: "Phone",
    href: `tel:${site.contact.phone.replace(/\s/g, "")}`,
    value: site.contact.phone,
  },
  {
    label: "GitHub",
    href: site.contact.github,
    value: "github.com/AhmedMageddev",
  },
  {
    label: "LinkedIn",
    href: site.contact.linkedin,
    value: "linkedin.com/in/ahmedmageddev",
  },
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-surface py-16">
      <div className="container-main">
        <Reveal className="mb-12">
          <p className="section-label mb-3">Get in touch</p>
          <h2 className="section-heading mb-4">Let&apos;s work together</h2>
          <p className="max-w-xl text-muted">
            Open to full-time roles, consulting, and interesting projects. Based
            in {site.contact.location}.
          </p>
        </Reveal>

        <Stagger className="mb-12 grid gap-4 sm:grid-cols-2">
          {contactLinks.map((link) => (
            <StaggerItem
              key={link.label}
              as="a"
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              whileHover={{ y: -2 }}
              className="group rounded-xl border border-border p-5 transition-colors hover:border-accent"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-subtle">
                {link.label}
              </p>
              <p className="mt-2 text-sm text-foreground transition-colors group-hover:text-accent">
                {link.value}
              </p>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal>
          <div className="flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
            <p className="text-sm text-subtle">
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
            <a
              href="/cv.pdf"
              download
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              Download CV (PDF)
            </a>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}

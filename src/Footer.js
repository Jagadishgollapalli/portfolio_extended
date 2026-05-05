import { Sparkles, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-surface-border/70 text-ink overflow-hidden pb-24 sm:pb-28">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[60%] bg-[radial-gradient(ellipse_60%_70%_at_50%_0%,rgba(251,191,36,0.07),transparent_70%)] pointer-events-none"
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 ring-1 ring-accent/30 text-accent">
                <Sparkles className="h-4 w-4" strokeWidth={2.4} />
              </span>
              <span className="font-display font-extrabold text-2xl tracking-tight text-ink">
                Jagadish<span className="text-accent">.</span>
              </span>
            </div>
            <h2 className="mt-7 font-display font-extrabold text-3xl sm:text-4xl tracking-[-0.025em] text-ink leading-tight">
              Let's build something{" "}
              <span className="text-gold-gradient">solid</span>.
            </h2>
            <p className="mt-5 text-ink-muted text-base sm:text-lg leading-relaxed max-w-md">
              Full stack developer building scalable services, thoughtful React
              UIs, and reliable data layers—based in Texas.
            </p>
            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/[0.07] px-5 py-2.5 text-sm font-semibold text-accent hover:bg-accent hover:text-black transition-all"
            >
              Hire Me
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <nav className="md:col-span-3" aria-label="Footer">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-accent mb-5">
              Navigate
            </p>
            <ul className="flex flex-col gap-3.5">
              {footerLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-ink-muted hover:text-accent transition-colors text-base font-medium"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-accent mb-5">
              Connect
            </p>
            <div className="flex items-center gap-2.5">
              <a
                href="https://github.com/jagadishgollapalli"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-surface-border bg-surface-inset/70 text-ink-muted hover:text-accent hover:border-accent/40 transition"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href="https://www.linkedin.com/in/g-jagadish954186205/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-surface-border bg-surface-inset/70 text-ink-muted hover:text-accent hover:border-accent/40 transition"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href="https://www.youtube.com/@RetailTraderHub"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-surface-border bg-surface-inset/70 text-ink-muted hover:text-accent hover:border-accent/40 transition"
              >
                <IoLogoYoutube className="text-lg" />
              </a>
            </div>
            <a
              href="mailto:jagadish.g2408@gmail.com"
              className="mt-6 inline-block font-display font-bold text-ink hover:text-accent transition-colors break-all text-lg"
            >
              jagadish.g2408@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-14 pt-7 border-t border-surface-border/50 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-ink-subtle uppercase tracking-[0.18em]">
          <p>© {new Date().getFullYear()} · Jagadish Gollapalli · Austin, TX</p>
          <p>
            Built with React &amp; Tailwind ·{" "}
            <span className="text-accent">crafted with care</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

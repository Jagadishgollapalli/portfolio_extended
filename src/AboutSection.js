import { MapPin, Briefcase, GraduationCap, Github, Youtube } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import portrait from "./images/me2.png";
import RevealSection from "./RevealSection";
import SectionHeading from "./SectionHeading";

const traits = [
  "Problem Solver",
  "Systems Thinker",
  "Product-minded Engineer",
];

const quickFacts = [
  { Icon: MapPin, label: "Based In", value: "Texas, USA", sub: "Remote / Hybrid" },
  { Icon: Briefcase, label: "Experience", value: "6+ Years", sub: "Production engineering" },
  {
    Icon: GraduationCap,
    label: "Education",
    value: "M.S. Applied CS",
    sub: "Northwest Missouri State Univ.",
  },
];

const links = [
  {
    title: "GitHub",
    sub: "Source · Open Source",
    Icon: Github,
    href: "https://github.com/jagadishgollapalli",
  },
  {
    title: "LinkedIn",
    sub: "Career · Network",
    Icon: FaLinkedin,
    href: "https://www.linkedin.com/in/g-jagadish954186205/",
  },
  {
    title: "YouTube",
    sub: "Retail Trader Hub",
    Icon: Youtube,
    href: "https://www.youtube.com/@RetailTraderHub",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-28 px-4 sm:px-6">
      <div
        aria-hidden
        className="absolute inset-0 section-grid pointer-events-none"
      />
      <div className="relative max-w-7xl mx-auto">
        <RevealSection>
          <SectionHeading
            eyebrow="ABOUT ME"
            title="Engineer behind"
            highlight="the systems"
            subtitle="Full-stack engineer building reliable platforms—APIs, UIs, data, and cloud—across modern Java, Go, and React stacks."
          />
        </RevealSection>

        <RevealSection>
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-[2.25rem] bg-gradient-to-br from-accent/35 via-accent/5 to-transparent blur-3xl opacity-70 pointer-events-none"
            />

            <article className="relative isolate overflow-hidden rounded-3xl border border-accent/25 bg-black shadow-lift min-h-[640px] md:min-h-[620px]">
              <img
                src={portrait}
                alt="Jagadish Gollapalli portrait"
                className="absolute inset-y-0 left-0 h-full w-full md:w-[100%] object-cover object-[center_15%] md:object-[left_35%_center] motion-safe:transition-transform motion-safe:duration-[1500ms] motion-safe:ease-out hover:scale-[1.03] pointer-events-none select-none"
              />

              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-l from-black via-black/85 from-[35%] via-[55%] to-black/30 md:from-black md:via-black/75 md:from-[42%] md:via-[68%] md:to-transparent pointer-events-none"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/40 pointer-events-none"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_25%_30%,rgba(251,191,36,0.16),transparent_60%)] mix-blend-soft-light pointer-events-none"
              />
              <div
                aria-hidden
                className="absolute inset-0 ring-1 ring-inset ring-white/[0.05] rounded-3xl pointer-events-none"
              />

              <div className="relative z-10 flex flex-col h-full p-7 sm:p-10 md:p-12 lg:p-14 max-w-2xl ml-auto md:text-left">
                <p className="font-mono text-[0.7rem] sm:text-xs uppercase tracking-[0.28em] text-accent">
                  The Tech Craftsman
                </p>
                <h3 className="font-display font-extrabold text-3xl sm:text-4xl md:text-[2.65rem] text-ink mt-4 tracking-[-0.025em] leading-[1.1]">
                  Bridging clean architecture with
                  <span className="text-gold-gradient"> great UX</span>
                  <span className="text-accent">.</span>
                </h3>
                <div className="mt-5 h-px w-12 bg-gradient-to-r from-accent to-transparent" />
                <p className="mt-6 text-base md:text-lg text-ink-muted leading-relaxed [text-shadow:0_1px_8px_rgb(0_0_0_/_60%)]">
                  I focus on scalable, data-intensive platforms—Spring Boot &amp;
                  Go services, GraphQL APIs, Postgres at scale, and React UIs
                  that feel fast. Recent work spans AI-driven ingestion
                  pipelines, reporting, and operational tooling with a strong
                  lens on reliability, performance, and clear user flows.
                </p>
                <p className="mt-5 text-base md:text-lg text-ink-muted leading-relaxed [text-shadow:0_1px_8px_rgb(0_0_0_/_60%)]">
                  I care about the boring fundamentals: query plans, indexes,
                  lazy loading, observability, error budgets, and tests that
                  actually catch regressions.
                </p>

                <div className="mt-7 flex flex-wrap gap-2.5">
                  {traits.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-black/55 backdrop-blur-md px-3.5 py-1.5 text-xs sm:text-sm font-medium text-ink"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_2px_rgba(251,191,36,0.5)]" />
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-10">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 rounded-2xl border border-white/[0.06] bg-black/55 backdrop-blur-md p-5">
                    {quickFacts.map(({ Icon, label, value, sub }) => (
                      <div key={label} className="flex flex-col">
                        <div className="flex items-center gap-2 text-accent">
                          <Icon className="h-3.5 w-3.5" />
                          <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em]">
                            {label}
                          </span>
                        </div>
                        <p className="font-display font-bold text-lg text-ink mt-2 tracking-tight leading-tight">
                          {value}
                        </p>
                        <p className="text-xs text-ink-muted mt-1 leading-snug">
                          {sub}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </RevealSection>

        <RevealSection className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {links.map(({ title, sub, Icon, href }) => (
              <a
                key={title}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center justify-between rounded-2xl border border-surface-border/70 bg-surface-card/40 backdrop-blur-md p-5 transition-all duration-300 hover:border-accent/40 hover:bg-surface-card/65 hover:-translate-y-0.5"
              >
                <div>
                  <p className="font-display font-bold text-lg text-ink tracking-tight">
                    {title}
                  </p>
                  <p className="text-sm text-ink-muted mt-0.5">{sub}</p>
                </div>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/30 transition group-hover:bg-accent group-hover:text-black">
                  <Icon className="h-5 w-5" />
                </span>
              </a>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

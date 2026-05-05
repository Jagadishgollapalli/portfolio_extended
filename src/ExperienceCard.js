import { MapPin, Calendar } from "lucide-react";
import RevealSection from "./RevealSection";
import SectionHeading from "./SectionHeading";

const roles = [
  {
    company: "Triplemeter Inc",
    location: "TX",
    title: "Software Engineer",
    period: "March 2025 – Present",
    highlights: [
      "Decoupled AI ingestion across Go and Python—Go for orchestration, uploads, and inbox entry points; Python focused on extraction—for easier evolution in production.",
      "Led Activity Reporting and Inventory reporting expansion: modeling, validation, and secure persistence on Postgres for AI-assisted workflows; coordinated offshore engineers for production readiness.",
      "Shipped an IR reporting UI with advanced filtering and audit-focused UX; improved data-fetch performance ~20% via query plans, indexes, and pagination on Go handlers.",
      "Built communication settings (persistence, rules, UI) and email sharing for catalog/order artifacts, including permission and delivery edge cases.",
      "Introduced reusable auth-aware React hooks and client-safe device detection; used lazy loading and Suspense to improve perceived performance on data-heavy and iOS views.",
      "Delivered Control Center / Ops Console dashboards; extended Chakra UI theming and refined UX across procurement, orders, gate activity, and catalogs.",
    ],
  },
  {
    company: "CRST International",
    location: "TX",
    title: "Full Stack Java Developer",
    period: "May 2024 – January 2025",
    highlights: [
      "Built Spring Boot REST services (Spring Security, Spring Data JPA, Hibernate); improved API response times ~20% through query and payload tuning.",
      "Secured APIs with Microsoft SSO via Spring Security and OAuth2; deployed containerized microservices on AWS EC2.",
      "Used Java streams (including parallel streams) for batch and in-memory pipelines; applied multithreading, exception handling, and collections for feature work.",
      "Achieved ~80% code coverage with JUnit; improved frontend responsiveness with optimistic updates via TanStack Query.",
      "Redesigned the site with React and TypeScript—roughly 30% less redundant code and faster loads; owned 8+ REST services for client data extraction.",
    ],
  },
  {
    company: "Juhomi Ltd",
    location: "India",
    title: "Java Developer",
    period: "June 2019 – December 2022",
    highlights: [
      "Worked across agile delivery with frontend and DevOps partners; used Java 8 lambdas, functional interfaces, and streams for maintainability.",
      "Implemented ORM with Hibernate and Spring Data JPA; secured ~80% of endpoints with JWT.",
      "Front end: React with Redux and Material UI; shared state via Context and custom hooks; tests with Jest and Enzyme.",
    ],
  },
];

const ExperienceCards = () => {
  return (
    <section
      id="experience"
      className="relative py-24 sm:py-28 px-4 sm:px-6 border-t border-surface-border/60"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-accent/[0.03] via-transparent to-transparent pointer-events-none"
      />
      <div className="relative max-w-6xl mx-auto">
        <RevealSection>
          <SectionHeading
            eyebrow="EXPERIENCE"
            title="Where I've"
            highlight="shipped"
            subtitle="Recent roles emphasizing microservices, React product UI, Postgres, AWS, and operational tooling."
          />
        </RevealSection>

        <div className="relative space-y-5 md:space-y-6 md:pl-12">
          <div
            aria-hidden
            className="hidden md:block absolute left-[14px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/70 via-accent/15 to-transparent"
          />

          {roles.map((job, idx) => (
            <RevealSection key={`${job.company}-${idx}`}>
              <article className="group relative rounded-2xl border border-surface-border/70 bg-surface-card/40 backdrop-blur-md p-6 sm:p-8 transition-all duration-300 hover:border-accent/40 hover:bg-surface-card/60">
                <span
                  aria-hidden
                  className="hidden md:flex absolute -left-[37px] top-8 h-6 w-6 items-center justify-center rounded-full border border-accent/40 bg-black"
                >
                  <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_2px_rgba(251,191,36,0.7)]" />
                </span>

                <div className="flex items-center gap-2 text-xs text-accent">
                  <span className="font-mono font-semibold tracking-[0.18em] uppercase">
                    0{idx + 1}
                  </span>
                  <span className="h-px w-8 bg-accent/40" />
                  <span className="font-mono uppercase tracking-[0.18em] text-ink-subtle">
                    Role
                  </span>
                </div>

                <div className="mt-4 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div>
                    <h3 className="font-display font-bold text-2xl md:text-[1.65rem] text-ink tracking-tight leading-tight">
                      {job.company}
                    </h3>
                    <p className="text-accent font-semibold text-base md:text-lg mt-1.5">
                      {job.title}
                    </p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-2 shrink-0">
                    <span className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface-inset/70 px-3.5 py-1.5 font-mono text-[11px] sm:text-xs uppercase tracking-[0.16em] text-ink-muted">
                      <Calendar className="h-3.5 w-3.5 text-accent" />
                      {job.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-ink-subtle">
                      <MapPin className="h-3.5 w-3.5 text-accent/80" />
                      {job.location}
                    </span>
                  </div>
                </div>

                <ul className="mt-6 space-y-3.5 text-base text-ink-muted leading-relaxed">
                  {job.highlights.map((line, hi) => (
                    <li key={`${job.company}-${hi}`} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_10px_2px_rgba(251,191,36,0.5)]"
                      />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </RevealSection>
          ))}
        </div>

        <RevealSection className="mt-10">
          <div className="rounded-2xl border border-surface-border/70 bg-surface-card/40 backdrop-blur-md p-7 md:p-9">
            <div className="flex items-center gap-2 text-xs text-accent">
              <span className="font-mono font-semibold tracking-[0.18em] uppercase">
                Edu
              </span>
              <span className="h-px w-8 bg-accent/40" />
              <span className="font-mono uppercase tracking-[0.18em] text-ink-subtle">
                Education
              </span>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  2023 – 2024
                </p>
                <p className="font-display font-bold text-ink text-xl mt-2 tracking-tight">
                  M.S. Applied Computer Science
                </p>
                <p className="text-base text-ink-muted mt-1">
                  Northwest Missouri State University
                </p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  2015 – 2019
                </p>
                <p className="font-display font-bold text-ink text-xl mt-2 tracking-tight">
                  B.Tech, Electrical &amp; Electronics
                </p>
                <p className="text-base text-ink-muted mt-1">JNTU University</p>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};

export default ExperienceCards;

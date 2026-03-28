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
    period: "June 2021 – December 2022",
    highlights: [
      "Worked across agile delivery with frontend and DevOps partners; used Java 8 lambdas, functional interfaces, and streams for maintainability.",
      "Implemented ORM with Hibernate and Spring Data JPA; secured ~80% of endpoints with JWT.",
      "Front end: React with Redux and Material UI; shared state via Context and custom hooks; tests with Jest and Enzyme.",
    ],
  },
];

const ExperienceCards = () => {
  return (
    <section id="experience" className="py-20 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <RevealSection>
          <SectionHeading
            step="03 — Experience"
            title="Where I've shipped"
            subtitle="Recent roles emphasizing microservices, React product UI, Postgres, AWS, and operational tooling."
          />
        </RevealSection>

        <div className="relative space-y-6 md:space-y-8 pl-0 md:pl-10">
          <div
            className="hidden md:block absolute left-[11px] top-3 bottom-3 w-px bg-gradient-to-b from-accent/70 via-surface-border to-surface-border"
            aria-hidden
          />

          {roles.map((job) => (
            <RevealSection key={`${job.company}-${job.period}`}>
              <article className="relative rounded-2xl card-premium p-6 sm:p-8 md:pl-10 motion-safe:transition hover:border-accent/35 hover:shadow-lift">
                <span
                  className="hidden md:flex absolute -left-[21px] top-8 h-3 w-3 rounded-full border-2 border-surface bg-accent shadow-glow"
                  aria-hidden
                />
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div>
                    <h3 className="font-display font-bold text-2xl text-ink tracking-tight">
                      {job.company}
                      <span className="font-sans font-normal text-ink-muted text-base font-medium">
                        {" "}
                        · {job.location}
                      </span>
                    </h3>
                    <p className="text-accent font-semibold text-lg mt-2">{job.title}</p>
                  </div>
                  <span className="inline-flex self-start rounded-lg border border-surface-border/90 bg-surface/50 px-3.5 py-2 font-mono text-xs sm:text-sm uppercase tracking-wider text-ink-muted">
                    {job.period}
                  </span>
                </div>
                <ul className="mt-6 space-y-4 text-base sm:text-lg text-ink-muted leading-relaxed">
                  {job.highlights.map((line, hi) => (
                    <li key={`${job.company}-${hi}`} className="flex gap-3.5">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-glow"
                        aria-hidden
                      />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </RevealSection>
          ))}
        </div>

        <RevealSection>
          <div className="rounded-2xl card-premium p-6 sm:p-8">
            <h3 className="font-display font-semibold text-2xl text-ink tracking-tight mb-2">
              Education
            </h3>
            <div className="h-px w-10 bg-gradient-to-r from-accent to-transparent mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="font-mono text-xs sm:text-sm uppercase tracking-wider text-accent">
                  2023 – 2024
                </p>
                <p className="font-semibold text-ink text-lg mt-2">
                  M.S. Applied Computer Science
                </p>
                <p className="text-base text-ink-muted mt-1">
                  Northwest Missouri State University
                </p>
              </div>
              <div>
                <p className="font-mono text-xs sm:text-sm uppercase tracking-wider text-accent">
                  2017 – 2021
                </p>
                <p className="font-semibold text-ink text-lg mt-2">
                  B.Tech, Electrical & Electronics Engineering
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

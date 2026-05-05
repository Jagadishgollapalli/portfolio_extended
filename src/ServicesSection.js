import { Layers, Server, LayoutDashboard, Cpu, Check } from "lucide-react";
import RevealSection from "./RevealSection";
import SectionHeading from "./SectionHeading";

const services = [
  {
    number: "01",
    Icon: LayoutDashboard,
    title: "Frontend Engineering",
    desc:
      "Production-grade React UIs that feel fast and stay maintainable as teams grow.",
    points: [
      "React + TypeScript with Redux Toolkit, RTK Query, and Sagas",
      "Reusable component systems (Tailwind, Chakra UI, PrimeReact)",
      "Performance: lazy loading, Suspense, caching, optimistic UI",
    ],
  },
  {
    number: "02",
    Icon: Server,
    title: "Backend & APIs",
    desc:
      "Reliable Spring Boot and Go services with clean contracts and clear failure modes.",
    points: [
      "Spring Boot, Spring Security, JPA/Hibernate · Java 8+ streams",
      "Go services for orchestration, ingestion, and high-throughput pipelines",
      "REST + GraphQL APIs · OAuth2 / SSO · auditable, versioned change",
    ],
  },
  {
    number: "03",
    Icon: Layers,
    title: "Data & Cloud",
    desc:
      "Postgres-first data design and AWS-native deployments with observability built-in.",
    points: [
      "Postgres schema design, indexes, query plans, partitioning",
      "AWS: RDS, S3, Lambda, API Gateway, EKS, SES, CloudWatch, Bedrock",
      "Kafka event streams · Docker · CI/CD · structured logging",
    ],
  },
  {
    number: "04",
    Icon: Cpu,
    title: "AI-Driven Workflows",
    desc:
      "Pragmatic AI integrations that augment products without creating fragile black boxes.",
    points: [
      "AI ingestion pipelines (Go orchestration · Python extraction)",
      "LLM-assisted reporting, classification, and document workflows",
      "Bedrock + custom prompts · evaluation loops · human-in-the-loop UX",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-24 sm:py-28 px-4 sm:px-6 border-t border-surface-border/60"
    >
      <div
        aria-hidden
        className="absolute inset-0 section-grid pointer-events-none"
      />
      <div className="relative max-w-6xl mx-auto">
        <RevealSection>
          <SectionHeading
            eyebrow="SOLUTIONS & EXPERTISE"
            title="My"
            highlight="Services"
            subtitle="End-to-end product engineering that combines clean architecture, modern UI, and cloud-native delivery to help teams ship faster."
          />
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {services.map(({ number, Icon, title, desc, points }) => (
            <RevealSection key={number}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-surface-border/70 bg-surface-card/40 backdrop-blur-md p-7 md:p-8 transition-all duration-500 hover:border-accent/40 hover:bg-surface-card/65 hover:-translate-y-1">
                <span
                  aria-hidden
                  className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                />
                <div className="relative flex items-start justify-between">
                  <span className="font-display font-extrabold text-5xl md:text-6xl text-transparent [-webkit-text-stroke:1px_rgba(251,191,36,0.45)] tracking-tighter">
                    {number}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 ring-1 ring-accent/30 text-accent transition group-hover:bg-accent group-hover:text-black">
                    <Icon className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                </div>

                <h3 className="relative font-display font-bold text-2xl md:text-[1.65rem] text-ink mt-6 tracking-tight">
                  {title}
                </h3>
                <div className="relative mt-3 h-px w-10 bg-gradient-to-r from-accent to-transparent" />
                <p className="relative mt-5 text-base md:text-[1.05rem] text-ink-muted leading-relaxed">
                  {desc}
                </p>

                <ul className="relative mt-6 space-y-3">
                  {points.map((p) => (
                    <li
                      key={p}
                      className="flex gap-3 text-sm md:text-base text-ink-muted"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent ring-1 ring-accent/30">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}

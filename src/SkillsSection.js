import RevealSection from "./RevealSection";
import SectionHeading from "./SectionHeading";
import { Cloud, Database, Layers, Terminal, TestTube2 } from "lucide-react";

const groups = [
  {
    title: "Languages & runtimes",
    icon: Terminal,
    items: ["Java", "JavaScript", "TypeScript", "SQL", "Go"],
  },
  {
    title: "Frameworks & UI",
    icon: Layers,
    items: [
      "Spring Boot",
      "React.js",
      "Node.js",
      "Angular",
      "GraphQL",
      "Hasura",
      "Redux (RTK)",
      "Redux Saga",
      "Tailwind CSS",
      "Chakra UI",
      "PrimeReact",
    ],
  },
  {
    title: "Cloud & messaging",
    icon: Cloud,
    items: [
      "AWS (RDS, S3, Lambda, API Gateway, EKS, SES, CloudWatch, Bedrock)",
      "Kafka",
      "Docker",
    ],
  },
  {
    title: "Data & quality",
    icon: Database,
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Postman",
      "Mockito",
      "Jest",
      "Enzyme",
      "JUnit",
    ],
  },
  {
    title: "Practices",
    icon: TestTube2,
    items: ["Agile", "Waterfall", "Observability-focused delivery"],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative py-20 sm:py-24 px-4 sm:px-6 bg-surface-alt/55 border-y border-surface-border/80"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] via-transparent to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <RevealSection>
          <SectionHeading
            step="02 — Capabilities"
            title="Technical skills"
            subtitle="Stack aligned with production microservices, GraphQL systems, and React-heavy product work."
          />
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {groups.map((g) => (
            <RevealSection key={g.title}>
              <div className="group h-full rounded-2xl card-premium p-6 md:p-7 motion-safe:transition duration-300 hover:border-accent/30 hover:shadow-glow">
                <div className="flex items-start gap-4 mb-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent ring-1 ring-accent/25 shadow-innerline">
                    <g.icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display font-semibold text-xl text-ink tracking-tight">
                      {g.title}
                    </h3>
                    <div className="mt-2 h-px w-8 bg-gradient-to-r from-accent/60 to-transparent" />
                  </div>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <li key={item}>
                      <span className="inline-block rounded-lg border border-surface-border/90 bg-surface/60 px-3.5 py-2 text-sm sm:text-[15px] text-ink-muted font-medium tracking-tight motion-safe:transition group-hover:border-surface-border">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}

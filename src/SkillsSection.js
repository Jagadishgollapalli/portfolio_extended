import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaAngular,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiSpringboot,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiGraphql,
  SiRedux,
  SiApachekafka,
  SiHasura,
  SiGo,
  SiVercel,
  SiJest,
} from "react-icons/si";
import RevealSection from "./RevealSection";
import SectionHeading from "./SectionHeading";

const skills = [
  { name: "Java", Icon: FaJava, color: "#f89820" },
  { name: "Spring Boot", Icon: SiSpringboot, color: "#6db33f" },
  { name: "Go", Icon: SiGo, color: "#00ADD8" },
  { name: "Node.js", Icon: FaNodeJs, color: "#3c873a" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#f7df1e" },
  { name: "Python", Icon: FaPython, color: "#4584b6" },
  { name: "React", Icon: FaReact, color: "#61dafb" },
  { name: "Angular", Icon: FaAngular, color: "#dd0031" },
  { name: "Redux", Icon: SiRedux, color: "#9d6cdb" },
  { name: "GraphQL", Icon: SiGraphql, color: "#e535ab" },
  { name: "Hasura", Icon: SiHasura, color: "#1eb4d4" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#38bdf8" },
  { name: "HTML5", Icon: FaHtml5, color: "#e34f26" },
  { name: "CSS3", Icon: FaCss3Alt, color: "#1572b6" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#5294c4" },
  { name: "MySQL", Icon: SiMysql, color: "#00758f" },
  { name: "MongoDB", Icon: SiMongodb, color: "#4caf50" },
  { name: "Kafka", Icon: SiApachekafka, color: "#cbd5e1" },
  { name: "AWS", Icon: FaAws, color: "#ff9900" },
  { name: "Docker", Icon: FaDocker, color: "#2496ed" },
  { name: "Git", Icon: FaGitAlt, color: "#f05032" },
  { name: "Jest", Icon: SiJest, color: "#c63d14" },
  { name: "Vercel", Icon: SiVercel, color: "#ffffff" },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative py-24 sm:py-28 px-4 sm:px-6 border-t border-surface-border/60"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-accent/[0.03] via-transparent to-transparent pointer-events-none"
      />
      <div className="relative max-w-6xl mx-auto">
        <RevealSection>
          <SectionHeading
            eyebrow="EXPERTISE"
            title="Core"
            highlight="Technologies"
            subtitle="A curated stack aligned with production microservices, GraphQL systems, and React-heavy product work."
          />
        </RevealSection>

        <RevealSection>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4">
            {skills.map(({ name, Icon, color }) => (
              <div
                key={name}
                className="group relative flex flex-col items-center justify-center gap-3 rounded-2xl border border-surface-border/70 bg-surface-card/40 backdrop-blur-md aspect-square p-3 transition-all duration-300 hover:border-accent/40 hover:bg-surface-card/70 hover:-translate-y-1"
                style={{
                  "--brand": color,
                }}
              >
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse 70% 60% at 50% 50%, ${color}26, transparent 65%)`,
                  }}
                />
                <Icon
                  className="relative h-7 w-7 sm:h-9 sm:w-9 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    color,
                    filter: `drop-shadow(0 0 12px ${color}55)`,
                  }}
                  aria-hidden
                />
                <span className="relative text-[10px] sm:text-xs font-medium text-ink-subtle group-hover:text-ink transition-colors text-center leading-tight">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </RevealSection>

        <RevealSection className="mt-10">
          <p className="text-center text-sm sm:text-base text-ink-subtle">
            Also working with{" "}
            <span className="text-ink-muted">
              Spring Security · JPA · Hibernate · RTK Query · Saga · Chakra UI ·
              PrimeReact · Bedrock · S3 · Lambda · API Gateway · EKS · CloudWatch
            </span>
          </p>
        </RevealSection>
      </div>
    </section>
  );
}

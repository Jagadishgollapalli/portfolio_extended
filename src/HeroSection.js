import { ArrowRight, Sparkles, Download } from "lucide-react";
import RevealSection from "./RevealSection";

const stats = [
  { value: "7", label: "Years shipping production systems" },
  { value: "End-to-end", label: "APIs, UIs, data, and cloud" },
  { value: "Java · Go · React", label: "Cross-stack engineering" },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[100svh] flex flex-col justify-center pt-32 pb-24 px-4 sm:px-6"
    >
      <div
        aria-hidden
        className="absolute inset-0 section-grid pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[55vh] bg-gold-radial pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute left-1/2 -translate-x-1/2 top-24 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-accent/20 blur-[120px] opacity-60 pointer-events-none"
      />

      <div className="relative max-w-6xl mx-auto w-full">
        <RevealSection>
          <div className="flex justify-center">
            <span className="pill-gold">
              <Sparkles className="h-3.5 w-3.5" strokeWidth={2.4} />
              AI Full Stack Developer · Java · Go · React · Cloud
            </span>
          </div>
        </RevealSection>

        <RevealSection className="mt-9">
          <h1 className="font-display font-extrabold tracking-[-0.04em] leading-[1.02] text-center text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem]">
            <span className="block text-ink">Design. Build.</span>
            <span className="block text-gold-gradient">
              Ship reliable systems<span className="text-accent">.</span>
            </span>
          </h1>
        </RevealSection>

        <RevealSection className="mt-10">
          <div className="flex justify-center">
            <span className="ring-decor" aria-hidden />
          </div>
        </RevealSection>

        <RevealSection className="mt-8">
          <p className="mx-auto max-w-2xl text-center text-lg sm:text-xl text-ink-muted leading-relaxed">
            I'm{" "}
            <span className="text-ink font-semibold">Jagadish Gollapalli</span>—an
            engineer focused on scalable, data-intensive platforms. Spring Boot
            and Go services, GraphQL APIs, React product UIs, Postgres, AWS, and
            AI-driven workflows that ship.
          </p>
        </RevealSection>

        <RevealSection className="mt-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#projects" className="btn-gold">
              Explore Work
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-ghost">
              Contact Me
            </a>
            <a
              href="https://github.com/jagadishgollapalli"
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-ink-muted hover:text-accent transition-colors px-3 py-2"
            >
              <Download className="h-4 w-4" />
              View GitHub
            </a>
          </div>
        </RevealSection>

        <RevealSection className="mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {stats.map((s) => (
              <div
                key={s.label}
                className="group relative rounded-2xl border border-surface-border/70 bg-surface-card/40 backdrop-blur-md px-5 py-5 transition-all duration-300 hover:border-accent/40 hover:bg-surface-card/60 hover:-translate-y-0.5"
              >
                <div className="absolute left-5 top-5 bottom-5 w-px bg-gradient-to-b from-accent/70 via-accent/15 to-transparent" />
                <p className="font-display font-extrabold text-2xl md:text-[1.65rem] text-accent tracking-tight pl-4">
                  {s.value}
                </p>
                <p className="mt-1.5 text-sm md:text-[0.95rem] text-ink-muted leading-snug pl-4">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

import heroPhoto from "./images/me2.png";
import RevealSection from "./RevealSection";

const stats = [
  {
    value: "4+",
    label: "Years shipping full-stack systems in production",
  },
  {
    value: "End-to-end",
    label: "APIs, data models, React UIs, and cloud deployments",
  },
  {
    value: "Scale & UX",
    label: "Performance, observability, and clear user flows",
  },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[88vh] flex flex-col justify-center pt-28 pb-20 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto w-full">
        <RevealSection>
          <div className="relative overflow-hidden rounded-3xl min-h-[440px] md:min-h-[500px] bg-surface-inset shadow-lift ring-1 ring-surface-border/80">
            <div
              className="absolute inset-0 bg-cover bg-left sm:bg-[left_20%_center] md:bg-[left_25%_center] scale-[1.04] motion-safe:transition-transform motion-safe:duration-[20s] motion-safe:ease-out hover:scale-100 motion-reduce:scale-100"
              style={{ backgroundImage: `url(${heroPhoto})` }}
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-gradient-to-l from-depth/90 via-depth/32 from-[28%] to-transparent"
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-depth/40 via-transparent to-depth/25"
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-gradient-to-l from-accent/20 to-transparent to-50%"
              aria-hidden
            />
            <div
              className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/[0.07] pointer-events-none"
              aria-hidden
            />

            <div className="absolute top-5 left-5 sm:top-7 sm:left-7 z-20">
              <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-white/55">
                <span className="text-accent/90">01</span>
                <span className="mx-2 text-white/35">/</span>
                <span>Introduction</span>
              </p>
            </div>

            <div className="relative z-10 flex min-h-[440px] md:min-h-[500px] items-center justify-end p-8 sm:p-11 md:p-16">
              <div className="w-full max-w-xl text-right text-white pl-12 sm:pl-20 md:pl-28 md:max-w-2xl border-r border-accent/25 pr-2 sm:pr-5 [text-shadow:0_2px_40px_rgb(0_0_0_/_50%)]">
                <p className="font-mono text-xs sm:text-sm font-medium uppercase tracking-[0.18em] text-accent mb-5">
                  Full stack developer
                </p>
                <h1 className="font-display font-extrabold tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-display-lg leading-[1.03]">
                  Jagadish
                  <span className="block text-sky-100/95 mt-1.5">Gollapalli</span>
                </h1>
                <p className="mt-8 text-lg sm:text-xl md:text-[1.35rem] text-slate-200/90 leading-relaxed font-normal max-w-xl ml-auto">
                  Engineer focused on scalable, data-intensive platforms—Java
                  & Spring Boot, Go services, React, PostgreSQL, GraphQL, and AWS.
                  Recent work spans AI-driven ingestion pipelines, reporting, and
                  operational tooling with a strong lens on reliability and UX.
                </p>
              </div>
            </div>
          </div>
        </RevealSection>

        <RevealSection className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
            {stats.map((s) => (
              <div
                key={s.label}
                className="group relative rounded-2xl card-premium p-6 md:p-8 motion-safe:transition motion-safe:duration-300 hover:border-accent/35 hover:shadow-glow hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 overflow-hidden"
              >
                <div className="absolute left-0 top-4 bottom-4 w-px bg-gradient-to-b from-accent/80 via-accent/20 to-transparent opacity-90" />
                <p className="font-display font-bold text-3xl md:text-4xl text-accent mb-3 pl-4 tracking-tight">
                  {s.value}
                </p>
                <p className="text-base md:text-lg text-ink-muted leading-snug pl-4 group-hover:text-ink-muted/90">
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

import React, { useState, useMemo } from "react";
import { FaGithub } from "react-icons/fa";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import data from "./assets/projects.json";
import RevealSection from "./RevealSection";
import SectionHeading from "./SectionHeading";

const categories = [
  { name: "All", key: "all" },
  { name: "Frontend", key: "frontend" },
  { name: "Backend", key: "backend" },
  { name: "UI / Styling", key: "css" },
];

const labelFor = {
  frontend: "Frontend",
  backend: "Backend",
  css: "UI / Styling",
};

function hasLiveDemo(url) {
  return typeof url === "string" && url.length > 0 && !url.includes("mangools.com");
}

const TabbedGallery = () => {
  const [activeTab, setActiveTab] = useState("all");

  const items = useMemo(() => {
    if (activeTab === "all") {
      return [
        ...data.frontend.map((p) => ({ ...p, category: "frontend" })),
        ...data.backend.map((p) => ({ ...p, category: "backend" })),
        ...data.css.map((p) => ({ ...p, category: "css" })),
      ];
    }
    return (data[activeTab] || []).map((p) => ({ ...p, category: activeTab }));
  }, [activeTab]);

  return (
    <section
      id="projects"
      className="relative py-24 sm:py-28 px-4 sm:px-6 border-t border-surface-border/60"
    >
      <div
        aria-hidden
        className="absolute inset-0 section-grid pointer-events-none"
      />
      <div className="relative max-w-6xl mx-auto">
        <RevealSection>
          <SectionHeading
            eyebrow="PORTFOLIO"
            title="Selected"
            highlight="Works"
            subtitle="A mix of full-stack experiments, frontends, and styling stacks—source on GitHub; live demos when deployed."
          />
        </RevealSection>

        <RevealSection>
          <div
            className="flex flex-wrap justify-center gap-1 p-1.5 rounded-full border border-surface-border/70 bg-surface-card/50 backdrop-blur-md max-w-max mx-auto"
            role="tablist"
            aria-label="Project categories"
          >
            {categories.map((category) => {
              const active = activeTab === category.key;
              return (
                <button
                  key={category.key}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  className={[
                    "px-5 sm:px-6 py-2.5 rounded-full text-sm font-semibold tracking-tight transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
                    active
                      ? "bg-accent text-black shadow-glow"
                      : "text-ink-muted hover:text-ink hover:bg-white/[0.04]",
                  ].join(" ")}
                  onClick={() => setActiveTab(category.key)}
                >
                  {category.name}
                </button>
              );
            })}
          </div>
        </RevealSection>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {items.map((project, index) => (
            <RevealSection key={`${activeTab}-${project.title}-${index}`}>
              <article className="group h-full flex flex-col rounded-2xl border border-surface-border/70 bg-surface-card/40 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-accent/40 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="relative overflow-hidden aspect-[16/10] bg-surface-inset">
                  <img
                    src={project.img}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-black/70 backdrop-blur-md px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                    {labelFor[project.category] || "Project"}
                  </span>
                  <span
                    aria-hidden
                    className="absolute top-3 right-3 font-display font-extrabold text-3xl text-transparent [-webkit-text-stroke:1px_rgba(251,191,36,0.55)] tracking-tighter"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="p-5 md:p-6 flex flex-col flex-1 border-t border-surface-border/60">
                  <h3 className="font-display font-bold text-xl text-ink tracking-tight">
                    {project.title}
                  </h3>
                  <p className="font-mono text-[11px] sm:text-xs text-accent mt-2 uppercase tracking-[0.18em]">
                    {project.stack}
                  </p>

                  <div className="mt-5 flex items-center justify-between gap-3 pt-4 border-t border-surface-border/40 mt-auto">
                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-muted hover:text-accent transition-colors"
                      >
                        <FaGithub /> Code
                      </a>
                      {hasLiveDemo(project.live) ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-muted hover:text-accent transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" /> Demo
                        </a>
                      ) : null}
                    </div>
                    <a
                      href={hasLiveDemo(project.live) ? project.live : project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} details`}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-black"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            </RevealSection>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="https://github.com/jagadishgollapalli"
            target="_blank"
            rel="noreferrer"
            className="btn-gold"
          >
            View More Projects
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TabbedGallery;

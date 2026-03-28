import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { BiLogoNetlify } from "react-icons/bi";
import { ExternalLink } from "lucide-react";
import data from "./assets/projects.json";
import RevealSection from "./RevealSection";
import SectionHeading from "./SectionHeading";

const categories = [
  { name: "Frontend", key: "frontend" },
  { name: "Backend", key: "backend" },
  { name: "UI / styling", key: "css" },
];

function hasLiveDemo(url) {
  return typeof url === "string" && url.length > 0 && !url.includes("mangools.com");
}

const TabbedGallery = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <section
      id="projects"
      className="relative py-20 sm:py-24 px-4 sm:px-6 bg-surface-alt/50 border-y border-surface-border/80"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <RevealSection>
          <SectionHeading
            align="center"
            step="04 — Selected work"
            title="Projects"
            subtitle="Experiments and learning across React, Spring Boot, and styling stacks—source on GitHub; live demos when deployed."
          />
        </RevealSection>

        <RevealSection>
          <div
            className="flex flex-wrap justify-center gap-2 p-1.5 rounded-full border border-surface-border/90 bg-surface/60 backdrop-blur-sm shadow-innerline max-w-max mx-auto"
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
                    "relative px-6 py-3 rounded-full text-sm font-semibold tracking-tight transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-alt",
                    active
                      ? "bg-accent text-slate-950 shadow-glow"
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

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {data[activeTab].map((project, index) => (
            <RevealSection key={`${activeTab}-${project.title}-${index}`}>
              <article className="group h-full flex flex-col rounded-2xl card-premium overflow-hidden motion-safe:transition duration-300 hover:border-accent/35 hover:shadow-lift hover:-translate-y-1 motion-reduce:hover:translate-y-0 p-0">
                <div className="relative overflow-hidden aspect-[16/10] bg-surface-inset">
                  <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-transparent to-transparent opacity-60 z-[1] pointer-events-none" />
                  <img
                    src={project.img}
                    alt=""
                    className="relative z-0 w-full h-full object-cover motion-safe:transition-transform motion-safe:duration-500 group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
                  />
                  <div className="absolute inset-0 z-[2] bg-depth/0 group-hover:bg-depth/50 motion-safe:transition-colors flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 motion-reduce:opacity-0 motion-reduce:group-hover:opacity-100">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-accent text-slate-950 p-3 rounded-full hover:bg-accent-hover motion-safe:transition-colors shadow-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                      aria-label={`${project.title} on GitHub`}
                    >
                      <FaGithub className="text-xl" />
                    </a>
                    {hasLiveDemo(project.live) && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-white text-depth p-3 rounded-full hover:bg-sky-100 motion-safe:transition-colors shadow-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        aria-label={`${project.title} live demo`}
                      >
                        <BiLogoNetlify className="text-xl" />
                      </a>
                    )}
                  </div>
                </div>
                <div className="p-5 md:p-6 flex flex-col flex-1 border-t border-surface-border/50">
                  <h3 className="font-display font-semibold text-xl text-ink tracking-tight">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs sm:text-sm text-accent/90 mt-2 uppercase tracking-wider">
                    {project.stack}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-4 pt-2 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-base font-semibold text-ink-muted hover:text-accent transition-colors"
                    >
                      <FaGithub /> Code
                    </a>
                    {hasLiveDemo(project.live) ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-base font-semibold text-ink-muted hover:text-accent transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" /> Demo
                      </a>
                    ) : null}
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
            className="inline-flex items-center gap-2 rounded-full bg-accent text-slate-950 px-8 py-4 text-base font-semibold shadow-glow motion-safe:transition hover:bg-accent-hover hover:shadow-lift focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-alt"
          >
            View more on GitHub
            <ExternalLink className="h-4 w-4 opacity-80" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TabbedGallery;

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import RevealSection from "./RevealSection";
import SectionHeading from "./SectionHeading";

const FORMSPREE_URL = "https://formspree.io/f/xnnjerwg";

export default function ContactForm() {
  const [data, setData] = useState({
    fname: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    if (status === "error") setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });

      if (!res.ok) throw new Error("Submit failed");

      setStatus("success");
      setData({ fname: "", email: "", message: "" });
    } catch {
      setStatus("error");
      setError("Something went wrong. You can email me directly below.");
    }
  };

  const fieldClass =
    "mt-2 w-full px-4 py-3.5 rounded-xl border border-surface-border bg-surface-inset/70 text-ink text-base placeholder:text-ink-subtle focus:ring-2 focus:ring-accent/70 focus:border-transparent outline-none transition-shadow";

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-28 px-4 sm:px-6 border-t border-surface-border/60"
    >
      <div
        aria-hidden
        className="absolute inset-0 section-grid pointer-events-none"
      />
      <div className="relative max-w-6xl mx-auto">
        <RevealSection>
          <SectionHeading
            eyebrow="GET IN TOUCH"
            title="Let's build"
            highlight="something solid"
            subtitle="Open to roles and collaborations on full-stack, data-heavy platforms. Send a note or reach out directly."
          />
        </RevealSection>

        <RevealSection>
          <div className="rounded-3xl border border-surface-border/70 bg-surface-card/40 backdrop-blur-md overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 relative p-7 sm:p-9 md:p-10 border-b lg:border-b-0 lg:border-r border-surface-border/70 bg-gradient-to-br from-accent/[0.06] via-transparent to-transparent">
              <div
                aria-hidden
                className="absolute -top-20 -right-10 h-60 w-60 rounded-full bg-accent/15 blur-3xl pointer-events-none"
              />
              <div className="relative">
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-accent">
                  Direct
                </p>
                <h3 className="font-display font-bold text-2xl md:text-[1.65rem] text-ink mt-4 tracking-tight leading-tight">
                  Prefer email or phone?
                </h3>
                <div className="mt-5 h-px w-12 bg-gradient-to-r from-accent to-transparent" />

                <ul className="mt-7 space-y-5">
                  <li>
                    <a
                      href="mailto:jagadish.g2408@gmail.com"
                      className="group flex items-start gap-3.5 rounded-xl p-3 -m-3 transition-colors hover:bg-accent/[0.05]"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 ring-1 ring-accent/30 text-accent">
                        <Mail className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-xs font-mono uppercase tracking-[0.18em] text-ink-subtle">
                          Email
                        </p>
                        <p className="text-base text-ink mt-1 group-hover:text-accent transition-colors break-all">
                          jagadish.g2408@gmail.com
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+15633669371"
                      className="group flex items-start gap-3.5 rounded-xl p-3 -m-3 transition-colors hover:bg-accent/[0.05]"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 ring-1 ring-accent/30 text-accent">
                        <Phone className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-xs font-mono uppercase tracking-[0.18em] text-ink-subtle">
                          Phone
                        </p>
                        <p className="text-base text-ink mt-1 group-hover:text-accent transition-colors">
                          +1 (563) 366-9371
                        </p>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 ring-1 ring-accent/30 text-accent">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs font-mono uppercase tracking-[0.18em] text-ink-subtle">
                        Location
                      </p>
                      <p className="text-base text-ink mt-1">Texas, USA</p>
                    </div>
                  </li>
                </ul>

                <div className="mt-9 flex items-center gap-2.5">
                  <a
                    href="https://github.com/jagadishgollapalli"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-surface-border bg-surface-inset/70 text-ink-muted hover:text-accent hover:border-accent/40 transition"
                  >
                    <FaGithub className="text-lg" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/g-jagadish954186205/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-surface-border bg-surface-inset/70 text-ink-muted hover:text-accent hover:border-accent/40 transition"
                  >
                    <FaLinkedin className="text-lg" />
                  </a>
                  <a
                    href="#projects"
                    className="ml-1 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover transition"
                  >
                    Or browse my work
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>

            <form
              className="lg:col-span-7 p-7 sm:p-9 md:p-10 flex flex-col gap-5"
              onSubmit={handleSubmit}
              action={FORMSPREE_URL}
              method="POST"
            >
              {status === "success" && (
                <p
                  className="rounded-xl border border-accent/35 bg-accent/[0.08] text-ink px-4 py-3.5 text-base font-medium"
                  role="status"
                >
                  Thanks—your message is on its way. I&apos;ll get back soon.
                </p>
              )}
              {status === "error" && error && (
                <p className="rounded-xl bg-red-950/60 border border-red-900/50 text-red-200 px-4 py-3.5 text-base">
                  {error}
                </p>
              )}

              <label className="text-sm font-medium text-ink-muted tracking-tight">
                Name
                <input
                  type="text"
                  name="fname"
                  required
                  value={data.fname}
                  onChange={handleChange}
                  autoComplete="name"
                  placeholder="Your name"
                  className={fieldClass}
                />
              </label>
              <label className="text-sm font-medium text-ink-muted tracking-tight">
                Email
                <input
                  type="email"
                  name="email"
                  required
                  value={data.email}
                  onChange={handleChange}
                  autoComplete="email"
                  placeholder="you@example.com"
                  className={fieldClass}
                />
              </label>
              <label className="text-sm font-medium text-ink-muted tracking-tight">
                Message
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={data.message}
                  onChange={handleChange}
                  placeholder="Tell me a bit about the project, role, or idea..."
                  className={`${fieldClass} resize-y min-h-[140px]`}
                />
              </label>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-2 inline-flex items-center justify-center gap-2 w-full rounded-xl bg-accent text-black py-4 text-base font-semibold tracking-tight shadow-glow transition hover:bg-accent-hover disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-card"
              >
                {status === "submitting" ? "Sending…" : (
                  <>
                    Send Message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

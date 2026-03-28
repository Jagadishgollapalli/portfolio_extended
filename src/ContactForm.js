import React, { useState } from "react";
import { Mail, Phone } from "lucide-react";
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
    "mt-2 w-full px-4 py-4 rounded-xl border border-surface-border/90 bg-surface-inset/80 text-ink text-base placeholder:text-ink-subtle shadow-innerline focus:ring-2 focus:ring-accent/80 focus:border-transparent outline-none transition-shadow";

  return (
    <section
      id="contact"
      className="py-20 sm:py-24 px-4 sm:px-6 bg-surface-alt/40 border-t border-surface-border/80"
    >
      <div className="max-w-6xl mx-auto">
        <RevealSection>
          <SectionHeading
            step="06 — Contact"
            title="Let's build something solid"
            subtitle="Open to roles and collaborations on full-stack, data-heavy platforms. Send a note or reach out directly."
          />
        </RevealSection>

        <RevealSection>
          <div className="rounded-3xl card-premium overflow-hidden flex flex-col lg:flex-row shadow-lift">
            <div className="lg:w-[42%] p-8 sm:p-10 bg-gradient-to-br from-depth via-blue-950/40 to-depth text-ink border-b lg:border-b-0 lg:border-r border-surface-border/80 relative min-h-[260px] lg:min-h-0">
              <div
                className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_80%_0%,rgb(56_189_248_/_0.14),transparent_55%)] pointer-events-none"
                aria-hidden
              />
              <div className="relative h-full flex flex-col justify-center">
                <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.18em] text-accent">
                  Direct
                </p>
                <h3 className="font-display font-bold text-3xl sm:text-4xl mt-4 text-ink tracking-tight leading-tight">
                  Prefer email or phone?
                </h3>
                <div className="h-px w-10 bg-gradient-to-r from-accent to-transparent mt-5" />
                <ul className="mt-8 space-y-5 text-base sm:text-lg">
                  <li className="flex items-start gap-3.5">
                    <Mail className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                    <a
                      href="mailto:jagadish.g2408@gmail.com"
                      className="text-ink-muted hover:text-accent transition-colors break-all leading-snug"
                    >
                      jagadish.g2408@gmail.com
                    </a>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <Phone className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                    <a
                      href="tel:+15633669371"
                      className="text-ink-muted hover:text-accent transition-colors"
                    >
                      563-366-9371
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <form
              className="flex-1 p-8 sm:p-10 flex flex-col gap-5 bg-surface-card/30"
              onSubmit={handleSubmit}
              action={FORMSPREE_URL}
              method="POST"
            >
              {status === "success" && (
                <p
                  className="rounded-xl border border-accent/35 bg-accent-soft/40 text-ink px-4 py-3.5 text-base font-medium shadow-innerline"
                  role="status"
                >
                  Thanks—your message is on its way. I&apos;ll get back soon.
                </p>
              )}
              {status === "error" && error && (
                <p className="rounded-xl bg-red-950/55 border border-red-900/40 text-red-200 px-4 py-3.5 text-base">
                  {error}
                </p>
              )}

              <label className="text-base font-medium text-ink tracking-tight">
                Name
                <input
                  type="text"
                  name="fname"
                  required
                  value={data.fname}
                  onChange={handleChange}
                  autoComplete="name"
                  className={fieldClass}
                />
              </label>
              <label className="text-base font-medium text-ink tracking-tight">
                Email
                <input
                  type="email"
                  name="email"
                  required
                  value={data.email}
                  onChange={handleChange}
                  autoComplete="email"
                  className={fieldClass}
                />
              </label>
              <label className="text-base font-medium text-ink tracking-tight">
                Message
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={data.message}
                  onChange={handleChange}
                  className={`${fieldClass} resize-y min-h-[128px]`}
                />
              </label>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-1 w-full rounded-xl bg-accent text-slate-950 py-4 text-lg font-semibold tracking-tight shadow-glow motion-safe:transition hover:bg-accent-hover disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-card"
              >
                {status === "submitting" ? "Sending…" : "Send message"}
              </button>
            </form>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

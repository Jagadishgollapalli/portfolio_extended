import { useEffect, useState } from "react";
import {
  Home,
  User,
  Code2,
  Layers,
  Briefcase,
  FolderGit2,
  MessageSquare,
} from "lucide-react";

const items = [
  { href: "#home", label: "Home", Icon: Home },
  { href: "#about", label: "About", Icon: User },
  { href: "#skills", label: "Skills", Icon: Code2 },
  { href: "#services", label: "Services", Icon: Layers },
  { href: "#experience", label: "Work", Icon: Briefcase },
  { href: "#projects", label: "Projects", Icon: FolderGit2 },
  { href: "#contact", label: "Contact", Icon: MessageSquare },
];

export default function BottomDock() {
  const [active, setActive] = useState("#home");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const ids = items.map((i) => i.href.slice(1));

    const onScroll = () => {
      setVisible(window.scrollY > 320);

      const mid = window.innerHeight * 0.45;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= mid) current = id;
      }
      setActive(`#${current}`);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className={[
        "fixed left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ease-out",
        "bottom-3 sm:bottom-5",
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6 pointer-events-none",
      ].join(" ")}
    >
      <div className="relative">
        <div
          aria-hidden
          className="absolute -inset-1 rounded-full bg-accent/20 blur-2xl opacity-60"
        />
        <ul className="relative flex items-center gap-0.5 sm:gap-1 rounded-full border border-accent/30 bg-black/80 backdrop-blur-xl px-2 py-2 shadow-lift">
          {items.map(({ href, label, Icon }) => {
            const isActive = active === href;
            return (
              <li key={href}>
                <a
                  href={href}
                  className={[
                    "group relative flex flex-col items-center justify-center rounded-full transition-all duration-300",
                    "px-2.5 py-1.5 sm:px-3.5 sm:py-2",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black",
                    isActive
                      ? "text-accent"
                      : "text-ink-muted hover:text-ink",
                  ].join(" ")}
                  aria-current={isActive ? "true" : undefined}
                >
                  <Icon
                    className={[
                      "h-[18px] w-[18px] sm:h-5 sm:w-5 transition-transform",
                      isActive ? "scale-110" : "group-hover:scale-105",
                    ].join(" ")}
                    strokeWidth={2}
                  />
                  <span
                    className={[
                      "mt-0.5 hidden sm:block text-[10px] font-semibold tracking-wide uppercase transition-opacity",
                      isActive ? "opacity-100" : "opacity-70",
                    ].join(" ")}
                  >
                    {label}
                  </span>
                  {isActive ? (
                    <span
                      aria-hidden
                      className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-accent shadow-[0_0_10px_2px_rgba(251,191,36,0.7)]"
                    />
                  ) : null}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

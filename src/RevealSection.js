import { useInView } from "./hooks/useInView";

export default function RevealSection({ children, className = "" }) {
  const [ref, visible] = useInView();

  return (
    <div
      ref={ref}
      className={[
        "motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out",
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6 motion-reduce:opacity-100 motion-reduce:translate-y-0",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}

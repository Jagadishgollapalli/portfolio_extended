export default function SectionHeading({
  step,
  title,
  subtitle,
  align = "left",
}) {
  const center = align === "center";

  return (
    <div
      className={
        center
          ? "flex flex-col items-center text-center max-w-3xl mx-auto mb-12 lg:mb-14"
          : "max-w-3xl mb-12 lg:mb-14"
      }
    >
      {step ? (
        <p className="font-mono text-xs sm:text-sm font-medium uppercase tracking-[0.18em] text-accent mb-4">
          {step}
        </p>
      ) : null}
      <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] text-ink tracking-tight leading-[1.08]">
        {title}
      </h2>
      <div
        className={`mt-5 h-px w-14 bg-gradient-to-r from-accent to-transparent ${center ? "mx-auto" : ""}`}
        aria-hidden
      />
      {subtitle ? (
        <p
          className={`mt-6 text-lg sm:text-xl text-ink-muted leading-relaxed ${center ? "" : "max-w-2xl"}`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

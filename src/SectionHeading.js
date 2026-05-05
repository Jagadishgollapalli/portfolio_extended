export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = "center",
}) {
  const center = align === "center";
  const wrapperClass = center
    ? "flex flex-col items-center text-center max-w-3xl mx-auto mb-14 lg:mb-16"
    : "max-w-3xl mb-14 lg:mb-16";

  return (
    <div className={wrapperClass}>
      {eyebrow ? (
        <p className="font-mono text-[0.7rem] sm:text-xs font-semibold uppercase tracking-[0.32em] text-accent mb-6">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink tracking-[-0.035em] leading-[1.04]">
        {title}
        {highlight ? (
          <>
            {" "}
            <span className="text-gold-gradient">{highlight}</span>
          </>
        ) : null}
        <span className="text-accent">.</span>
      </h2>
      <div
        className={`mt-7 ring-decor ${center ? "" : "ml-0"}`}
        aria-hidden
      />
      {subtitle ? (
        <p
          className={`mt-7 text-lg sm:text-xl text-ink-muted leading-relaxed ${
            center ? "max-w-2xl" : "max-w-2xl"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

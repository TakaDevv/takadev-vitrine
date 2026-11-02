import Reveal from "./Reveal.jsx";

export default function SectionHeading({
  id,
  index,
  eyebrow,
  title,
  description,
  tone = "night",
  as: Heading = "h2",
  className = "",
}) {
  const paper = tone === "paper";

  return (
    <Reveal className={`max-w-3xl ${className}`}>
      {eyebrow ? (
        <p className="section-label">
          {index ? <span className="section-index">{index}</span> : null}
          <span aria-hidden="true" className="section-tick" />
          {eyebrow}
        </p>
      ) : null}
      <Heading
        id={id}
        className={`section-title font-display text-[clamp(2rem,1.4rem+2.4vw,3rem)] leading-[1.08] font-semibold tracking-[-0.025em] ${
          paper ? "text-paper-ink" : "text-ink-50"
        } ${eyebrow ? "mt-5" : ""}`}
      >
        {title}
      </Heading>
      {description ? (
        <p className={`mt-5 max-w-2xl text-lg leading-relaxed ${paper ? "text-paper-body" : "text-ink-300"}`}>
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

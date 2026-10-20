export default function SectionHeading({ eyebrow, title, description, id }) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="text-sm font-semibold tracking-[0.14em] text-brand uppercase">{eyebrow}</p>
      ) : null}
      <h2
        id={id}
        className={`font-display text-3xl font-semibold tracking-tight text-balance text-night sm:text-4xl ${eyebrow ? "mt-3" : ""}`}
      >
        {title}
      </h2>
      {description ? <p className="mt-4 text-lg leading-relaxed">{description}</p> : null}
    </div>
  );
}

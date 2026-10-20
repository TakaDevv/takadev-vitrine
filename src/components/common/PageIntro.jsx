import Container from "./Container.jsx";

export default function PageIntro({ eyebrow, title, description }) {
  return (
    <header className="border-b border-line bg-white">
      <Container className="py-14 sm:py-16">
        {eyebrow ? (
          <p className="text-sm font-semibold tracking-[0.14em] text-brand uppercase">{eyebrow}</p>
        ) : null}
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-night sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed">{description}</p>
        ) : null}
      </Container>
    </header>
  );
}

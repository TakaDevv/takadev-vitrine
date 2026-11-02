import Container from "./Container.jsx";

export default function PageIntro({ eyebrow, title, description, children }) {
  return (
    <header className="theme-dark relative isolate overflow-hidden bg-night-900">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0" />
        <div className="light-field" />
      </div>
      <Container className="pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-44 lg:pb-24">
        {eyebrow ? (
          <p className="enter section-label" style={{ "--d": "60ms" }}>
            <span aria-hidden="true" className="section-tick" />
            {eyebrow}
          </p>
        ) : null}
        <h1
          className="enter mt-6 max-w-4xl font-display text-[clamp(2.3rem,1.5rem+3.2vw,3.75rem)] leading-[1.05] font-bold tracking-[-0.03em] text-ink-50"
          style={{ "--d": "140ms" }}
        >
          {title}
        </h1>
        {description ? (
          <p
            className="enter mt-6 max-w-2xl text-lg leading-relaxed text-ink-300 sm:text-xl"
            style={{ "--d": "240ms" }}
          >
            {description}
          </p>
        ) : null}
        {children ? (
          <div className="enter mt-10" style={{ "--d": "340ms" }}>
            {children}
          </div>
        ) : null}
      </Container>
    </header>
  );
}

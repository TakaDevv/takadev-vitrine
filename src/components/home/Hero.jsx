import { Fragment, useRef } from "react";
import { hero } from "../../data/home.js";
import Button from "../common/Button.jsx";
import Container from "../common/Container.jsx";
import usePointerParallax from "../common/usePointerParallax.js";
import HeroVisual from "./HeroVisual.jsx";

export default function Hero() {
  const ref = useRef(null);
  usePointerParallax(ref);

  return (
    <section ref={ref} aria-labelledby="hero-title" className="hero theme-dark relative isolate overflow-clip bg-night-900">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0" />
        <div className="light-field" />
        <div className="hero-spot" />
      </div>

      <Container className="grid min-h-[100svh] items-center gap-12 pt-28 pb-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10 lg:pt-32">
        <div className="hero-copy" data-parallax>
          <p
            className="enter inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-night-800/70 px-3.5 py-1.5 text-xs font-medium tracking-wide text-ink-300"
            style={{ "--d": "60ms" }}
          >
            <span aria-hidden="true" className="size-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgb(56_189_248/0.9)]" />
            {hero.eyebrow}
          </p>

          <h1
            id="hero-title"
            className="mt-7 max-w-[18ch] font-display text-[clamp(2.3rem,1.2rem+3.2vw,4.1rem)] leading-[1.03] font-bold tracking-[-0.035em] text-ink-50"
          >
            {hero.headline.map((word, index) => (
              <Fragment key={word.text}>
                <span className={`hero-word ${word.accent ? "relative" : ""}`}>
                  <span className={word.accent ? "text-accent" : undefined} style={{ "--i": index }}>
                    {word.text}
                  </span>
                  {word.accent ? <span aria-hidden="true" className="accent-line" /> : null}
                </span>
                {index < hero.headline.length - 1 ? " " : null}
              </Fragment>
            ))}
          </h1>

          <p
            className="enter mt-7 max-w-xl text-lg leading-relaxed text-ink-300 sm:text-xl"
            style={{ "--d": "750ms" }}
          >
            {hero.description}
          </p>

          <div className="enter mt-10 flex flex-col gap-3 sm:flex-row" style={{ "--d": "880ms" }}>
            <Button to="/contact" arrow>
              Parlons de votre projet
            </Button>
            <Button to="/services" variant="ghost">
              Explorer nos services
            </Button>
          </div>

          <div className="enter mt-14 border-t border-line pt-6" style={{ "--d": "1020ms" }}>
            <p className="sr-only">Domaines d’intervention : {hero.domains.join(", ")}.</p>
            <div aria-hidden="true" className="marquee">
              {[0, 1].map((copy) => (
                <ul
                  key={copy}
                  className="marquee-track flex shrink-0 gap-5 pr-5 font-mono text-[0.7rem] tracking-[0.14em] text-ink-400 uppercase"
                >
                  {hero.domains.map((domain) => (
                    <li key={domain} className="flex items-center gap-5 whitespace-nowrap">
                      {domain}
                      <span className="size-1 rounded-full bg-blue-500/70" />
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>

        <div className="enter" style={{ "--d": "300ms" }}>
          <div className="hero-visual-scroll" data-parallax>
            <HeroVisual />
          </div>
        </div>
      </Container>

      <a
        href="#services"
        className="enter absolute right-6 bottom-8 hidden flex-col items-center lg:right-10 gap-3 rounded-md font-mono text-[0.65rem] tracking-[0.2em] text-ink-400 uppercase transition-colors hover:text-ink-50 md:flex"
        style={{ "--d": "1300ms" }}
      >
        Défiler
        <span aria-hidden="true" className="scroll-cue" />
      </a>
    </section>
  );
}

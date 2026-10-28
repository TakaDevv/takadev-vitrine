import { Fragment, useEffect, useRef } from "react";
import { company } from "../../data/company.js";
import { hero } from "../../data/home.js";
import Button from "../common/Button.jsx";
import Container from "../common/Container.jsx";
import HeroVisual from "./HeroVisual.jsx";

// Pointer parallax: writes two CSS variables once per frame, never React state.
function usePointerParallax(ref) {
  useEffect(() => {
    const node = ref.current;
    const media = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)");
    if (!node || !media.matches) {
      return undefined;
    }

    let frame = 0;
    let x = 0;
    let y = 0;

    function apply() {
      frame = 0;
      node.style.setProperty("--px", x.toFixed(3));
      node.style.setProperty("--py", y.toFixed(3));
    }

    function onMove(event) {
      const rect = node.getBoundingClientRect();
      x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      y = ((event.clientY - rect.top) / rect.height) * 2 - 1;
      if (!frame) {
        frame = requestAnimationFrame(apply);
      }
    }

    function onLeave() {
      x = 0;
      y = 0;
      if (!frame) {
        frame = requestAnimationFrame(apply);
      }
    }

    node.addEventListener("pointermove", onMove);
    node.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      node.removeEventListener("pointermove", onMove);
      node.removeEventListener("pointerleave", onLeave);
    };
  }, [ref]);
}

export default function Hero() {
  const ref = useRef(null);
  usePointerParallax(ref);

  return (
    <section ref={ref} aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0" />
        <div className="light-field" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-b from-transparent to-night-900" />
      </div>

      <Container className="grid min-h-[100svh] items-center gap-12 pt-28 pb-24 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-8 lg:pt-32">
        <div>
          <p
            className="enter inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-night-800/70 px-3.5 py-1.5 text-xs font-medium tracking-wide text-ink-300"
            style={{ "--d": "60ms" }}
          >
            <span aria-hidden="true" className="size-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgb(56_189_248/0.9)]" />
            {hero.eyebrow}
          </p>

          <h1
            id="hero-title"
            className="mt-7 max-w-[15ch] font-display text-[clamp(2.6rem,1.15rem+4.6vw,5.25rem)] leading-[1.03] font-bold tracking-[-0.035em] text-ink-50"
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
            {company.summary}
          </p>

          <div className="enter mt-10 flex flex-col gap-3 sm:flex-row" style={{ "--d": "880ms" }}>
            <Button to="/contact" arrow>
              Discutons de votre projet
            </Button>
            <Button to="/services" variant="ghost">
              Explorer nos services
            </Button>
          </div>

          <div className="enter mt-14 border-t border-line pt-6" style={{ "--d": "1020ms" }}>
            <p className="sr-only">Domaines d’intervention :</p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-[0.7rem] tracking-[0.14em] text-ink-400 uppercase">
              {hero.domains.map((domain, index) => (
                <li key={domain} className="flex items-center gap-5">
                  {index > 0 ? <span aria-hidden="true" className="size-1 rounded-full bg-blue-500/70" /> : null}
                  {domain}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="enter hidden lg:block" style={{ "--d": "300ms" }}>
          <HeroVisual />
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

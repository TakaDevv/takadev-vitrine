import { Fragment, useRef } from "react";
import { ArrowDown, Handshake, Layers, ShieldCheck, Sparkles, Wrench } from "lucide-react";
import Button from "../common/Button.jsx";
import Container from "../common/Container.jsx";
import usePointerParallax from "../common/usePointerParallax.js";

const headline = "Des solutions digitales sur mesure pour faire avancer votre entreprise".split(" ");

const promises = [
  { label: "Expertise technique", icon: Wrench },
  { label: "Solutions sur mesure", icon: Layers },
  { label: "Accompagnement dédié", icon: Handshake },
];

const codeLines = [
  { indent: 0, parts: [["text-[#c084fc]", "const"], ["text-white", " projet = "], ["text-[#60a5fa]", "créer"], ["text-white", "({"]] },
  { indent: 1, parts: [["text-[#93c5fd]", "besoin"], ["text-white", ": "], ["text-[#86efac]", "\"analysé\""], ["text-white", ","]] },
  { indent: 1, parts: [["text-[#93c5fd]", "interface"], ["text-white", ": "], ["text-[#86efac]", "\"responsive\""], ["text-white", ","]] },
  { indent: 1, parts: [["text-[#93c5fd]", "sécurité"], ["text-white", ": "], ["text-[#fca5a5]", "true"], ["text-white", ","]] },
  { indent: 0, parts: [["text-white", "});"]] },
];

// Laptop, code window and phone: an illustrative composition, no real product or figures.
function DeviceComposition() {
  return (
    <div aria-hidden="true" className="relative mx-auto aspect-[5/4] w-full max-w-[36rem]">
      <div className="parallax absolute inset-0" style={{ "--depth": 0.3 }}>
        <div className="absolute top-[6%] right-[4%] size-[58%] rounded-full bg-blue-600/35 blur-3xl" />
        <div className="absolute bottom-[4%] left-[6%] size-[38%] rounded-full bg-[#60a5fa]/20 blur-3xl" />
        <div className="blob absolute top-[14%] left-[18%] size-[62%] rounded-[42%_58%_55%_45%/48%_42%_58%_52%] border border-[#60a5fa]/25" />
      </div>

      {/* Laptop */}
      <div className="parallax absolute inset-x-[6%] top-[22%]" style={{ "--depth": 0.6 }}>
        <div className="rounded-t-[14px] border border-white/10 bg-[#0e1b3a] p-2.5 shadow-[0_40px_80px_-30px_rgb(0_0_0/0.8)]">
          <div className="overflow-hidden rounded-[8px] bg-[#f5f7fb]">
            <div className="flex items-center gap-1.5 border-b border-[#e3e8f0] bg-white px-3 py-2">
              <span className="size-2 rounded-full bg-[#d5dce8]" />
              <span className="size-2 rounded-full bg-[#d5dce8]" />
              <span className="size-2 rounded-full bg-[#d5dce8]" />
              <span className="ml-3 h-2 w-24 rounded-full bg-[#e3e8f0]" />
            </div>
            <div className="grid grid-cols-[22%_minmax(0,1fr)] gap-2.5 p-2.5">
              <div className="space-y-1.5 rounded-md bg-[#0b1630] p-2">
                <span className="block h-1.5 w-3/4 rounded-full bg-[#60a5fa]" />
                <span className="block h-1.5 w-2/3 rounded-full bg-white/20" />
                <span className="block h-1.5 w-3/4 rounded-full bg-white/20" />
                <span className="block h-1.5 w-1/2 rounded-full bg-white/20" />
              </div>
              <div className="space-y-2.5">
                <div className="grid grid-cols-3 gap-2">
                  <span className="h-8 rounded-md border border-[#e3e8f0] bg-white" />
                  <span className="h-8 rounded-md border border-[#e3e8f0] bg-white" />
                  <span className="h-8 rounded-md bg-[#2563eb]" />
                </div>
                <div className="flex h-16 items-end gap-1 rounded-md border border-[#e3e8f0] bg-white p-2">
                  {[40, 62, 50, 78, 58, 88, 66, 72].map((height, index) => (
                    <span
                      key={index}
                      className={`hero-bar hero-bar-live flex-1 rounded-t-[2px] ${index === 5 ? "bg-[#2563eb]" : "bg-[#93c5fd]"}`}
                      style={{ height: `${height}%`, "--d": `${900 + index * 70}ms` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-[-6%] h-3 rounded-b-[10px] bg-linear-to-b from-[#c9d6ee] to-[#a9bcdd]" />
      </div>

      {/* Code window */}
      <div className="parallax absolute top-[2%] left-0 w-[52%]" style={{ "--depth": 1.1 }}>
        <div className="hero-float rounded-[12px] border border-white/10 bg-[#0b1630]/95 p-3.5 font-mono text-[0.62rem] leading-[1.7] shadow-[0_30px_60px_-30px_rgb(0_0_0/0.9)] sm:text-[0.7rem]">
          <div className="mb-2 flex gap-1.5">
            <span className="size-2 rounded-full bg-[#fca5a5]/70" />
            <span className="size-2 rounded-full bg-[#fde68a]/70" />
            <span className="size-2 rounded-full bg-[#86efac]/70" />
          </div>
          {codeLines.map((line, index) => (
            <p key={index} className="type-line whitespace-nowrap" style={{ paddingLeft: `${line.indent * 1.2}em`, "--d": `${700 + index * 160}ms` }}>
              {line.parts.map(([color, text], part) => (
                <span key={part} className={color}>
                  {text}
                </span>
              ))}
            </p>
          ))}
        </div>
      </div>

      {/* Phone */}
      <div className="parallax absolute right-[1%] bottom-[2%] w-[24%]" style={{ "--depth": 1.5 }}>
        <div className="hero-float rounded-[22px] border-[5px] border-[#0b1630] bg-[#f5f7fb] p-2 shadow-[0_30px_60px_-24px_rgb(0_0_0/0.85)]" style={{ "--float-delay": "-4s" }}>
          <span className="mx-auto mb-2 block h-1.5 w-8 rounded-full bg-[#0b1630]" />
          <span className="block h-14 rounded-lg bg-linear-to-br from-[#2563eb] to-[#60a5fa]" />
          <span className="mt-2 block h-5 rounded-md border border-[#e3e8f0] bg-white" />
          <span className="mt-1.5 block h-5 rounded-md border border-[#e3e8f0] bg-white" />
          <span className="mt-1.5 block h-5 rounded-md border border-[#e3e8f0] bg-white" />
          <span className="mt-2.5 block h-4 rounded-full bg-[#2563eb]" />
        </div>
      </div>

      {/* Floating labels */}
      <div className="parallax absolute inset-0" style={{ "--depth": 1.9 }}>
        <p
          className="hero-float hero-panel absolute top-[12%] right-[-2%] hidden items-center gap-2.5 px-3.5 py-2.5 text-sm font-semibold text-ink-50 sm:flex"
          style={{ "--float-delay": "-2s" }}
        >
          <Sparkles size={16} className="text-blue-400" />
          Développement sur mesure
        </p>
        <p
          className="hero-float hero-panel absolute bottom-[10%] left-[-2%] hidden items-center gap-2.5 px-3.5 py-2.5 text-sm font-semibold text-ink-50 sm:flex"
          style={{ "--float-delay": "-6s" }}
        >
          <ShieldCheck size={16} className="text-success" />
          Performance &amp; Sécurité
        </p>
      </div>
    </div>
  );
}

export default function ServicesHero() {
  const ref = useRef(null);
  usePointerParallax(ref);

  return (
    <header ref={ref} className="theme-dark relative isolate overflow-clip bg-night-900">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0" />
        <div className="light-field" />
        <div className="hero-spot" />
      </div>

      <Container className="grid items-center gap-14 pt-32 pb-20 sm:pt-36 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-10 lg:pt-40 lg:pb-28">
        <div className="hero-copy" data-parallax>
          <p className="enter section-label" style={{ "--d": "60ms" }}>
            <span aria-hidden="true" className="section-tick" />
            Nos services
          </p>
          <h1 className="mt-6 max-w-[19ch] font-display text-[clamp(2.3rem,1.3rem+3vw,3.9rem)] leading-[1.05] font-bold tracking-[-0.035em] text-ink-50">
            {headline.map((word, index) => (
              <Fragment key={`${word}-${index}`}>
                <span className={`hero-word ${word === "avancer" ? "relative" : ""}`}>
                  <span className={word === "avancer" ? "text-[#60a5fa]" : undefined} style={{ "--i": index }}>
                    {word}
                  </span>
                  {word === "avancer" ? <span aria-hidden="true" className="accent-line" /> : null}
                </span>
                {index < headline.length - 1 ? " " : null}
              </Fragment>
            ))}
          </h1>
          <p className="enter mt-6 max-w-xl text-lg leading-relaxed text-ink-300 sm:text-xl" style={{ "--d": "700ms" }}>
            De la conception à la mise en production, TAKADEV vous accompagne avec une expertise complète pour
            transformer vos idées en solutions numériques performantes et durables.
          </p>
          <div className="enter mt-9 flex flex-col gap-3 sm:flex-row" style={{ "--d": "820ms" }}>
            <Button to="/contact" arrow>
              Parlons de votre projet
            </Button>
            <a href="#catalogue" className="btn btn-ghost">
              <span>Explorer nos services</span>
              <ArrowDown aria-hidden="true" size={16} className="btn-arrow-down" />
            </a>
          </div>
          <ul className="enter mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-6" style={{ "--d": "960ms" }}>
            {promises.map(({ label, icon: Icon }) => (
              <li key={label} className="flex items-center gap-2.5 text-[0.95rem] font-medium text-ink-50">
                <span className="grid size-8 place-items-center rounded-lg border border-[#60a5fa]/30 bg-blue-600/20 text-blue-400">
                  <Icon aria-hidden="true" size={16} strokeWidth={1.8} />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="enter" style={{ "--d": "300ms" }}>
          <div className="hero-visual-scroll" data-parallax>
            <DeviceComposition />
          </div>
        </div>
      </Container>
    </header>
  );
}

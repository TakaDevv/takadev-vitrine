import { services } from "../../data/services.js";
import Button from "../common/Button.jsx";
import Reveal from "../common/Reveal.jsx";
import ServiceCard from "./ServiceCard.jsx";

// Bento layout: one featured service (2×2), eight compact cards, one wide card and a contact tile.
export default function ServiceGrid({ headingAs = "h3" }) {
  const [featured, ...others] = services;
  const compact = others.slice(0, -1);
  const wide = others.at(-1);
  const total = services.length;

  return (
    <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Reveal as="li" className="md:col-span-2 lg:row-span-2">
        <ServiceCard service={featured} index={1} total={total} featured headingAs={headingAs} />
      </Reveal>
      {compact.map((service, position) => (
        <Reveal as="li" key={service.slug} delay={(position % 4) * 70}>
          <ServiceCard service={service} index={position + 2} total={total} headingAs={headingAs} />
        </Reveal>
      ))}
      <Reveal as="li" className="md:col-span-2">
        <ServiceCard service={wide} index={total} total={total} headingAs={headingAs} />
      </Reveal>
      <Reveal as="li" delay={70} className="md:col-span-2">
        <div className="relative flex h-full flex-col justify-between gap-8 overflow-hidden rounded-[18px] border border-blue-500/30 bg-linear-to-br from-blue-600/25 via-night-700/70 to-night-800 p-6 sm:p-8">
          <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0 opacity-70" />
          <div className="relative">
            <p className="font-mono text-xs tracking-[0.14em] text-cyan-400 uppercase">Plusieurs domaines ?</p>
            <p className="mt-4 max-w-md font-display text-2xl leading-snug font-semibold tracking-tight text-ink-50">
              Décrivez votre besoin : TAKADEV vous oriente vers la bonne combinaison de services.
            </p>
          </div>
          <div className="relative">
            <Button to="/contact" arrow>
              Discutons de votre projet
            </Button>
          </div>
        </div>
      </Reveal>
    </ul>
  );
}

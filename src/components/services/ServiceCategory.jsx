import { familyIntros } from "../../data/serviceVisuals.js";
import { serviceNumber } from "../../data/services.js";
import Reveal from "../common/Reveal.jsx";
import ServiceCard from "./ServiceCard.jsx";
import ServiceIcon from "./ServiceIcon.jsx";

// One family: icon, title and introduction, then its service cards three per row.
export default function ServiceCategory({ family, index }) {
  return (
    <section
      id={`famille-${family.id}`}
      aria-labelledby={`famille-${family.id}-titre`}
      className="family-section border-t border-line py-14 first:border-t-0 first:pt-0 sm:py-16"
    >
      <Reveal className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex items-start gap-4">
          <span className="icon-tile family-icon size-12">
            <ServiceIcon name={family.icon} size={22} />
          </span>
          <div>
            <p className="font-mono text-xs tracking-[0.12em] text-ink-400 uppercase">
              Famille {String(index + 1).padStart(2, "0")} · {family.services.length}{" "}
              {family.services.length > 1 ? "services" : "service"}
            </p>
            <h2 id={`famille-${family.id}-titre`} className="mt-1.5 font-display text-[clamp(1.6rem,1.3rem+1vw,2.1rem)] font-bold tracking-tight text-ink-50">
              {family.title}
            </h2>
          </div>
        </div>
        <p className="max-w-md leading-relaxed text-ink-400 sm:text-right">{familyIntros[family.id]}</p>
      </Reveal>

      <ul className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {family.services.map((service, position) => (
          <Reveal as="li" key={service.slug} delay={position * 90}>
            <ServiceCard service={service} number={serviceNumber(service)} />
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

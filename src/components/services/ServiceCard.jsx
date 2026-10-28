import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import ServiceIcon from "./ServiceIcon.jsx";

function pad(value) {
  return String(value).padStart(2, "0");
}

export default function ServiceCard({ service, index, total, featured = false, headingAs: Heading = "h3" }) {
  return (
    <article
      className={`card-service flex h-full flex-col p-6 sm:p-7 ${featured ? "card-service--featured lg:p-10" : ""}`}
    >
      <div className="flex items-center justify-between gap-4">
        <span className={`icon-tile ${featured ? "size-14" : ""}`}>
          <ServiceIcon name={service.icon} size={featured ? 26 : 20} />
        </span>
        <span className="font-mono text-xs tracking-[0.08em] text-ink-400">
          {pad(index)} / {pad(total)}
        </span>
      </div>

      <Heading
        className={`font-display font-semibold tracking-[-0.015em] text-ink-50 ${
          featured ? "mt-8 text-[clamp(1.75rem,1.3rem+1.6vw,2.5rem)] leading-[1.1]" : "mt-6 text-xl leading-snug"
        }`}
      >
        <Link to={`/services/${service.slug}`} className="stretched">
          {service.title}
        </Link>
      </Heading>
      <p className={`mt-3 leading-relaxed text-ink-300 ${featured ? "max-w-lg text-lg" : ""}`}>{service.summary}</p>

      {featured ? (
        <ul className="mt-8 grid gap-x-6 gap-y-3 border-t border-line pt-6 text-[0.95rem] sm:grid-cols-2">
          {service.offerings.map((offering) => (
            <li key={offering} className="flex gap-2.5">
              <Check aria-hidden="true" size={16} className="mt-1 shrink-0 text-cyan-400" />
              <span>{offering}</span>
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-auto flex items-center justify-between gap-4 pt-7">
        <span className="font-mono text-xs text-ink-400">{service.offerings.length} prestations</span>
        <span aria-hidden="true" className="inline-flex items-center gap-2 font-display text-sm font-semibold text-blue-400">
          En savoir plus
          <ArrowRight size={16} className="card-arrow" />
        </span>
      </div>
    </article>
  );
}

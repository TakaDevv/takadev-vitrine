import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ServiceIcon from "./ServiceIcon.jsx";

export default function ServiceCard({ service }) {
  return (
    <article className="flex h-full flex-col rounded-2xl bg-white p-6">
      <span className="flex size-11 items-center justify-center rounded-xl bg-brand-soft text-brand-dark">
        <ServiceIcon name={service.icon} />
      </span>
      <h2 className="mt-5 font-display text-xl font-semibold text-night">{service.title}</h2>
      <p className="mt-3 flex-1 leading-relaxed">{service.summary}</p>
      <Link
        to={`/services/${service.slug}`}
        className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark"
      >
        En savoir plus
        <span className="sr-only"> sur {service.title}</span>
        <ArrowRight aria-hidden="true" size={16} />
      </Link>
    </article>
  );
}

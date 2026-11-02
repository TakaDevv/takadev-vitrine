import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { serviceVisuals } from "../../data/serviceVisuals.js";
import DemoStage from "./demos/DemoStage.jsx";
import ServiceDemo from "./ServiceDemos.jsx";
import ServiceIcon from "./ServiceIcon.jsx";

function CardDemo({ service }) {
  return (
    <DemoStage label={serviceVisuals[service.slug]?.demoLabel ?? service.title}>
      <ServiceDemo
        slug={service.slug}
        fallback={
          <span className="text-blue-400">
            <ServiceIcon name={service.icon} size={44} />
          </span>
        }
      />
    </DemoStage>
  );
}

// Live mini-project on top, then title, short description and "En savoir plus" to the service page.
export default function ServiceCard({ service, number, headingAs: Heading = "h3" }) {
  const visual = serviceVisuals[service.slug];

  return (
    <article className="service-card group relative flex h-full flex-col overflow-clip rounded-[18px] border border-line bg-night-800">
      <CardDemo service={service} />

      <div className="flex flex-1 flex-col p-6">
        <p className="mb-4 font-mono text-[0.7rem] tracking-[0.08em] text-ink-400 uppercase">Service {number} / 10</p>
        <div className="flex items-center gap-3">
          <span className="icon-tile size-9">
            <ServiceIcon name={service.icon} size={18} />
          </span>
          <Heading className="font-display text-xl leading-snug font-bold tracking-[-0.01em] text-ink-50">
            <Link to={`/services/${service.slug}`} className="stretched">
              {service.title}
            </Link>
          </Heading>
        </div>
        <p className="mt-3 text-[0.98rem] leading-relaxed">{visual?.card ?? service.summary}</p>
        <span
          aria-hidden="true"
          className="mt-auto inline-flex items-center gap-2 pt-5 font-display text-sm font-semibold text-blue-400"
        >
          En savoir plus
          <ArrowRight size={16} className="card-arrow" />
        </span>
      </div>
    </article>
  );
}

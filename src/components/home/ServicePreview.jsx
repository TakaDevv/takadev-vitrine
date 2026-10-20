import { ArrowRight, Boxes, Globe, GraduationCap, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { featuredServices } from "../../data/home.js";
import Button from "../common/Button.jsx";
import Container from "../common/Container.jsx";
import SectionHeading from "../common/SectionHeading.jsx";

const icons = { Globe, Smartphone, Boxes, GraduationCap };

export default function ServicePreview() {
  return (
    <section aria-labelledby="services-apercu" className="bg-white">
      <Container className="py-16 sm:py-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id="services-apercu"
            eyebrow="Domaines"
            title="Quatre activités au cœur de TAKADEV."
            description="Applications web, applications mobiles, systèmes de gestion et formation. Le catalogue complet en compte dix."
          />
          <Button to="/services" variant="secondary">
            Voir tous les services
          </Button>
        </div>
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {featuredServices.map((service) => {
            const Icon = icons[service.icon];
            return (
              <li key={service.slug}>
                <Link
                  to={`/services/${service.slug}`}
                  className="group flex h-full flex-col rounded-2xl bg-surface p-6 ring-1 ring-transparent transition-colors hover:ring-brand/30"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-brand-soft text-brand-dark">
                    <Icon aria-hidden="true" size={20} />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-night">{service.title}</h3>
                  <p className="mt-2 flex-1 leading-relaxed">{service.summary}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                    En savoir plus
                    <ArrowRight
                      aria-hidden="true"
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5 motion-reduce:translate-x-0 motion-reduce:transition-none"
                    />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

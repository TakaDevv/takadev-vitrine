import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { company } from "../../data/company.js";
import { legalNavigation, mainNavigation } from "../../data/navigation.js";
import { services } from "../../data/services.js";
import Container from "../common/Container.jsx";

const year = new Date().getFullYear();

export default function Footer() {

  return (
    <footer className="bg-night text-on-night">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="max-w-sm">
          <p className="font-display text-lg font-semibold text-white">{company.name}</p>
          <p className="mt-3 text-sm leading-relaxed text-on-night-muted">{company.footerSummary}</p>
        </div>

        <nav aria-label="Pied de page">
          <h2 className="text-sm font-semibold text-white">Navigation</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {mainNavigation.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="inline-flex min-h-8 items-center text-on-night-muted transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services">
          <h2 className="text-sm font-semibold text-white">Services</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex min-h-8 items-center text-on-night-muted transition-colors hover:text-white"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold text-white">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={company.phoneHref}
                className="inline-flex min-h-8 items-start gap-2 text-on-night-muted transition-colors hover:text-white"
              >
                <Phone aria-hidden="true" size={16} className="mt-0.5 shrink-0" />
                {company.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${company.email}`}
                className="inline-flex min-h-8 items-start gap-2 text-on-night-muted transition-colors hover:text-white"
              >
                <Mail aria-hidden="true" size={16} className="mt-0.5 shrink-0" />
                <span className="break-all">{company.email}</span>
              </a>
            </li>
            <li className="inline-flex items-start gap-2 text-on-night-muted">
              <MapPin aria-hidden="true" size={16} className="mt-0.5 shrink-0" />
              <address className="not-italic">{company.address}</address>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-5 text-sm text-on-night-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.legalName}. Tous droits réservés.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {legalNavigation.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="inline-flex min-h-8 items-center transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}

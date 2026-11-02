import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-takadev.png";
import { company } from "../../data/company.js";
import { legalNavigation, mainNavigation } from "../../data/navigation.js";
import { services } from "../../data/services.js";
import Container from "../common/Container.jsx";

const year = new Date().getFullYear();

const linkClass = "inline-flex min-h-9 items-center text-ink-400 transition-colors duration-150 hover:text-ink-50";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-night-800">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-20">
        <div className="sm:col-span-2 lg:col-span-4">
          <img
            src={logo}
            alt="Logo EPE TAKADEV SPA, filiale du CERIST"
            width="800"
            height="140"
            loading="lazy"
            className="h-9 w-auto sm:h-10"
          />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-400">{company.footerSummary}</p>
        </div>

        <nav aria-label="Pied de page" className="lg:col-span-2">
          <h2 className="font-mono text-xs tracking-[0.14em] text-ink-50 uppercase">Navigation</h2>
          <ul className="mt-5 space-y-1 text-sm">
            {mainNavigation.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services" className="lg:col-span-3">
          <h2 className="font-mono text-xs tracking-[0.14em] text-ink-50 uppercase">Services</h2>
          <ul className="mt-5 space-y-1 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link to={`/services/${service.slug}`} className={linkClass}>
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className="font-mono text-xs tracking-[0.14em] text-ink-50 uppercase">Contact</h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href={company.phoneHref} className={`${linkClass} gap-3`}>
                <Phone aria-hidden="true" size={16} className="shrink-0 text-blue-400" />
                {company.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className={`${linkClass} gap-3`}>
                <Mail aria-hidden="true" size={16} className="shrink-0 text-blue-400" />
                <span className="break-all">{company.email}</span>
              </a>
            </li>
            <li>
              <a
                href={company.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkClass} items-start gap-3 pt-1.5`}
              >
                <MapPin aria-hidden="true" size={16} className="mt-0.5 shrink-0 text-blue-400" />
                <address className="not-italic">{company.address}</address>
                <span className="sr-only"> — voir sur Google Maps (nouvel onglet)</span>
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-col gap-3 py-6 text-sm text-ink-400 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {company.legalName}. Tous droits réservés.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-1">
            {legalNavigation.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>

      <p aria-hidden="true" className="footer-mark -mb-[0.12em] text-center">
        TAKADEV
      </p>
    </footer>
  );
}

import { Check } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Button from "../components/common/Button.jsx";
import Container from "../components/common/Container.jsx";
import PageIntro from "../components/common/PageIntro.jsx";
import Seo from "../components/common/Seo.jsx";
import ServiceIcon from "../components/services/ServiceIcon.jsx";
import { getService, services } from "../data/services.js";
import NotFoundPage from "./NotFoundPage.jsx";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = getService(slug);

  if (!service) {
    return <NotFoundPage />;
  }

  const others = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <Seo title={service.title} description={service.summary} />
      <PageIntro eyebrow="Service" title={service.title} description={service.description} />
      <div className="py-12 sm:py-16">
        <Container className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
          <section aria-labelledby="prestations">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-xl bg-brand-soft text-brand-dark">
                <ServiceIcon name={service.icon} />
              </span>
              <h2 id="prestations" className="font-display text-2xl font-semibold text-night">
                Prestations
              </h2>
            </div>
            <ul className="mt-6 grid gap-3">
              {service.offerings.map((offering) => (
                <li key={offering} className="flex gap-3 rounded-xl bg-white px-4 py-3">
                  <Check aria-hidden="true" className="mt-0.5 shrink-0 text-brand" size={18} />
                  <span>{offering}</span>
                </li>
              ))}
            </ul>
          </section>

          <aside className="rounded-2xl bg-night p-6 text-on-night lg:sticky lg:top-24">
            <h2 className="font-display text-xl font-semibold text-white">Ce service vous concerne ?</h2>
            <p className="mt-3 leading-relaxed text-on-night-muted">
              La demande ouverte depuis cette page reste rattachée à {service.title}.
            </p>
            <div className="mt-6">
              <Button to={`/contact?service=${service.slug}`} className="w-full">
                Demander un devis
              </Button>
            </div>
          </aside>
        </Container>

        <Container className="mt-14">
          <h2 className="font-display text-2xl font-semibold text-night">Autres services</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((item) => (
              <li key={item.slug}>
                <Link
                  to={`/services/${item.slug}`}
                  className="flex min-h-11 items-center gap-3 rounded-xl bg-white px-4 py-3 font-semibold text-night hover:text-brand"
                >
                  <span className="text-brand">
                    <ServiceIcon name={item.icon} size={18} />
                  </span>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </>
  );
}

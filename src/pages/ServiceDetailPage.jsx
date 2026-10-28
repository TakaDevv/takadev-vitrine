import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Button from "../components/common/Button.jsx";
import Container from "../components/common/Container.jsx";
import PageIntro from "../components/common/PageIntro.jsx";
import Reveal from "../components/common/Reveal.jsx";
import Seo from "../components/common/Seo.jsx";
import ServiceIcon from "../components/services/ServiceIcon.jsx";
import { company } from "../data/company.js";
import { getService, services } from "../data/services.js";
import NotFoundPage from "./NotFoundPage.jsx";

function pad(value) {
  return String(value).padStart(2, "0");
}

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = getService(slug);

  if (!service) {
    return <NotFoundPage />;
  }

  const position = services.findIndex((item) => item.slug === service.slug) + 1;
  const others = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <Seo title={service.title} description={service.summary} />
      <PageIntro
        eyebrow={`Service ${pad(position)} / ${pad(services.length)}`}
        title={service.title}
        description={service.description}
      >
        <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
          <span className="icon-tile size-14">
            <ServiceIcon name={service.icon} size={26} />
          </span>
          <Link
            to="/services"
            className="group inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink-300 transition-colors hover:text-ink-50"
          >
            <ArrowLeft aria-hidden="true" size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
            Tous les services
          </Link>
        </div>
      </PageIntro>

      <div className="py-16 sm:py-20 lg:py-24">
        <Container className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <section aria-labelledby="prestations" className="lg:col-span-7">
            <Reveal>
              <p className="section-label">
                <span aria-hidden="true" className="section-tick" />
                {service.offerings.length} prestations
              </p>
              <h2
                id="prestations"
                className="mt-5 font-display text-[clamp(1.75rem,1.3rem+1.6vw,2.5rem)] font-semibold tracking-tight text-ink-50"
              >
                Prestations
              </h2>
            </Reveal>
            <ol className="mt-10 border-t border-line">
              {service.offerings.map((offering, index) => (
                <Reveal
                  as="li"
                  key={offering}
                  delay={index * 60}
                  className="grid grid-cols-[3rem_minmax(0,1fr)] items-baseline gap-4 border-b border-line py-5 sm:py-6"
                >
                  <span className="font-mono text-xs tracking-[0.08em] text-cyan-400">{pad(index + 1)}</span>
                  <span className="font-display text-lg leading-snug font-medium text-ink-50 sm:text-xl">{offering}</span>
                </Reveal>
              ))}
            </ol>
          </section>

          <Reveal as="aside" delay={120} className="lg:sticky lg:top-28 lg:col-span-5">
            <div className="card-service card-service--featured p-7 sm:p-9">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink-50">
                Ce service vous concerne ?
              </h2>
              <p className="mt-3 leading-relaxed">
                La demande ouverte depuis cette page reste rattachée à {service.title}.
              </p>
              <div className="mt-8 grid gap-3">
                <Button to={`/contact?service=${service.slug}`} arrow className="w-full">
                  Discutons de votre projet
                </Button>
                <a href={company.phoneHref} className="btn btn-ghost w-full">
                  Appeler le {company.phoneDisplay}
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </div>

      <section aria-labelledby="autres-services" className="border-t border-line bg-night-800 py-16 sm:py-20">
        <Container>
          <h2 id="autres-services" className="font-display text-2xl font-semibold tracking-tight text-ink-50">
            Autres services
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((item, index) => (
              <Reveal as="li" key={item.slug} delay={(index % 3) * 60}>
                <Link
                  to={`/services/${item.slug}`}
                  className="group flex min-h-16 items-center gap-4 rounded-[14px] border border-line bg-night-700/60 px-4 py-3 font-display font-semibold text-ink-50 transition-colors duration-300 hover:border-line-strong hover:bg-night-700"
                >
                  <span className="text-blue-400 transition-colors group-hover:text-cyan-400">
                    <ServiceIcon name={item.icon} size={20} />
                  </span>
                  <span className="flex-1">{item.title}</span>
                  <ArrowRight
                    aria-hidden="true"
                    size={16}
                    className="text-ink-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-cyan-400"
                  />
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}

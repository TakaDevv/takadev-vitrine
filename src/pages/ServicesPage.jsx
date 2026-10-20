import Container from "../components/common/Container.jsx";
import PageIntro from "../components/common/PageIntro.jsx";
import Seo from "../components/common/Seo.jsx";
import ServiceCard from "../components/services/ServiceCard.jsx";
import { services } from "../data/services.js";

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="Services"
        description="Développement web et mobile, logiciels sur mesure, maintenance, formation et accompagnement numérique par TAKADEV."
      />
      <PageIntro
        eyebrow="Nos services"
        title="Dix domaines pour concevoir, déployer et faire vivre vos outils."
        description="Chaque offre mène vers une page dédiée et vers une demande de devis."
      />
      <div className="py-12 sm:py-16">
        <Container>
          <ul className="grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <li key={service.slug}>
                <ServiceCard service={service} />
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </>
  );
}

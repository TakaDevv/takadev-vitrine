import Container from "../components/common/Container.jsx";
import CtaBand from "../components/common/CtaBand.jsx";
import PageIntro from "../components/common/PageIntro.jsx";
import Seo from "../components/common/Seo.jsx";
import ServiceGrid from "../components/services/ServiceGrid.jsx";

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
      <section aria-label="Catalogue des services" className="py-16 sm:py-20 lg:py-24">
        <Container>
          <ServiceGrid headingAs="h2" />
        </Container>
      </section>
      <CtaBand />
    </>
  );
}

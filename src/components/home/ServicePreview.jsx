import Button from "../common/Button.jsx";
import Container from "../common/Container.jsx";
import Reveal from "../common/Reveal.jsx";
import SectionHeading from "../common/SectionHeading.jsx";
import ServiceGrid from "../services/ServiceGrid.jsx";

export default function ServicePreview() {
  return (
    <section id="services" aria-labelledby="services-apercu" className="relative py-16 sm:py-24 lg:py-32">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="services-apercu"
            index="01"
            eyebrow="Services"
            title="Dix expertises pour concevoir, déployer et faire vivre vos outils."
            description="Du site web au logiciel de gestion, de l’hébergement à la formation : chaque domaine mène vers une page dédiée et vers une demande de devis."
          />
          <Reveal delay={120} className="shrink-0">
            <Button to="/services" variant="ghost" arrow>
              Tous les services
            </Button>
          </Reveal>
        </div>
        <div className="mt-12 lg:mt-16">
          <ServiceGrid />
        </div>
      </Container>
    </section>
  );
}

import Button from "../common/Button.jsx";
import Container from "../common/Container.jsx";
import Reveal from "../common/Reveal.jsx";
import SectionHeading from "../common/SectionHeading.jsx";
import ServiceFamilies from "../services/ServiceFamilies.jsx";

export default function ServicePreview() {
  return (
    <section id="services" aria-labelledby="services-apercu" className="relative py-16 sm:py-24 lg:py-32">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="services-apercu"
            index="01"
            eyebrow="Expertises"
            title="Dix expertises, réunies en quatre familles."
            description="Choisissez une famille pour voir les services qu’elle regroupe, le détail de chaque offre et la page qui lui est consacrée."
          />
          <Reveal delay={120} className="shrink-0">
            <Button to="/services" variant="ghost" arrow>
              Tous les services
            </Button>
          </Reveal>
        </div>
        <div className="mt-12 lg:mt-16">
          <ServiceFamilies />
        </div>
      </Container>
    </section>
  );
}

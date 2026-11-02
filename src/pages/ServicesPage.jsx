import Container from "../components/common/Container.jsx";
import SectionHeading from "../components/common/SectionHeading.jsx";
import Seo from "../components/common/Seo.jsx";
import FamilyNav from "../components/services/FamilyNav.jsx";
import ProjectCTA from "../components/services/ProjectCTA.jsx";
import ServiceCategory from "../components/services/ServiceCategory.jsx";
import ServicesHero from "../components/services/ServicesHero.jsx";
import { serviceFamilies } from "../data/services.js";

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="Services"
        description="Développement web et mobile, logiciels sur mesure, UI/UX, cloud, cybersécurité, maintenance, data et IA, formation et digitalisation par TAKADEV."
      />
      <ServicesHero />

      <section id="catalogue" aria-labelledby="catalogue-titre" className="py-16 sm:py-24">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              id="catalogue-titre"
              eyebrow="Catalogue"
              title="Dix services, quatre familles d’expertise."
              description="Chaque service mène vers une page détaillée et vers une demande de devis."
            />
          </div>
          <FamilyNav />
          <div className="mt-8">
            {serviceFamilies.map((family, index) => (
              <ServiceCategory key={family.id} family={family} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <ProjectCTA />
    </>
  );
}

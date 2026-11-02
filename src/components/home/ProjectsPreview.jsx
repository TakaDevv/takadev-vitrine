import Button from "../common/Button.jsx";
import Container from "../common/Container.jsx";
import Reveal from "../common/Reveal.jsx";
import SectionHeading from "../common/SectionHeading.jsx";
import ProjectShowcase from "../projects/ProjectShowcase.jsx";

export default function ProjectsPreview() {
  return (
    <section aria-labelledby="realisations-apercu" className="py-16 sm:py-24 lg:py-32">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="realisations-apercu"
            index="05"
            eyebrow="Réalisations"
            title="Les projets, présentés en grand."
            description="Chaque réalisation publiée est présentée avec un visuel, son type et une description validée."
          />
          <Reveal delay={120} className="shrink-0">
            <Button to="/realisations" variant="ghost" arrow>
              Toutes les réalisations
            </Button>
          </Reveal>
        </div>
        <div className="mt-12 lg:mt-16">
          <ProjectShowcase />
        </div>
      </Container>
    </section>
  );
}

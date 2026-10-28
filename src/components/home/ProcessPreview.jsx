import Button from "../common/Button.jsx";
import Container from "../common/Container.jsx";
import MethodTimeline from "../common/MethodTimeline.jsx";
import Reveal from "../common/Reveal.jsx";
import SectionHeading from "../common/SectionHeading.jsx";

export default function ProcessPreview() {
  return (
    <section aria-labelledby="methode-apercu" className="py-16 sm:py-24 lg:py-32">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="methode-apercu"
            index="04"
            eyebrow="Méthode"
            title="Six étapes, du besoin à l’évolution."
            description="La même démarche sert un site, une application mobile ou un logiciel de gestion."
          />
          <Reveal delay={120} className="shrink-0">
            <Button to="/methode" variant="ghost" arrow>
              Voir la méthode
            </Button>
          </Reveal>
        </div>
        <div className="mt-14 lg:mt-20">
          <MethodTimeline />
        </div>
      </Container>
    </section>
  );
}

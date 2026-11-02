import Button from "../common/Button.jsx";
import Container from "../common/Container.jsx";
import MethodTimeline from "../common/MethodTimeline.jsx";
import Reveal from "../common/Reveal.jsx";
import SectionHeading from "../common/SectionHeading.jsx";
import { methodOverview } from "../../data/method.js";

export default function ProcessPreview() {
  return (
    <section aria-labelledby="methode-apercu" className="theme-dark relative isolate overflow-hidden bg-night-900 py-16 sm:py-24 lg:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="light-field light-field--low" />
      </div>
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="methode-apercu"
            index="04"
            eyebrow="Méthode"
            title="De l’analyse à la mise en production, un cycle lisible."
            description="La même démarche sert un site, une application mobile ou un logiciel de gestion : chaque étape a ses livrables et ses validations."
          />
          <Reveal delay={120} className="shrink-0">
            <Button to="/methode" variant="ghost" arrow>
              Voir la méthode en détail
            </Button>
          </Reveal>
        </div>
        <div className="mt-14 lg:mt-20">
          <MethodTimeline steps={methodOverview} />
        </div>
      </Container>
    </section>
  );
}

import { methodSteps } from "../../data/method.js";
import Button from "../common/Button.jsx";
import Container from "../common/Container.jsx";
import SectionHeading from "../common/SectionHeading.jsx";

export default function ProcessPreview() {
  return (
    <section aria-labelledby="methode-apercu" className="bg-white">
      <Container className="py-16 sm:py-24">
        <SectionHeading
          id="methode-apercu"
          eyebrow="Méthode"
          title="Six étapes, du besoin à l’évolution."
          description="La même démarche sert un site, une application mobile ou un logiciel de gestion."
        />
        <ol className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-line sm:grid-cols-2 lg:grid-cols-3">
          {methodSteps.map((step, index) => (
            <li key={step.title} className="bg-white p-6">
              <p className="text-sm font-semibold text-brand">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 font-display text-lg font-semibold text-night">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed">{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8">
          <Button to="/methode" variant="secondary">
            Voir la méthode
          </Button>
        </div>
      </Container>
    </section>
  );
}

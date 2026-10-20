import CtaBand from "../components/common/CtaBand.jsx";
import Container from "../components/common/Container.jsx";
import PageIntro from "../components/common/PageIntro.jsx";
import Seo from "../components/common/Seo.jsx";
import { methodSteps } from "../data/method.js";

export default function MethodPage() {
  return (
    <>
      <Seo
        title="Notre méthode"
        description="TAKADEV conduit chaque projet en six étapes : analyse, conception, développement, tests, mise en service et maintenance."
      />
      <PageIntro
        eyebrow="Notre méthode"
        title="Six étapes, de l’analyse à la maintenance."
        description="La démarche reste la même, quel que soit le type de solution : comprendre le besoin, concevoir, développer, vérifier, mettre en service, puis accompagner."
      />
      <div className="py-12 sm:py-16">
        <Container>
          <ol className="grid gap-4">
            {methodSteps.map((step, index) => (
              <li key={step.title} className="rounded-2xl bg-white p-6 sm:p-7">
                <p className="text-sm font-semibold text-brand">0{index + 1}</p>
                <h2 className="mt-2 font-display text-2xl font-semibold text-night">{step.title}</h2>
                <p className="mt-2 max-w-2xl leading-relaxed">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </div>
      <CtaBand />
    </>
  );
}

import Container from "../components/common/Container.jsx";
import CtaBand from "../components/common/CtaBand.jsx";
import PageIntro from "../components/common/PageIntro.jsx";
import Reveal from "../components/common/Reveal.jsx";
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
      <section aria-label="Étapes de la méthode" className="py-16 sm:py-24 lg:py-28">
        <Container>
          <ol className="border-t border-line">
            {methodSteps.map((step, index) => (
              <Reveal
                as="li"
                key={step.title}
                delay={60}
                className="group grid gap-4 border-b border-line py-10 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-8 lg:grid-cols-[12rem_minmax(0,1fr)_minmax(0,1fr)] lg:items-baseline lg:py-14"
              >
                <span
                  aria-hidden="true"
                  className="font-display text-6xl leading-none font-bold tracking-tight text-transparent [-webkit-text-stroke:1px_rgb(148_163_184/0.4)] transition-[-webkit-text-stroke-color] duration-500 group-hover:[-webkit-text-stroke-color:#38bdf8] lg:text-7xl"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-ink-50 sm:text-3xl">
                  <span className="sr-only">Étape {index + 1} : </span>
                  {step.title}
                </h2>
                <p className="max-w-xl text-lg leading-relaxed sm:col-start-2 lg:col-start-3">{step.text}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}

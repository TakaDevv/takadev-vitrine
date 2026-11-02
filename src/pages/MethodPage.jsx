import { useEffect, useRef } from "react";
import { Code2, FlaskConical, PenTool, Rocket, Search, Wrench } from "lucide-react";
import Container from "../components/common/Container.jsx";
import CtaBand from "../components/common/CtaBand.jsx";
import PageIntro from "../components/common/PageIntro.jsx";
import Reveal from "../components/common/Reveal.jsx";
import Seo from "../components/common/Seo.jsx";
import { CloudDemo } from "../components/services/ServiceDemos.jsx";
import DemoStage from "../components/services/demos/DemoStage.jsx";
import { AnalysisDemo, ArchitectureDemo, CodingDemo, TestingDemo } from "../components/services/demos/method.jsx";
import { MaintenanceDemo } from "../components/services/demos/run.jsx";
import { methodSteps } from "../data/method.js";

// Visual for each step, in the order of methodSteps.
const stepVisuals = [
  { icon: Search, Demo: AnalysisDemo, label: "Démo : atelier de cadrage avec post-it et besoins retenus" },
  { icon: PenTool, Demo: ArchitectureDemo, label: "Démo : schéma d’architecture reliant interface, API et base de données" },
  { icon: Code2, Demo: CodingDemo, label: "Démo : code qui s’écrit et historique des modifications" },
  { icon: FlaskConical, Demo: TestingDemo, label: "Démo : campagne de tests validés un par un" },
  { icon: Rocket, Demo: CloudDemo, label: "Démo : pipeline de mise en ligne et serveurs actifs" },
  { icon: Wrench, Demo: MaintenanceDemo, label: "Démo : journal des versions avec correctifs et évolutions" },
];

function pad(value) {
  return String(value).padStart(2, "0");
}

// Fills the timeline as the visitor scrolls and lights each step once it is reached.
function useTimelineProgress(ref) {
  useEffect(() => {
    const list = ref.current;
    if (!list) {
      return undefined;
    }
    const steps = [...list.querySelectorAll("[data-step]")];
    let frame = 0;

    function update() {
      frame = 0;
      const mark = window.innerHeight * 0.6;
      const rect = list.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (mark - rect.top) / rect.height));
      list.style.setProperty("--fill", progress.toFixed(3));
      for (const step of steps) {
        step.classList.toggle("is-reached", step.getBoundingClientRect().top < mark);
      }
    }

    function schedule() {
      if (!frame) {
        frame = requestAnimationFrame(update);
      }
    }

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [ref]);
}

export default function MethodPage() {
  const listRef = useRef(null);
  useTimelineProgress(listRef);

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
      >
        <ol className="flex flex-wrap gap-2">
          {methodSteps.map((step, index) => {
            const Icon = stepVisuals[index].icon;
            return (
              <li key={step.title}>
                <a
                  href={`#etape-${index + 1}`}
                  className="method-chip group inline-flex min-h-11 items-center gap-2 rounded-full border border-line-strong bg-night-800/70 py-1.5 pr-4 pl-1.5 text-sm font-semibold text-ink-50 transition-colors hover:border-blue-400"
                  style={{ "--i": index }}
                >
                  <span className="grid size-8 place-items-center rounded-full bg-blue-600 text-white transition-transform duration-300 ease-premium group-hover:rotate-[-8deg]">
                    <Icon aria-hidden="true" size={15} />
                  </span>
                  <span className="font-mono text-xs text-ink-400">{pad(index + 1)}</span>
                  {step.title}
                </a>
              </li>
            );
          })}
        </ol>
      </PageIntro>

      <section aria-label="Étapes de la méthode" className="py-16 sm:py-24 lg:py-28">
        <Container>
          <ol ref={listRef} className="method-timeline relative grid gap-12 lg:gap-20">
            <span aria-hidden="true" className="method-line">
              <span className="method-line-fill" />
            </span>
            {methodSteps.map((step, index) => {
              const { icon: Icon, Demo, label } = stepVisuals[index];
              const flip = index % 2 === 1;
              return (
                <li
                  key={step.title}
                  id={`etape-${index + 1}`}
                  data-step
                  className="method-step relative grid items-center gap-6 pl-14 lg:grid-cols-[minmax(0,1fr)_5rem_minmax(0,1fr)] lg:gap-0 lg:pl-0"
                >
                  <span aria-hidden="true" className="method-node absolute top-0 left-0 lg:static lg:col-start-2 lg:row-start-1 lg:justify-self-center">
                    <Icon size={20} />
                  </span>

                  <Reveal className={`lg:row-start-1 ${flip ? "lg:col-start-3" : "lg:col-start-1"}`}>
                    <div className="method-demo overflow-clip rounded-[18px] border border-line bg-night-800 p-2 shadow-lift">
                      <div className="overflow-clip rounded-[12px]">
                        <DemoStage label={label}>
                          <Demo />
                        </DemoStage>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal
                    delay={120}
                    className={`lg:row-start-1 ${flip ? "lg:col-start-1 lg:pr-4 lg:text-right" : "lg:col-start-3 lg:pl-4"}`}
                  >
                    <p className="font-mono text-xs tracking-[0.12em] text-blue-400 uppercase">Étape {pad(index + 1)}</p>
                    <h2 className="mt-3 font-display text-[clamp(1.6rem,1.3rem+1.1vw,2.3rem)] leading-tight font-bold tracking-[-0.02em] text-ink-50">
                      {step.title}
                    </h2>
                    <p className={`mt-3 max-w-md text-lg leading-relaxed ${flip ? "lg:ml-auto" : ""}`}>{step.text}</p>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}

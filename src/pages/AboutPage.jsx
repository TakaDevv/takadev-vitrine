import AboutEditorial from "../components/about/AboutEditorial.jsx";
import Container from "../components/common/Container.jsx";
import CtaBand from "../components/common/CtaBand.jsx";
import PageIntro from "../components/common/PageIntro.jsx";
import Reveal from "../components/common/Reveal.jsx";
import SectionHeading from "../components/common/SectionHeading.jsx";
import Seo from "../components/common/Seo.jsx";
import ValueGrid from "../components/common/ValueGrid.jsx";
import { about } from "../data/about.js";
import { company } from "../data/company.js";

function pad(value) {
  return String(value).padStart(2, "0");
}

export default function AboutPage() {
  return (
    <>
      <Seo
        title="À propos"
        description="TAKADEV, EPE TAKADEV SPA, est filiale du CERIST. L’entreprise conçoit des solutions informatiques et forme ses clients."
      />
      <PageIntro
        eyebrow="À propos"
        title="Une filiale du CERIST dédiée aux solutions numériques."
        description="TAKADEV accompagne les entreprises, les organisations et les professionnels dans la conception de solutions informatiques adaptées à leurs besoins."
      />

      <AboutEditorial id="entreprise" eyebrow="L’entreprise" title="Des solutions ajustées à chaque activité." />

      <section aria-labelledby="mission" className="py-16 sm:py-24 lg:py-32">
        <Container>
          <SectionHeading
            id="mission"
            eyebrow="Mission"
            title="Accompagner la transformation numérique."
            description={about.mission}
          />
          <ol className="mt-12 grid border-t border-line sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {about.missionPoints.map((point, index) => (
              <Reveal
                as="li"
                key={point}
                delay={(index % 3) * 70}
                className="flex gap-5 border-b border-line py-6 sm:pr-8"
              >
                <span className="font-mono text-xs tracking-[0.08em] text-cyan-400">{pad(index + 1)}</span>
                <span className="font-display text-lg leading-snug font-medium text-ink-50">{point}</span>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section aria-labelledby="vision" className="theme-dark bg-night-900 py-16 sm:py-24 lg:py-32">
        <Container className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="section-label">
                <span aria-hidden="true" className="section-tick" />
                Vision
              </p>
              <h2 id="vision" className="sr-only">
                Vision
              </h2>
              <p className="mt-6 font-display text-[clamp(1.6rem,1.2rem+1.4vw,2.35rem)] leading-[1.25] font-semibold tracking-[-0.02em] text-ink-50">
                {about.vision}
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink-50">Objectifs</h2>
            </Reveal>
            <ul className="mt-6 border-t border-line">
              {about.objectives.map((objective, index) => (
                <Reveal as="li" key={objective} delay={index * 60} className="flex gap-5 border-b border-line py-4">
                  <span className="font-mono text-xs leading-7 text-ink-400">{pad(index + 1)}</span>
                  <span className="leading-7 text-ink-50">{objective}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section aria-labelledby="approche" className="py-16 sm:py-24 lg:py-32">
        <Container>
          <SectionHeading id="approche" eyebrow="Approche" title="Transformation numérique" />
          <Reveal delay={80}>
            <p className="mt-8 max-w-4xl font-display text-[clamp(1.35rem,1.05rem+1vw,1.85rem)] leading-[1.45] font-medium tracking-[-0.015em] text-ink-300">
              L’approche de TAKADEV part de l’activité réelle : numériser les processus, automatiser ce qui
              peut l’être, rendre l’information plus accessible, puis former les personnes qui utilisent les
              outils.
            </p>
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="valeurs-entreprise" className="border-t border-line bg-night-800 py-16 sm:py-24 lg:py-32">
        <Container>
          <SectionHeading id="valeurs-entreprise" eyebrow="Valeurs" title="Ce qui guide chaque projet." />
          <div className="mt-12">
            <ValueGrid />
          </div>
        </Container>
      </section>

      <section aria-labelledby="cerist" className="py-16 sm:py-24 lg:py-32">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="card-service card-service--featured h-full p-7 sm:p-10">
              <p className="font-mono text-xs tracking-[0.14em] text-cyan-400 uppercase">CERIST</p>
              <h2 id="cerist" className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink-50 sm:text-3xl">
                Lien avec le CERIST
              </h2>
              <p className="mt-4 text-lg leading-relaxed">
                {company.legalName} est {company.cerist.charAt(0).toLowerCase()}
                {company.cerist.slice(1)}.
              </p>
            </div>
          </Reveal>
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink-50">Publics accompagnés</h2>
            </Reveal>
            <Reveal as="ul" delay={80} className="mt-6 flex flex-wrap gap-2.5">
              {about.audiences.map((audience) => (
                <li
                  key={audience}
                  className="rounded-lg border border-line-strong bg-night-700/50 px-4 py-2.5 text-[0.95rem] text-ink-50"
                >
                  {audience}
                </li>
              ))}
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}

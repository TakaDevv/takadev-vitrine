import { about } from "../data/about.js";
import { company } from "../data/company.js";
import CtaBand from "../components/common/CtaBand.jsx";
import Container from "../components/common/Container.jsx";
import PageIntro from "../components/common/PageIntro.jsx";
import Seo from "../components/common/Seo.jsx";
import ValueGrid from "../components/common/ValueGrid.jsx";

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

      <div className="py-12 sm:py-16">
        <Container className="grid gap-12">
          <section aria-labelledby="entreprise" className="max-w-3xl">
            <h2 id="entreprise" className="font-display text-3xl font-semibold text-night">
              L’entreprise
            </h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section aria-labelledby="mission" className="rounded-2xl bg-white p-6 sm:p-8">
            <h2 id="mission" className="font-display text-3xl font-semibold text-night">
              Mission
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed">{about.mission}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {about.missionPoints.map((point) => (
                <li key={point} className="rounded-xl bg-surface px-4 py-3">
                  {point}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="vision" className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 id="vision" className="font-display text-3xl font-semibold text-night">
                Vision
              </h2>
              <p className="mt-4 text-lg leading-relaxed">{about.vision}</p>
            </div>
            <div>
              <h2 className="font-display text-3xl font-semibold text-night">Objectifs</h2>
              <ul className="mt-4 space-y-3">
                {about.objectives.map((objective) => (
                  <li key={objective} className="border-l-2 border-brand pl-4">
                    {objective}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section aria-labelledby="approche">
            <h2 id="approche" className="font-display text-3xl font-semibold text-night">
              Transformation numérique
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed">
              L’approche de TAKADEV part de l’activité réelle : numériser les processus, automatiser
              ce qui peut l’être, rendre l’information plus accessible, puis former les personnes
              qui utilisent les outils.
            </p>
          </section>

          <section aria-labelledby="valeurs-entreprise">
            <h2 id="valeurs-entreprise" className="font-display text-3xl font-semibold text-night">
              Valeurs
            </h2>
            <div className="mt-6">
              <ValueGrid />
            </div>
          </section>

          <section aria-labelledby="cerist" className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl bg-night p-6 text-on-night sm:p-8">
              <h2 id="cerist" className="font-display text-2xl font-semibold text-white">
                Lien avec le CERIST
              </h2>
              <p className="mt-4 leading-relaxed text-on-night-muted">
                {company.legalName} est {company.cerist.charAt(0).toLowerCase()}
                {company.cerist.slice(1)}.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold text-night">Publics accompagnés</h2>
              <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {about.audiences.map((audience) => (
                  <li key={audience} className="rounded-xl bg-white px-4 py-3">
                    {audience}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </Container>
      </div>
      <CtaBand />
    </>
  );
}

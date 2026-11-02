import logo from "../../assets/logo-takadev.png";
import { about } from "../../data/about.js";
import { company } from "../../data/company.js";
import Button from "../common/Button.jsx";
import Container from "../common/Container.jsx";
import Reveal from "../common/Reveal.jsx";
import SectionHeading from "../common/SectionHeading.jsx";

const facts = [
  { label: "Raison sociale", value: company.legalName },
  { label: "Rattachement", value: "Filiale du CERIST" },
  { label: "Siège", value: "Ben Aknoun, Alger" },
];

// White editorial band: the only place besides the footer where the raster logo appears.
export default function AboutEditorial({ id, index, eyebrow = "À propos", title, showLink = false }) {
  const [lead, ...rest] = about.paragraphs;

  return (
    <section aria-labelledby={id} className="paper relative border-y border-line bg-night-800 py-16 text-paper-body sm:py-24 lg:py-32">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHeading id={id} index={index} eyebrow={eyebrow} title={title} tone="paper" />
            <Reveal delay={140} className="mt-10">
              <img
                src={logo}
                alt="Logo EPE TAKADEV SPA, filiale du CERIST"
                width="800"
                height="140"
                loading="lazy"
                className="h-10 w-auto sm:h-12"
              />
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <p className="font-display text-[clamp(1.35rem,1.05rem+1vw,1.85rem)] leading-[1.4] font-medium tracking-[-0.015em] text-paper-ink">
              {lead}
            </p>
          </Reveal>
          <Reveal delay={80} className="mt-8 grid gap-6 text-lg leading-relaxed sm:grid-cols-2">
            {rest.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>
          <Reveal as="dl" delay={140} className="mt-12 grid border-t border-paper-line sm:grid-cols-3">
            {facts.map((fact) => (
              <div key={fact.label} className="border-b border-paper-line py-5 sm:border-b-0 sm:pr-6">
                <dt className="font-mono text-xs tracking-[0.12em] text-paper-muted uppercase">{fact.label}</dt>
                <dd className="mt-2 font-display text-lg font-semibold text-paper-ink">{fact.value}</dd>
              </div>
            ))}
          </Reveal>
          {showLink ? (
            <Reveal delay={180} className="mt-10">
              <Button to="/a-propos" variant="paper" arrow>
                Découvrir TAKADEV
              </Button>
            </Reveal>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

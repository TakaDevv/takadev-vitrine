import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { company } from "../../data/company.js";
import Container from "../common/Container.jsx";
import Reveal from "../common/Reveal.jsx";

// Closing call to action on navy, pointing to the existing contact page and form.
export default function ProjectCTA() {
  return (
    <section aria-labelledby="cta-projet" className="pb-16 sm:pb-24">
      <Container>
        <div className="theme-dark relative isolate overflow-clip rounded-[28px] bg-night-900 px-6 py-14 text-center sm:px-12 sm:py-20">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
            <div className="bg-grid absolute inset-0" />
            <div className="light-field" />
          </div>
          <Reveal
            as="h2"
            id="cta-projet"
            className="mx-auto max-w-2xl font-display text-[clamp(2rem,1.3rem+2.6vw,3.4rem)] leading-[1.06] font-bold tracking-[-0.03em] text-ink-50"
          >
            Prêt à concrétiser votre projet ?
          </Reveal>
          <Reveal delay={80}>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed">
              Parlons de vos besoins et découvrons ensemble la solution la plus adaptée à vos objectifs.
            </p>
          </Reveal>
          <Reveal delay={160} className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/contact" className="btn btn-primary">
              <span>Discutons de votre projet</span>
              <ArrowRight aria-hidden="true" size={16} className="btn-arrow" />
            </Link>
            <a href={company.phoneHref} className="link-u text-sm font-semibold text-ink-50">
              ou appelez le {company.phoneDisplay}
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

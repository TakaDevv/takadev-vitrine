import { company } from "../../data/company.js";
import Button from "../common/Button.jsx";
import Container from "../common/Container.jsx";
import HeroVisual from "./HeroVisual.jsx";

export default function Hero() {
  return (
    <section aria-labelledby="hero-title">
      <Container className="grid items-center gap-12 py-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:py-24">
        <div>
          <p className="text-sm font-semibold tracking-[0.14em] text-brand uppercase">
            {company.legalName} · Filiale du CERIST
          </p>
          <h1
            id="hero-title"
            className="mt-4 max-w-xl font-display text-4xl font-semibold tracking-tight text-balance text-night sm:text-5xl"
          >
            {company.slogan}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed">{company.summary}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/services">Découvrir nos services</Button>
            <Button to="/contact" variant="secondary">
              Demander un devis
            </Button>
          </div>
        </div>
        <HeroVisual />
      </Container>
    </section>
  );
}

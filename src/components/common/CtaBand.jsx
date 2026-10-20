import { company } from "../../data/company.js";
import Button from "./Button.jsx";
import Container from "./Container.jsx";

export default function CtaBand() {
  return (
    <section aria-labelledby="contact-appel" className="py-16 sm:py-20">
      <Container>
        <div className="rounded-3xl bg-night px-6 py-12 sm:px-12 sm:py-14">
          <h2
            id="contact-appel"
            className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl"
          >
            Un besoin précis, une équipe à former ?
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-on-night-muted">
            Appelez le{" "}
            <a href={company.phoneHref} className="font-semibold text-white underline underline-offset-2">
              {company.phoneDisplay}
            </a>{" "}
            ou écrivez à{" "}
            <a
              href={`mailto:${company.email}`}
              className="font-semibold break-all text-white underline underline-offset-2"
            >
              {company.email}
            </a>
            .
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/contact">Demander un devis</Button>
            <Button to="/services" variant="inverse">
              Découvrir nos services
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

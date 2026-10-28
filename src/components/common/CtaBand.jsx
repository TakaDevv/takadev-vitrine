import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { company } from "../../data/company.js";
import Button from "./Button.jsx";
import Container from "./Container.jsx";
import Reveal from "./Reveal.jsx";

const channels = [
  { label: "Téléphone", value: company.phoneDisplay, href: company.phoneHref, icon: Phone },
  { label: "E-mail", value: company.email, href: `mailto:${company.email}`, icon: Mail },
  { label: "Adresse", value: company.address, icon: MapPin },
];

export default function CtaBand({ index }) {
  return (
    <section aria-labelledby="contact-appel" className="relative isolate overflow-hidden border-t border-line py-20 sm:py-28 lg:py-36">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_70%_at_30%_100%,#000_30%,transparent_100%)]" />
        <div className="light-field light-field--low" />
      </div>
      <Container className="grid gap-14 lg:grid-cols-12 lg:items-end lg:gap-10">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="section-label">
              {index ? <span className="section-index">{index}</span> : null}
              <span aria-hidden="true" className="section-tick" />
              Contact
            </p>
          </Reveal>
          <Reveal
            as="h2"
            id="contact-appel"
            delay={60}
            className="mt-6 font-display text-[clamp(2.5rem,1.3rem+4.4vw,5rem)] leading-[1.02] font-bold tracking-[-0.035em] text-ink-50"
          >
            Discutons de votre <span className="text-accent">projet</span>.
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed sm:text-xl">
              Un besoin précis, une équipe à former ? Appelez, écrivez, ou préparez votre demande en ligne.
            </p>
          </Reveal>
          <Reveal delay={180} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button to="/contact" arrow>
              Préparer ma demande
            </Button>
            <Button to="/services" variant="ghost">
              Explorer nos services
            </Button>
          </Reveal>
        </div>

        <Reveal as="ul" delay={140} className="divide-y divide-line border-y border-line lg:col-span-5">
          {channels.map((channel) => {
            const Icon = channel.icon;
            const body = (
              <>
                <Icon aria-hidden="true" size={18} className="mt-1 shrink-0 text-blue-400" />
                <span className="min-w-0 flex-1">
                  <span className="block font-mono text-xs tracking-[0.12em] text-ink-400 uppercase">{channel.label}</span>
                  <span className="mt-1.5 block font-display text-lg font-semibold break-words text-ink-50 sm:text-xl">
                    {channel.value}
                  </span>
                </span>
              </>
            );
            return (
              <li key={channel.label}>
                {channel.href ? (
                  <a href={channel.href} className="group flex items-start gap-4 py-5 transition-colors">
                    {body}
                    <ArrowUpRight
                      aria-hidden="true"
                      size={20}
                      className="mt-1 shrink-0 text-ink-400 transition-transform duration-300 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan-400"
                    />
                  </a>
                ) : (
                  <div className="flex items-start gap-4 py-5">
                    {body}
                  </div>
                )}
              </li>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}

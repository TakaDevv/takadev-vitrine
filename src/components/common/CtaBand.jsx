import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { company } from "../../data/company.js";
import ContactForm from "../contact/ContactForm.jsx";
import Button from "./Button.jsx";
import Container from "./Container.jsx";
import Reveal from "./Reveal.jsx";

const channels = [
  { label: "Téléphone", value: company.phoneDisplay, href: company.phoneHref, icon: Phone },
  { label: "E-mail", value: company.email, href: `mailto:${company.email}`, icon: Mail },
  {
    label: "Adresse",
    value: company.address,
    href: company.mapsHref,
    icon: MapPin,
    external: "Voir l’adresse sur Google Maps (nouvel onglet)",
  },
];

// Navy contact panel. With `withForm`, the real contact form sits beside the channels on a white card.
export default function CtaBand({ index, withForm = false }) {
  return (
    <section aria-labelledby="contact-appel" className="py-16 sm:py-24 lg:py-28">
      <Container>
        <div className="theme-dark relative isolate overflow-hidden rounded-[28px] bg-night-900 px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
            <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_70%_at_20%_100%,#000_30%,transparent_100%)]" />
            <div className="light-field" />
          </div>

          <div className={`grid gap-12 ${withForm ? "lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16" : "lg:grid-cols-12 lg:items-end lg:gap-10"}`}>
            <div className={withForm ? "" : "lg:col-span-7"}>
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
                className="mt-6 font-display text-[clamp(2.3rem,1.3rem+3.4vw,4rem)] leading-[1.03] font-bold tracking-[-0.035em] text-ink-50"
              >
                Parlons de votre <span className="text-accent">projet</span>.
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed">
                  Décrivez votre besoin en quelques lignes, appelez ou écrivez : TAKADEV revient vers vous pour préciser
                  le périmètre et les prochaines étapes.
                </p>
              </Reveal>
              {withForm ? null : (
                <Reveal delay={180} className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <Button to="/contact" arrow>
                    Préparer ma demande
                  </Button>
                  <Button to="/services" variant="ghost">
                    Explorer nos services
                  </Button>
                </Reveal>
              )}

              <Reveal as="ul" delay={140} className={`divide-y divide-line border-y border-line ${withForm ? "mt-10" : "mt-12 lg:hidden"}`}>
                <ChannelItems />
              </Reveal>
            </div>

            {withForm ? (
              <Reveal delay={120} className="theme-light rounded-[20px] shadow-[0_40px_80px_-40px_rgb(0_0_0/0.6)]">
                <ContactForm />
              </Reveal>
            ) : (
              <Reveal as="ul" delay={140} className="hidden divide-y divide-line border-y border-line lg:col-span-5 lg:block">
                <ChannelItems />
              </Reveal>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

function ChannelItems() {
  return channels.map((channel) => {
    const Icon = channel.icon;
    const body = (
      <>
        <Icon aria-hidden="true" size={18} className="mt-1 shrink-0 text-blue-400" />
        <span className="min-w-0 flex-1">
          <span className="block font-mono text-xs tracking-[0.12em] text-ink-400 uppercase">{channel.label}</span>
          <span className="mt-1.5 block font-display text-lg font-semibold break-words text-ink-50">{channel.value}</span>
        </span>
      </>
    );
    return (
      <li key={channel.label}>
        {channel.href ? (
          <a
            href={channel.href}
            className="group flex items-start gap-4 py-5 transition-colors"
            {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {body}
            {channel.external ? <span className="sr-only"> — {channel.external}</span> : null}
            <ArrowUpRight
              aria-hidden="true"
              size={20}
              className="mt-1 shrink-0 text-ink-400 transition-transform duration-300 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-400"
            />
          </a>
        ) : (
          <div className="flex items-start gap-4 py-5">{body}</div>
        )}
      </li>
    );
  });
}

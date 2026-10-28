import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import ContactForm from "../components/contact/ContactForm.jsx";
import Container from "../components/common/Container.jsx";
import PageIntro from "../components/common/PageIntro.jsx";
import Reveal from "../components/common/Reveal.jsx";
import Seo from "../components/common/Seo.jsx";
import { company } from "../data/company.js";
import { getService } from "../data/services.js";

const channels = [
  {
    title: "Téléphone",
    icon: Phone,
    value: company.phoneDisplay,
    href: company.phoneHref,
  },
  {
    title: "E-mail",
    icon: Mail,
    value: company.email,
    href: `mailto:${company.email}`,
  },
  {
    title: "Adresse",
    icon: MapPin,
    value: company.address,
  },
];

export default function ContactPage() {
  const [params] = useSearchParams();
  const requested = params.get("service") ?? "";
  const service = getService(requested);

  return (
    <>
      <Seo
        title="Contact"
        description="Contactez TAKADEV au 0661 16 26 26, par e-mail à takadev@cerist.dz, ou à Ben Aknoun, Alger."
      />
      <PageIntro
        eyebrow="Contact"
        title="Parlons de votre projet."
        description="Appelez, écrivez, ou préparez votre demande avec le formulaire. TAKADEV ne reçoit le message que si un service d’envoi est configuré."
      />
      <div className="relative py-16 sm:py-20 lg:py-24">
        <Container className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <aside className="lg:sticky lg:top-28 lg:col-span-5">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink-50">Nous joindre directement</h2>
              <p className="mt-3 leading-relaxed">Le téléphone et l’e-mail restent les moyens les plus directs.</p>
            </Reveal>
            {service ? (
              <Reveal delay={60}>
                <p className="mt-6 rounded-[14px] border border-blue-500/40 bg-blue-500/10 px-5 py-4 text-ink-50">
                  Demande préparée pour <span className="font-semibold">{service.title}</span>.
                </p>
              </Reveal>
            ) : null}
            <Reveal as="ul" delay={100} className="mt-8 divide-y divide-line border-y border-line">
              {channels.map((channel) => {
                const Icon = channel.icon;
                const content = (
                  <>
                    <Icon aria-hidden="true" size={18} className="mt-1 shrink-0 text-blue-400" />
                    <span className="min-w-0 flex-1">
                      <span className="block font-mono text-xs tracking-[0.12em] text-ink-400 uppercase">
                        {channel.title}
                      </span>
                      <span className="mt-1.5 block font-display text-lg font-semibold break-words text-ink-50">
                        {channel.value}
                      </span>
                    </span>
                  </>
                );

                return (
                  <li key={channel.title}>
                    {channel.href ? (
                      <a href={channel.href} className="group flex items-start gap-4 py-5">
                        {content}
                        <ArrowUpRight
                          aria-hidden="true"
                          size={18}
                          className="mt-1 shrink-0 text-ink-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan-400"
                        />
                      </a>
                    ) : (
                      <div className="flex items-start gap-4 py-5">{content}</div>
                    )}
                  </li>
                );
              })}
            </Reveal>
          </aside>
          <Reveal delay={80} className="lg:col-span-7">
            <ContactForm initialService={service ? requested : ""} />
          </Reveal>
        </Container>
      </div>
    </>
  );
}

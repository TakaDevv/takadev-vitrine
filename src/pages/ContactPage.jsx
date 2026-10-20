import { Mail, MapPin, Phone } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import ContactForm from "../components/contact/ContactForm.jsx";
import Container from "../components/common/Container.jsx";
import PageIntro from "../components/common/PageIntro.jsx";
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
      <div className="py-12 sm:py-16">
        <Container className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <ContactForm initialService={service ? requested : ""} />
          <aside className="grid gap-4">
            {service ? (
              <p className="rounded-2xl bg-white px-5 py-4">
                Demande préparée pour <span className="font-semibold text-night">{service.title}</span>.
              </p>
            ) : null}
            <ul className="grid gap-4">
              {channels.map((channel) => {
                const Icon = channel.icon;
                const content = (
                  <>
                    <Icon aria-hidden="true" size={18} className="text-brand" />
                    <h2 className="mt-4 font-display text-lg font-semibold text-night">{channel.title}</h2>
                    <p className="mt-2 leading-relaxed">{channel.value}</p>
                  </>
                );

                return (
                  <li key={channel.title} className="rounded-2xl bg-white p-6">
                    {channel.href ? (
                      <a href={channel.href} className="block rounded-xl">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>
          </aside>
        </Container>
      </div>
    </>
  );
}

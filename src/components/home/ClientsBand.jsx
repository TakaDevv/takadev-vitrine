import { clients } from "../../data/clients.js";
import Container from "../common/Container.jsx";
import Reveal from "../common/Reveal.jsx";

function ClientCard({ client }) {
  return (
    <figure className="client-card flex h-full w-60 shrink-0 flex-col items-center gap-3 overflow-clip rounded-[18px] border border-line bg-white px-5 py-5">
      {/* Fixed, clipped box: a zoomed logo (white ground) never covers the caption. */}
      <span className="grid h-24 w-full place-items-center overflow-clip">
        <img
          src={client.logo}
          alt={`Logo — ${client.name}`}
          loading="lazy"
          decoding="async"
          style={{ "--zoom": client.zoom ?? 1 }}
          className="client-logo h-24 w-auto max-w-full object-contain"
        />
      </span>
      <figcaption className="text-center text-sm leading-snug font-semibold text-ink-50">{client.name}</figcaption>
    </figure>
  );
}

// Scrolling band of client logos. The first track is the readable list; the copies only
// keep the loop seamless and are hidden from assistive technology.
export default function ClientsBand() {
  // Repeated so one track is wider than a large screen and the loop never shows a gap.
  const track = [...clients, ...clients];

  return (
    <section aria-labelledby="clients-titre" className="clients-band overflow-clip border-b border-line bg-night-900 py-14 sm:py-16">
      <Container>
        <Reveal className="flex flex-col items-center gap-2 text-center">
          <p className="section-label">
            <span aria-hidden="true" className="section-tick" />
            Références
          </p>
          <h2 id="clients-titre" className="font-display text-[clamp(1.5rem,1.2rem+1vw,2.1rem)] font-bold tracking-tight text-ink-50">
            Ils nous ont fait confiance
          </h2>
        </Reveal>
      </Container>

      <div className="marquee clients-marquee mt-10">
        <ul className="marquee-track clients-track flex shrink-0 gap-6 pr-6">
          {track.map((client, index) => (
            <li key={`${client.name}-${index}`} aria-hidden={index >= clients.length ? "true" : undefined} className={index >= clients.length ? "clients-copy" : undefined}>
              <ClientCard client={client} />
            </li>
          ))}
        </ul>
        <ul aria-hidden="true" className="marquee-track clients-track clients-copy flex shrink-0 gap-6 pr-6">
          {track.map((client, index) => (
            <li key={`${client.name}-copy-${index}`}>
              <ClientCard client={client} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

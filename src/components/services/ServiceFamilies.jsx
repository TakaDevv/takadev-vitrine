import { useLayoutEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { serviceFamilies, serviceNumber } from "../../data/services.js";
import ServiceIcon from "./ServiceIcon.jsx";

// Four families as tabs; the panel lists every service of the selected family with all its offerings.
export default function ServiceFamilies() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef([]);
  const family = serviceFamilies[active];
  const [indicator, setIndicator] = useState(null);

  // One highlight that glides to the selected tab instead of jumping between tabs.
  useLayoutEffect(() => {
    const tab = tabRefs.current[active];
    if (!tab) {
      return undefined;
    }
    function measure() {
      setIndicator({ y: tab.offsetTop, h: tab.offsetHeight });
    }
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(tab.parentElement);
    return () => observer.disconnect();
  }, [active]);

  function onKeyDown(event) {
    const last = serviceFamilies.length - 1;
    const moves = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    let next;
    if (event.key in moves) {
      next = (active + moves[event.key] + serviceFamilies.length) % serviceFamilies.length;
    } else if (event.key === "Home") {
      next = 0;
    } else if (event.key === "End") {
      next = last;
    } else {
      return;
    }
    event.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[22rem_minmax(0,1fr)] lg:gap-12">
      <div role="tablist" aria-label="Familles d’expertise" aria-orientation="vertical" className="relative grid gap-1.5" onKeyDown={onKeyDown}>
        {indicator ? (
          <span
            aria-hidden="true"
            className="family-indicator"
            style={{ transform: `translateY(${indicator.y}px)`, height: `${indicator.h}px` }}
          />
        ) : null}
        {serviceFamilies.map((item, index) => {
          const selected = index === active;
          return (
            <button
              key={item.id}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              type="button"
              role="tab"
              id={`famille-${item.id}`}
              aria-selected={selected}
              aria-controls="famille-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(index)}
              className={`family-tab group relative z-10 flex w-full items-start gap-4 rounded-[14px] border p-4 text-left sm:p-5 ${
                selected ? "is-active border-transparent" : "border-transparent hover:border-line hover:bg-night-800/60"
              }`}
            >
              <span className="icon-tile">
                <ServiceIcon name={item.icon} size={20} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex items-baseline justify-between gap-3">
                  <span className="font-display text-lg font-bold text-ink-50">{item.title}</span>
                  <span className="shrink-0 font-mono text-xs text-ink-400">
                    {item.services.length} {item.services.length > 1 ? "services" : "service"}
                  </span>
                </span>
                <span className="mt-1 block text-[0.95rem] leading-snug text-ink-400">{item.summary}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div
        id="famille-panel"
        role="tabpanel"
        aria-labelledby={`famille-${family.id}`}
        className="rounded-[20px] border border-line bg-night-800 px-5 py-2 shadow-lift sm:px-9"
      >
        <ul key={family.id} className="family-panel divide-y divide-line">
          {family.services.map((service, index) => (
            <li
              key={service.slug}
              className="grid gap-4 py-7 sm:grid-cols-[3.5rem_minmax(0,1fr)_auto] sm:gap-5"
              style={{ "--i": index }}
            >
              <span className="icon-tile size-12">
                <ServiceIcon name={service.icon} size={22} />
              </span>
              <div>
                <h3 className="flex items-baseline gap-3 font-display text-xl font-bold tracking-[-0.01em] text-ink-50">
                  {service.title}
                  <span aria-hidden="true" className="font-mono text-xs font-normal text-ink-400">{serviceNumber(service)} / 10</span>
                </h3>
                <p className="mt-2 max-w-[62ch] leading-relaxed">{service.summary}</p>
                <ul aria-label={`Prestations ${service.title}`} className="mt-4 flex flex-wrap gap-1.5">
                  {service.offerings.map((offering) => (
                    <li key={offering} className="rounded-full border border-line bg-night-600 px-3 py-1 text-sm text-ink-300">
                      {offering}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to={`/services/${service.slug}`}
                className="group/link inline-flex min-h-11 items-center gap-2 self-start font-display text-sm font-semibold whitespace-nowrap text-blue-400"
              >
                En savoir plus
                <span className="sr-only"> sur {service.title}</span>
                <ArrowRight aria-hidden="true" size={16} className="transition-transform duration-300 ease-premium group-hover/link:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

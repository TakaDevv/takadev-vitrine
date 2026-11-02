import { useEffect, useState } from "react";
import { serviceFamilies } from "../../data/services.js";
import ServiceIcon from "./ServiceIcon.jsx";

// Sticky shortcuts to the four families; the family in view is marked as current.
export default function FamilyNav() {
  const [current, setCurrent] = useState(serviceFamilies[0].id);

  useEffect(() => {
    const sections = serviceFamilies
      .map((family) => document.getElementById(`famille-${family.id}`))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length) {
          setCurrent(visible[0].target.id.replace("famille-", ""));
        }
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="Familles de services" className="family-nav sticky top-[4.5rem] z-30 -mx-4 mt-8 px-4 py-3 sm:mx-0 sm:px-0">
      <ul className="flex gap-2 overflow-x-auto rounded-2xl border border-line bg-night-800/90 p-1.5 shadow-lift backdrop-blur-md [scrollbar-width:none]">
        {serviceFamilies.map((family) => {
          const active = family.id === current;
          return (
            <li key={family.id} className="shrink-0">
              <a
                href={`#famille-${family.id}`}
                aria-current={active ? "true" : undefined}
                className={`flex min-h-11 items-center gap-2 rounded-xl px-4 text-sm font-semibold whitespace-nowrap transition-colors duration-300 ease-premium ${
                  active ? "bg-blue-600 text-white" : "text-ink-300 hover:bg-night-600 hover:text-ink-50"
                }`}
              >
                <ServiceIcon name={family.icon} size={16} />
                {family.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

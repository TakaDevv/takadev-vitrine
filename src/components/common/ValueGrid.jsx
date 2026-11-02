import {
  BadgeCheck,
  Briefcase,
  Handshake,
  Lightbulb,
  MessagesSquare,
  ShieldCheck,
} from "lucide-react";
import { values } from "../../data/home.js";
import Reveal from "./Reveal.jsx";

const icons = { Lightbulb, BadgeCheck, Briefcase, MessagesSquare, ShieldCheck, Handshake };

// Editorial columns separated by hairlines rather than another grid of cards.
export default function ValueGrid() {
  return (
    <ul className="grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
      {values.map((value, index) => {
        const Icon = icons[value.icon];
        return (
          <Reveal as="li" key={value.title} delay={(index % 3) * 80} className="value-item group border-t border-line-strong pt-7 pb-10">
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-blue-400">{String(index + 1).padStart(2, "0")}</span>
              <Icon
                aria-hidden="true"
                size={20}
                strokeWidth={1.6}
                className="text-ink-400 transition-[color,transform] duration-300 ease-premium group-hover:-translate-y-0.5 group-hover:text-blue-400"
              />
            </div>
            <h3 className="mt-5 font-display text-xl font-bold tracking-[-0.01em] text-ink-50">{value.title}</h3>
            <p className="mt-2 max-w-[34ch] leading-relaxed">{value.text}</p>
          </Reveal>
        );
      })}
    </ul>
  );
}

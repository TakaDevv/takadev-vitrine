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

export default function ValueGrid() {
  return (
    <ul className="grid gap-px overflow-hidden rounded-[18px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
      {values.map((value, index) => {
        const Icon = icons[value.icon];
        return (
          <Reveal
            as="li"
            key={value.title}
            delay={(index % 3) * 80}
            className="group bg-night-800 p-7 transition-colors duration-300 hover:bg-night-700 sm:p-8"
          >
            <div className="flex items-center justify-between">
              <Icon aria-hidden="true" size={22} strokeWidth={1.5} className="text-blue-400 transition-colors group-hover:text-cyan-400" />
              <span className="font-mono text-xs text-ink-400">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="mt-8 font-display text-xl font-semibold text-ink-50">{value.title}</h3>
            <p className="mt-2 leading-relaxed">{value.text}</p>
          </Reveal>
        );
      })}
    </ul>
  );
}

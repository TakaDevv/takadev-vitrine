import {
  BadgeCheck,
  Briefcase,
  Handshake,
  Lightbulb,
  MessagesSquare,
  ShieldCheck,
} from "lucide-react";
import { values } from "../../data/home.js";

const icons = { Lightbulb, BadgeCheck, Briefcase, MessagesSquare, ShieldCheck, Handshake };

export default function ValueGrid() {
  return (
    <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {values.map((value) => {
        const Icon = icons[value.icon];
        return (
          <li key={value.title} className="rounded-2xl bg-white p-6">
            <span className="flex size-11 items-center justify-center rounded-xl bg-brand-soft text-brand-dark">
              <Icon aria-hidden="true" size={20} />
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold text-night">{value.title}</h3>
            <p className="mt-2 leading-relaxed">{value.text}</p>
          </li>
        );
      })}
    </ul>
  );
}

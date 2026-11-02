import { methodSteps } from "../../data/method.js";
import Reveal from "./Reveal.jsx";

export default function MethodTimeline({ steps = methodSteps, headingAs: Heading = "h3" }) {
  return (
    <ol className={`grid gap-10 md:grid-cols-3 md:gap-x-6 md:gap-y-14 ${steps.length === 5 ? "lg:grid-cols-5" : "lg:grid-cols-6"}`}>
      {steps.map((step, index) => (
        <Reveal as="li" key={step.title} delay={index * 80} className="step relative pl-9 md:pt-10 md:pl-0">
          <span aria-hidden="true" className="step-line" />
          <span aria-hidden="true" className="step-node" />
          <p className="font-mono text-xs tracking-[0.08em] text-cyan-400">{String(index + 1).padStart(2, "0")}</p>
          <Heading className="mt-3 font-display text-lg leading-snug font-semibold text-ink-50">{step.title}</Heading>
          <p className="mt-2 text-[0.95rem] leading-relaxed">{step.text}</p>
        </Reveal>
      ))}
    </ol>
  );
}

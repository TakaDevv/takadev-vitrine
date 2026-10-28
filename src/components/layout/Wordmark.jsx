// Typographic wordmark for night grounds; the official PNG logo is reserved for light plates.
export default function Wordmark({ caption = false }) {
  return (
    <span className="inline-flex items-center gap-3">
      <span aria-hidden="true" className="relative grid size-7 place-items-center rounded-[7px] border border-line-strong bg-night-700">
        <span className="size-2.5 rounded-[2px] bg-blue-500 shadow-[0_0_14px_rgb(59_130_246/0.9)]" />
      </span>
      <span className="flex flex-col">
        <span className="font-display text-[1.05rem] leading-none font-extrabold tracking-[0.08em] text-ink-50">
          TAKADEV
        </span>
        {caption ? (
          <span className="mt-1 font-mono text-[0.625rem] leading-none tracking-[0.12em] text-ink-400 uppercase">
            Filiale du CERIST
          </span>
        ) : null}
      </span>
    </span>
  );
}

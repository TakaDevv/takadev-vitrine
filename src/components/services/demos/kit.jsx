// Building blocks shared by every demo. Sizes are in `em`: the stage derives its
// font-size from its own width, so a demo scales with whatever box it sits in.

export function Window({ title, dark = false, children, className = "" }) {
  return (
    <div
      className={`flex flex-col overflow-hidden rounded-[0.7em] border shadow-[0_1.4em_2.8em_-1.6em_rgb(11_22_48/0.45)] ${
        dark ? "border-[#1c2f5e] bg-[#0b1630]" : "border-[#d5dfef] bg-white"
      } ${className}`}
    >
      <div className={`flex items-center gap-[0.35em] border-b px-[0.8em] py-[0.55em] ${dark ? "border-[#1c2f5e]" : "border-[#e6ebf3] bg-[#f8fafd]"}`}>
        <span className="size-[0.5em] rounded-full bg-[#fca5a5]" />
        <span className="size-[0.5em] rounded-full bg-[#fde68a]" />
        <span className="size-[0.5em] rounded-full bg-[#86efac]" />
        {title ? <span className={`ml-[0.6em] truncate text-[0.7em] ${dark ? "text-[#94a3b8]" : "text-[#5b6579]"}`}>{title}</span> : null}
      </div>
      <div className="relative min-h-0 flex-1">{children}</div>
    </div>
  );
}

export function Phone({ children, className = "", dark = false }) {
  return (
    <div
      className={`relative h-full w-[11em] shrink-0 overflow-hidden rounded-[1.6em] border-[0.4em] border-[#0b1630] shadow-[0_1.4em_2.8em_-1.4em_rgb(11_22_48/0.6)] ${
        dark ? "bg-[#0e1b3a]" : "bg-[#f5f7fb]"
      } ${className}`}
    >
      <span className="absolute top-[0.4em] left-1/2 z-10 h-[0.4em] w-[3em] -translate-x-1/2 rounded-full bg-[#0b1630]" />
      {children}
    </div>
  );
}

// A placeholder text line.
export function Line({ w = "100%", tone = "#c9d6ee", h = "0.45em", className = "" }) {
  return <span className={`block rounded-full ${className}`} style={{ width: w, height: h, background: tone }} />;
}

export function Label({ children, className = "" }) {
  return <span className={`text-[0.62em] font-semibold text-[#0b1630] ${className}`}>{children}</span>;
}

export function Pill({ children, tone = "bg-[#dbeafe] text-[#1d4ed8]", className = "", style }) {
  return <span style={style} className={`inline-flex items-center gap-[0.3em] rounded-full px-[0.6em] py-[0.15em] text-[0.55em] font-semibold ${tone} ${className}`}>{children}</span>;
}

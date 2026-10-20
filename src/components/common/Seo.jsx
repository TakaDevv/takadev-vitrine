import { useLocation } from "react-router-dom";

function siteOrigin() {
  const configured = import.meta.env.VITE_SITE_URL?.trim();
  if (!configured) {
    return "";
  }
  try {
    const url = new URL(configured);
    if (url.protocol !== "https:" && url.protocol !== "http:") {
      return "";
    }
    return url.origin;
  } catch {
    return "";
  }
}

export default function Seo({ title, description, index = true }) {
  const { pathname } = useLocation();
  const fullTitle = `${title} — TAKADEV`;
  const origin = siteOrigin();
  const canonical = origin ? `${origin}${pathname}` : "";

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={index ? "index, follow" : "noindex, nofollow"} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="fr_DZ" />
      <meta property="og:site_name" content="TAKADEV" />
      {canonical ? <link rel="canonical" href={canonical} /> : null}
      {canonical ? <meta property="og:url" content={canonical} /> : null}
    </>
  );
}

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import { services } from "./src/data/services.js";

const publicPaths = [
  "/",
  "/a-propos",
  "/services",
  ...services.map((service) => `/services/${service.slug}`),
  "/realisations",
  "/methode",
  "/contact",
  "/mentions-legales",
  "/politique-de-confidentialite",
];

function siteOrigin(value) {
  const configured = value?.trim();
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

function xmlEscape(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function sitemapXml(origin) {
  const urls = publicPaths
    .map((path) => `  <url><loc>${xmlEscape(`${origin}${path}`)}</loc></url>`)
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

function robotsTxt(origin) {
  const lines = ["User-agent: *", "Allow: /", ""];
  if (origin) {
    lines.push(`Sitemap: ${origin}/sitemap.xml`, "");
  } else {
    lines.push("# Sitemap : publié lorsque VITE_SITE_URL contient le domaine confirmé.", "");
  }
  return lines.join("\n");
}

function contactPreviewPlugin() {
  return {
    name: "takadev-contact-preview",
    configureServer(server) {
      server.middlewares.use((request, response, next) => {
        const url = request.url?.split("?")[0];
        if (url !== "/api/contact" || request.method !== "POST") {
          next();
          return;
        }

        request.on("data", () => {});
        request.on("end", () => {
          const fail = request.url?.includes("fail=1");
          setTimeout(() => {
            response.statusCode = fail ? 502 : 200;
            response.setHeader("Content-Type", "application/json");
            response.end(JSON.stringify({ delivered: false, preview: true }));
          }, 600);
        });
      });
    },
  };
}

function siteDiscoveryPlugin(origin) {
  const robots = robotsTxt(origin);
  const sitemap = origin ? sitemapXml(origin) : "";

  return {
    name: "takadev-site-discovery",
    configureServer(server) {
      server.middlewares.use((request, response, next) => {
        const url = request.url?.split("?")[0];
        if (url === "/robots.txt") {
          response.setHeader("Content-Type", "text/plain; charset=utf-8");
          response.end(robots);
          return;
        }
        if (url === "/sitemap.xml") {
          if (!sitemap) {
            response.statusCode = 404;
            response.setHeader("Content-Type", "text/plain; charset=utf-8");
            response.end("Sitemap indisponible : le domaine n’est pas configuré.");
            return;
          }
          response.setHeader("Content-Type", "application/xml; charset=utf-8");
          response.end(sitemap);
          return;
        }
        next();
      });
    },
    generateBundle() {
      this.emitFile({ type: "asset", fileName: "robots.txt", source: robots });
      if (sitemap) {
        this.emitFile({ type: "asset", fileName: "sitemap.xml", source: sitemap });
      }
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const origin = siteOrigin(env.VITE_SITE_URL);

  return {
    plugins: [react(), tailwindcss(), contactPreviewPlugin(), siteDiscoveryPlugin(origin)],
  };
});

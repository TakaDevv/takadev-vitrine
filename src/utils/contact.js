import { company } from "../data/company.js";
import { getService } from "../data/services.js";

// Without a server of its own, the site relays the form to TAKADEV's mailbox through
// FormSubmit (https://formsubmit.co): no account or key, the first message sent asks
// TAKADEV to confirm the address once. VITE_CONTACT_ENDPOINT can point elsewhere.
const formSubmitEndpoint = `https://formsubmit.co/ajax/${company.email}`;

function configuredEndpoint() {
  const configured = import.meta.env.VITE_CONTACT_ENDPOINT?.trim();
  if (configured) {
    return configured;
  }
  // In development the local preview answers, so testing never emails TAKADEV.
  if (import.meta.env.DEV) {
    return "/api/contact";
  }
  return formSubmitEndpoint;
}

function isFormSubmit(endpoint) {
  return endpoint.startsWith("https://formsubmit.co/");
}

// FormSubmit prints each key as a row of the e-mail, so keys are the French labels.
function formSubmitBody(payload) {
  const service = getService(payload.service)?.title ?? payload.service;
  return {
    _subject: `Site TAKADEV · ${payload.subject}`,
    _template: "table",
    _captcha: "false",
    Nom: payload.name,
    email: payload.email,
    Téléphone: payload.phone || "Non renseigné",
    Entreprise: payload.company || "Non renseignée",
    Service: service,
    Objet: payload.subject,
    Message: payload.message,
  };
}

export async function submitContactRequest(payload) {
  const endpoint = configuredEndpoint();
  const viaFormSubmit = isFormSubmit(endpoint);

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(viaFormSubmit ? formSubmitBody(payload) : payload),
    });

    if (!response.ok) {
      return { ok: false, reason: "error" };
    }

    const body = await response.json().catch(() => null);
    if (viaFormSubmit) {
      if (String(body?.success) === "true") {
        return { ok: true, reason: "success" };
      }
      // FormSubmit answers 200 with success "false" until the mailbox clicks "Activate Form".
      const activation = /activat/i.test(body?.message ?? "");
      if (!activation) {
        console.warn("FormSubmit :", body?.message ?? body);
      }
      return { ok: false, reason: activation ? "activation" : "error" };
    }
    if (body?.delivered === false) {
      return { ok: false, reason: "preview" };
    }

    return { ok: true, reason: "success" };
  } catch {
    return { ok: false, reason: "error" };
  }
}

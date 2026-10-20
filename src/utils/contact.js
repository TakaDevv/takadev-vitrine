function configuredEndpoint() {
  const configured = import.meta.env.VITE_CONTACT_ENDPOINT?.trim();
  if (configured) {
    return configured;
  }
  if (import.meta.env.DEV) {
    return "/api/contact";
  }
  return "";
}

export async function submitContactRequest(payload) {
  const endpoint = configuredEndpoint();

  if (!endpoint) {
    return { ok: false, reason: "not_configured" };
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return { ok: false, reason: "error" };
    }

    const body = await response.json().catch(() => null);
    if (body?.delivered === false) {
      return { ok: false, reason: "preview" };
    }

    return { ok: true, reason: "success" };
  } catch {
    return { ok: false, reason: "error" };
  }
}

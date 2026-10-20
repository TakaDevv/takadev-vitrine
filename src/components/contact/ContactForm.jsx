import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { company } from "../../data/company.js";
import { services } from "../../data/services.js";
import { submitContactRequest } from "../../utils/contact.js";
import { validateContact } from "../../utils/validation.js";
import Button from "../common/Button.jsx";

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  subject: "",
  message: "",
  consent: false,
};

function fieldClass(invalid) {
  return `w-full rounded-lg border bg-white px-3 py-2.5 text-ink outline-none ${
    invalid ? "border-danger" : "border-line"
  }`;
}

function Field({ id, label, hint, error, required = false, children }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-night">
        {label}
        {required ? (
          <>
            <span aria-hidden="true"> *</span>
            <span className="sr-only"> (obligatoire)</span>
          </>
        ) : null}
        {hint ? <span className="font-normal text-muted"> {hint}</span> : null}
      </label>
      <div className="mt-2">{children}</div>
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default function ContactForm({ initialService = "" }) {
  const [form, setForm] = useState({
    ...emptyForm,
    service: services.some((service) => service.slug === initialService) ? initialService : "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const statusRef = useRef(null);

  useEffect(() => {
    if (status === "idle" || status === "sending") {
      return;
    }
    statusRef.current?.focus();
  }, [status]);

  function update(name, value) {
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      if (!current[name]) {
        return current;
      }
      const next = { ...current };
      delete next[name];
      return next;
    });
  }

  async function onSubmit(event) {
    event.preventDefault();
    const nextErrors = validateContact(form);
    setErrors(nextErrors);
    setStatus("idle");

    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) {
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    setStatus("sending");
    const result = await submitContactRequest({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      company: form.company.trim(),
      service: form.service,
      subject: form.subject.trim(),
      message: form.message.trim(),
      consent: form.consent,
    });
    setStatus(result.ok ? "success" : result.reason);
  }

  return (
    <form
      className="rounded-2xl bg-white p-6 sm:p-8"
      onSubmit={onSubmit}
      noValidate
      aria-busy={status === "sending"}
    >
      <h2 className="font-display text-2xl font-semibold text-night">Préparer une demande</h2>
      <p className="mt-3 leading-relaxed">
        Les champs marqués d’une étoile sont obligatoires. Sans service d’envoi configuré, TAKADEV
        ne reçoit pas le message.
      </p>

      <div className="mt-6 grid gap-5">
        <Field id="name" label="Nom complet" required error={errors.name}>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={(event) => update("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={fieldClass(errors.name)}
          />
        </Field>

        <Field id="email" label="Adresse e-mail" required error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(event) => update("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={fieldClass(errors.email)}
          />
        </Field>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="phone" label="Téléphone" hint="(facultatif)" error={errors.phone}>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={(event) => update("phone", event.target.value)}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className={fieldClass(errors.phone)}
            />
          </Field>
          <Field id="company" label="Entreprise" hint="(facultatif)" error={errors.company}>
            <input
              id="company"
              name="company"
              autoComplete="organization"
              value={form.company}
              onChange={(event) => update("company", event.target.value)}
              aria-invalid={Boolean(errors.company)}
              aria-describedby={errors.company ? "company-error" : undefined}
              className={fieldClass(errors.company)}
            />
          </Field>
        </div>

        <Field id="service" label="Service souhaité" required error={errors.service}>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={(event) => update("service", event.target.value)}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "service-error" : undefined}
            className={fieldClass(errors.service)}
          >
            <option value="">Choisir un service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.title}
              </option>
            ))}
          </select>
        </Field>

        <Field id="subject" label="Objet de la demande" required error={errors.subject}>
          <input
            id="subject"
            name="subject"
            value={form.subject}
            onChange={(event) => update("subject", event.target.value)}
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? "subject-error" : undefined}
            className={fieldClass(errors.subject)}
          />
        </Field>

        <Field id="message" label="Message" required error={errors.message}>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={form.message}
            onChange={(event) => update("message", event.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={fieldClass(errors.message)}
          />
        </Field>

        <div>
          <label className="flex items-start gap-3 text-sm leading-relaxed" htmlFor="consent">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              checked={form.consent}
              onChange={(event) => update("consent", event.target.checked)}
              aria-invalid={Boolean(errors.consent)}
              aria-describedby={errors.consent ? "consent-error" : undefined}
              className="mt-1 size-4 accent-brand"
            />
            <span>
              J’accepte que TAKADEV utilise ces informations pour répondre à ma demande.
              <span className="sr-only"> (obligatoire)</span> Consultez la{" "}
              <Link to="/politique-de-confidentialite" className="font-semibold text-brand underline underline-offset-2">
                politique de confidentialité
              </Link>
              .
            </span>
          </label>
          {errors.consent ? (
            <p id="consent-error" className="mt-2 text-sm text-danger">
              {errors.consent}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-6">
        <Button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Envoi en cours…" : "Envoyer la demande"}
        </Button>
      </div>

      <div className="mt-5" aria-live="polite">
        {status === "sending" ? <p className="sr-only">Envoi en cours…</p> : null}
        {status === "not_configured" ? (
          <p ref={statusRef} tabIndex={-1} className="rounded-xl bg-surface px-4 py-3 leading-relaxed outline-none">
            L’envoi en ligne n’est pas activé. Votre message n’a pas été transmis. Appelez le{" "}
            <a href={company.phoneHref} className="font-semibold text-night underline underline-offset-2">
              {company.phoneDisplay}
            </a>{" "}
            ou écrivez à{" "}
            <a href={`mailto:${company.email}`} className="font-semibold break-all text-night underline underline-offset-2">
              {company.email}
            </a>
            .
          </p>
        ) : null}
        {status === "preview" ? (
          <p ref={statusRef} tabIndex={-1} className="rounded-xl bg-surface px-4 py-3 leading-relaxed outline-none">
            Aperçu de confirmation. Aucune demande n’a été transmise à TAKADEV. Le message partira
            seulement lorsqu’un service d’envoi aura été configuré et testé.
          </p>
        ) : null}
        {status === "error" ? (
          <p ref={statusRef} tabIndex={-1} className="text-sm text-danger outline-none" role="alert">
            La demande n’a pas pu être envoyée. Réessayez, appelez le{" "}
            <a href={company.phoneHref} className="font-semibold underline underline-offset-2">
              {company.phoneDisplay}
            </a>{" "}
            ou écrivez à{" "}
            <a href={`mailto:${company.email}`} className="font-semibold break-all underline underline-offset-2">
              {company.email}
            </a>
            .
          </p>
        ) : null}
        {status === "success" ? (
          <p ref={statusRef} tabIndex={-1} className="rounded-xl bg-surface px-4 py-3 leading-relaxed outline-none">
            Votre demande a été envoyée. TAKADEV vous répondra à l’adresse indiquée.
          </p>
        ) : null}
      </div>
    </form>
  );
}

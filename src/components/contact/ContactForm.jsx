import { useEffect, useRef, useState } from "react";
import { AlertCircle, CheckCircle2, ChevronDown, Info, LoaderCircle } from "lucide-react";
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
  website: "",
};

function fieldClass(invalid) {
  return `w-full rounded-lg border bg-night-600 px-4 py-3 text-ink-50 placeholder:text-ink-400 outline-none transition-[border-color,box-shadow] duration-150 focus:border-blue-500 focus:shadow-[0_0_0_4px_rgb(59_130_246/0.18)] ${
    invalid ? "border-danger" : "border-line-strong hover:border-ink-400/60"
  }`;
}

function Field({ id, label, hint, error, required = false, children }) {
  return (
    <div>
      <label htmlFor={id} className="block font-display text-sm font-semibold text-ink-50">
        {label}
        {required ? (
          <>
            <span aria-hidden="true" className="text-cyan-400"> *</span>
            <span className="sr-only"> (obligatoire)</span>
          </>
        ) : null}
        {hint ? <span className="font-sans font-normal text-ink-400"> {hint}</span> : null}
      </label>
      <div className="relative mt-2">{children}</div>
      {error ? (
        <p id={`${id}-error`} className="mt-2 flex items-start gap-1.5 text-sm text-danger">
          <AlertCircle aria-hidden="true" size={15} className="mt-0.5 shrink-0" />
          {error}
        </p>
      ) : null}
    </div>
  );
}

function StatusPanel({ statusRef, tone = "info", children }) {
  const Icon = tone === "success" ? CheckCircle2 : Info;
  const color = tone === "success" ? "border-success/40 bg-success/10" : "border-line-strong bg-night-600/60";
  return (
    <div ref={statusRef} tabIndex={-1} className={`flex gap-3 rounded-[14px] border px-5 py-4 leading-relaxed outline-none ${color}`}>
      <Icon aria-hidden="true" size={20} className={`mt-0.5 shrink-0 ${tone === "success" ? "text-success" : "text-blue-400"}`} />
      <p className="text-ink-50">{children}</p>
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

    // Honeypot: people never see this field, bots fill it. Pretend success and send nothing.
    if (form.website) {
      setStatus("success");
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

  const contactLinks = (
    <>
      Appelez le{" "}
      <a href={company.phoneHref} className="link-u font-semibold">
        {company.phoneDisplay}
      </a>{" "}
      ou écrivez à{" "}
      <a href={`mailto:${company.email}`} className="link-u font-semibold break-all">
        {company.email}
      </a>
      .
    </>
  );

  return (
    <form
      className="relative overflow-hidden rounded-[20px] border border-line bg-night-700 p-6 shadow-lift sm:p-10"
      onSubmit={onSubmit}
      noValidate
      aria-busy={status === "sending"}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-blue-500 to-transparent"
      />
      <h2 className="font-display text-2xl font-semibold tracking-tight text-ink-50 sm:text-3xl">Préparer une demande</h2>
      <p className="mt-3 leading-relaxed">
        Les champs marqués d’une étoile sont obligatoires. Votre demande est envoyée par e-mail à {company.email}.
      </p>

      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Site web</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(event) => update("website", event.target.value)}
        />
      </div>

      <div className="mt-8 grid gap-6">
        <div className="grid gap-6 sm:grid-cols-2">
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
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
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
            className={`${fieldClass(errors.service)} appearance-none pr-11`}
          >
            <option value="">Choisir un service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.title}
              </option>
            ))}
          </select>
          <ChevronDown
            aria-hidden="true"
            size={18}
            className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-ink-400"
          />
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
            className={`${fieldClass(errors.message)} min-h-40 resize-y`}
          />
        </Field>

        <div>
          <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed" htmlFor="consent">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              checked={form.consent}
              onChange={(event) => update("consent", event.target.checked)}
              aria-invalid={Boolean(errors.consent)}
              aria-describedby={errors.consent ? "consent-error" : undefined}
              className="mt-0.5 size-5 shrink-0 cursor-pointer accent-blue-500"
            />
            <span>
              J’accepte que TAKADEV utilise ces informations pour répondre à ma demande.
              <span className="sr-only"> (obligatoire)</span> Consultez la{" "}
              <Link to="/politique-de-confidentialite" className="link-u font-semibold text-blue-400">
                politique de confidentialité
              </Link>
              .
            </span>
          </label>
          {errors.consent ? (
            <p id="consent-error" className="mt-2 flex items-start gap-1.5 text-sm text-danger">
              <AlertCircle aria-hidden="true" size={15} className="mt-0.5 shrink-0" />
              {errors.consent}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" disabled={status === "sending"} arrow={status !== "sending"}>
          {status === "sending" ? (
            <span className="inline-flex items-center gap-2">
              <LoaderCircle aria-hidden="true" size={16} className="animate-spin" />
              Envoi en cours…
            </span>
          ) : (
            "Envoyer la demande"
          )}
        </Button>
        <p className="text-sm text-ink-400">
          <span aria-hidden="true" className="text-cyan-400">*</span> Champ obligatoire
        </p>
      </div>

      <div className="mt-6 empty:hidden" aria-live="polite">
        {status === "sending" ? <p className="sr-only">Envoi en cours…</p> : null}
        {status === "preview" ? (
          <StatusPanel statusRef={statusRef}>
            Aperçu de confirmation. Aucune demande n’a été transmise à TAKADEV. Le message partira seulement
            lorsqu’un service d’envoi aura été configuré et testé.
          </StatusPanel>
        ) : null}
        {status === "activation" ? (
          <StatusPanel statusRef={statusRef}>
            L’envoi par e-mail doit d’abord être activé : un message « Activate Form » de FormSubmit vient d’être
            envoyé à {company.email}. Une fois le lien cliqué, les demandes seront transmises. {contactLinks}
          </StatusPanel>
        ) : null}
        {status === "error" ? (
          <div
            ref={statusRef}
            tabIndex={-1}
            role="alert"
            className="flex gap-3 rounded-[14px] border border-danger/40 bg-danger/10 px-5 py-4 leading-relaxed text-ink-50 outline-none"
          >
            <AlertCircle aria-hidden="true" size={20} className="mt-0.5 shrink-0 text-danger" />
            <p>La demande n’a pas pu être envoyée. Réessayez. {contactLinks}</p>
          </div>
        ) : null}
        {status === "success" ? (
          <StatusPanel statusRef={statusRef} tone="success">
            Votre demande a été envoyée. TAKADEV vous répondra à l’adresse indiquée.
          </StatusPanel>
        ) : null}
      </div>
    </form>
  );
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(values) {
  const errors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Indiquez votre nom complet.";
  }

  if (!emailPattern.test(values.email.trim())) {
    errors.email = "Indiquez une adresse e-mail valide.";
  }

  const phoneDigits = values.phone.replace(/\D/g, "");
  if (values.phone.trim() && phoneDigits.length < 8) {
    errors.phone = "Indiquez un numéro valide, ou laissez ce champ vide.";
  }

  if (!values.service) {
    errors.service = "Choisissez le service concerné.";
  }

  if (values.subject.trim().length < 3) {
    errors.subject = "Indiquez l’objet de votre demande.";
  }

  if (values.message.trim().length < 20) {
    errors.message = "Décrivez votre demande en au moins 20 caractères.";
  }

  if (!values.consent) {
    errors.consent = "Votre accord est nécessaire pour que TAKADEV puisse vous répondre.";
  }

  return errors;
}

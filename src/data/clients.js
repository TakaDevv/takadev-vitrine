import incubateur from "../assets/clients/incubateur-alger-3.png";
import justice from "../assets/clients/ministere-justice.png";
import parlement from "../assets/clients/ministere-relations-parlement.png";
import opu from "../assets/clients/opu.png";
import alger3 from "../assets/clients/universite-alger-3.png";

// Organisations that have worked with TAKADEV, as confirmed by TAKADEV.
// `zoom` compensates for logos supplied with wide white margins.
export const clients = [
  { name: "Université d’Alger 3", logo: alger3 },
  { name: "Incubateur de l’Université d’Alger 3", logo: incubateur, zoom: 1.6 },
  { name: "Ministère des Relations avec le Parlement", logo: parlement },
  { name: "Ministère de la Justice", logo: justice },
  { name: "Office des Publications Universitaires", logo: opu },
];

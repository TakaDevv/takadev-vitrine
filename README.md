# TAKADEV

Site vitrine de TAKADEV, EPE TAKADEV SPA, filiale du Centre de Recherche sur l’Information Scientifique et Technique (CERIST).

Le projet est en **phase 8 : finition**. Les pages ont un titre, une description, un contraste vérifié et une navigation au clavier. Le formulaire de contact du site publié est envoyé par e-mail à takadev@cerist.dz via FormSubmit (voir « Formulaire de contact » ci-dessous). Le cahier des charges est dans [docs/phase-1-analyse.md](docs/phase-1-analyse.md).

## Prérequis

- Node.js 22
- npm 10 ou plus récent

Vérification sous Windows PowerShell :

```powershell
node -v
npm -v
```

## Installation

```powershell
npm install
```

## Lancer le site en local

```powershell
npm run dev
```

Vite affiche une adresse locale, en général `http://localhost:5173`.

## Vérifier le projet

```powershell
npm run lint
npm run build
```

## Configuration

### Formulaire de contact

Le site publié envoie chaque demande par e-mail à takadev@cerist.dz grâce à [FormSubmit](https://formsubmit.co), sans compte ni clé.

1. **Activation, une seule fois :** au premier envoi depuis le site publié, FormSubmit envoie un e-mail « Activate Form » à takadev@cerist.dz. Il faut cliquer sur le lien. Avant cette confirmation, les demandes ne sont pas transmises et le formulaire affiche une erreur qui renvoie vers le téléphone et l’e-mail.
2. **En développement** (`npm run dev`), un aperçu local répond à la place : aucun e-mail n’est envoyé.
3. **Autre service :** copier `.env.example` vers `.env` et renseigner `VITE_CONTACT_ENDPOINT` (URL HTTPS qui accepte une requête POST JSON et répond avec un succès). Ne jamais y placer de mot de passe.

`VITE_SITE_URL` reste vide tant que le domaine n’est pas confirmé. Avec une origine `https://`, le site ajoute l’URL canonique et publie `/sitemap.xml`. Sans cette variable, `/robots.txt` autorise l’exploration et le sitemap répond 404.

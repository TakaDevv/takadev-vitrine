# TAKADEV

Site vitrine de TAKADEV, EPE TAKADEV SPA, filiale du Centre de Recherche sur l’Information Scientifique et Technique (CERIST).

Le projet est en **phase 8 : finition**. Les pages ont un titre, une description, un contraste vérifié et une navigation au clavier. Sans `VITE_CONTACT_ENDPOINT`, aucun message n’est transmis à TAKADEV. Le cahier des charges est dans [docs/phase-1-analyse.md](docs/phase-1-analyse.md).

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

Copier `.env.example` vers `.env` pour activer un envoi réel. `VITE_CONTACT_ENDPOINT` doit être une URL HTTPS qui accepte une requête POST JSON et répond avec un succès. Tant qu’elle est vide, le site publié indique que le message n’a pas été transmis. Ne jamais y placer de mot de passe.

`VITE_SITE_URL` reste vide tant que le domaine n’est pas confirmé. Avec une origine `https://`, le site ajoute l’URL canonique et publie `/sitemap.xml`. Sans cette variable, `/robots.txt` autorise l’exploration et le sitemap répond 404.

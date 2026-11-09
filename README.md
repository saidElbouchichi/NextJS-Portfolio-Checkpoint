# Checkpoint Next JS — Portfolio

🔗 **Site en ligne (Vercel) : https://next-js-portfolio-checkpoint-tjdn.vercel.app**

Site portfolio construit avec **Next.js** (Pages Router).

- **Pages (routage par fichiers)** : `/` (accueil), `/about`, `/projects`, `/contact` dans `pages/`.
- **Composants** : `components/Layout.js` (en-tête, navigation active, pied de page).
- **Styles** : CSS global (`styles/globals.css`, importé dans `_app.js`) + **CSS Modules** par page.
- **Images** : composant `next/image` (photo de profil, visuels des projets dans `public/`).
- **Rendu côté serveur** : `getServerSideProps` sur `/projects`.
- **Route API** : `GET /api/projects` (`pages/api/projects.js`).

## Lancer en local

```bash
npm install
npm run dev
```

## Déploiement (Vercel)

1. Se connecter sur https://vercel.com avec son compte GitHub.
2. « Add New Project » → importer ce dépôt → « Deploy » (Next.js est détecté automatiquement).

# Sphèris - Landing Page

Site web de présentation pour Sphèris, l'écosystème complet qui permet aux thérapeutes et coachs de développer leur présence en ligne.

## 🚀 Technologies

- **Next.js 16** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS 4** - Framework CSS utility-first
- **Lucide React** - Bibliothèque d'icônes

## 📦 Installation

```bash
npm install
```

## 🏃 Lancer le projet

### Mode développement

```bash
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

### Build de production

```bash
npm run build
npm start
```

## 🎨 Structure du projet

```
spheris/
├── app/
│   ├── globals.css          # Styles globaux et animations
│   ├── layout.tsx            # Layout principal
│   └── page.tsx              # Page d'accueil
├── components/
│   ├── Hero.tsx              # Section Hero (première impression)
│   ├── Vision.tsx            # Vision et mission de Sphèris
│   ├── PublicCible.tsx       # Public cible et problématiques
│   ├── PropositionValeur.tsx # Comment ça marche (concept)
│   ├── Programme.tsx         # Programme détaillé du séminaire
│   ├── Ecosysteme.tsx        # Écosystème communautaire
│   ├── Tarifs.tsx            # Tarifs et offres
│   ├── Contact.tsx           # Formulaire de contact
│   └── Footer.tsx            # Footer avec liens et informations
├── public/                   # Assets statiques (images, etc.)
└── tailwind.config.js        # Configuration Tailwind avec palette violette

```

## 🎨 Palette de couleurs

Le site utilise une palette violette personnalisée :

- **Primary** : du violet clair (#faf5ff) au violet foncé (#3b0764)
- **Secondary** : du rose-violet clair (#fdf4ff) au magenta foncé (#4a044e)

## 📝 Sections du site

1. **Hero** - Introduction avec CTA principal
2. **Vision** - Vision, mission et valeurs de Sphèris
3. **Public Cible** - Pour qui et problématiques adressées
4. **Proposition de Valeur** - Concept du séminaire et format interview
5. **Programme** - Programme détaillé et accompagnement
6. **Écosystème** - Communauté et stratégie de visibilité
7. **Tarifs** - Offre principale à 800€ et option montage
8. **Contact** - Formulaire de candidature avec validation
9. **Footer** - Navigation et informations de contact

## ✨ Fonctionnalités

- ✅ Design responsive (mobile, tablette, desktop)
- ✅ Animations fluides (blobs, hover, transitions)
- ✅ Scroll smooth entre les sections
- ✅ Formulaire de contact avec validation
- ✅ Palette violette personnalisée
- ✅ Optimisé pour le SEO
- ✅ Performance optimale

## 🔧 Personnalisation

### Modifier les couleurs

Éditez le fichier `tailwind.config.js` pour ajuster la palette de couleurs.

### Modifier le contenu

Tous les composants sont dans le dossier `components/`. Chaque section peut être modifiée indépendamment.

### Ajouter une section

1. Créez un nouveau composant dans `components/`
2. Importez-le dans `app/page.tsx`
3. Ajoutez-le dans l'ordre souhaité

## 📧 Formulaire de contact

Le formulaire de contact est actuellement en mode simulation. Pour le connecter à un service d'envoi d'emails :

1. Ouvrez `components/Contact.tsx`
2. Remplacez la fonction `handleSubmit` par votre logique d'envoi (API, service tiers, etc.)

Suggestions de services :
- **EmailJS** - Simple et gratuit
- **SendGrid** - Robuste et scalable
- **Resend** - Moderne et developer-friendly
- **API Route Next.js** - Solution custom

## 🚀 Déploiement

Le site peut être déployé sur :

- **Vercel** (recommandé pour Next.js)
- **Netlify**
- **AWS Amplify**
- Tout hébergeur supportant Node.js

### Déploiement Vercel

```bash
npm install -g vercel
vercel
```

## 📄 Licence

Tous droits réservés - Sphèris 2025

## 🤝 Contact

Pour toute question : contact@spheris.fr

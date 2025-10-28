# 🚀 GUIDE DE DÉMARRAGE RAPIDE - SPHÈRIS LAB

## ✅ CE QUI FONCTIONNE ACTUELLEMENT

Le site est **opérationnel à 70%** avec 9 pages complètes :

1. **/** - Accueil avec services, process, témoignages
2. **/agence** - Présentation complète de l'écosystème
3. **/seminaires** - Landing séminaire (ancienne version migrée)
4. **/production** - Production vidéo professionnelle
5. **/coaching** - 3 formules de coaching
6. **/communaute** - Communauté Slack + événements
7. **/realisations** - Galerie + témoignages
8. **/contact** - Formulaire complet
9. **/contact/mentions-legales** - Page légale

## 🎉 TESTER LE SITE MAINTENANT

```bash
# Le serveur devrait déjà tourner sur :
http://localhost:3000

# Si ce n'est pas le cas :
cd /Users/hypnorel/Documents/Dev/NouveauxProjets/spheris
npm run dev
```

## 🔍 PAGES À VISITER

- **Accueil** : http://localhost:3000
- **Navigation** : Testez le menu Header (9 liens)
- **Formulaire** : http://localhost:3000/contact
- **Responsive** : Testez sur mobile (Dev Tools F12)

## ⚠️ CE QUI MANQUE (PRIORITÉ 1)

### 1. Pages Légales (2h)
- [ ] `/contact/politique-confidentialite`
- [ ] `/contact/cgv`

### 2. Blog Structure (3h)
- [ ] `/blog` - Liste articles
- [ ] `/blog/[slug]` - Article individuel

### 3. Bandeau Cookies (1h)
- [ ] Composant CookieBanner
- [ ] Gestion consentement

### 4. API Contact Fonctionnelle (3h)
- [ ] Route `/api/contact`
- [ ] Envoi email Brevo
- [ ] Ajout Google Sheets

## 🔑 CONFIGURATION REQUISE POUR PRODUCTION

Remplacer les clés fictives dans `.env.local` :

### 1. Claude API (Génération Articles)
```
CLAUDE_API_KEY=sk-ant-api03-xxx
```
👉 https://console.anthropic.com

### 2. Brevo (Emails Gratuits)
```
BREVO_API_KEY=xkeysib-xxx
```
👉 https://app.brevo.com (300 emails/jour gratuit)

### 3. Google Sheets (CRM Leads)
```
GOOGLE_SHEETS_CLIENT_EMAIL=xxx@xxx.iam.gserviceaccount.com
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nxxx\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEETS_SPREADSHEET_ID=1xxx
```
👉 https://console.cloud.google.com (Service Account)

### 4. Google Analytics 4
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```
👉 https://analytics.google.com

## 📋 CHECKLIST AVANT MISE EN LIGNE

### Contenu
- [ ] Vérifier tous les textes (fautes, cohérence)
- [ ] Remplacer placeholders vidéos par vraies vidéos
- [ ] Ajouter photos/logo si disponible
- [ ] Vérifier liens internes (tous les `/` fonctionnent)

### Légal
- [ ] Créer politique confidentialité complète
- [ ] Créer CGV complètes
- [ ] Implémenter bandeau cookies
- [ ] Tester opt-in/opt-out RGPD

### Technique
- [ ] Configurer vraies API keys
- [ ] Tester formulaire contact end-to-end
- [ ] Vérifier responsive mobile/tablet
- [ ] Test performance Lighthouse
- [ ] Vérifier robots.txt / sitemap

### Déploiement
- [ ] Push sur GitHub main
- [ ] Vérifier workflow déploiement Hostinger
- [ ] Configurer DNS si besoin
- [ ] Test site production

## 🛠️ COMMANDES UTILES

```bash
# Développement
npm run dev              # Serveur local

# Build
npm run build            # Compiler production
npm start                # Lancer production

# Maintenance
npm install              # Réinstaller dépendances
npm run lint             # Vérifier code
npx tsc --noEmit         # Vérifier types TypeScript
```

## 📊 PROGRESSION ACTUELLE

```
✅ Architecture & Setup       100%
✅ Composants UI               100%
✅ Pages principales           90%
🟡 Pages légales               33%
❌ Blog                        0%
❌ API Contact                 0%
❌ Automatisations IA          0%

TOTAL : 70% complété
```

## 🎯 PROCHAINES ÉTAPES (PAR PRIORITÉ)

### Cette Semaine
1. Créer politique confidentialité + CGV
2. Implémenter bandeau cookies
3. Configurer API contact (Brevo + Sheets)
4. Tests utilisateurs

### Semaine Prochaine
1. Structure blog
2. Génération articles IA (Claude)
3. Optimisation SEO avancée
4. Tests performance

### Dans 2 Semaines
1. Blog IA automatique opérationnel
2. Emails automatiques configurés
3. CRM Google Sheets fonctionnel
4. Préparation mise en ligne

## 💡 CONSEILS

### Design
- Tout est en violet/purple (primary/secondary)
- Composants réutilisables dans `/components/ui`
- TailwindCSS pour tous les styles
- Framer Motion à intégrer si besoin d'animations avancées

### Code
- TypeScript strict activé
- Validation formulaires avec Zod
- API Routes Next.js pour backend
- Pas de base de données (Google Sheets + Supabase pour blog)

### SEO
- Metadata configurées par page
- Mots-clés intégrés naturellement
- Schema.org à compléter
- Sitemap à générer

## 📞 BESOIN D'AIDE ?

1. **Documentation complète** : Voir `PROGRESS.md`
2. **Bugs/Questions** : Reprendre cette session Claude Code
3. **Contact développeur** : GitHub Issues

## 🎉 FÉLICITATIONS !

Vous avez maintenant un site moderne, responsive et professionnel à 70% terminé.
Il ne reste que les finitions légales et les automatisations pour être 100% opérationnel.

**Temps estimé pour finir** : 15-20h

---

**Date** : 28 octobre 2025
**Version** : 1.0.0 (MVP)
**Statut** : ✅ Prêt pour tests

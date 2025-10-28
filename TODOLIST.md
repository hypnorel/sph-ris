# 📝 TODOLIST - SPHÈRIS LAB

Liste complète des tâches restantes pour finaliser le site.

---

## 🔴 PRIORITÉ 1 - MVP (Semaine 1)

### Pages Légales
- [ ] **Politique de Confidentialité** (`/app/contact/politique-confidentialite/page.tsx`)
  - Données collectées (formulaires, analytics)
  - Finalités traitement
  - Durée conservation
  - Droits utilisateurs (RGPD)
  - Cookies utilisés
  - Transparence IA Claude
  - Contact DPO (Aurélien)

- [ ] **CGV** (`/app/contact/cgv/page.tsx`)
  - Objet : Séminaires Sphèris Lab
  - Prix : 800€ TTC (2j/1n)
  - Modalités inscription
  - Conditions paiement
  - Annulation/remboursement
  - Responsabilités
  - Droit applicable

### Bandeau Cookies RGPD
- [ ] **Composant CookieBanner** (`/components/layout/CookieBanner.tsx`)
  - Apparition première visite
  - Boutons : Accepter / Refuser / Personnaliser
  - Stockage choix localStorage
  - Gestion GA4 selon consentement
  - Style cohérent avec design

- [ ] **Intégration Layout**
  - Ajouter `<CookieBanner />` dans `app/layout.tsx`
  - Tester affichage et fonctionnement

### API Contact
- [ ] **Route API** (`/app/api/contact/route.ts`)
  - POST endpoint
  - Validation données (Zod)
  - Rate limiting (protection spam)
  - Réponse JSON structurée

- [ ] **Envoi Email Brevo**
  - Lib `/lib/integrations/brevo.ts`
  - Template confirmation candidature
  - Notification admin
  - Gestion erreurs

- [ ] **Google Sheets CRM**
  - Lib `/lib/integrations/googleSheets.ts`
  - Ajout automatique ligne
  - Colonnes : Date, Nom, Prénom, Email, Tel, Profession, Message, Source, Statut
  - Gestion erreurs

### Tests & Validation
- [ ] Tester formulaire contact end-to-end
- [ ] Vérifier emails reçus (Brevo)
- [ ] Vérifier ajout Google Sheets
- [ ] Tester bandeau cookies (accept/refuse)
- [ ] Vérifier responsive mobile/tablet
- [ ] Audit Lighthouse (score 90+)

---

## 🟡 PRIORITÉ 2 - Blog & Automatisations (Semaine 2-3)

### Structure Blog
- [ ] **Page Liste Articles** (`/app/blog/page.tsx`)
  - Grid articles (3 cols)
  - Pagination
  - Filtres catégories/tags
  - Search optionnel
  - SEO metadata

- [ ] **Page Article** (`/app/blog/[slug]/page.tsx`)
  - Layout article complet
  - Metadata dynamiques
  - Schema.org Article
  - Related posts
  - CTA séminaires

- [ ] **Composants Blog**
  - `/components/blog/BlogCard.tsx`
  - `/components/blog/BlogGrid.tsx`
  - `/components/blog/BlogHeader.tsx`
  - `/components/blog/RelatedPosts.tsx`

### Base de Données Blog (Supabase)
- [ ] **Setup Supabase**
  - Créer projet gratuit
  - Table `posts` avec colonnes :
    - id, title, slug, excerpt, content
    - author, published_at, updated_at
    - featured_image_url, tags[], category
    - meta_title, meta_description
    - reading_time, status (draft/published)

- [ ] **Lib Supabase**
  - `/lib/db/supabase.ts` - Client
  - `/lib/db/blog.ts` - CRUD articles
  - Fonctions : getAllPosts, getPostBySlug, createPost

### Génération IA Automatique (Claude)
- [ ] **Configuration Claude API**
  - Tester clé API fonctionnelle
  - Lib `/lib/ai/claude.ts`

- [ ] **Fonctions Génération**
  - `/lib/ai/generateBlogPost.ts`
    - Input : sujet + mots-clés
    - Output : article complet
  - `/lib/ai/curateTrends.ts`
    - Curation actualités thérapie/coaching
  - `/lib/ai/optimizeSEO.ts`
    - Meta title/description
    - Suggestions tags

- [ ] **Prompts Claude**
  - Fichier `/lib/ai/prompts.ts`
  - Prompt curation
  - Prompt rédaction (1000-1500 mots)
  - Prompt SEO
  - Prompt images (descriptions pour DALL-E)

- [ ] **API Génération**
  - `/app/api/blog/generate/route.ts`
  - POST avec sujet
  - Génération + sauvegarde Supabase

- [ ] **Cron Automatique**
  - `/app/api/cron/generate-posts/route.ts`
  - Déclenchement 2x/semaine (lundi 10h, jeudi 10h)
  - Génération article automatique
  - Publication ou draft selon config

### Emails Automatiques (Brevo)
- [ ] **Templates Brevo**
  - Confirmation candidature
  - Relance J+7 sans réponse
  - Newsletter mensuelle (articles blog)

- [ ] **Automation Emails**
  - Envoi auto après formulaire
  - Cron relances
  - Newsletter digest mensuel

### CRM Google Sheets Avancé
- [ ] **Colonnes Calculées**
  - Délai depuis inscription
  - Score lead (chaud/tiède/froid)
  - Statut (nouveau/contacté/converti)

- [ ] **Dashboard Notion/Airtable (Optionnel)**
  - Sync Sheets → Notion
  - Vue kanban leads
  - Notifications Slack

---

## 🟢 PRIORITÉ 3 - SEO & Performance (Semaine 3-4)

### SEO Avancé
- [ ] **Sitemap Dynamique**
  - `/app/sitemap.ts`
  - Inclure : pages statiques + articles blog
  - Mise à jour automatique

- [ ] **Robots.txt**
  - Fichier `/public/robots.txt`
  - Allow all sauf /api/
  - Lien sitemap

- [ ] **Schema.org JSON-LD**
  - `/lib/seo/jsonLd.ts`
  - Organization (accueil)
  - LocalBusiness (agence)
  - Event (séminaires)
  - Article (blog posts)
  - FAQPage (sections FAQ)

- [ ] **Metadata Optimisées**
  - Vérifier toutes les pages
  - Open Graph images
  - Twitter Cards
  - Canonical URLs

- [ ] **Maillage Interne**
  - Liens contextuels entre pages
  - Ancres optimisées
  - Breadcrumbs optionnel

### Performance
- [ ] **Optimisation Images**
  - Lazy loading (déjà activé Next.js)
  - Compression automatique
  - WebP format
  - Alt texts descriptifs

- [ ] **Code Splitting**
  - Dynamic imports composants lourds
  - Suspense boundaries

- [ ] **Fonts Optimisation**
  - Variable fonts
  - Font subset (latin only)
  - Préchargement critical fonts

- [ ] **Audit Lighthouse**
  - Performance > 90
  - Accessibility > 90
  - Best Practices > 90
  - SEO > 95

### Analytics & Tracking
- [ ] **Google Analytics 4**
  - Lib `/components/shared/Analytics.tsx`
  - Script GA4 dans layout
  - Respect consentement cookies

- [ ] **Events Tracking**
  - form_submit (formulaire contact)
  - cta_click (tous les CTA)
  - blog_read (temps lecture article)
  - video_placeholder_click

- [ ] **Goals & Funnels**
  - Goal : Candidature séminaire
  - Funnel : Home → Séminaires → Contact → Submit

---

## 🔵 PRIORITÉ 4 - Nice to Have (Semaine 4+)

### Galerie Vidéos Réelles
- [ ] Upload vraies vidéos séminaires
- [ ] Intégration YouTube/Vimeo
- [ ] Player custom ou embed
- [ ] Thumbnails optimisées

### Calendrier Événements
- [ ] Integration Cal.com (gratuit)
- [ ] Widget prise RDV coaching
- [ ] Affichage prochains ateliers

### Newsletter
- [ ] Formulaire inscription newsletter
  - `/components/forms/NewsletterForm.tsx`
  - Composant footer
  - Intégration Brevo

- [ ] Page confirmation inscription
- [ ] Double opt-in email

### Témoignages Vidéo
- [ ] Upload témoignages vidéo
- [ ] Player intégré page réalisations
- [ ] Transcription auto (optionnel)

### Animations Avancées
- [ ] Installer Framer Motion
- [ ] Animations scroll (reveal)
- [ ] Transitions pages
- [ ] Micro-interactions hover

### Tests Automatisés
- [ ] Setup Vitest
- [ ] Tests unitaires composants
- [ ] Tests intégration API
- [ ] Tests E2E Playwright

### Monitoring
- [ ] Sentry (error tracking)
- [ ] Uptime monitoring
- [ ] Performance monitoring

---

## ✅ CHECKLIST FINALE AVANT MISE EN LIGNE

### Contenu
- [ ] Tous les textes vérifiés (orthographe, cohérence)
- [ ] Placeholders remplacés par vraies images/vidéos
- [ ] Logo définitif ajouté
- [ ] Coordonnées vérifiées
- [ ] Liens externes vérifiés

### Technique
- [ ] Toutes les API keys configurées (prod)
- [ ] Variables environnement Hostinger
- [ ] Tests formulaires
- [ ] Tests responsive complets
- [ ] Tests navigateurs (Chrome, Safari, Firefox)
- [ ] Audit sécurité

### SEO
- [ ] Sitemap généré et accessible
- [ ] Robots.txt configuré
- [ ] Metadata toutes pages
- [ ] Schema.org implémentés
- [ ] Google Search Console configuré

### Légal
- [ ] Mentions légales complètes
- [ ] Politique confidentialité complète
- [ ] CGV complètes
- [ ] Bandeau cookies fonctionnel
- [ ] Conformité RGPD vérifiée

### Performance
- [ ] Lighthouse > 90 toutes pages
- [ ] Temps chargement < 3s
- [ ] Core Web Vitals OK
- [ ] Mobile-friendly test Google

### Déploiement
- [ ] Push GitHub main
- [ ] Workflow déploiement testé
- [ ] DNS configuré (si custom domain)
- [ ] HTTPS activé
- [ ] Backup configuré

---

## 📊 ESTIMATION TEMPS TOTAL

| Phase | Temps |
|-------|-------|
| Priorité 1 (MVP) | 9h |
| Priorité 2 (Automatisations) | 12h |
| Priorité 3 (SEO) | 6h |
| Priorité 4 (Nice to have) | 8h |
| Tests & Debugging | 5h |
| **TOTAL** | **40h** |

---

## 💡 NOTES

- Commencer par Priorité 1 (MVP) pour avoir site déployable rapidement
- Priorité 2 peut se faire progressivement post-lancement
- Priorité 3 important pour trafic organique
- Priorité 4 optionnel, selon budget temps

**Objectif MVP déployable** : 9-12h de travail restant

---

**Dernière mise à jour** : 28 octobre 2025

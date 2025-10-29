# Guide des images pour le blog

## Structure des dossiers

Chaque article doit avoir son propre dossier d'images :
```
/public/blog/
├── strategies-personal-branding-therapeutes/
│   └── cover.jpg (1200x630px)
└── creer-videos-courtes-therapeutes/
    └── cover.jpg (1200x630px)
```

## Spécifications des images de couverture

### Dimensions recommandées :
- **Largeur** : 1200px
- **Hauteur** : 630px
- **Ratio** : 1.91:1 (optimal pour OpenGraph/partage social)
- **Format** : JPG ou PNG
- **Poids max** : 500KB

### Style visuel :
- Photos professionnelles avec overlay gradient violet
- Texte clair et lisible
- Cohérent avec la charte Sphèris Lab (violet #7c3aed)

## Images à créer pour les articles existants

### 1. strategies-personal-branding-therapeutes/cover.jpg
**Thème** : Personal branding professionnel
**Suggestion** :
- Thérapeute en consultation moderne
- Ou : Setup vidéo professionnel avec caméra
- Ou : Personne écrivant sur ordinateur (content creation)
**Overlay** : Gradient violet avec titre "10 stratégies de personal branding"

### 2. creer-videos-courtes-therapeutes/cover.jpg
**Thème** : Création vidéo, réseaux sociaux
**Suggestion** :
- Smartphone sur trépied en tournage
- Ou : Interface Instagram/TikTok avec vidéos
- Ou : Personne filmant une vidéo face caméra
**Overlay** : Gradient violet avec titre "Créer des vidéos courtes qui convertissent"

## Sources d'images gratuites recommandées

- **Unsplash** : https://unsplash.com (haute qualité, gratuit)
- **Pexels** : https://pexels.com (photos et vidéos)
- **Pixabay** : https://pixabay.com (grande variété)

## Mots-clés de recherche utiles

- "therapist office"
- "video recording smartphone"
- "content creator"
- "personal branding"
- "professional therapy"
- "social media creator"
- "video production"

## Comment ajouter les images

1. Téléchargez l'image depuis Unsplash/Pexels
2. Renommez en `cover.jpg`
3. Redimensionnez à 1200x630px si nécessaire
4. Placez dans `/public/blog/[slug-article]/`
5. Le blog affichera automatiquement l'image

## Images temporaires (placeholder)

Pour le développement, vous pouvez utiliser :
```
https://placehold.co/1200x630/7c3aed/ffffff?text=Article+Cover
```

Remplacez "Article+Cover" par le titre de l'article.

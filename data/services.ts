import { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'seminaires',
    title: 'Séminaires Vidéo',
    slug: 'seminaires',
    description: 'Un séminaire immersif de 2 jours pour créer 20 à 40 vidéos professionnelles, sans stress technique et entouré de pairs bienveillants.',
    icon: '🎬',
    features: [
      '20 à 40 vidéos professionnelles',
      'Tournage en interviews croisées',
      'Double coaching technique & stratégie',
      'Accès à vie à la communauté Slack',
      'Ateliers réguliers inclus',
    ],
    cta: {
      text: 'Découvrir les séminaires',
      href: '/seminaires',
    },
  },
  {
    id: 'production',
    title: 'Production de Contenu',
    slug: 'production',
    description: 'Création de contenu vidéo professionnel pour vos réseaux sociaux. Qualité broadcast, matériel pro, équipe expérimentée.',
    icon: '🎥',
    features: [
      'Matériel professionnel',
      'Formats courts optimisés (shorts/reels)',
      'Montage professionnel disponible',
      'Coaching face caméra',
      'Stratégie contenu personnalisée',
    ],
    cta: {
      text: 'Voir nos réalisations',
      href: '/production',
    },
  },
  {
    id: 'coaching',
    title: 'Coaching Personal Branding',
    slug: 'coaching',
    description: 'Accompagnement sur-mesure pour développer votre présence en ligne et votre stratégie de communication.',
    icon: '💡',
    features: [
      'Stratégie personal branding',
      'Audit de votre présence en ligne',
      'Plan de contenu personnalisé',
      'Optimisation profils réseaux sociaux',
      'Suivi et coaching continu',
    ],
    cta: {
      text: 'En savoir plus',
      href: '/coaching',
    },
  },
  {
    id: 'communaute',
    title: 'Communauté & Réseau',
    slug: 'communaute',
    description: 'Rejoignez un réseau solidaire de thérapeutes et coachs qui s\'entraident, partagent et grandissent ensemble.',
    icon: '🤝',
    features: [
      'Espace Slack privé',
      'Ateliers mensuels en visio',
      'Événements présentiel à Paris',
      'Entraide et engagement mutuel',
      'Co-publication et visibilité collective',
    ],
    cta: {
      text: 'Rejoindre la communauté',
      href: '/communaute',
    },
  },
]

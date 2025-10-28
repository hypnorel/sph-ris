import Section from '@/components/ui/Section'
import { SITE_CONFIG } from '@/lib/utils/constants'

export const metadata = {
  title: 'Mentions Légales',
  description: 'Mentions légales du site Sphèris Lab',
  robots: { index: false },
}

export default function MentionsLegalesPage() {
  return (
    <Section>
      <div className="max-w-4xl mx-auto prose prose-slate">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Mentions Légales</h1>

        <h2>Éditeur du site</h2>
        <p>
          Le site <strong>{SITE_CONFIG.name}</strong> est édité par :<br />
          <strong>Aurélien Rignault</strong><br />
          Auto-entrepreneur<br />
          SIRET : {SITE_CONFIG.siret}<br />
          Adresse : {SITE_CONFIG.address}<br />
          Email : <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a><br />
          Téléphone : {SITE_CONFIG.phone}
        </p>

        <h2>Directeur de la publication</h2>
        <p>
          <strong>Aurélien Rignault</strong><br />
          Email : <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>
        </p>

        <h2>Hébergement</h2>
        <p>
          Le site est hébergé par :<br />
          <strong>Hostinger International Ltd.</strong><br />
          61 Lordou Vironos Street, 6023 Larnaca, Chypre<br />
          Site web : <a href="https://www.hostinger.fr" target="_blank" rel="noopener">www.hostinger.fr</a>
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>
          L'ensemble des contenus présents sur le site (textes, images, vidéos, logos, éléments graphiques)
          sont protégés par le droit d'auteur et sont la propriété exclusive de Sphèris Lab ou de leurs auteurs respectifs.
        </p>
        <p>
          Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments
          du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.
        </p>

        <h2>Données personnelles</h2>
        <p>
          Les informations recueillies via les formulaires du site sont destinées à Sphèris Lab pour le traitement
          de vos demandes de contact et l'envoi d'informations sur nos services.
        </p>
        <p>
          Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données.
          Pour exercer ces droits, contactez-nous à : <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>
        </p>
        <p>
          Pour plus d'informations, consultez notre{' '}
          <a href="/contact/politique-confidentialite">Politique de confidentialité</a>.
        </p>

        <h2>Cookies</h2>
        <p>
          Le site utilise des cookies pour améliorer l'expérience utilisateur et mesurer l'audience via Google Analytics.
          Vous pouvez gérer vos préférences de cookies via le bandeau de consentement présent sur le site.
        </p>

        <h2>Responsabilité</h2>
        <p>
          Sphèris Lab s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site,
          dont il se réserve le droit de corriger le contenu à tout moment et sans préavis.
        </p>
        <p>
          Toutefois, Sphèris Lab ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises
          à disposition sur ce site et ne saurait être tenu responsable des erreurs, omissions ou résultats obtenus
          de l'utilisation de ces informations.
        </p>

        <h2>Contact</h2>
        <p>
          Pour toute question concernant les mentions légales, vous pouvez nous contacter :<br />
          Email : <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a><br />
          Téléphone : {SITE_CONFIG.phone}
        </p>

        <p className="text-sm text-slate-500 mt-8">
          Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long' })}
        </p>
      </div>
    </Section>
  )
}

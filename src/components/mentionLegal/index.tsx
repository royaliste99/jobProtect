import React from 'react';

export default function MentionLegal() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-4xl font-bold mb-8'>Mentions Légales et Politique de Confidentialité</h1>

      <h2 className='text-2xl font-semibold mb-4'>1. Éditeur du site :</h2>
      <p className='mb-4'>
        Nom : Maxime Petit<br />
        Adresse : 12 rue de Clermont, 60000 Beauvais<br />
        Email : <a href='mailto:maxime.petit2605@gmail.com' className='text-blue-500'>maxime.petit2605@gmail.com</a><br />
        Téléphone : <a href='tel:+33784228226' className='text-blue-500'>07.84.22.82.26</a>
      </p>

      <h2 className='text-2xl font-semibold mb-4'>2. Hébergement du site :</h2>
      <p className='mb-4'>
        Le site est hébergé par la société <strong>Vercel</strong>.<br />
        Site web : <a href='https://vercel.com' target='_blank' rel='noopener noreferrer' className='text-blue-500'>vercel.com</a>
      </p>

      <h2 className='text-2xl font-semibold mb-4'>3. Données personnelles :</h2>
      <p className='mb-4'>
        Aucune donnée personnelle n&apos;est collectée ni stockée par ce site. Aucun formulaire ne demande d&apos;informations sensibles ou privées aux utilisateurs.
      </p>

      <h2 className='text-2xl font-semibold mb-4'>4. Cookies :</h2>
      <p className='mb-4'>
        Ce site n&apos;utilise pas de cookies pour collecter des informations sur les utilisateurs.
      </p>

      <h2 className='text-2xl font-semibold mb-4'>5. Propriété intellectuelle :</h2>
      <p className='mb-4'>
        Le logo et les éléments graphiques présents sur ce site sont la propriété exclusive de Maxime Petit. Toute reproduction, distribution, modification, adaptation ou publication, même partielle, de ces éléments est strictement interdite sans l&apos;autorisation écrite préalable de Maxime Petit.
      </p>

      <h2 className='text-2xl font-semibold mb-4'>6. Conditions d&apos;utilisation du site :</h2>
      <p className='mb-4'>
        Le site est accessible gratuitement à tout utilisateur disposant d&apos;un accès à Internet. L&apos;éditeur ne peut être tenu responsable de tout dysfonctionnement du site ou des interruptions de service. L&apos;utilisateur du site s&apos;engage à ne pas perturber le bon fonctionnement du site, ni à tenter de porter atteinte à son intégrité.
      </p>

      <h2 className='text-2xl font-semibold mb-4'>7. Politique de confidentialité :</h2>
      <p className='mb-4'>
        Ce site ne collecte ni ne stocke de données personnelles. Toutefois, si des formulaires ou des outils de suivi sont ajoutés à l&apos;avenir, les informations recueillies seront uniquement utilisées dans le cadre du service demandé (réponse à une demande d&apos;information, envoi d&apos;une newsletter, etc.).
      </p>
      <p className='mb-4'>
        En conformité avec le Règlement Général sur la Protection des Données (RGPD), les utilisateurs disposent des droits suivants :
        <ul className='list-disc list-inside'>
          <li>Droit d&apos;accès : obtenir une copie de vos données personnelles.</li>
          <li>Droit de rectification : corriger des données inexactes ou incomplètes.</li>
          <li>Droit à l&apos;effacement : demander la suppression de vos données.</li>
          <li>Droit d&apos;opposition : refuser le traitement de vos données.</li>
          <li>Droit à la portabilité : récupérer vos données sous une forme transférable.</li>
        </ul>
        Pour exercer ces droits, veuillez contacter <a href='mailto:maxime.petit2605@gmail.com' className='text-blue-500'>maxime.petit2605@gmail.com</a>.
      </p>

      <h2 className='text-2xl font-semibold mb-4'>8. Commerce en ligne :</h2>
      <p className='mb-4'>
        Aucune vente en ligne n&apos;est effectuée sur ce site.
      </p>
    </div>
  );
}

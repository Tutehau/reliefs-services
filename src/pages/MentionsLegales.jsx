import styles from './Legal.module.css'

export default function MentionsLegales() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <span className="section-label reveal-anim s1">Informations légales</span>
          <h1 className={`${styles.heroTitle} reveal-anim s2`}>Mentions Légales</h1>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <div className={styles.doc}>
            <div className={styles.block}>
              <h2>1. Éditeur du site</h2>
              <p>Le présent site est édité par :</p>
              <ul>
                <li><strong>Dénomination sociale :</strong> Reliefs Services</li>
                <li><strong>Forme juridique :</strong> Entreprise individuelle</li>
                <li><strong>Siège social :</strong> Saumur, 49400 Maine-et-Loire, France</li>
                <li><strong>SIREN :</strong> 123 456 789</li>
                <li><strong>SIRET :</strong> 123 456 789 00012</li>
                <li><strong>Email :</strong> contact@reliefs-services.com</li>
                <li><strong>Téléphone :</strong> +33 (0)2 49 00 00 00</li>
                <li><strong>Directeur de publication :</strong> Gérant de Reliefs Services</li>
              </ul>
            </div>

            <div className={styles.block}>
              <h2>2. Hébergement</h2>
              <p>Ce site est hébergé par :</p>
              <ul>
                <li><strong>Raison sociale :</strong> OVH SAS</li>
                <li><strong>Adresse :</strong> 2 rue Kellermann, 59100 Roubaix, France</li>
                <li><strong>Site web :</strong> www.ovhcloud.com</li>
              </ul>
            </div>

            <div className={styles.block}>
              <h2>3. Propriété intellectuelle</h2>
              <p>
                L'ensemble du contenu de ce site (textes, images, photographies, vidéos, graphismes, logos, icônes, sons) est la propriété exclusive de Reliefs Services ou de ses partenaires. Toute reproduction, distribution, modification ou utilisation non autorisée est interdite et constitue une contrefaçon sanctionnée par le Code de la propriété intellectuelle.
              </p>
            </div>

            <div className={styles.block}>
              <h2>4. Limitation de responsabilité</h2>
              <p>
                Reliefs Services s'efforce d'assurer l'exactitude et la mise à jour des informations publiées sur ce site. Toutefois, Reliefs Services ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations disponibles sur ce site et décline toute responsabilité pour toute omission ou erreur.
              </p>
            </div>

            <div className={styles.block}>
              <h2>5. Liens hypertextes</h2>
              <p>
                Ce site peut contenir des liens vers d'autres sites internet. Reliefs Services n'a aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu. La création de liens vers ce site est soumise à l'autorisation préalable de Reliefs Services.
              </p>
            </div>

            <div className={styles.block}>
              <h2>6. Droit applicable</h2>
              <p>
                Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

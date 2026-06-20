import styles from './Legal.module.css'

export default function CGU() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <span className="section-label reveal-anim s1">Conditions générales</span>
          <h1 className={`${styles.heroTitle} reveal-anim s2`}>Conditions Générales d'Utilisation</h1>
        </div>
      </section>
      <section className={styles.content}>
        <div className="container">
          <div className={styles.doc}>
            <div className={styles.block}>
              <h2>1. Objet</h2>
              <p>Les présentes Conditions Générales d'Utilisation (CGU) régissent l'accès et l'utilisation du site reliefs-services.com édité par Reliefs Services. Toute utilisation du site vaut acceptation des présentes CGU.</p>
            </div>
            <div className={styles.block}>
              <h2>2. Accès au site</h2>
              <p>L'accès au site est gratuit. Reliefs Services se réserve le droit de modifier, suspendre ou interrompre l'accès au site à tout moment et sans préavis, notamment pour des raisons de maintenance.</p>
            </div>
            <div className={styles.block}>
              <h2>3. Propriété intellectuelle</h2>
              <p>Tous les éléments du site (textes, images, logos, graphismes, créations artisanales photographiées) sont protégés par le droit de la propriété intellectuelle. Toute reproduction sans autorisation préalable est strictement interdite.</p>
            </div>
            <div className={styles.block}>
              <h2>4. Commandes en ligne</h2>
              <p>Les commandes passées via le site sont soumises à nos Conditions Générales de Vente disponibles sur demande. Chaque commande de pièce personnalisée fait l'objet d'une confirmation et d'un bon pour accord avant production.</p>
            </div>
            <div className={styles.block}>
              <h2>5. Données personnelles</h2>
              <p>Le traitement de vos données personnelles est régi par notre Politique de Confidentialité, accessible sur ce site. Conformément au RGPD, vous disposez de droits sur vos données que vous pouvez exercer en nous contactant.</p>
            </div>
            <div className={styles.block}>
              <h2>6. Loi applicable et juridiction</h2>
              <p>Les présentes CGU sont soumises au droit français. En cas de litige, les tribunaux compétents du ressort de Saumur seront seuls compétents. Dernière mise à jour : juin 2025.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

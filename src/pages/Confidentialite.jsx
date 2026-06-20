import styles from './Legal.module.css'

export default function Confidentialite() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <span className="section-label reveal-anim s1">Protection des données</span>
          <h1 className={`${styles.heroTitle} reveal-anim s2`}>Politique de Confidentialité</h1>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <div className={styles.doc}>
            <div className={styles.block}>
              <h2>1. Responsable du traitement</h2>
              <p>
                Reliefs Services, entreprise individuelle sise à Saumur (49400), est responsable du traitement de vos données personnelles collectées via ce site web.
              </p>
            </div>

            <div className={styles.block}>
              <h2>2. Données collectées et finalités</h2>
              <div className={styles.tableWrap}>
                <table>
                  <thead>
                    <tr>
                      <th>Type de données</th>
                      <th>Finalité</th>
                      <th>Durée de conservation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Nom, prénom, email</td>
                      <td>Réponse aux demandes de contact</td>
                      <td>3 ans après dernier contact</td>
                    </tr>
                    <tr>
                      <td>Données de commande</td>
                      <td>Gestion des commandes et livraisons</td>
                      <td>10 ans (obligations comptables)</td>
                    </tr>
                    <tr>
                      <td>Données de navigation</td>
                      <td>Amélioration du site (analytics)</td>
                      <td>13 mois maximum</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className={styles.block}>
              <h2>3. Base légale du traitement</h2>
              <ul>
                <li>Exécution d'un contrat pour les commandes</li>
                <li>Intérêt légitime pour les demandes de contact</li>
                <li>Consentement pour les cookies analytiques</li>
                <li>Obligation légale pour les données comptables</li>
              </ul>
            </div>

            <div className={styles.block}>
              <h2>4. Cookies</h2>
              <div className={styles.tableWrap}>
                <table>
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Nom</th>
                      <th>Durée</th>
                      <th>Finalité</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Essentiel</td>
                      <td>session_id</td>
                      <td>Session</td>
                      <td>Fonctionnement du site</td>
                    </tr>
                    <tr>
                      <td>Analytique</td>
                      <td>_ga, _gid</td>
                      <td>2 ans / 24h</td>
                      <td>Statistiques de visite (Google Analytics)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className={styles.block}>
              <h2>5. Vos droits (RGPD)</h2>
              <p>Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants :</p>
              <ul>
                <li><strong>Droit d'accès</strong> — obtenir une copie de vos données</li>
                <li><strong>Droit de rectification</strong> — corriger vos données inexactes</li>
                <li><strong>Droit à l'effacement</strong> — demander la suppression de vos données</li>
                <li><strong>Droit à la limitation</strong> — restreindre le traitement de vos données</li>
                <li><strong>Droit à la portabilité</strong> — recevoir vos données dans un format lisible</li>
                <li><strong>Droit d'opposition</strong> — vous opposer au traitement</li>
              </ul>
            </div>

            <div className={styles.block}>
              <h2>6. Contact & réclamations</h2>
              <p>
                Pour exercer vos droits ou pour toute question relative à la protection de vos données, contactez-nous à :<br />
                <strong>contact@reliefs-services.com</strong>
              </p>
              <p>
                En cas de réclamation non résolue, vous pouvez saisir la CNIL (www.cnil.fr).
              </p>
            </div>

            <div className={styles.block}>
              <h2>7. Modifications</h2>
              <p>
                Cette politique de confidentialité peut être modifiée à tout moment. La version en vigueur est celle publiée sur ce site. Dernière mise à jour : juin 2025.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

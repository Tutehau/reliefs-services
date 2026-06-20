import { Link } from 'react-router-dom'
import { ArrowRight, Building, Brush, Package, Handshake } from 'lucide-react'
import styles from './Professionnels.module.css'

const offres = [
  {
    icon: <Building size={22} />,
    title: 'Hôtels & Restaurants',
    desc: 'Faïences murales sur-mesure, numéros de chambres personnalisés, art de table exclusif. Donnez à votre établissement une identité visuelle mémorable et cohérente.',
    items: ['Commandes en grandes séries', 'Personnalisation par établissement', 'Pose et installation disponible'],
  },
  {
    icon: <Brush size={22} />,
    title: 'Décorateurs & Architectes',
    desc: "Votre vision, notre exécution. Nous travaillons main dans la main avec les professionnels du design d'intérieur pour réaliser des pièces qui subliment chaque projet.",
    items: ['Prototypes et maquettes', 'Délais prioritaires', 'Tarifs préférentiels sur devis'],
  },
  {
    icon: <Package size={22} />,
    title: 'Commerce & Retail',
    desc: "Revendez nos collections sous votre enseigne. Nous proposons des partenariats revendeurs avec des marges compétitives et un stock permanent.",
    items: ['Accès catalogue revendeur', 'Prix grossiste dégressifs', 'Stock consacré'],
  },
  {
    icon: <Handshake size={22} />,
    title: 'Collectivités & Événements',
    desc: "Communes, offices de tourisme, organisateurs d'événements : nos créations deviennent vos cadeaux protocolaires ou votre signalétique artistique.",
    items: ['Cadeaux d\'entreprise personnalisés', 'Signalétique artistique', 'Objets commémoratifs'],
  },
]

const references = [
  {
    img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80&auto=format&fit=crop',
    label: 'Hôtellerie de luxe',
  },
  {
    img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80&auto=format&fit=crop',
    label: 'Restauration gastronomique',
  },
  {
    img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80&auto=format&fit=crop',
    label: 'Design d\'intérieur',
  },
]

export default function Professionnels() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80&auto=format&fit=crop"
            alt="Projets professionnels"
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <span className="section-label reveal-anim s1">Espace Professionnels</span>
          <h1 className={`${styles.heroTitle} reveal-anim s2`}>
            L'excellence artisanale<br />
            <em>au service de vos projets</em>
          </h1>
          <p className={`${styles.heroSub} reveal-anim s3`}>
            Hôteliers, architectes d'intérieur, restaurateurs, décorateurs — nous sommes votre partenaire artisanal de confiance pour des créations qui font la différence.
          </p>
          <div className="reveal-anim s4">
            <Link to="/contact" className="btn-primary">
              Discuter de votre projet
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* OFFRES */}
      <section className={styles.offres}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="section-label" data-reveal>Nos Offres</span>
            <h2 className={styles.sectionTitle} data-reveal data-delay="2">
              Une solution pour <br />
              <span className="shimmer-text">chaque professionnel</span>
            </h2>
          </div>

          <div className={styles.offresGrid}>
            {offres.map((o, i) => (
              <div key={o.title} className={`card-lux ${styles.offreCard}`} data-reveal data-delay={String((i % 2) + 1)}>
                <div className={styles.offreIcon}>{o.icon}</div>
                <h3 className={styles.offreTitle}>{o.title}</h3>
                <p className={styles.offreDesc}>{o.desc}</p>
                <ul className={styles.offreItems}>
                  {o.items.map((item) => (
                    <li key={item}>
                      <span className={styles.bullet} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REFERENCES */}
      <section className={styles.references}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="section-label" data-reveal>Références</span>
            <h2 className={styles.sectionTitle} data-reveal data-delay="2">
              Ils nous font confiance
            </h2>
          </div>
          <div className={styles.refGrid}>
            {references.map((r, i) => (
              <div key={r.label} className={styles.refCard} data-reveal data-delay={String(i + 1)}>
                <div className={styles.refImg}>
                  <img src={r.img} alt={r.label} loading="lazy" />
                  <div className={styles.refOverlay} />
                </div>
                <span className={styles.refLabel}>{r.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVANTAGES */}
      <section className={styles.avantages}>
        <div className="container">
          <div className={styles.avantagesInner}>
            <div className={styles.avantagesText} data-reveal>
              <span className="section-label">Pourquoi nous</span>
              <h2 className={styles.sectionTitle}>
                Le partenaire que<br />
                <em>vous méritez</em>
              </h2>
              <p>
                Travailler avec Reliefs Services, c'est choisir un artisan qui comprend les enjeux du monde professionnel : délais, cohérence visuelle, durabilité, et bien sûr, un rapport qualité-prix irréprochable.
              </p>
              <p>
                Nos clients professionnels bénéficient d'un interlocuteur unique, d'un accès prioritaire aux créneaux de production, et d'une garantie satisfaction sur chaque commande.
              </p>
              <Link to="/contact" className="btn-primary" style={{ marginTop: '0.5rem' }}>
                Demander un devis
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className={styles.avantagesList} data-reveal data-delay="2">
              {[
                { n: '01', t: 'Devis sous 48h', d: 'Une réponse rapide et détaillée pour chaque demande professionnelle.' },
                { n: '02', t: 'Tarifs dégressifs', d: 'Plus votre commande est importante, meilleur est votre tarif unitaire.' },
                { n: '03', t: 'Interlocuteur dédié', d: 'Un artisan référent suit votre projet de A à Z, sans intermédiaire.' },
                { n: '04', t: 'Garantie pièce', d: 'Chaque création est garantie conforme ou remplacée, sans délai.' },
              ].map((a) => (
                <div key={a.n} className={styles.avantageItem}>
                  <span className={styles.avantageNum}>{a.n}</span>
                  <div>
                    <strong className={styles.avantageT}>{a.t}</strong>
                    <p className={styles.avantageD}>{a.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaInner} data-reveal>
            <h2 className={styles.ctaTitle}>Parlons de votre projet</h2>
            <p className={styles.ctaDesc}>
              Quel que soit votre secteur, votre volume ou votre budget, nous avons une solution adaptée. Contactez-nous pour un échange sans engagement.
            </p>
            <Link to="/contact" className="btn-primary">
              Prendre contact
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

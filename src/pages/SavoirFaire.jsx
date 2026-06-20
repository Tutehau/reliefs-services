import { Link } from 'react-router-dom'
import { ArrowRight, Flame, Brush, Eye, Heart } from 'lucide-react'
import styles from './SavoirFaire.module.css'

const etapes = [
  {
    num: '01',
    icon: <Eye size={20} />,
    title: 'L\'Écoute & la Vision',
    desc: 'Tout commence par une conversation. Nous prenons le temps de comprendre votre projet, votre univers, vos contraintes. C\'est cette écoute attentive qui garantit une création parfaitement accordée à vos attentes.',
    img: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=700&q=80&auto=format&fit=crop',
  },
  {
    num: '02',
    icon: <Brush size={20} />,
    title: 'La Conception Artisanale',
    desc: 'Chaque pièce naît sur notre plan de travail, façonnée à la main. Nous sélectionnons les terres, les engobes et les émaux avec soin. La forme prend vie dans le silence de notre atelier saumurois.',
    img: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=700&q=80&auto=format&fit=crop',
  },
  {
    num: '03',
    icon: <Flame size={20} />,
    title: 'La Cuisson & la Transformation',
    desc: 'C\'est le feu qui révèle la vraie nature de la pièce. Une cuisson maîtrisée à haute température fixe les couleurs pour l\'éternité. Chaque sortie de four est une petite naissance.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80&auto=format&fit=crop',
  },
  {
    num: '04',
    icon: <Heart size={20} />,
    title: 'La Livraison & l\'Après',
    desc: 'Votre création est conditionnée avec le même soin qu\'elle a été faite. Nous l\'accompagnons d\'un certificat d\'authenticité et restons disponibles pour tout question ou projet futur.',
    img: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=700&q=80&auto=format&fit=crop',
  },
]

const valeurs = [
  {
    title: 'Authenticité',
    desc: 'Aucune pièce n\'est identique à une autre. L\'œil de l\'artisan, la main qui façonne, le feu qui transforme — tout concourt à une unicité irréductible.',
  },
  {
    title: 'Durabilité',
    desc: 'Nos matériaux et nos techniques sont choisis pour traverser le temps. Une pièce Reliefs Services est faite pour être transmise, pas remplacée.',
  },
  {
    title: 'Dialogue',
    desc: 'Nous ne livrons pas un produit, nous co-créons avec vous. Votre vision est au cœur de notre processus, du premier échange à la dernière touche.',
  },
  {
    title: 'Excellence',
    desc: 'Chaque étape est exécutée avec une exigence absolue. Nous ne livrons que ce dont nous sommes fiers. Votre satisfaction n\'est pas un objectif, c\'est notre minimum.',
  },
]

export default function SavoirFaire() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <img
            src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1920&q=80&auto=format&fit=crop"
            alt="Atelier artisan"
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <span className="section-label reveal-anim s1">Notre Processus</span>
          <h1 className={`${styles.heroTitle} reveal-anim s2`}>
            L'Art transmis,<br />
            <em>réinventé</em>
          </h1>
          <p className={`${styles.heroSub} reveal-anim s3`}>
            Derrière chaque pièce se cache un processus rigoureux, empreint de passion et de respect pour les matières. Découvrez comment naît une création Reliefs Services.
          </p>
        </div>
      </section>

      {/* PROCESSUS */}
      <section className={styles.processus}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="section-label" data-reveal>Le Processus</span>
            <h2 className={styles.sectionTitle} data-reveal data-delay="2">
              De votre idée à <br />
              <span className="shimmer-text">votre chef-d'œuvre</span>
            </h2>
          </div>

          <div className={styles.etapesList}>
            {etapes.map((e, i) => (
              <div key={e.num} className={`${styles.etape} ${i % 2 !== 0 ? styles.etapeReverse : ''}`} data-reveal data-delay={String((i % 3) + 1)}>
                <div className={styles.etapeVisual}>
                  <img src={e.img} alt={e.title} loading="lazy" />
                  <div className={styles.etapeNum}>{e.num}</div>
                </div>
                <div className={styles.etapeContent}>
                  <div className={styles.etapeIcon}>{e.icon}</div>
                  <h3 className={styles.etapeTitle}>{e.title}</h3>
                  <p className={styles.etapeDesc}>{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MATERIAUX */}
      <section className={styles.materiaux}>
        <div className="container">
          <div className={styles.materiauxInner}>
            <div className={styles.materiauxText} data-reveal>
              <span className="section-label">Matériaux</span>
              <h2 className={styles.sectionTitle}>
                La noblesse <br />
                <em>de la matière</em>
              </h2>
              <p>
                Nous ne travaillons qu'avec des terres de qualité artisanale, sourcées auprès de producteurs français. Nos émaux et engobes sont choisis pour leur intensité chromatique et leur inaltérabilité dans le temps.
              </p>
              <p>
                La faïence de Saumur bénéficie d'une tradition séculaire. Nous en sommes les gardiens et les innovateurs : fidèles aux techniques d'hier, ouverts aux formes d'aujourd'hui.
              </p>
            </div>
            <div className={styles.materiauxVisual} data-reveal data-delay="2">
              <img
                src="https://images.unsplash.com/photo-1508780709619-79562169bc64?w=800&q=80&auto=format&fit=crop"
                alt="Matériaux artisanaux"
              />
            </div>
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className={styles.valeurs}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="section-label" data-reveal>Nos Valeurs</span>
            <h2 className={styles.sectionTitle} data-reveal data-delay="2">
              Ce qui nous guide
            </h2>
          </div>
          <div className={styles.valeursGrid}>
            {valeurs.map((v, i) => (
              <div key={v.title} className={`card-lux ${styles.valeurCard}`} data-reveal data-delay={String((i % 4) + 1)}>
                <h3 className={styles.valeurTitle}>{v.title}</h3>
                <p className={styles.valeurDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaInner} data-reveal>
            <h2 className={styles.ctaTitle}>Prêt à collaborer ?</h2>
            <p className={styles.ctaDesc}>
              Chaque projet est une rencontre. Chaque création, une histoire partagée. Commençons ensemble.
            </p>
            <div className={styles.ctaActions}>
              <Link to="/contact" className="btn-primary">
                Parler de mon projet
                <ArrowRight size={16} />
              </Link>
              <Link to="/boutique" className="btn-outline">
                Voir la boutique
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

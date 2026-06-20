import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Filter, ShoppingBag } from 'lucide-react'
import styles from './Boutique.module.css'

const categories = [
  { id: 'all', label: 'Tout voir' },
  { id: 'cadres', label: 'Cadres' },
  { id: 'faiences', label: 'Faïences' },
  { id: 'mosaiques', label: 'Mosaïques' },
  { id: 'table', label: 'Art de la Table' },
  { id: 'exterieurs', label: 'Extérieurs' },
]

const products = [
  {
    id: 1, cat: 'cadres',
    title: 'Cadre Toile Relief Personnalisé',
    subtitle: 'Format 30×40 cm — Vos photos',
    price: '89',
    tag: 'Personnalisable',
    img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 2, cat: 'cadres',
    title: 'Cadre Faïence Double Relief',
    subtitle: 'Format 20×25 cm',
    price: '120',
    tag: 'Bestseller',
    img: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 3, cat: 'faiences',
    title: 'Panneau Faïence Mural Florentino',
    subtitle: 'Série de 6 carreaux 15×15 cm',
    price: '145',
    tag: 'Fait Main',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 4, cat: 'faiences',
    title: 'Carreau Faïence Motif Végétal',
    subtitle: 'Format 20×20 cm — Vendu à l\'unité',
    price: '38',
    tag: 'Nouveau',
    img: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 5, cat: 'mosaiques',
    title: 'Mosaïque Tableau Méditerranée',
    subtitle: 'Format 40×40 cm',
    price: '195',
    tag: 'Exclusif',
    img: 'https://images.unsplash.com/photo-1547380664-b37b3c0e0c01?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 6, cat: 'mosaiques',
    title: 'Mosaïque Murale Sur-Mesure',
    subtitle: 'Dimensions selon projet',
    price: 'Sur devis',
    tag: 'Personnalisable',
    img: 'https://images.unsplash.com/photo-1508780709619-79562169bc64?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 7, cat: 'table',
    title: 'Dessous-de-Plat Faïence Proven\u00e7ale',
    subtitle: 'Format 19×19 cm',
    price: '45',
    tag: 'Fait Main',
    img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 8, cat: 'table',
    title: 'Set de 4 Sous-Verres Décoration',
    subtitle: 'Format 10×10 cm — Boîte cadeau',
    price: '62',
    tag: 'Bestseller',
    img: 'https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 9, cat: 'exterieurs',
    title: 'Plaque Numéro de Maison',
    subtitle: 'Format 15×15 cm — Chiffre au choix',
    price: '55',
    tag: 'Personnalisable',
    img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80&auto=format&fit=crop',
  },
]

export default function Boutique() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all'
    ? products
    : products.filter((p) => p.cat === active)

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className="container">
          <span className="section-label reveal-anim s1">Notre Collection</span>
          <h1 className={`${styles.heroTitle} reveal-anim s2`}>
            La Boutique
          </h1>
          <p className={`${styles.heroSub} reveal-anim s3`}>
            Chaque pièce est fabriquée à la main dans notre atelier de Saumur. Personnalisable, unique, faite pour durer.
          </p>
        </div>
        <div className={styles.heroDeco} />
      </section>

      {/* FILTERS */}
      <section className={styles.filterSection}>
        <div className="container">
          <div className={styles.filterBar}>
            <Filter size={14} className={styles.filterIcon} />
            {categories.map((c) => (
              <button
                key={c.id}
                className={`${styles.filterBtn} ${active === c.id ? styles.filterActive : ''}`}
                onClick={() => setActive(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className={styles.gridSection}>
        <div className="container">
          <div className={styles.productsGrid}>
            {filtered.map((p, i) => (
              <article
                key={p.id}
                className={`card-lux ${styles.card}`}
                data-reveal
                data-delay={String((i % 3) + 1)}
              >
                <div className={styles.cardImg}>
                  <img src={p.img} alt={p.title} loading="lazy" />
                  <span className={styles.cardTag}>{p.tag}</span>
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{p.title}</h3>
                  <p className={styles.cardSub}>{p.subtitle}</p>
                  <div className={styles.cardFooter}>
                    <span className={styles.cardPrice}>
                      {p.price === 'Sur devis' ? 'Sur devis' : `${p.price} €`}
                    </span>
                    <Link to="/contact" className={styles.cardCta}>
                      <ShoppingBag size={14} />
                      Commander
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.customCta} data-reveal>
            <div className={styles.customCtaInner}>
              <h3 className={styles.customCtaTitle}>Vous avez un projet unique ?</h3>
              <p className={styles.customCtaDesc}>
                Nos créations sur-mesure donnent vie à vos idées les plus singulières. Parlez-nous de votre projet.
              </p>
              <Link to="/contact" className="btn-primary">
                Demander un devis personnalisé
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

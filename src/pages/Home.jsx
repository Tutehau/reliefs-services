import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Award, Palette, Package, Star, ChevronDown } from 'lucide-react'
import styles from './Home.module.css'

/* ── PRODUCTS ──────────────────────────────────────────── */
const products = [
  {
    id: 1,
    title: 'Cadres en Toile',
    desc: "L'image qui vous est chère, sublimée par un cadre en relief façonné à la main. Chaque contour raconte une histoire.",
    img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=700&q=80&auto=format&fit=crop',
    href: '/boutique',
  },
  {
    id: 2,
    title: 'Faïences Murales',
    desc: "Des carreaux d'exception qui transforment vos intérieurs en galerie. Motifs uniques, couleurs inaltérables.",
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80&auto=format&fit=crop',
    href: '/boutique',
  },
  {
    id: 3,
    title: 'Mosaïques',
    desc: "L'art ancestral de la mosaïque revisité par un artisan contemporain. Pièces monumentales ou tableaux intimistes.",
    img: 'https://images.unsplash.com/photo-1547380664-b37b3c0e0c01?w=700&q=80&auto=format&fit=crop',
    href: '/boutique',
  },
  {
    id: 4,
    title: 'Art de la Table',
    desc: "Dessous-de-plats, sous-verres décoratifs — chaque repas devient une expérience esthétique mémorable.",
    img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80&auto=format&fit=crop',
    href: '/boutique',
  },
  {
    id: 5,
    title: 'Numéros de Maison',
    desc: "Offrez à votre façade une identité unique. Plaques personnalisées en faïence, émaillées dans les teintes de votre choix.",
    img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=700&q=80&auto=format&fit=crop',
    href: '/boutique',
  },
  {
    id: 6,
    title: 'Créations Sur-Mesure',
    desc: "Votre vision, notre savoir-faire. Nous concevons ensemble la pièce unique qui habitera votre espace avec âme.",
    img: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=700&q=80&auto=format&fit=crop',
    href: '/contact',
  },
]

/* ── STATS ─────────────────────────────────────────────── */
const stats = [
  { value: 15, suffix: '+', label: 'Années de Savoir-Faire' },
  { value: 2000, suffix: '+', label: 'Pièces Créées' },
  { value: 100, suffix: '%', label: 'Fait Main en France' },
  { value: 98, suffix: '%', label: 'Clients Satisfaits' },
]

/* ── TESTIMONIALS ──────────────────────────────────────── */
const testimonials = [
  {
    text: "Un cadre en relief de mon mariage. L'artisan a su capturer l'émotion au-delà de la simple photo. Une pièce que je chéris chaque jour.",
    author: 'Marie-Claire T.',
    location: 'Angers',
  },
  {
    text: "La mosaïque pour notre cuisine dépasse tout ce que j'avais imaginé. Les couleurs, la précision du travail — c'est une œuvre d'art fonctionnelle.",
    author: 'Pierre & Sophie D.',
    location: 'Tours',
  },
  {
    text: "Les faïences de ma salle de bain ont transformé un espace banal en véritable écrin. Un investissement que je recommande les yeux fermés.",
    author: 'Jean-François M.',
    location: 'Nantes',
  },
]

/* ── COUNTER HOOK ───────────────────────────────────────── */
function useCounter(target, duration = 2000, active = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration, active])
  return count
}

function StatCard({ value, suffix, label }) {
  const ref = useRef(null)
  const [active, setActive] = useState(false)
  const count = useCounter(value, 2000, active)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setActive(true); obs.disconnect() }
    }, { threshold: 0.4 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className={styles.statCard} data-reveal>
      <span className={styles.statValue}>{count}{suffix}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  )
}

/* ── HOME PAGE ─────────────────────────────────────────── */
export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <img
            src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1920&q=85&auto=format&fit=crop"
            alt="Atelier artisan relief"
            className={styles.heroBgImg}
          />
          <div className={styles.heroOverlay} />
        </div>

        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroInner}>
            <span className={`section-label reveal-anim s1`}>Artisan Français · Saumur</span>
            <h1 className={`${styles.heroTitle} reveal-anim s2`}>
              L'art de la mise<br />
              <em className={styles.heroTitleItalic}>en relief</em>
            </h1>
            <p className={`${styles.heroSub} reveal-anim s3`}>
              Des créations artisanales uniques qui transforment vos espaces en galeries d'art vivantes. Faïences, mosaïques, cadres — façonnés à la main, avec âme.
            </p>
            <div className={`${styles.heroActions} reveal-anim s4`}>
              <Link to="/boutique" className="btn-primary">
                Découvrir la boutique
                <ArrowRight size={16} />
              </Link>
              <Link to="/savoir-faire" className="btn-outline">
                Notre savoir-faire
              </Link>
            </div>
          </div>
        </div>

        <a href="#decouvrir" className={styles.scrollHint} aria-label="Défiler">
          <ChevronDown size={20} />
        </a>
      </section>

      {/* ── MANIFESTE ────────────────────────────────────── */}
      <section id="decouvrir" className={styles.manifeste}>
        <div className="container">
          <div className={styles.manifesteInner} data-reveal>
            <span className="line-deco" style={{ margin: '0 auto 2rem' }} />
            <blockquote className={styles.manifesteQuote}>
              "Chaque pièce que nous créons est une conversation entre la matière et la mémoire. Entre vos souvenirs et notre savoir-faire. Entre ce que vous avez vécu et ce que vous souhaitez voir chaque jour."
            </blockquote>
            <cite className={styles.manifesteCite}>— L'Artisan, Reliefs Services</cite>
          </div>
        </div>
      </section>

      {/* ── PRODUITS ─────────────────────────────────────── */}
      <section className={styles.products}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="section-label" data-reveal>Nos Collections</span>
            <h2 className={styles.sectionTitle} data-reveal data-delay="2">
              Des créations qui <br />
              <span className="shimmer-text">habitent vos espaces</span>
            </h2>
            <p className={styles.sectionDesc} data-reveal data-delay="3">
              Six univers d'excellence artisanale, personnalisables à l'infini. De la commande au livraison, chaque étape est un acte d'amour pour votre intérieur.
            </p>
          </div>

          <div className={styles.productsGrid}>
            {products.map((p, i) => (
              <Link
                to={p.href}
                key={p.id}
                className={`card-lux ${styles.productCard}`}
                data-reveal
                data-delay={String((i % 3) + 1)}
              >
                <div className={styles.productImg}>
                  <img src={p.img} alt={p.title} loading="lazy" />
                </div>
                <div className={styles.productBody}>
                  <h3 className={styles.productTitle}>{p.title}</h3>
                  <p className={styles.productDesc}>{p.desc}</p>
                  <span className={styles.productLink}>
                    Explorer <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className={styles.productsCta} data-reveal>
            <Link to="/boutique" className="btn-primary">
              Voir toute la boutique
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SAVOIR-FAIRE TEASER ───────────────────────────── */}
      <section className={styles.savoirFaire}>
        <div className="container">
          <div className={styles.savoirFaireInner}>
            <div className={styles.savoirFaireText}>
              <span className="section-label" data-reveal>Savoir-Faire</span>
              <h2 className={styles.savoirFaireTitle} data-reveal data-delay="2">
                Un artisan, <br />une passion, <br />
                <em>une promesse</em>
              </h2>
              <p className={styles.savoirFaireDesc} data-reveal data-delay="3">
                Depuis plus de 15 ans, nous perpétuons les traditions artisanales françaises tout en les réinventant avec un regard contemporain. Chaque pièce quitte notre atelier saumurois avec la certitude d'avoir été façonnée dans le respect total de votre vision.
              </p>
              <ul className={styles.savoirFaireFeats} data-reveal data-delay="4">
                {[
                  'Matériaux nobles, sourcés en France',
                  'Personnalisation totale de chaque pièce',
                  'Cuisson artisanale à haute température',
                  'Délai de livraison maîtrisé',
                ].map((feat) => (
                  <li key={feat}>
                    <Award size={14} />
                    {feat}
                  </li>
                ))}
              </ul>
              <div data-reveal data-delay="5">
                <Link to="/savoir-faire" className="btn-outline">
                  Découvrir le processus
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className={styles.savoirFaireVisual} data-reveal data-delay="2">
              <div className={styles.savoirFaireImgGrid}>
                <img
                  src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&q=80&auto=format&fit=crop"
                  alt="Artisan au travail"
                  className={styles.imgMain}
                />
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80&auto=format&fit=crop"
                  alt="Faïence artisanale"
                  className={styles.imgSecond}
                />
                <div className={styles.imgBadge}>
                  <Palette size={18} />
                  <span>Fait Main</span>
                  <span>en France</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────── */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PERSONNALISATION ──────────────────────────────── */}
      <section className={styles.perso}>
        <div className={styles.persoBg}>
          <img
            src="https://images.unsplash.com/photo-1547380664-b37b3c0e0c01?w=1600&q=80&auto=format&fit=crop"
            alt="Mosaïque sur mesure"
          />
          <div className={styles.persoOverlay} />
        </div>
        <div className={`container ${styles.persoContent}`}>
          <span className="section-label" data-reveal>Personnalisation</span>
          <h2 className={styles.persoTitle} data-reveal data-delay="2">
            Votre idée. <br />Notre excellence.
          </h2>
          <p className={styles.persoDesc} data-reveal data-delay="3">
            Un cadre en relief de vos souvenirs de voyage. Une mosaïque hors du commun sur la crédence de votre cuisine. Une plaque de maison aux couleurs de vos rêves. Tout est possible.
          </p>
          <div data-reveal data-delay="4">
            <Link to="/contact" className="btn-primary">
              Démarrer mon projet
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <section className={styles.testimonials}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="section-label" data-reveal>Témoignages</span>
            <h2 className={styles.sectionTitle} data-reveal data-delay="2">
              Ils nous ont fait confiance
            </h2>
          </div>

          <div className={styles.testimonialSlider}>
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`${styles.testimonialCard} ${i === activeTestimonial ? styles.testimonialActive : ''}`}
              >
                <div className={styles.testimonialStars}>
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={14} fill="var(--accent)" color="var(--accent)" />
                  ))}
                </div>
                <p className={styles.testimonialText}>&ldquo;{t.text}&rdquo;</p>
                <div className={styles.testimonialAuthor}>
                  <strong>{t.author}</strong>
                  <span>{t.location}</span>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.testimonialDots}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === activeTestimonial ? styles.dotActive : ''}`}
                onClick={() => setActiveTestimonial(i)}
                aria-label={`Témoignage ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────── */}
      <section className={styles.ctaFinal}>
        <div className="container">
          <div className={styles.ctaFinalInner} data-reveal>
            <Package size={32} className={styles.ctaIcon} />
            <h2 className={styles.ctaFinalTitle}>
              Prêt à sublimer votre intérieur ?
            </h2>
            <p className={styles.ctaFinalDesc}>
              Explorez notre boutique, commandez en ligne, ou contactez-nous pour un projet sur-mesure. Livraison soignée partout en France.
            </p>
            <div className={styles.ctaFinalActions}>
              <Link to="/boutique" className="btn-primary">
                Voir la boutique
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-outline">
                Projet personnalisé
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'
import styles from './Contact.module.css'

const sujets = [
  'Commande boutique',
  'Projet personnalisé',
  'Partenariat professionnel',
  'Informations générales',
  'Autre',
]

const faq = [
  {
    q: 'Quel est le délai de fabrication d\'une pièce personnalisée ?',
    a: 'Les délais varient selon la complexité de la pièce : de 2 semaines pour un cadre simple, à 6-8 semaines pour une mosaïque murale ou un panneau de faïence complexe. Nous vous communiquons un délai précis lors de la validation de votre commande.',
  },
  {
    q: 'Puis-je venir visiter l\'atelier ?',
    a: 'Absolument ! Nous accueillons sur rendez-vous au sein de notre atelier à Saumur. Une visite permet de mieux définir votre projet et de voir nos créations en situation. Contactez-nous pour convenir d\'un créneau.',
  },
  {
    q: 'La livraison est-elle possible dans toute la France ?',
    a: 'Oui, nous expédions nos créations dans toute la France métropolitaine, avec un emballage spécialement conçu pour protéger les pièces fragiles. Des livraisons à l\'étranger sont possibles sur demande.',
  },
  {
    q: 'Comment puis-je personnaliser une pièce de la boutique ?',
    a: "La plupart de nos pièces sont personnalisables : choix des couleurs d'émail, des motifs, des dimensions, ou encore l'intégration d'une photo ou d'un texte. Contactez-nous avec votre idée et nous étudierons les possibilités.",
  },
]

export default function Contact() {
  const [form, setForm] = useState({ nom: '', email: '', tel: '', sujet: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState({})
  const [openFaq, setOpenFaq] = useState(null)

  const validate = () => {
    const e = {}
    if (!form.nom.trim()) e.nom = 'Votre nom est requis'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Email invalide'
    if (!form.sujet) e.sujet = 'Choisissez un sujet'
    if (!form.message.trim() || form.message.length < 20) e.message = 'Message trop court (20 car. min.)'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length > 0) { setErrors(e2); return }
    setLoading(true)
    await new Promise((r) => setTimeout(r, 2000))
    setLoading(false)
    setSent(true)
  }

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className="container">
          <span className="section-label reveal-anim s1">Parlons-nous</span>
          <h1 className={`${styles.heroTitle} reveal-anim s2`}>
            Contact
          </h1>
          <p className={`${styles.heroSub} reveal-anim s3`}>
            Une question, un projet, une curiosité ? Nous adorons les échanges. L'atelier vous répond sous 48h ouvrées.
          </p>
        </div>
      </section>

      {/* MAIN */}
      <section className={styles.mainSection}>
        <div className="container">
          <div className={styles.grid}>

            {/* FORM */}
            <div className={styles.formWrap} data-reveal>
              {sent ? (
                <div className={styles.successMsg}>
                  <CheckCircle size={48} className={styles.successIcon} />
                  <h2 className={styles.successTitle}>Message envoyé !</h2>
                  <p className={styles.successDesc}>
                    Merci pour votre message. Nous vous répondrons dans les 48h ouvrées. En attendant, n'hésitez pas à explorer notre boutique.
                  </p>
                  <button onClick={() => { setForm({ nom: '', email: '', tel: '', sujet: '', message: '' }); setSent(false) }} className="btn-outline">
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form} noValidate>
                  <div className={styles.formRow}>
                    <div className={`${styles.field} ${errors.nom ? styles.fieldError : ''}`}>
                      <label>Nom complet *</label>
                      <input
                        type="text"
                        name="nom"
                        value={form.nom}
                        onChange={handleChange}
                        placeholder="Marie Dupont"
                        autoComplete="name"
                      />
                      {errors.nom && <span className={styles.error}>{errors.nom}</span>}
                    </div>
                    <div className={`${styles.field} ${errors.email ? styles.fieldError : ''}`}>
                      <label>Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="marie@example.com"
                        autoComplete="email"
                      />
                      {errors.email && <span className={styles.error}>{errors.email}</span>}
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.field}>
                      <label>Téléphone (optionnel)</label>
                      <input
                        type="tel"
                        name="tel"
                        value={form.tel}
                        onChange={handleChange}
                        placeholder="+33 6 00 00 00 00"
                        autoComplete="tel"
                      />
                    </div>
                    <div className={`${styles.field} ${errors.sujet ? styles.fieldError : ''}`}>
                      <label>Sujet *</label>
                      <select name="sujet" value={form.sujet} onChange={handleChange}>
                        <option value="">Choisissez un sujet</option>
                        {sujets.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                      {errors.sujet && <span className={styles.error}>{errors.sujet}</span>}
                    </div>
                  </div>

                  <div className={`${styles.field} ${errors.message ? styles.fieldError : ''}`}>
                    <label>Votre message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Décrivez votre projet ou posez votre question..."
                    />
                    {errors.message && <span className={styles.error}>{errors.message}</span>}
                  </div>

                  <button type="submit" className={`btn-primary ${styles.submitBtn}`} disabled={loading}>
                    {loading ? (
                      <>
                        <span className={styles.spinner} />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Envoyer le message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* INFOS */}
            <div className={styles.infoCol}>
              <div className={`card-lux ${styles.infoCard}`} data-reveal data-delay="2">
                <h3 className={styles.infoTitle}>Informations</h3>
                <ul className={styles.infoList}>
                  <li>
                    <div className={styles.infoIcon}><MapPin size={16} /></div>
                    <div>
                      <strong>Atelier Reliefs Services</strong>
                      <span>Saumur, Maine-et-Loire<br />49400, France</span>
                    </div>
                  </li>
                  <li>
                    <div className={styles.infoIcon}><Phone size={16} /></div>
                    <div>
                      <strong>Téléphone</strong>
                      <a href="tel:+33249000000">+33 (0)2 49 00 00 00</a>
                    </div>
                  </li>
                  <li>
                    <div className={styles.infoIcon}><Mail size={16} /></div>
                    <div>
                      <strong>Email</strong>
                      <a href="mailto:contact@reliefs-services.com">contact@reliefs-services.com</a>
                    </div>
                  </li>
                  <li>
                    <div className={styles.infoIcon}><Clock size={16} /></div>
                    <div>
                      <strong>Horaires Atelier</strong>
                      <span>Lun – Ven : 9h00 – 18h00<br />Sur rendez-vous uniquement</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className={styles.mapPlaceholder} data-reveal data-delay="3">
                <div className={styles.mapInner}>
                  <MapPin size={32} className={styles.mapIcon} />
                  <span>Saumur, Loire Valley</span>
                  <span className={styles.mapSub}>France · 49400</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="section-label" data-reveal>FAQ</span>
            <h2 className={styles.faqTitle} data-reveal data-delay="2">Questions fréquentes</h2>
          </div>
          <div className={styles.faqList}>
            {faq.map((item, i) => (
              <div
                key={i}
                className={`${styles.faqItem} ${openFaq === i ? styles.faqOpen : ''}`}
                data-reveal
                data-delay={String((i % 3) + 1)}
              >
                <button
                  className={styles.faqQ}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  {item.q}
                  <span className={styles.faqChevron} aria-hidden="true">+</span>
                </button>
                <div className={styles.faqA}>
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.topLine} />
      <div className={`container ${styles.grid}`}>
        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.logoWrap}>
            <span className={styles.logoMark}>R</span>
            <div className={styles.logoText}>
              <strong>Reliefs Services</strong>
              <span>L'Art du Relief</span>
            </div>
          </div>
          <p className={styles.tagline}>
            Chaque pièce est une œuvre unique, façonnée à la main par un artisan passionné depuis Saumur, au cœur de la Loire.
          </p>
          <div className={styles.socials}>
            <a href="https://facebook.com/profile.php?id=61584462385595" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Navigation</h4>
          <ul className={styles.colLinks}>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/boutique">Boutique</Link></li>
            <li><Link to="/savoir-faire">Savoir-Faire</Link></li>
            <li><Link to="/professionnels">Professionnels</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Collections */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Collections</h4>
          <ul className={styles.colLinks}>
            <li><Link to="/boutique">Cadres en toile</Link></li>
            <li><Link to="/boutique">Cadres en faïence</Link></li>
            <li><Link to="/boutique">Faïences murales</Link></li>
            <li><Link to="/boutique">Mosaïques murales</Link></li>
            <li><Link to="/boutique">Numéros de maisons</Link></li>
            <li><Link to="/boutique">Dessous de plats</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Contact</h4>
          <ul className={styles.contactList}>
            <li>
              <MapPin size={14} />
              <span>Saumur, Maine-et-Loire<br />49400, France</span>
            </li>
            <li>
              <Phone size={14} />
              <a href="tel:+33249000000">+33 (0)2 49 00 00 00</a>
            </li>
            <li>
              <Mail size={14} />
              <a href="mailto:contact@reliefs-services.com">contact@reliefs-services.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p>© {year} Reliefs Services. Tous droits réservés.</p>
            <div className={styles.legal}>
              <Link to="/mentions-legales">Mentions légales</Link>
              <Link to="/confidentialite">Confidentialité</Link>
              <Link to="/cgu">CGU</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

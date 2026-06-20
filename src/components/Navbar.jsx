import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ShoppingBag, Menu, X, Heart } from 'lucide-react'
import styles from './Navbar.module.css'

const links = [
  { label: 'Accueil', to: '/' },
  { label: 'Boutique', to: '/boutique' },
  { label: 'Savoir-Faire', to: '/savoir-faire' },
  { label: 'Professionnels', to: '/professionnels' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setOpen(false)
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          <Link to="/" className={styles.logo}>
            <span className={styles.logoMark}>R</span>
            <span className={styles.logoText}>
              Reliefs<br />
              <span>Services</span>
            </span>
          </Link>

          <ul className={styles.links}>
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`${styles.link} ${pathname === link.to ? styles.active : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <Link to="/boutique" className={styles.iconBtn} aria-label="Boutique">
              <ShoppingBag size={18} />
            </Link>
            <button
              className={styles.hamburger}
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`${styles.overlay} ${open ? styles.overlayOpen : ''}`}>
        <div className={styles.overlayInner}>
          <ul className={styles.mobileLinks}>
            {links.map((link, i) => (
              <li key={link.to} style={{ '--i': i }}>
                <Link
                  to={link.to}
                  className={`${styles.mobileLink} ${pathname === link.to ? styles.active : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.overlayFooter}>
            <a href="mailto:contact@reliefs-services.com" className={styles.mobileContact}>
              contact@reliefs-services.com
            </a>
            <a href="tel:+33249000000" className={styles.mobileContact}>
              +33 (0)2 49 00 00 00
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

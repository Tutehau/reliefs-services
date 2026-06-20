import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <span className={styles.code}>404</span>
        <h1 className={styles.title}>Page introuvable</h1>
        <p className={styles.desc}>
          Cette page n'existe pas ou a été déplacée. Revenez à l'accueil pour explorer nos créations.
        </p>
        <Link to="/" className="btn-primary">
          Retour à l'accueil
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  )
}

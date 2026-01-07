/**
 * @file NotFound.jsx
 * @description 404 Not Found page
 */

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import styles from './NotFound.module.css'

function NotFound() {
  const { t } = useTranslation()

  return (
    <motion.div 
      className={styles.notFound}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        >
          <div className={styles.errorCode}>
            <span className={styles.four}>4</span>
            <span className={styles.zero}>0</span>
            <span className={styles.four}>4</span>
          </div>
          
          <h1 className={styles.title}>{t('errors.notFound.title')}</h1>
          <p className={styles.description}>{t('errors.notFound.description')}</p>
          
          <div className={styles.actions}>
            <Link to="/" className={styles.primaryBtn}>
              {t('errors.notFound.homeButton')}
            </Link>
            <Link to="/contact" className={styles.secondaryBtn}>
              {t('errors.notFound.contactButton')}
            </Link>
          </div>
          
          <div className={styles.links}>
            <p className={styles.linksTitle}>{t('errors.notFound.helpfulLinks')}</p>
            <div className={styles.linkGrid}>
              <Link to="/services">{t('nav.services')}</Link>
              <Link to="/about">{t('nav.about')}</Link>
              <Link to="/experience">{t('nav.experience')}</Link>
              <Link to="/team">{t('nav.team')}</Link>
            </div>
          </div>
        </motion.div>
        
        {/* Background decoration */}
        <div className={styles.bgDecoration}>
          <div className={styles.grid}></div>
          <div className={styles.glow}></div>
        </div>
      </div>
    </motion.div>
  )
}

export default NotFound

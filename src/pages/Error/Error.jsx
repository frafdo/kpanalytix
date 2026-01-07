/**
 * @file Error.jsx
 * @description Generic error page for unexpected errors
 */

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import styles from './Error.module.css'

function Error({ error, resetError }) {
  const { t } = useTranslation()

  const handleRefresh = () => {
    if (resetError) {
      resetError()
    } else {
      window.location.reload()
    }
  }

  return (
    <motion.div 
      className={styles.error}
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
          {/* Error Icon */}
          <div className={styles.iconWrapper}>
            <svg 
              className={styles.icon} 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
          
          <h1 className={styles.title}>{t('errors.general.title')}</h1>
          <p className={styles.description}>{t('errors.general.description')}</p>
          
          {error && process.env.NODE_ENV === 'development' && (
            <div className={styles.errorDetails}>
              <p className={styles.errorMessage}>{error.message}</p>
            </div>
          )}
          
          <div className={styles.actions}>
            <button onClick={handleRefresh} className={styles.primaryBtn}>
              {t('errors.general.refreshButton')}
            </button>
            <Link to="/" className={styles.secondaryBtn}>
              {t('errors.general.homeButton')}
            </Link>
          </div>
          
          <p className={styles.support}>
            {t('errors.general.persistsMessage')}{' '}
            <Link to="/contact" className={styles.contactLink}>
              {t('errors.general.contactSupport')}
            </Link>
          </p>
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

export default Error

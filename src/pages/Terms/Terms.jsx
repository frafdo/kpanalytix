/**
 * @file Terms.jsx
 * @description Terms and Conditions page
 */

import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import styles from '../Privacy/Legal.module.css'

function Terms() {
  const { t } = useTranslation()

  return (
    <motion.div 
      className={styles.legal}
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>{t('terms.title')}</h1>
          <p className={styles.lastUpdated}>{t('terms.lastUpdated')}</p>
        </header>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>{t('terms.acceptance.title')}</h2>
            <p>{t('terms.acceptance.text')}</p>
          </section>

          <section className={styles.section}>
            <h2>{t('terms.services.title')}</h2>
            <p>{t('terms.services.text')}</p>
            <ul>
              <li>{t('terms.services.item1')}</li>
              <li>{t('terms.services.item2')}</li>
              <li>{t('terms.services.item3')}</li>
              <li>{t('terms.services.item4')}</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>{t('terms.intellectual.title')}</h2>
            <p>{t('terms.intellectual.text')}</p>
          </section>

          <section className={styles.section}>
            <h2>{t('terms.confidentiality.title')}</h2>
            <p>{t('terms.confidentiality.text')}</p>
          </section>

          <section className={styles.section}>
            <h2>{t('terms.liability.title')}</h2>
            <p>{t('terms.liability.text')}</p>
          </section>

          <section className={styles.section}>
            <h2>{t('terms.termination.title')}</h2>
            <p>{t('terms.termination.text')}</p>
          </section>

          <section className={styles.section}>
            <h2>{t('terms.governing.title')}</h2>
            <p>{t('terms.governing.text')}</p>
          </section>

          <section className={styles.section}>
            <h2>{t('terms.contact.title')}</h2>
            <p>{t('terms.contact.text')}</p>
          </section>
        </div>
      </div>
    </motion.div>
  )
}

export default Terms

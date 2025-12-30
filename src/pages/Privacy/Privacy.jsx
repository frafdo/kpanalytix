/**
 * @file Privacy.jsx
 * @description Privacy Policy page
 */

import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import styles from './Legal.module.css'

function Privacy() {
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
          <h1>{t('privacy.title')}</h1>
          <p className={styles.lastUpdated}>{t('privacy.lastUpdated')}</p>
        </header>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>{t('privacy.intro.title')}</h2>
            <p>{t('privacy.intro.text')}</p>
          </section>

          <section className={styles.section}>
            <h2>{t('privacy.collection.title')}</h2>
            <p>{t('privacy.collection.text')}</p>
            <ul>
              <li>{t('privacy.collection.item1')}</li>
              <li>{t('privacy.collection.item2')}</li>
              <li>{t('privacy.collection.item3')}</li>
              <li>{t('privacy.collection.item4')}</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>{t('privacy.use.title')}</h2>
            <p>{t('privacy.use.text')}</p>
            <ul>
              <li>{t('privacy.use.item1')}</li>
              <li>{t('privacy.use.item2')}</li>
              <li>{t('privacy.use.item3')}</li>
              <li>{t('privacy.use.item4')}</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>{t('privacy.security.title')}</h2>
            <p>{t('privacy.security.text')}</p>
          </section>

          <section className={styles.section}>
            <h2>{t('privacy.cookies.title')}</h2>
            <p>{t('privacy.cookies.text')}</p>
          </section>

          <section className={styles.section}>
            <h2>{t('privacy.rights.title')}</h2>
            <p>{t('privacy.rights.text')}</p>
            <ul>
              <li>{t('privacy.rights.item1')}</li>
              <li>{t('privacy.rights.item2')}</li>
              <li>{t('privacy.rights.item3')}</li>
              <li>{t('privacy.rights.item4')}</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>{t('privacy.contact.title')}</h2>
            <p>{t('privacy.contact.text')}</p>
          </section>
        </div>
      </div>
    </motion.div>
  )
}

export default Privacy

/**
 * @file About.jsx
 * @description About Us page with company history, mission, vision, and values
 */

import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, useInView } from 'framer-motion'
import styles from './About.module.css'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.19, 1, 0.22, 1] } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
}

function AnimatedSection({ children, className }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  return (
    <motion.section ref={ref} className={className} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={staggerContainer}>
      {children}
    </motion.section>
  )
}

function About() {
  const { t } = useTranslation()

  const values = ['value1', 'value2', 'value3', 'value4']

  return (
    <motion.div className={styles.about} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroGradient}></div>
          <div className={styles.heroPattern}></div>
        </div>
        <div className="container">
          <motion.div className={styles.heroContent} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className={styles.heroLabel}>{t('about.sectionTitle')}</span>
            <h1 className={styles.heroTitle}>{t('aboutPage.heroTitle')}</h1>
            <p className={styles.heroSubtitle}>{t('aboutPage.heroSubtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Thin divider */}
      <div className="divider"></div>

      {/* Mission & Vision */}
      <AnimatedSection className={styles.missionSection}>
        <div className="container">
          <div className={styles.missionGrid}>
            <motion.div className={styles.missionCard} variants={fadeInUp}>
              <h2>{t('aboutPage.missionTitle')}</h2>
              <p>{t('aboutPage.missionText')}</p>
            </motion.div>
            <motion.div className={styles.missionCard} variants={fadeInUp}>
              <h2>{t('aboutPage.visionTitle')}</h2>
              <p>{t('aboutPage.visionText')}</p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Thin divider */}
      <div className="divider"></div>

      {/* History Section */}
      <AnimatedSection className={styles.historySection}>
        <div className="container">
          <motion.span className={styles.sectionLabel} variants={fadeInUp}>{t('about.sectionTitle')}</motion.span>
          <motion.h2 className={styles.sectionTitle} variants={fadeInUp}>{t('aboutPage.historyTitle')}</motion.h2>
          <motion.div className={styles.historyContent} variants={fadeInUp}>
            <p>{t('aboutPage.historyText1')}</p>
            <p>{t('aboutPage.historyText2')}</p>
            <p>{t('aboutPage.historyText3')}</p>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Thin divider */}
      <div className="divider"></div>

      {/* Values Section */}
      <AnimatedSection className={styles.valuesSection}>
        <div className="container">
          <motion.span className={styles.sectionLabel} variants={fadeInUp}>{t('about.sectionTitle')}</motion.span>
          <motion.h2 className={styles.sectionTitle} variants={fadeInUp}>{t('aboutPage.valuesTitle')}</motion.h2>
          <motion.div className={styles.valuesGrid} variants={fadeInUp}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <h3>{t(`aboutPage.${value}Title`)}</h3>
                <p>{t(`aboutPage.${value}Text`)}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>
    </motion.div>
  )
}

export default About

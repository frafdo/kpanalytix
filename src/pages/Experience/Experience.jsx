/**
 * @file Experience.jsx
 * @description Experience page showcasing expertise and achievements
 */

import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, useInView } from 'framer-motion'
import styles from './Experience.module.css'

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

function Experience() {
  const { t } = useTranslation()

  const categories = [
    { key: 'statistics', items: ['census', 'nationalAccounts', 'gdp', 'macroeconomics', 'socialStatistics', 'businessStatistics'] },
    { key: 'economics', items: ['spatialAnalysis', 'tourism', 'medical', 'construction', 'finance', 'sustainability'] },
    { key: 'dataScience', items: ['dashboards', 'decisionSupport', 'modeling', 'aiSolutions', 'surveys', 'indices'] },
    { key: 'advisory', items: ['businessIntelligence', 'strategy', 'orgDevelopment', 'restructuring', 'gis', 'dataEngineering'] }
  ]

  const highlights = ['highlight1', 'highlight2', 'highlight3', 'highlight4']

  return (
    <motion.div className={styles.experience} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroGradient}></div>
        </div>
        <div className="container">
          <motion.div className={styles.heroContent} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className={styles.heroLabel}>{t('experience.sectionTitle')}</span>
            <h1 className={styles.heroTitle}>{t('experiencePage.heroTitle')}</h1>
            <p className={styles.heroSubtitle}>{t('experiencePage.heroSubtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <AnimatedSection className={styles.statsSection}>
        <div className="container">
          <motion.h2 className={styles.statsTitle} variants={fadeInUp}>{t('experiencePage.statsTitle')}</motion.h2>
          <motion.div className={styles.statsGrid} variants={fadeInUp}>
            <div className={styles.statCard}>
              <span className={styles.statValue}>{t('experiencePage.statYears')}</span>
              <span className={styles.statLabel}>{t('experiencePage.statYearsLabel')}</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>{t('experiencePage.statCountries')}</span>
              <span className={styles.statLabel}>{t('experiencePage.statCountriesLabel')}</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>{t('experiencePage.statTeams')}</span>
              <span className={styles.statLabel}>{t('experiencePage.statTeamsLabel')}</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>{t('experiencePage.statProjects')}</span>
              <span className={styles.statLabel}>{t('experiencePage.statProjectsLabel')}</span>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Thin divider */}
      <div className="divider"></div>

      {/* Highlights Section */}
      <AnimatedSection className={styles.highlightsSection}>
        <div className="container">
          <motion.h2 className={styles.sectionTitle} variants={fadeInUp}>{t('experiencePage.highlightsTitle')}</motion.h2>
          <motion.div className={styles.highlightsGrid} variants={fadeInUp}>
            {highlights.map((highlight, index) => (
              <div key={index} className={styles.highlightCard}>
                <h3>{t(`experiencePage.${highlight}Title`)}</h3>
                <p>{t(`experiencePage.${highlight}Text`)}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Thin divider */}
      <div className="divider"></div>

      {/* Expertise Categories */}
      <AnimatedSection className={styles.expertiseSection}>
        <div className="container">
          <motion.span className={styles.sectionLabel} variants={fadeInUp}>{t('experience.sectionTitle')}</motion.span>
          <motion.h2 className={styles.sectionTitle} variants={fadeInUp}>{t('experience.title')}</motion.h2>
          <motion.div className={styles.categoriesGrid} variants={fadeInUp}>
            {categories.map((category, index) => (
              <div key={index} className={styles.categoryCard}>
                <h3 className={styles.categoryName}>{t(`experience.categories.${category.key}`)}</h3>
                <ul className={styles.categoryItems}>
                  {category.items.map((item, i) => (
                    <li key={i}>{t(`experience.items.${item}`)}</li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>
    </motion.div>
  )
}

export default Experience

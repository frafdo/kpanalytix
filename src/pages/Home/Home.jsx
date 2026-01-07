/**
 * @file Home.jsx
 * @description Modern dark tech home page
 */

import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, useInView } from 'framer-motion'
import Button from '../../components/ui/Button'
import styles from './Home.module.css'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
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

function Home() {
  const { t } = useTranslation()
  const [videoLoaded, setVideoLoaded] = useState(false)

  const stats = [
    { value: '25+', label: t('about.yearsExperience') },
    { value: '1,100+', label: t('about.employeesLed') },
    { value: '100+', label: t('about.projectsDelivered') },
    { value: '4', label: t('about.countriesServed') }
  ]

  const services = [
    { key: 'predictiveAnalytics', id: 'predictive-analytics' },
    { key: 'dashboards', id: 'dashboards' },
    { key: 'aiModels', id: 'ai-models' },
    { key: 'policyDesign', id: 'policy-design' }
  ]

  return (
    <motion.div className={styles.home} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Hero Section */}
      <section className={styles.hero}>
        {/* Video Background */}
        <div className={styles.videoContainer}>
          <div 
            className={`${styles.videoPoster} ${videoLoaded ? styles.posterHidden : ''}`}
            style={{ backgroundImage: `url(${import.meta.env.BASE_URL}home-video-poster.png)` }}
          />
          <video 
            className={`${styles.videoBackground} ${videoLoaded ? styles.videoVisible : ''}`}
            autoPlay 
            muted 
            loop 
            playsInline
            onLoadedData={() => setVideoLoaded(true)}
          >
            <source src={`${import.meta.env.BASE_URL}videos/home-bg.mp4`} type="video/mp4" />
          </video>
          <div className={styles.videoOverlay}></div>
          <div className={styles.videoFade}></div>
        </div>
        
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
        >
          <h1 className={styles.heroTitle}>{t('hero.title')}</h1>
          <p className={styles.heroSubtitle}>{t('hero.subtitle')}</p>
          <div className={styles.heroCta}>
            <Button to="/services" variant="primary" size="lg">{t('hero.cta')}</Button>
            <Button to="/contact" variant="ghost" size="lg">{t('footer.contactUs')}</Button>
          </div>
        </motion.div>
        
        <motion.div 
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span>{t('hero.scroll')}</span>
          <div className={styles.scrollLine}>
            <div className={styles.scrollDot}></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <AnimatedSection className={styles.statsSection}>
        <div className="container">
          <motion.div className={styles.statsGrid} variants={fadeInUp}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      <div className="divider"></div>

      {/* About Section */}
      <AnimatedSection className={styles.aboutSection}>
        <div className="container">
          <div className={styles.aboutContent}>
            <motion.div className={styles.aboutText} variants={fadeInUp}>
              <span className={styles.sectionLabel}>{t('about.sectionTitle')}</span>
              <h2 className={styles.sectionTitle}>{t('about.title')}</h2>
              <p>{t('about.description1')}</p>
              <p>{t('about.description2')}</p>
              <Button to="/about" variant="outline">{t('about.readMore')}</Button>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      <div className="divider"></div>

      {/* Services Preview */}
      <AnimatedSection className={styles.servicesSection}>
        <div className="container">
          <motion.span className={styles.sectionLabel} variants={fadeInUp}>{t('services.sectionTitle')}</motion.span>
          <motion.h2 className={styles.sectionTitle} variants={fadeInUp}>{t('services.title')}</motion.h2>
          <motion.p className={styles.sectionSubtitle} variants={fadeInUp}>{t('services.subtitle')}</motion.p>

          <motion.div className={styles.servicesGrid} variants={fadeInUp}>
            {services.map((service, index) => (
              <Link to={`/services#${service.id}`} key={service.key} className={styles.serviceCard}>
                <span className={styles.serviceNumber}>{String(index + 1).padStart(2, '0')}</span>
                <h3 className={styles.serviceTitle}>{t(`services.items.${service.key}.title`)}</h3>
                <p className={styles.serviceDesc}>{t(`services.items.${service.key}.description`)}</p>
                <span className={styles.serviceLink}>{t('services.learnMore')} →</span>
              </Link>
            ))}
          </motion.div>

          <motion.div className={styles.sectionCta} variants={fadeInUp}>
            <Button to="/services" variant="outline">{t('services.viewAll')}</Button>
          </motion.div>
        </div>
      </AnimatedSection>

      <div className="divider"></div>

      {/* Team Preview */}
      <AnimatedSection className={styles.teamSection}>
        <div className="container">
          <motion.span className={styles.sectionLabel} variants={fadeInUp}>{t('team.sectionTitle')}</motion.span>
          <motion.h2 className={styles.sectionTitle} variants={fadeInUp}>{t('team.title')}</motion.h2>
          <motion.p className={styles.sectionSubtitle} variants={fadeInUp}>{t('team.subtitle')}</motion.p>

          <motion.div className={styles.teamPreview} variants={fadeInUp}>
            <div className={styles.leaderCard}>
              <div className={styles.leaderImage}>
                <div className={styles.placeholderImage}>KP</div>
              </div>
              <div className={styles.leaderInfo}>
                <h3>{t('team.founder.name')}</h3>
                <span className={styles.leaderRole}>{t('team.founder.role')}</span>
                <p>{t('team.founder.bio')}</p>
              </div>
            </div>
            <div className={styles.leaderCard}>
              <div className={styles.leaderImage}>
                <div className={styles.placeholderImage}>HA</div>
              </div>
              <div className={styles.leaderInfo}>
                <h3>{t('team.cofounder.name')}</h3>
                <span className={styles.leaderRole}>{t('team.cofounder.role')}</span>
                <p>{t('team.cofounder.bio')}</p>
              </div>
            </div>
          </motion.div>

          <motion.div className={styles.sectionCta} variants={fadeInUp}>
            <Button to="/team" variant="outline">{t('team.viewAll')}</Button>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>{t('contact.title')}</h2>
            <p>{t('contact.subtitle')}</p>
            <Button to="/contact" variant="primary" size="lg">{t('footer.contactUs')}</Button>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Home

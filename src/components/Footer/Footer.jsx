/**
 * @file Footer.jsx
 * @description Modern dark tech footer with CRN/TRN
 */

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styles from './Footer.module.css'

function Footer() {
  const { t } = useTranslation()

  const quickLinks = [
    { path: '/about', label: t('nav.about') },
    { path: '/services', label: t('nav.services') },
    { path: '/experience', label: t('nav.experience') },
    { path: '/team', label: t('nav.team') }
  ]

  const services = [
    { key: 'predictiveAnalytics', id: 'predictive-analytics' },
    { key: 'dashboards', id: 'dashboards' },
    { key: 'aiModels', id: 'ai-models' },
    { key: 'policyDesign', id: 'policy-design' }
  ]

  return (
    <footer className={styles.footer}>
      {/* Full-width Logo */}
      <div className={styles.logoSection}>
        <img src="/logo.svg" alt="KPAnalytix" className={styles.fullLogo} />
      </div>

      <div className={styles.content}>
        <div className="container">
          <div className={styles.grid}>
            {/* About Column */}
            <div className={styles.column}>
              <p className={styles.tagline}>{t('footer.tagline')}</p>
              
              {/* Registration Info */}
              <div className={styles.registration}>
                <div className={styles.regItem}>
                  <span className={styles.regLabel}>CRN</span>
                  <span className={styles.regValue}>[CRN Number]</span>
                </div>
                <div className={styles.regItem}>
                  <span className={styles.regLabel}>TRN</span>
                  <span className={styles.regValue}>[TRN Number]</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className={styles.column}>
              <h4>{t('footer.quickLinks')}</h4>
              <nav className={styles.links}>
                {quickLinks.map(link => (
                  <Link key={link.path} to={link.path}>{link.label}</Link>
                ))}
              </nav>
            </div>

            {/* Services - links to specific sections */}
            <div className={styles.column}>
              <h4>{t('footer.ourServices')}</h4>
              <nav className={styles.links}>
                {services.map(service => (
                  <Link key={service.key} to={`/services#${service.id}`}>
                    {t(`services.items.${service.key}.title`)}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div className={styles.column}>
              <h4>{t('footer.contactUs')}</h4>
              <div className={styles.contactInfo}>
                <a href={`mailto:${t('contact.info.emailValue')}`}>
                  {t('contact.info.emailValue')}
                </a>
                <span>{t('contact.info.addressValue')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomContent}>
            <span className={styles.copyright}>{t('footer.copyright')}</span>
            <div className={styles.legal}>
              <Link to="/privacy">{t('footer.privacy')}</Link>
              <Link to="/terms">{t('footer.terms')}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

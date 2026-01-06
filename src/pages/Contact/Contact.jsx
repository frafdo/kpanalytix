/**
 * @file Contact.jsx
 * @description Contact page with form and company information
 */

import { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, useInView } from 'framer-motion'
import styles from './Contact.module.css'

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

function Contact() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setStatus({ type: 'success', message: t('contact.form.success') })
      setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <motion.div className={styles.contact} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroGradient}></div>
        </div>
        <div className="container">
          <motion.div className={styles.heroContent} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className={styles.heroLabel}>{t('contact.sectionTitle')}</span>
            <h1 className={styles.heroTitle}>{t('contact.title')}</h1>
            <p className={styles.heroSubtitle}>{t('contact.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <AnimatedSection className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Contact Form */}
            <motion.div className={styles.formWrapper} variants={fadeInUp}>
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">{t('contact.form.name')}</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">{t('contact.form.email')}</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">{t('contact.form.phone')}</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="company">{t('contact.form.company')}</label>
                    <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="subject">{t('contact.form.subject')}</label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">{t('contact.form.message')}</label>
                  <textarea id="message" name="message" rows="6" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                
                {status.message && (
                  <div className={`${styles.statusMessage} ${styles[status.type]}`}>
                    {status.message}
                  </div>
                )}
                
                <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                  {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div className={styles.contactInfo} variants={fadeInUp}>
              <h2>{t('contact.info.title')}</h2>
              
              <div className={styles.infoBlock}>
                <div className={styles.infoIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4>{t('contact.info.address')}</h4>
                  <p>[Address Line 1]<br />[Address Line 2]<br />Riyadh, Saudi Arabia</p>
                </div>
              </div>

              <div className={styles.infoBlock}>
                <div className={styles.infoIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h4>{t('contact.info.email')}</h4>
                  <a href="mailto:office@kpanalytix.com">office@kpanalytix.com</a>
                </div>
              </div>

              <div className={styles.infoBlock}>
                <div className={styles.infoIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <h4>{t('contact.info.phone')}</h4>
                  <a href="tel:+966XXXXXXXX">[+966 XX XXX XXXX]</a>
                </div>
              </div>

              <div className={styles.registrationInfo}>
                <div className={styles.regItem}>
                  <span className={styles.regLabel}>{t('contact.info.crn')}</span>
                  <span className={styles.regValue}>[CRN Number]</span>
                </div>
                <div className={styles.regItem}>
                  <span className={styles.regLabel}>{t('contact.info.trn')}</span>
                  <span className={styles.regValue}>[TRN Number]</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </motion.div>
  )
}

export default Contact

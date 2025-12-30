/**
 * @file SectionTitle.jsx
 * @description Reusable section title component with animated underline
 */

import { motion } from 'framer-motion'
import styles from './SectionTitle.module.css'

function SectionTitle({ label, title, subtitle, align = 'center', light = false }) {
  return (
    <motion.div 
      className={`${styles.sectionTitle} ${styles[align]} ${light ? styles.light : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
    >
      {label && <span className={styles.label}>{label}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      <div className={styles.underline}></div>
    </motion.div>
  )
}

export default SectionTitle

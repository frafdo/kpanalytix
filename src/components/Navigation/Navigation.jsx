/**
 * @file Navigation.jsx
 * @description Full-screen navigation overlay with close button
 */

import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import styles from './Navigation.module.css'

function Navigation({ onClose }) {
  const { t } = useTranslation()

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/experience', label: t('nav.experience') },
    { path: '/services', label: t('nav.services') },
    { path: '/team', label: t('nav.team') },
    { path: '/contact', label: t('nav.contact') }
  ]

  return (
    <motion.nav
      className={styles.navigation}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Close Button */}
      <motion.button
        className={styles.closeButton}
        onClick={onClose}
        initial={{ opacity: 0, rotate: -90 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        aria-label="Close navigation"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M18 6L6 18" />
          <path d="M6 6l12 12" />
        </svg>
      </motion.button>

      <div className={styles.container}>
        <ul className={styles.navList}>
          {navItems.map((item, index) => (
            <motion.li
              key={item.path}
              className={styles.navItem}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
                onClick={onClose}
              >
                {item.label}
              </NavLink>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  )
}

export default Navigation

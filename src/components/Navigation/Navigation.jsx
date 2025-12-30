/**
 * @file Navigation.jsx
 * @description Full-screen navigation overlay - no numbers
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

/**
 * @file Header.jsx
 * @description Modern dark tech header with globe language toggle
 */

import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '../Navigation/Navigation'
import styles from './Header.module.css'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false)
  const { i18n } = useTranslation()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsNavOpen(false)
    document.body.classList.remove('nav-open')
  }, [location])

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
    document.body.classList.toggle('nav-open')
  }

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en'
    i18n.changeLanguage(newLang)
  }

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${isNavOpen ? styles.navOpen : ''}`}>
        <div className={styles.container}>
          {/* Logo - Full width stretch */}
          <Link to="/" className={styles.logo} aria-label="KPAnalytix Home">
            <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="KPAnalytix" className={styles.logoImg} />
          </Link>

          {/* Right controls */}
          <div className={styles.controls}>
            {/* Globe Language Toggle */}
            <button 
              className={styles.globeBtn}
              onClick={toggleLanguage}
              aria-label={i18n.language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
            >
              <svg viewBox="0 0 24 24" className={styles.globeIcon}>
                <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                <ellipse cx="12" cy="12" rx="4" ry="10" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M2 12h20" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M12 2c3.5 3 5.5 7 5.5 10s-2 7-5.5 10" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M12 2c-3.5 3-5.5 7-5.5 10s2 7 5.5 10" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              <span className={styles.langLabel}>{i18n.language === 'en' ? 'عربي' : 'EN'}</span>
            </button>

            {/* Menu Button */}
            <button 
              className={`${styles.menuBtn} ${isNavOpen ? styles.active : ''}`}
              onClick={toggleNav}
              aria-label={isNavOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isNavOpen}
            >
              <span className={styles.menuLine}></span>
              <span className={styles.menuLine}></span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isNavOpen && (
          <Navigation onClose={() => {
            setIsNavOpen(false)
            document.body.classList.remove('nav-open')
          }} />
        )}
      </AnimatePresence>
    </>
  )
}

export default Header

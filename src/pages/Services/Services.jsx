/**
 * @file Services.jsx
 * @description Services page with smooth transitions and auto-advance
 */

import { useState, useEffect, useRef, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Services.module.css'

function Services() {
  const { t } = useTranslation()
  const location = useLocation()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const containerRef = useRef(null)
  const lastScrollTime = useRef(0)
  const touchStartY = useRef(0)
  const autoPlayTimer = useRef(null)
  const scrollCooldown = 1200 // ms between scrolls
  const autoPlayInterval = 6000 // 6 seconds per slide

  const services = [
    { key: 'predictiveAnalytics', id: 'predictive-analytics' },
    { key: 'forecasting', id: 'forecasting' },
    { key: 'dashboards', id: 'dashboards' },
    { key: 'dataGovernance', id: 'data-governance' },
    { key: 'aiModels', id: 'ai-models' },
    { key: 'statisticalConsulting', id: 'statistical-consulting' },
    { key: 'kpiMeasurement', id: 'kpi-measurement' },
    { key: 'policyDesign', id: 'policy-design' },
    { key: 'impactAssessment', id: 'impact-assessment' },
    { key: 'internationalEconomics', id: 'international-economics' },
    { key: 'bestPractices', id: 'best-practices' },
    { key: 'benchmarking', id: 'benchmarking' }
  ]

  const totalSlides = services.length + 1

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlay || isAnimating) return

    autoPlayTimer.current = setInterval(() => {
      setDirection(1)
      setIsAnimating(true)
      setCurrentIndex((prev) => (prev + 1) % totalSlides)
      lastScrollTime.current = Date.now()
    }, autoPlayInterval)

    return () => {
      if (autoPlayTimer.current) {
        clearInterval(autoPlayTimer.current)
      }
    }
  }, [isAutoPlay, isAnimating, totalSlides, autoPlayInterval])

  // Pause auto-play on user interaction, resume after delay
  const pauseAutoPlay = useCallback(() => {
    setIsAutoPlay(false)
    if (autoPlayTimer.current) {
      clearInterval(autoPlayTimer.current)
    }
    // Resume auto-play after 15 seconds of no interaction
    setTimeout(() => {
      setIsAutoPlay(true)
    }, 15000)
  }, [])

  const goToSlide = useCallback((index, fromUser = true) => {
    const now = Date.now()
    if (now - lastScrollTime.current < scrollCooldown) return
    if (isAnimating || index === currentIndex) return
    if (index < 0 || index >= totalSlides) return
    
    if (fromUser) pauseAutoPlay()
    
    lastScrollTime.current = now
    setDirection(index > currentIndex ? 1 : -1)
    setIsAnimating(true)
    setCurrentIndex(index)
  }, [currentIndex, isAnimating, totalSlides, scrollCooldown, pauseAutoPlay])

  const goNext = useCallback(() => {
    pauseAutoPlay()
    if (currentIndex < totalSlides - 1) {
      goToSlide(currentIndex + 1, false)
    } else {
      // Loop back to start
      goToSlide(0, false)
    }
  }, [currentIndex, totalSlides, goToSlide, pauseAutoPlay])

  const goPrev = useCallback(() => {
    pauseAutoPlay()
    if (currentIndex > 0) {
      goToSlide(currentIndex - 1, false)
    } else {
      // Loop to end
      goToSlide(totalSlides - 1, false)
    }
  }, [currentIndex, totalSlides, goToSlide, pauseAutoPlay])

  // Handle wheel events with strict debouncing
  useEffect(() => {
    let accumulatedDelta = 0
    let scrollTimeout = null
    const threshold = 80

    const handleWheel = (e) => {
      e.preventDefault()
      pauseAutoPlay()
      
      const now = Date.now()
      if (now - lastScrollTime.current < scrollCooldown || isAnimating) {
        return
      }

      accumulatedDelta += e.deltaY

      // Clear previous timeout
      if (scrollTimeout) clearTimeout(scrollTimeout)

      // Reset accumulated delta after pause
      scrollTimeout = setTimeout(() => {
        accumulatedDelta = 0
      }, 150)

      if (accumulatedDelta > threshold) {
        accumulatedDelta = 0
        goNext()
      } else if (accumulatedDelta < -threshold) {
        accumulatedDelta = 0
        goPrev()
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false })
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel)
      }
      if (scrollTimeout) clearTimeout(scrollTimeout)
    }
  }, [isAnimating, goNext, goPrev, scrollCooldown, pauseAutoPlay])

  // Handle touch events
  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY
      pauseAutoPlay()
    }

    const handleTouchMove = (e) => {
      // Prevent default scroll behavior on mobile
      e.preventDefault()
    }

    const handleTouchEnd = (e) => {
      const now = Date.now()
      if (now - lastScrollTime.current < scrollCooldown || isAnimating) return
      
      const touchEndY = e.changedTouches[0].clientY
      const diff = touchStartY.current - touchEndY
      const threshold = 80

      if (diff > threshold) {
        goNext()
      } else if (diff < -threshold) {
        goPrev()
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('touchstart', handleTouchStart, { passive: true })
      container.addEventListener('touchmove', handleTouchMove, { passive: false })
      container.addEventListener('touchend', handleTouchEnd, { passive: true })
    }

    return () => {
      if (container) {
        container.removeEventListener('touchstart', handleTouchStart)
        container.removeEventListener('touchmove', handleTouchMove)
        container.removeEventListener('touchend', handleTouchEnd)
      }
    }
  }, [isAnimating, goNext, goPrev, scrollCooldown, pauseAutoPlay])

  // Handle keyboard
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault()
        goNext()
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault()
        goPrev()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goNext, goPrev])

  // Handle hash navigation
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const index = services.findIndex(s => s.id === id)
      if (index !== -1) {
        setCurrentIndex(index + 1)
      }
    }
  }, [location.hash])

  // Animation complete handler
  const handleAnimationComplete = () => {
    setIsAnimating(false)
  }

  // Slide variants
  const slideVariants = {
    enter: (direction) => ({
      y: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      y: 0,
      opacity: 1
    },
    exit: (direction) => ({
      y: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.6,
        ease: [0.32, 0.72, 0, 1]
      }
    })
  }

  return (
    <div className={styles.servicesWrapper}>
      {/* Video Background - loops continuously */}
      <div className={styles.videoContainer}>
        <video 
          className={styles.videoBackground}
          autoPlay 
          muted 
          loop
          playsInline
        >
          <source src={`${import.meta.env.BASE_URL}videos/services-bg.mp4`} type="video/mp4" />
        </video>
        <div className={styles.videoOverlay}></div>
        <div className={styles.videoFade}></div>
      </div>

      <div 
        className={styles.services}
        ref={containerRef}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          {currentIndex === 0 ? (
            <motion.section
              key="hero"
              className={styles.hero}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
              onAnimationComplete={handleAnimationComplete}
            >
              <div className={styles.heroContent}>
                <motion.span 
                  className={styles.heroLabel}
                  custom={0}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {t('services.sectionTitle')}
                </motion.span>
                <motion.h1 
                  className={styles.heroTitle}
                  custom={1}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {t('servicesPage.heroTitle')}
                </motion.h1>
                <motion.p 
                  className={styles.heroSubtitle}
                  custom={2}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {t('servicesPage.heroSubtitle')}
                </motion.p>
              </div>
              <motion.div 
                className={styles.scrollIndicator}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <span>Scroll to explore</span>
                <div className={styles.scrollLine}>
                  <div className={styles.scrollDot}></div>
                </div>
              </motion.div>
            </motion.section>
          ) : (
            <motion.section
              key={services[currentIndex - 1].key}
              className={styles.serviceSection}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
              onAnimationComplete={handleAnimationComplete}
            >
              <div className={styles.sectionContent}>
                <div className={styles.serviceInfo}>
                  <motion.h2 
                    className={styles.serviceTitle}
                    custom={0}
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {t(`services.items.${services[currentIndex - 1].key}.title`)}
                  </motion.h2>
                  <motion.p 
                    className={styles.serviceDescription}
                    custom={1}
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {t(`services.items.${services[currentIndex - 1].key}.description`)}
                  </motion.p>
                  <motion.div 
                    className={styles.serviceFeatures}
                    custom={2}
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {t(`services.items.${services[currentIndex - 1].key}.features`, { returnObjects: true }).map((feature, i) => (
                      <span key={i} className={styles.featureTag}>{feature}</span>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Progress bar */}
        <div className={styles.progressBar}>
          <motion.div 
            className={styles.progressFill}
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / totalSlides) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Side Navigation */}
        <nav className={styles.sideNav}>
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              className={`${styles.navDot} ${currentIndex === index ? styles.active : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={index === 0 ? 'Hero' : services[index - 1]?.key}
            >
              {index > 0 && (
                <span className={styles.navTooltip}>
                  {t(`services.items.${services[index - 1].key}.title`)}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* Navigation Arrows */}
        <div className={styles.navArrows}>
          <button 
            className={styles.navArrow}
            onClick={goPrev}
            disabled={currentIndex === 0 || isAnimating}
            aria-label="Previous"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </button>
          <button 
            className={styles.navArrow}
            onClick={goNext}
            disabled={currentIndex === totalSlides - 1 || isAnimating}
            aria-label="Next"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Services

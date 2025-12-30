/**
 * @file Team.jsx
 * @description Team page with horizontal scroll wheel carousel
 */

import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Team.module.css'

function Team() {
  const { t } = useTranslation()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const wheelRef = useRef(null)

  const teamMembers = [
    {
      id: 'founder',
      name: t('team.founder.name'),
      role: t('team.founder.role'),
      bio: t('teamPage.founderFullBio'),
      initials: 'KP',
      achievements: [
        t('teamPage.achievement1'),
        t('teamPage.achievement2'),
        t('teamPage.achievement3'),
        t('teamPage.achievement4'),
        t('teamPage.achievement5'),
        t('teamPage.achievement6')
      ],
      details: [
        { label: t('teamPage.education'), value: t('teamPage.educationText') },
        { label: t('teamPage.experience'), value: t('teamPage.experienceText') }
      ],
      note: t('teamPage.residency')
    },
    {
      id: 'cofounder',
      name: t('team.cofounder.name'),
      role: t('team.cofounder.role'),
      bio: t('teamPage.cofounderFullBio'),
      initials: 'HA',
      achievements: [
        t('teamPage.cofounderAchievement1'),
        t('teamPage.cofounderAchievement2'),
        t('teamPage.cofounderAchievement3'),
        t('teamPage.cofounderAchievement4'),
        t('teamPage.cofounderAchievement5'),
        t('teamPage.cofounderAchievement6')
      ],
      details: [
        { label: t('teamPage.cofounderEducation'), value: t('teamPage.cofounderEducationText') },
        { label: t('teamPage.cofounderExpertise'), value: t('teamPage.cofounderExpertiseText') }
      ]
    }
  ]

  // Auto-rotate
  useEffect(() => {
    if (!isAutoPlay) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % teamMembers.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [isAutoPlay, teamMembers.length])

  // Handle wheel scroll
  const handleWheel = (e) => {
    e.preventDefault()
    setIsAutoPlay(false)
    if (e.deltaY > 0 || e.deltaX > 0) {
      setActiveIndex((prev) => (prev + 1) % teamMembers.length)
    } else {
      setActiveIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)
    }
    setTimeout(() => setIsAutoPlay(true), 10000)
  }

  const goToSlide = (index) => {
    setActiveIndex(index)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 10000)
  }

  return (
    <motion.div 
      className={styles.team}
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      ref={wheelRef}
      onWheel={handleWheel}
    >
      {/* Hero Label */}
      <div className={styles.heroLabel}>
        <span>{t('team.sectionTitle')}</span>
        <h1>{t('team.title')}</h1>
      </div>

      {/* Carousel Container */}
      <div className={styles.carousel}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className={styles.slide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
          >
            {/* Member Image */}
            <div className={styles.memberImage}>
              <div className={styles.imageWrapper}>
                <div className={styles.initialsCircle}>
                  {teamMembers[activeIndex].initials}
                </div>
                <div className={styles.imageGlow}></div>
              </div>
            </div>

            {/* Member Info */}
            <div className={styles.memberInfo}>
              <motion.span 
                className={styles.roleTag}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {teamMembers[activeIndex].role}
              </motion.span>
              
              <motion.h2 
                className={styles.memberName}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {teamMembers[activeIndex].name}
              </motion.h2>
              
              <motion.p 
                className={styles.memberBio}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {teamMembers[activeIndex].bio}
              </motion.p>

              {/* Details */}
              <motion.div 
                className={styles.detailsRow}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {teamMembers[activeIndex].details.map((detail, i) => (
                  <div key={i} className={styles.detailItem}>
                    <span className={styles.detailLabel}>{detail.label}</span>
                    <span className={styles.detailValue}>{detail.value}</span>
                  </div>
                ))}
              </motion.div>

              {teamMembers[activeIndex].note && (
                <motion.p 
                  className={styles.noteText}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {teamMembers[activeIndex].note}
                </motion.p>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Scroll Wheel Indicator */}
        <div className={styles.scrollWheel}>
          <div className={styles.wheelTrack}>
            {teamMembers.map((_, index) => (
              <button
                key={index}
                className={`${styles.wheelDot} ${activeIndex === index ? styles.active : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className={styles.navArrows}>
          <button 
            className={styles.navArrow}
            onClick={() => goToSlide((activeIndex - 1 + teamMembers.length) % teamMembers.length)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button 
            className={styles.navArrow}
            onClick={() => goToSlide((activeIndex + 1) % teamMembers.length)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Achievements Section */}
      <motion.div 
        className={styles.achievements}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className={styles.achievementsContainer}>
          <h3>{t('teamPage.founderAchievements')}</h3>
          <div className={styles.achievementsGrid}>
            {teamMembers[activeIndex].achievements.map((achievement, i) => (
              <div key={i} className={styles.achievementCard}>
                <span className={styles.achievementText}>{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Team

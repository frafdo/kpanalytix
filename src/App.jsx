/**
 * @file App.jsx
 * @description Main application component with routing configuration
 * @features
 * - React Router for page navigation
 * - Layout wrapper with Header and Footer
 * - Chatbot component
 * - Page transitions with Framer Motion
 */

import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

// Layout Components
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Chatbot from './components/Chatbot/Chatbot'

// Pages
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Experience from './pages/Experience/Experience'
import Services from './pages/Services/Services'
import Team from './pages/Team/Team'
import Contact from './pages/Contact/Contact'
import Privacy from './pages/Privacy/Privacy'
import Terms from './pages/Terms/Terms'
import NotFound from './pages/NotFound/NotFound'

/**
 * ScrollToTop Component
 * Scrolls to top on route change
 */
function ScrollToTop() {
  const { pathname } = useLocation()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  
  return null
}

/**
 * Main App Component
 */
function App() {
  const location = useLocation()
  const { i18n } = useTranslation()

  // Update document direction on language change
  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = i18n.language
  }, [i18n.language])

  return (
    <div className="page-wrapper">
      <ScrollToTop />
      <Header />
      
      <main className="main-content">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      
      <Footer />
      <Chatbot />
    </div>
  )
}

export default App

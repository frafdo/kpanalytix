/**
 * @file Chatbot.jsx
 * @description Spinning orb chatbot
 */

import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { chatbotResponses } from '../../data/chatbotData'
import styles from './Chatbot.module.css'

function Chatbot() {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef(null)

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ type: 'bot', text: t('chatbot.greeting') }])
    }
  }, [isOpen, t])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const findResponse = (query) => {
    const lang = i18n.language
    const lowerQuery = query.toLowerCase()
    
    for (const item of chatbotResponses) {
      for (const keyword of item.keywords) {
        if (lowerQuery.includes(keyword.toLowerCase())) {
          const response = item.response[lang] || item.response.en
          return { 
            text: response.text, 
            action: response.link ? { type: 'link', path: response.link.path } : null 
          }
        }
      }
    }
    
    return {
      text: lang === 'ar' 
        ? 'عذراً، لم أفهم سؤالك. يمكنك التواصل معنا مباشرة.'
        : "I'm not sure about that. Feel free to contact us directly for more information.",
      action: { type: 'link', path: '/contact' }
    }
  }

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage = { type: 'user', text: input }
    setMessages(prev => [...prev, userMessage])
    
    const response = findResponse(input)
    
    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', text: response.text, action: response.action }])
    }, 500)
    
    setInput('')
  }

  const handleAction = (action) => {
    if (action?.type === 'link') {
      setIsOpen(false)
      navigate(action.path)
    }
  }

  const suggestions = t('chatbot.suggestions', { returnObjects: true })

  return (
    <>
      {/* Spinning Orb Button */}
      <motion.button
        className={styles.chatButton}
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open chat"
      >
        <div className={styles.buttonGlow}></div>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
        </svg>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.chatWindow}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
          >
            {/* Header */}
            <div className={styles.header}>
              <div className={styles.headerInfo}>
                <div className={styles.aiAvatar}>
                  <div className={styles.avatarPulse}></div>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div>
                  <h3>{t('chatbot.title')}</h3>
                  <span className={styles.statusOnline}>Online</span>
                </div>
              </div>
              <button className={styles.closeBtn} onClick={() => setIsOpen(false)} aria-label="Close chat">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className={styles.messages}>
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  className={`${styles.message} ${styles[msg.type]}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {msg.type === 'bot' && (
                    <div className={styles.botIcon}>
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      </svg>
                    </div>
                  )}
                  <div className={styles.messageContent}>
                    <p>{msg.text}</p>
                    {msg.action && (
                      <button 
                        className={styles.actionBtn}
                        onClick={() => handleAction(msg.action)}
                      >
                        Learn more →
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            {messages.length <= 1 && (
              <div className={styles.suggestions}>
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    className={styles.suggestionBtn}
                    onClick={() => {
                      setMessages(prev => [...prev, { type: 'user', text: suggestion }])
                      const response = findResponse(suggestion)
                      setTimeout(() => {
                        setMessages(prev => [...prev, { type: 'bot', text: response.text, action: response.action }])
                      }, 500)
                    }}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className={styles.inputArea}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={t('chatbot.placeholder')}
                className={styles.input}
              />
              <button className={styles.sendBtn} onClick={handleSend} aria-label="Send message">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Chatbot

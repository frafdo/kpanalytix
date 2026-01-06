/**
 * @file Chatbot.jsx
 * @description AI Chatbot - uses GPT-4o-mini if API key available, otherwise falls back to FAQ
 */

import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { chatbotResponses } from '../../data/chatbotData'
import styles from './Chatbot.module.css'

// System prompt for GPT
const SYSTEM_PROMPT = `You are KPAnalytix's AI assistant. You ONLY answer questions about KPAnalytix and its services. If asked about anything unrelated, politely redirect to company services.

About KPAnalytix: Premier data analytics and AI consulting firm in Riyadh, Saudi Arabia.
CRN: 1010900500, TRN: 311458122400003

Leadership:
- Dr. Khaled Alqahtani - Founder & CEO, 30+ years experience, former King Saud University lecturer
- Dr. Hend Aljobaily - Co-Founder & Chief Data Analytics & AI, Chief Data Scientist at NEOM

Services: Predictive Analytics, Forecasting, Dashboards, Data Governance, AI Models, Statistical Consulting, KPI Measurement, Policy Design, Impact Assessment, International Economics, Best Practices, Benchmarking

Contact: office@kpanalytix.com, Riyadh, Saudi Arabia

Guidelines:
- Be helpful, professional, concise
- Answer in user's language (Arabic or English)
- For pricing, suggest contacting the team
- Redirect off-topic questions to company services`

function Chatbot() {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)
  const conversationRef = useRef([])

  // Check if API key is available
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY
  const hasApiKey = apiKey && apiKey !== 'your_openai_api_key_here' && apiKey.startsWith('sk-')

  // Initialize with greeting
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting = i18n.language === 'ar' 
        ? 'مرحباً! أنا مساعد KPAnalytix. كيف يمكنني مساعدتك اليوم؟'
        : "Hello! I'm KPAnalytix's assistant. How can I help you today?"
      setMessages([{ type: 'bot', text: greeting }])
    }
  }, [isOpen, i18n.language])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // FAQ-based response (fallback)
  const findFaqResponse = (query) => {
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
        ? 'عذراً، لم أفهم سؤالك. يمكنك التواصل معنا مباشرة للمزيد من المعلومات.'
        : "I'm not sure about that. Feel free to contact us directly for more information.",
      action: { type: 'link', path: '/contact' }
    }
  }

  // GPT-based response
  const sendToGPT = async (userMessage) => {
    conversationRef.current.push({ role: 'user', content: userMessage })

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...conversationRef.current
          ],
          max_tokens: 500,
          temperature: 0.7
        })
      })

      if (!response.ok) throw new Error('API request failed')

      const data = await response.json()
      const assistantMessage = data.choices[0].message.content

      conversationRef.current.push({ role: 'assistant', content: assistantMessage })

      if (conversationRef.current.length > 20) {
        conversationRef.current = conversationRef.current.slice(-20)
      }

      return { text: assistantMessage, action: null }
    } catch (error) {
      console.error('Chat error:', error)
      // Fallback to FAQ on error
      return findFaqResponse(userMessage)
    }
  }

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userText = input
    setMessages(prev => [...prev, { type: 'user', text: userText }])
    setInput('')

    if (hasApiKey) {
      setIsLoading(true)
      const response = await sendToGPT(userText)
      setMessages(prev => [...prev, { type: 'bot', text: response.text, action: response.action }])
      setIsLoading(false)
    } else {
      // Use FAQ fallback
      setTimeout(() => {
        const response = findFaqResponse(userText)
        setMessages(prev => [...prev, { type: 'bot', text: response.text, action: response.action }])
      }, 500)
    }
  }

  const handleSuggestionClick = async (suggestion) => {
    if (isLoading) return
    
    setMessages(prev => [...prev, { type: 'user', text: suggestion }])

    if (hasApiKey) {
      setIsLoading(true)
      const response = await sendToGPT(suggestion)
      setMessages(prev => [...prev, { type: 'bot', text: response.text, action: response.action }])
      setIsLoading(false)
    } else {
      setTimeout(() => {
        const response = findFaqResponse(suggestion)
        setMessages(prev => [...prev, { type: 'bot', text: response.text, action: response.action }])
      }, 500)
    }
  }

  const handleAction = (action) => {
    if (action?.type === 'link') {
      setIsOpen(false)
      navigate(action.path)
    }
  }

  const suggestions = i18n.language === 'ar' 
    ? ['ما هي خدماتكم؟', 'من هو فريق القيادة؟', 'كيف أتواصل معكم؟']
    : ['What services do you offer?', 'Who is on your team?', 'How can I contact you?']

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
                  <h3>KPAnalytix {hasApiKey ? 'AI' : 'Assistant'}</h3>
                  <span className={styles.statusOnline}>
                    {isLoading ? (i18n.language === 'ar' ? 'يكتب...' : 'Typing...') : 'Online'}
                  </span>
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
                        {i18n.language === 'ar' ? 'اعرف المزيد ←' : 'Learn more →'}
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
              
              {/* Loading indicator */}
              {isLoading && (
                <motion.div
                  className={`${styles.message} ${styles.bot}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className={styles.botIcon}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    </svg>
                  </div>
                  <div className={styles.messageContent}>
                    <div className={styles.typingIndicator}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            {messages.length <= 1 && !isLoading && (
              <div className={styles.suggestions}>
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    className={styles.suggestionBtn}
                    onClick={() => handleSuggestionClick(suggestion)}
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
                placeholder={i18n.language === 'ar' ? 'اكتب رسالتك...' : 'Type your message...'}
                className={styles.input}
                disabled={isLoading}
              />
              <button 
                className={styles.sendBtn} 
                onClick={handleSend} 
                aria-label="Send message"
                disabled={isLoading}
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </div>

            {/* Powered by notice */}
            {hasApiKey && (
              <div className={styles.poweredBy}>
                Powered by GPT-4o-mini
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Chatbot

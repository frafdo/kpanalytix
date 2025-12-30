/**
 * @file Button.jsx
 * @description Reusable button component with multiple variants
 * @variants primary, secondary, outline, ghost
 * @sizes sm, md, lg
 */

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styles from './Button.module.css'

function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  icon,
  iconPosition = 'right',
  fullWidth = false,
  disabled = false,
  className = '',
  onClick,
  ...props
}) {
  const buttonClasses = `
    ${styles.button}
    ${styles[variant]}
    ${styles[size]}
    ${fullWidth ? styles.fullWidth : ''}
    ${icon ? styles.withIcon : ''}
    ${className}
  `.trim()

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className={styles.icon}>{icon}</span>}
      <span className={styles.text}>{children}</span>
      {icon && iconPosition === 'right' && <span className={styles.icon}>{icon}</span>}
    </>
  )

  // External link
  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClasses}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {content}
      </motion.a>
    )
  }

  // Internal link
  if (to) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link to={to} className={buttonClasses} {...props}>
          {content}
        </Link>
      </motion.div>
    )
  }

  // Button
  return (
    <motion.button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      {...props}
    >
      {content}
    </motion.button>
  )
}

export default Button

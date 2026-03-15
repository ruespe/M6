import styles from './Label.module.scss'

function Label({ children, htmlFor, className = '' }) {
  return (
    <label htmlFor={htmlFor} className={`${styles.label} ${className}`}>
      {children}
    </label>
  )
}

export default Label

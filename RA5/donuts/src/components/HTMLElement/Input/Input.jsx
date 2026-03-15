import styles from './Input.module.scss'

function Input({ type = 'text', defaultValue, min, max, inputRef, className = '' }) {
  return (
    <input
      type={type}
      defaultValue={defaultValue}
      min={min}
      max={max}
      ref={inputRef}
      className={`${styles.input} ${className}`}
    />
  )
}

export default Input

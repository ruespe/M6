import styles from './Select.module.scss'

function Select({ name, selectRef, children, className = '' }) {
  return (
    <select name={name} ref={selectRef} className={`${styles.select} ${className}`}>
      {children}
    </select>
  )
}

export default Select

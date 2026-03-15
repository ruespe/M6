import styles from './Image.module.scss'

function Image({ src, alt, className = '' }) {
  return <img src={src} alt={alt} className={`${styles.img} ${className}`} />
}

export default Image

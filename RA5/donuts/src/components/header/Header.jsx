import { useCart } from '../../context/CartContext'
import { useCartVisibility } from '../../context/CartVisibilityContext'
import styles from './Header.module.scss'

function Header() {
  const { totalItems } = useCart()
  const { toggleCart } = useCartVisibility()

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Donuts</h1>
      <button className={styles.cartBtn} onClick={toggleCart}>
        🛒
        {totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}
      </button>
    </header>
  )
}

export default Header
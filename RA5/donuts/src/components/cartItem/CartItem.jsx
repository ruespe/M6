import { useCart } from '../../context/CartContext'
import { Button } from '../HTMLElement'
import styles from './CartItem.module.scss'

function CartItem({ item }) {
  const { removeFromCart } = useCart()

  return (
    <li className={styles.item}>
      <div className={styles.top}>
        <strong>{item.donut.name.toUpperCase()}</strong>
        <span className={styles.price}>{(item.donut.ppu * item.quantity).toFixed(2)}€</span>
      </div>
      <small className={styles.details}>{item.batter} - {item.topping}</small>
      <p className={styles.units}>{item.quantity} u. x {item.donut.ppu}€</p>
      <Button
        variant="remove"
        className={styles.removeBtn}
        onClick={() => removeFromCart(item.id)}
      >
        ELIMINAR
      </Button>
    </li>
  )
}

export default CartItem

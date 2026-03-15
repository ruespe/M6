import { useCart } from '../../context/CartContext'
import { useCartVisibility } from '../../context/CartVisibilityContext'
import { Button } from '../HTMLElement'
import CartItem from '../cartItem/CartItem'
import styles from './Cart.module.scss'

function Cart() {
  const { items, clearCart, total } = useCart()
  const { isOpen, closeCart } = useCartVisibility()

  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ''}`}
        onClick={closeCart}
      />
      <div className={`${styles.panel} ${isOpen ? styles.panelOpen : ''}`}>
        <div className={styles.panelHeader}>
          <h3>🛒 Carrito</h3>
          <button className={styles.closeBtn} onClick={closeCart}>✕</button>
        </div>

        {items.length === 0 ? (
          <p className={styles.empty}>El carrito está vacío</p>
        ) : (
          <>
            <ul className={styles.list}>
              {items.map((item, index) => (
                <div key={item.id}>
                  <CartItem item={item} />
                  {index < items.length - 1 && <hr className={styles.divider} />}
                </div>
              ))}
            </ul>

            <div className={styles.footer}>
              <div className={styles.total}>
                <span>TOTAL</span>
                <strong>{total.toFixed(2)}€</strong>
              </div>

              <div className={styles.actions}>
                <Button variant="dark">FINALITZAR COMPRA</Button>
                <Button variant="secondary" onClick={clearCart}>BUIDAR TOT</Button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Cart

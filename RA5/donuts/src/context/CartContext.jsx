import { createContext, useContext, useState } from 'react'
import { addProduct, removeProduct, calcTotal } from '../services/cartService'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  function addToCart(donut, batter, topping, quantity) {
    setItems(prev => addProduct(prev, donut, batter, topping, quantity))
  }

  function removeFromCart(id) {
    setItems(prev => removeProduct(prev, id))
  }

  function clearCart() {
    setItems([])
  }

  const total = calcTotal(items)
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart, total, totalItems }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}

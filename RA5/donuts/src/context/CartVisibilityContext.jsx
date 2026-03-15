import { createContext, useContext, useState } from 'react'

const CartVisibilityContext = createContext()

export function CartVisibilityProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)
  const toggleCart = () => setIsOpen(prev => !prev)

  return (
    <CartVisibilityContext.Provider value={{ isOpen, openCart, closeCart, toggleCart }}>
      {children}
    </CartVisibilityContext.Provider>
  )
}

export function useCartVisibility() {
  return useContext(CartVisibilityContext)
}

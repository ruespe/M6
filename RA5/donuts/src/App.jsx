import './App.scss'
import { CartProvider } from './context/CartContext'
import { CartVisibilityProvider } from './context/CartVisibilityContext'
import Header from './components/header/Header'
import Catalog from './components/catalog/Catalog'
import Cart from './components/cart/Cart'

function App() {
  return (
    <CartProvider>
      <CartVisibilityProvider>
        <div className="app">
          <Header />
          <Catalog />
          <Cart />
        </div>
      </CartVisibilityProvider>
    </CartProvider>
  )
}

export default App

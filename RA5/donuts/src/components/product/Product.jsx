import { useRef } from 'react'
import { useCart } from '../../context/CartContext'
import { Button, Image, Input, Label, Option, Select } from '../HTMLElement'
import styles from './Product.module.scss'

function Product({ donut }) {
  const imgSrc = new URL(`../../assets/images/${donut.img}`, import.meta.url).href
  const { addToCart } = useCart()
  const batterRef = useRef()
  const toppingRef = useRef()
  const quantityRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()
    addToCart(
      donut,
      batterRef.current.value,
      toppingRef.current.value,
      Number(quantityRef.current.value)
    )
  }

  return (
    <div className={styles.card}>
      <header className={styles.header}>
        <h2>{donut.name.toUpperCase()}</h2>
        <p className={styles.subtitle}>{donut.type.toUpperCase()}</p>
      </header>

      <Image src={imgSrc} alt={donut.name} className={styles.img} />

      <p className={styles.price}>Price: <strong>{donut.ppu.toFixed(2)}€</strong></p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <Label>BATTERS:</Label>
        <Select name="batters" selectRef={batterRef}>
          {donut.batters.batter.map(b => (
            <Option key={b.id} value={b.type}>{b.type}</Option>
          ))}
        </Select>

        <Label>TOPPING:</Label>
        <Select name="topping" selectRef={toppingRef}>
          {donut.topping.map(t => (
            <Option key={t.id} value={t.type}>{t.type}</Option>
          ))}
        </Select>

        <div className={styles.quantitySection}>
          <Label>QUANTITY</Label>
          <Input type="number" defaultValue={1} min={1} inputRef={quantityRef} />
        </div>

        <Button type="submit" variant="primary" className={styles.buyBtn}>BUY</Button>
      </form>
    </div>
  )
}

export default Product

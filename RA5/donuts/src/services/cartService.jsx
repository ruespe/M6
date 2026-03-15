/**
 * Afegeix o actualitza un producte a la llista del carrito.
 * @param {Array} items - Llista actual d'ítems al carrito
 * @param {Object} donut - Objecte donut del JSON
 * @param {string} batter - Tipus de batter seleccionat
 * @param {string} topping - Tipus de topping seleccionat
 * @param {number} quantity - Quantitat a afegir
 * @returns {Array} Nova llista d'ítems actualitzada
 */
export function addProduct(items, donut, batter, topping, quantity) {
  const existing = items.find(
    item =>
      item.donut.id === donut.id &&
      item.batter === batter &&
      item.topping === topping
  )

  if (existing) {
    return items.map(item =>
      item === existing
        ? { ...item, quantity: item.quantity + quantity }
        : item
    )
  }

  return [
    ...items,
    {
      id: `${donut.id}-${batter}-${topping}-${Date.now()}`,
      donut,
      batter,
      topping,
      quantity,
    },
  ]
}

/**
 * Elimina un producte del carrito per ID.
 */
export function removeProduct(items, id) {
  return items.filter(item => item.id !== id)
}

/**
 * Calcula el total del carrito.
 */
export function calcTotal(items) {
  return items.reduce((sum, item) => sum + item.donut.ppu * item.quantity, 0)
}

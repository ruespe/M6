/**
 * Descarrega la llista de donuts des del fitxer JSON públic.
 * @returns {Promise<Array>} Array d'objectes donut
 */
export async function fetchDonuts() {
  const response = await fetch('/donuts.json')
  if (!response.ok) {
    throw new Error(`Error carregant donuts: ${response.status}`)
  }
  return response.json()
}

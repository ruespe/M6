import { useState, useEffect } from 'react'
import { fetchDonuts } from '../../services/apiService'
import Product from '../product/Product'
import styles from './Catalog.module.scss'

function Catalog() {
  const [donuts, setDonuts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchDonuts()
      .then(data => setDonuts(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p className={styles.msg}>Carregant...</p>
  if (error) return <p className={styles.msg}>Error: {error}</p>

  return (
    <main className={styles.grid}>
      {donuts.map(donut => (
        <Product key={donut.id} donut={donut} />
      ))}
    </main>
  )
}

export default Catalog

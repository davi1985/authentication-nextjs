'use client'

import axios from 'axios'
import { useEffect } from 'react'

export default function Orders() {
  useEffect(() => {
    axios.get('/api/orders')
  }, [])

  return <h1>Pedidos</h1>
}

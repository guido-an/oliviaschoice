import React, { useEffect, useContext, useState } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Ordini = () => {
  const { getOrders, checkIfLoggedIn } = useContext(UserContext)
  const [orders, setOrders] = useState([])
  const [proceed, setProceed] = useState(false)

  const router = useRouter()

  useEffect(() => {
    async function getOrdersFromDB () {
      const userLoggedIn = await checkIfLoggedIn()
      if (!userLoggedIn) {
        router.push('/login')
      } else {
        const ordersFromDB = await getOrders()
        setOrders(ordersFromDB)
        setProceed(true)
      }
    }
    getOrdersFromDB()
  }, [])

  if (!proceed) {
    return <p />
  }

  return (

    <div>
      <h1>Ordini</h1>

      {orders.map(order => {
        return <div key={order._id}>
          <p><strong>ORDER</strong></p>
          <p>{order._id}</p>
          <p>{order.created_at}</p>
          <Link href='/user/ordine/[id]' as={`/user/ordine/${encodeURIComponent(order._id)}`}>
                      View order
          </Link>
        </div>
      })}

    </div>
  )
}

export default Ordini

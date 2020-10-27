import React, { useEffect, useContext, useState } from 'react'
import { UserContext } from '../../contexts/UserContext'
import Link from 'next/link'


const Ordini = () => {
const { getOrders } = useContext(UserContext)
const [orders, setOrders] = useState([])


useEffect(() => {
    async function getOrdersFromDB(){
       const ordersFromDB = await getOrders()
       setOrders(ordersFromDB)
    }
    getOrdersFromDB()
}, [])

   return(
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
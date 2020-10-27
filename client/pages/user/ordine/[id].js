import React, { useEffect, useContext, useState } from 'react'
import { UserContext } from '../../../contexts/UserContext'
import { useRouter } from "next/router";


const Ordine = () => {
const router = useRouter();
const { id } = router.query; // Destructuring our router object

const { getSingleOrder } = useContext(UserContext)
const [order, setOrder] = useState([])


useEffect(() => {
    async function getOrderFromDB(){
       const orderFromDB = await getSingleOrder(id)
       setOrder(orderFromDB)
    }
    getOrderFromDB()
}, [id])

   return(
       <div>
           <h1>Pagina ordine</h1>
           {order && order._id}
       </div>
   )
}

export default Ordine
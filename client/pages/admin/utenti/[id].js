import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Link from 'next/link'

const service = axios.create({
  baseURL: process.env.APP_API,
  withCredentials: true
})

const UserDetails = () => {
  const [user, setUser] = useState({})
  const [proceed, setProceed] = useState(false)
  const router = useRouter()

const { id } = router.query; 

  useEffect(() => {
    // Create an scoped async function in the hook
    async function checkIfAdmin () {
      try {
        const res = await service.get('/admin/get-admin')
        if (res.data.admin) {
         const response = await service.get('/user/' + id)
          setUser(response.data.user)
          setProceed(true)
        } else {
          router.push('/')
        }
      } catch (e) {
        console.log(e)
      }
    }
    // Execute the created function directly
    checkIfAdmin()
  }, [id])

  if (!proceed) {
    return <p />
  }

  const displayUser = () => {
    return (
      <div>
        <style jsx>{`
              .container {
                display: flex;
            }
            p{
              margin-left: 25px;
              text-align: center;
              color: rgb(140, 43, 47);
              font-weight: 500 !important;
            }
            .container {
              position: relative;
              top: 10px
            }
        `   }</style>
        <h1>Dettagli utentee</h1>
        <div  className="container">
          <p>{user.firstName} {user.lastName}</p>
          <p>{user.email}</p>
          <p>{user.telephone}</p>
        </div>
      </div>
    )
  }

  const displayOders = () => {
    return (
        <div>
           <style jsx>{`
              .container {
                display: flex;
            }
            p{
              margin-left: 15px;
            }
            .container {
              position: relative;
              top: -10px
            }
            .link-btn{
              color: rgb(140, 43, 47);
              font-weight: 500 !important;
              display: block
            } 
            .title{
              font-size: 20px;
              color: #000;
            }
          
            p.strong{
              color: #000;
            }
            .block{
              padding-top: 20px;
              box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 10px 0px;
              border-radius: 4px;
              margin-bottom: 20px;
            }
        `   }</style>
          <h3 className="title">Ordini</h3>
          {user.orders.map(order => {
              return (
                <div key={order._id} className="block">
                  <div className="container">
                    <p><strong>Prezzo totale</strong> : {order.totalPrice} €</p>
                    <p><strong>Pagato</strong> : {order.paid? "Yes" : "No"}</p>
                  </div>
                    <div>
                      <p className="title">Spedizione</p>
                      <div className="container">
                        <p><strong>Nome</strong> : {order.shippingInfo.firstName} {order.shippingInfo.lastName}</p>
                        <p><strong>Email</strong> : {order.shippingInfo.email}</p>
                        <p><strong>P.IVA</strong> : {order.shippingInfo.VAT}</p>
                        <p><strong>Indirizzo</strong> : {order.shippingInfo.streetAddress}</p>
                        <p><strong>Cittá </strong>: {order.shippingInfo.city}</p>
                        <p><strong>Provincia </strong>: {order.shippingInfo.province}</p>
                        <p><strong>Zip </strong>: {order.shippingInfo.zipCode}</p>
                        <p><strong>Note aggiuntive </strong>: {order.shippingInfo.additionalNotes && order.shippingInfo.additionalNotes}</p>
                      </div>
                    </div>
                    <p className="title">Prodotti acquistati</p>
                    {order.productsInCart.map(product => {
                  return (
                    <div>
                      <div className="container">
                        <p><strong>Codice </strong>: {product.codeArticle}</p>
                        <p><strong>Nome </strong>: {product.name}</p>
                        <p><strong>Quantitá</strong> : {product.boughtQuantity}</p>
                      </div>
                    </div>
                  )
                    })}
                </div>
              )
          })}
        </div>
      )
  }

  return (
    <div className="container">
      <Link href='/admin/utenti' as={`/admin/utenti`}>
          <p className="link-btn"> Back to users</p>
      </Link>
      {displayUser()}
      {displayOders()}
      <style jsx>{`
        .container {
          margin-left: 5vw;
          margin-right: 5vw;
        }
        .link-btn{
          color: rgb(140, 43, 47);
          font-weight: 500 !important;
          display: block
        }
  `   }</style>
    </div>
  )
}

export default UserDetails

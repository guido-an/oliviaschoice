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
      <div className="values">
        <h2>Ordini</h2>
      </div>

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
       <style jsx>{`
        .values {
            margin-top: 140px;
            padding: 40px 10px 60px;
            background-color: #8c2b2f;
            text-align: center;
        }
        .link-btn{
          color: rgb(140, 43, 47);
          font-weight: 500 !important;
          display: block
          margin-left: 5vw;
        }

        button {
          background-color: #8c2b2f;;
          color: #fff;
          border-radius: 4px;
          border: 1px solid #8c2b2f;;
          cursor: pointer;
          height: 40px;
          width: 180px;
          margin-top: 30px;
          letter-spacing: 0.2px;
          box-shadow: 0px 4px 10px 0 rgba(0,0,0,0.3);
        }

        .block{
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        form {
          margin: 40px 85px;
        }
        .values h2  {
            color: #fff
        } 

        .values h3{
            color: #fff !important;
            font-weight: 600
        }
        p {
            font-weight: 300;
           letter-spacing: 0.2px;
           line-height: 26px;
           margin: 30px 0;
           color: #333;
        }

        label {
          color: #555;
        }
        @media(min-width:968px){
            .values {
                padding: 60px 80px 80px;
                margin: 120px 85px;
                border-radius: 4px;
                margin-bottom: 40px;
                box-shadow: 0px 5px 15px 5px rgba(0,0,0,0.4)
            }
        }
        .input-box{
          width:49%;
        }

        input, select {
          width: 100%;
          padding: 12px 20px;
          margin: 8px 0;
          display: inline-block;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
        }

        @media only screen and (max-width: 868px) {
          .input-box{
            width:100%;
          }
          form {
            margin: 40px 10px;
          }
        }
        `}
      </style>

    </div>
  )
}

export default Ordini

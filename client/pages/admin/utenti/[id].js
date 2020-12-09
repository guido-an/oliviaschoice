import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

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
        <h1>UserDetails</h1>
        <p>{user.firstName} {user.lastName}</p>
        <p>{user.email}</p>
        <p>{user.telephone}</p>
      </div>
    )
  }

  const displayOders = () => {
    return (
        <div>
          <p>Orders:</p>
          {user.orders.map(order => {
              return (
                <div key={order._id}>
                  <p>{order.totalPrice}</p>
                  <p>{order.paid ? 'completato' : 'in sospeso'}</p>
                </div>
              )
          })}
        </div>
      )
  }

  return (
    <div>
      {displayUser()}
      {displayOders()}
    </div>
  )
}

export default UserDetails

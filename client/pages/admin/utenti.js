import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'

const service = axios.create({
  baseURL: process.env.APP_API,
  withCredentials: true
})

const UsersList = () => {
  const [users, setUsers] = useState([])
  const [proceed, setProceed] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Create an scoped async function in the hook
    async function checkIfAdmin () {
      try {
        const res = await service.get('/admin/get-admin')
        if (res.data.admin) {
          const response = await service.get('/admin/list-of-users')
          setUsers(response.data.users)
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
  }, [])

  if (!proceed) {
    return <p />
  }

  const displayUsers = () => {
    return users.map(user => {
      if (user.admin) {
        return
      }
      return (
        <div key={user._id}>
          <p>{user.firstName} {user.lastName}</p>
          <p>Ordini totali: {user.orders.length}</p>
          <Link href='/admin/utenti/[id]' as={`/admin/utenti/${encodeURIComponent(user._id)}`}>
              Dettagli
          </Link>
          {/* <Link href={`/admin/utenti/${user._id}`}>Dettagli</Link> */}
        </div>
      )
    })
  }

  return (
    <div>
      <h1>UsersList</h1>
      {displayUsers()}
    </div>
  )
}

export default UsersList

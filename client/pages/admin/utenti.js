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
        <div className="container" key={user._id}>
           <style jsx>{`
              .container {
                display: flex;
                justify-content: center;
                flex-direction:row-reverse
            }
            p{
              min-width: 245px;
              margin-left: 15px;
              text-align: center;
            }
            .container {
              position: relative;
              top: 10px
            }
            .link-btn{
              color: rgb(140, 43, 47);
              font-weight: 500 !important;
              display: block
            } 
        `   }</style>
          <Link href='/admin/utenti/[id]' as={`/admin/utenti/${encodeURIComponent(user._id)}`}>
             <p className="link-btn"> Dettagli</p>
          </Link>
          <p>Ordini totali: {user.orders.length}</p>
          <p>{user.firstName} {user.lastName}</p>
          <p>{user.email}</p>
          {/* <Link href={`/admin/utenti/${user._id}`}>Dettagli</Link> */}
        </div>
      )
    })
  }

  return (
    <div className="body">
      <Link href='/admin/private' as={`/admin/private`}>
          <p className="link-btn"> Back to private area</p>
      </Link>
      <div className="container"><h1>Utenti</h1></div>
      <div className="container">
        <p className="titles">Email</p>
        <p className="titles">Nome</p>
        <p className="titles">Ordini</p>
        <p className="titles">> Dettagli</p>
      </div>
      {displayUsers()}
      <style jsx>{`
        .body{
          justify-content: center;
          margin: 0 5vw;
        }
        .container {
          display: flex;
          justify-content: center;
        }
        .titles{
          width: 245px;
          text-align: center;
          font-size: 20px;
          color: rgb(140, 43, 47);
        }
        .container {
          position: relative;
          top: 10px
        }
        .link-btn{
          color: rgb(140, 43, 47);
          font-weight: 500 !important;
          display: block
          margin-left: 5vw;
        }
  `   }</style>

    </div>
  )
}

export default UsersList

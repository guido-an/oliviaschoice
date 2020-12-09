
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'

const service = axios.create({ // to update the order
  baseURL: process.env.APP_API,
  withCredentials: true
})

const Product = () => {
  const router = useRouter()
  const { token } = router.query
  const [email, setEmail] = useState('')
  console.log(router)// Destructuring our router object
  const handleSubmit = async e => {
    e.preventDefault()
    try {
     const response = await service.post(`${process.env.APP_API}/auth/forgotpasswordResponse`,{email})
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <h1>reset page</h1>
      <form onSubmit={handleSubmit}>
        <input type='email' value={email} placeholder='*Email' required onChange={(e) => setEmail(e.target.value)} />
        <button>Reset Password</button>
      </form>
    </div>
  )
}

export default Product

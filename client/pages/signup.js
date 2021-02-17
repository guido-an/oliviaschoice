import React, { useState, useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { useRouter } from 'next/router'

const Signup = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signup, setUser } = useContext(UserContext)

  const router = useRouter()

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const user = {
        email,
        password,
        firstName,
        lastName
      }
      const res = await signup(user)
      console.log(res, 'res')
      setUser(res.data.currentUser)
      router.push('/user/profilo')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' value={firstName} placeholder='* Nome' onChange={(e) => setFirstName(e.target.value)} required />
        <input type='text' value={lastName} placeholder='* Cognome' onChange={(e) => setLastName(e.target.value)} required />
        <input type='text' value={email} placeholder='* Email' onChange={(e) => setEmail(e.target.value)} required />
        <input type='password' placeholder='* Password' onChange={(e) => setPassword(e.target.value)} minLength='6' required />
        <button>Signup</button>
      </form>
    </div>
  )
}
export default Signup

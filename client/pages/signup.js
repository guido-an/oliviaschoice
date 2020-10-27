import React, { useState, useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

const Signup = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signup, setUser } = useContext(UserContext)

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
      console.log(res)
      setUser(res.data.currentUser)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' value={firstName} placeholder='*Nome' onChange={(e) => setFirstName(e.target.value)} required />
        <input type='text' value={lastName} placeholder='*Cognome' onChange={(e) => setLastName(e.target.value)} required />
        <input type='text' value={email} placeholder='*Email' onChange={(e) => setEmail(e.target.value)} required />
        {/* <input type='email' value={email} placeholder='*Email' required onChange={(e) => setEmail(e.target.value)} /> */}
        <input type='password' placeholder='*Password' onChange={(e) => setPassword(e.target.value)} required />
        <button>Signup</button>
      </form>
    </div>
  )
}
export default Signup

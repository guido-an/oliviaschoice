import React, { useState, useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

const Signup = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signup, setAppUser } = useContext(UserContext)

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const user = {
        email,
        password,
        firstName,
        lastName
      }
      await signup(user)
      setAppUser(user)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' value={firstName} placeholder='*Nome' required onChange={(e) => setFirstName(e.target.value)} />
        <input type='text' value={lastName} placeholder='*Cognome' required onChange={(e) => setLastName(e.target.value)} />
        <input type='text' value={email} placeholder='*Email' required onChange={(e) => setEmail(e.target.value)} />
        {/* <input type='email' value={email} placeholder='*Email' required onChange={(e) => setEmail(e.target.value)} /> */}
        <input type='password' placeholder='*Password' required onChange={(e) => setPassword(e.target.value)} />
        <button>Signup</button>
      </form>
    </div>
  )
}
export default Signup

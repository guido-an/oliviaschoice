import Layout from '../components/layout'
import React, { useState } from 'react'
import axios from 'axios'

const service = axios.create({
  baseURL: 'http://localhost:5000/',
  withCredentials: true
})

const Signup = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signupService = async user => {
    const data = await service.post('/auth/signup', user)
    return data
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const user = {
        email,
        password
      }
      await signupService(user)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Layout>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' value={firstName} placeholder='*Nome' required onChange={(e) => setFirstName(e.target.value)} />
        <input type='text' value={lastName} placeholder='*Cognome' required onChange={(e) => setLastName(e.target.value)} />
        <input type='email' value={email} placeholder='*Email' required onChange={(e) => setEmail(e.target.value)} />
        <input type='password' placeholder='*Password' required onChange={(e) => setPassword(e.target.value)} />
        <button>Signup</button>
      </form>
    </Layout>
  )
}
export default Signup

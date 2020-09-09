import Layout from '../components/layout'
import React, { useState } from 'react'
import axios from 'axios'

const service = axios.create({
  baseURL: 'http://localhost:5000/',
  withCredentials: true
})

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginService = async user => {
    const data = await service.post('/auth/login', user)
    return data
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const user = {
        email,
        password
      }
      await loginService(user)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Layout>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type='email' value={email} placeholder='*Email' required onChange={(e) => setEmail(e.target.value)} />
        <input type='password' placeholder='*Password' required onChange={(e) => setPassword(e.target.value)} />
        <button>Login</button>
      </form>
    </Layout>
  )
}
export default Login

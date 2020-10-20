import React, { useState, useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

const Login = () => {
  const { login, setAppUser } = useContext(UserContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const user = {
        email,
        password
      }
      await login(user)
      setAppUser(user)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type='email' value={email} placeholder='*Email' required onChange={(e) => setEmail(e.target.value)} />
        <input type='password' placeholder='*Password' required onChange={(e) => setPassword(e.target.value)} />
        <button>Login</button>
      </form>
    </div>
  )
}
export default Login

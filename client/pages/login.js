import React, { useState, useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { useRouter } from 'next/router'

const Login = () => {
  const { login, setUser } = useContext(UserContext)
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const user = {
        email,
        password
      }
      const res = await login(user)
      setUser(res.data.currentUser)
      if (res.data.currentUser.admin) {
        router.push('/admin/private')
        return
      }
      if (res.data.currentUser) {
        router.push('/user/profilo')
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          value={email} placeholder='*Email'
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='*Password'
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>
    </div>
  )
}
export default Login

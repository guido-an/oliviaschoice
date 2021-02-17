import React, { useState, useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { useRouter } from 'next/router'
import Footer from '../components/Footer'
import Link from 'next/link'

const Login = () => {
  const { login, setUser } = useContext(UserContext)
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState(false)

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
      setErrorMsg(true)
      console.log(err)
    }
  }

  return (
    <div className='login'>
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
        {errorMsg &&
          <div>
            <p>Credenziali non corrette.</p>
            <p>Password dimenticata? <Link href='/user/reset/password'>Reset password</Link></p>
          </div>}
      </form>
      <style jsx='true'>{`
            .login {
              text-align: center;
            }
            form {
              margin-bottom: 180px 
            }
           .login input {
             display: block;
             margin: 0 auto;
             width: 80vw;
             padding: 10px;
             margin-bottom: 10px;
             border-radius: 4px;
             border: 1px solid #f7f7f7;
             box-shadow: 0px 2px 5px 0 rgba(0,0,0,0.3);
        
           }
           .login form button{
             margin-top: 20px;
             width: 80vw
           }
           .login form button {
             background-color: var(--main-color);
             color: #fff;
             border: none;
             height: 35px;
             border-radius:4px
           }
           @media(min-width: 968px){
             .login form button, .login input {
               width: 40vw
             }
           }
        
        `}
      </style>
      <Footer />
    </div>
  )
}
export default Login

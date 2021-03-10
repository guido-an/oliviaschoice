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
    <div className='signup'>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' value={firstName} placeholder='* Nome' onChange={(e) => setFirstName(e.target.value)} required />
        <input type='text' value={lastName} placeholder='* Cognome' onChange={(e) => setLastName(e.target.value)} required />
        <input type='text' value={email} placeholder='* Email' onChange={(e) => setEmail(e.target.value)} required />
        <input type='password' placeholder='* Password' onChange={(e) => setPassword(e.target.value)} minLength='6' required />
        <button>Signup</button>
      </form>
      <style jsx='true'>{`
            .signup {
              text-align: center;
            }
            form {
              margin-bottom: 180px 
            }
           .signup input {
             display: block;
             margin: 0 auto;
             width: 80vw;
             padding: 10px;
             margin-bottom: 20px;
             border-radius: 4px;
             border: 1px solid #f7f7f7;
             box-shadow: 0px 2px 5px 0 rgba(0,0,0,0.3);
        
           }
           .signup form button{
             margin-top: 20px;
             width: 80vw
           }
           
           .signup form button {
             background-color: var(--main-color);
             color: #fff;
             border: none;
             height: 35px;
             border-radius:4px
           }
           @media(min-width: 968px){
             .signup form button, .signup input {
               width: 30vw
             }
           }
        
        `}
      </style>
    </div>
  )
}
export default Signup

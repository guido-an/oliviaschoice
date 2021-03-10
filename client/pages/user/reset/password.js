
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
    <div className='login'>
      <h1>reset password</h1>
      <form onSubmit={handleSubmit}>
        <input type='email' value={email} placeholder='*Email' required onChange={(e) => setEmail(e.target.value)} />
        <button>Reset Password</button>
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
    </div>
  )
}

export default Product

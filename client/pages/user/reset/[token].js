import { useRouter } from "next/router";
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'

const service = axios.create({ // to update the order
  baseURL: process.env.APP_API,
  withCredentials: true
})

const Product = () => {
  const router = useRouter();
  const { token } = router.query; 
  const [password, setPassword] = useState('')
  const [repetPassword,setRepetPassword ] = useState('')
  const [cheked, setChcked] = useState(false)
  console.log(router)// Destructuring our router object
  const handleSubmit = async e => {
    e.preventDefault()
    try {
     console.log(password, repetPassword)
     if(password === repetPassword){
      const response = await service.post(`${process.env.APP_API}/auth/reset/${token}`,{password, repetPassword})
     }else{
      setChcked(true)
     }
     console.log('test',response)
     debugger
     
    } catch (err) {
      console.log(err)
    }
  }


    return (
      <div>
        <h1>reset page</h1>
        <form onSubmit={handleSubmit}>
        <input type='password' placeholder='*Password' required onChange={(e) => setPassword(e.target.value)} />
        <input type='password' placeholder='*Repet Password' required onChange={(e) => setRepetPassword(e.target.value)} />
        <p>{cheked == true ? "las passwords no son iguales" : ""}</p>
        <button>Set Password</button>
      </form>
      </div>
    )
  }


export default Product
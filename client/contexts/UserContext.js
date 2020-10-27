import { createContext, useState } from 'react'
import axios from 'axios'

export const UserContext = createContext()

const service = axios.create({
  baseURL: process.env.APP_API,
  withCredentials: true
})

const UserContextProvider = props => {
  const [user, setUser] = useState({})

  const signup = async user => {
    const data = await service.post('/auth/signup', user)
    return data
  }

  const login = async user => {
    const data = await service.post('/auth/login', user)
    return data
  }

  const updateUser = async (form) => {
    const data = await service.post('/user/update', form)
    return data
  }

  const checkIfLoggedIn = async () => {
    const { data } = await service.get('/auth/loggedin')
    return data.user
  }

  const fetchUser = async () => {
    try {
      const res = await checkIfLoggedIn()
      console.log(res, 'res')
      setUser(res)
    } catch (err) {
      setUser(null)
    }
  }

  const getOrders = async () => {
    try {
      const res = await service.get('/user/orders')
      return res.data.orders
    } catch (err) {
      setUser(null)
    }
  }

  const getSingleOrder = async (id) => {
    try {
      const res = await service.get('/user/order/' + id)
      return res.data.order
    } catch (err) {
      setUser(null)
    }
  }

  return (
    <UserContext.Provider value={{ user, signup, login, updateUser, setUser, checkIfLoggedIn, fetchUser, getOrders, getSingleOrder }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider

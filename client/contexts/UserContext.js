import { createContext, useState } from 'react'
import axios from 'axios'

export const UserContext = createContext()

const service = axios.create({
  baseURL: process.env.APP_API,
  withCredentials: true
})

const UserContextProvider = props => {
  const [user, setUser] = useState({})
  // console.log(user, 'user context')

  const signup = async user => {
    const data = await service.post('/auth/signup', user)
    return data
  }

  const login = async user => {
    const data = await service.post('/auth/login', user)
    return data
  }

  const setAppUser = user => setUser(user)

  const checkIfLoggedIn = async () => {
    const { data } = await service.get('/auth/loggedin')
    return data.user
  }

  const fetchUser = async () => {
    try {
      const res = await checkIfLoggedIn()
      setUser(res)
    } catch (err) {
      setUser(null)
    }
  }

  return (
    <UserContext.Provider value={{ user, signup, login, setAppUser, checkIfLoggedIn, fetchUser }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider

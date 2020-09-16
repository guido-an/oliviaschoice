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

  const setAppUser = user => setUser(user)

  const checkIfLoggedIn = async () => {
    const { data } = await service.get('/auth/loggedin')
    console.log(data, 'data')
    return data.user
  }

  const fetchUser = async () => {
    try {
      const res = await checkIfLoggedIn()
      setUser(res)
      console.log(res, 'res')
    } catch (err) {
      setUser(null)
    }
  }

  return (
    <UserContext.Provider value={{ user, signup, setAppUser, checkIfLoggedIn, fetchUser }}>
      {props.children}
    </UserContext.Provider>
  )
}

UserContextProvider.getInitialProps = async (ctx) => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const json = await res.json()
  console.log(json)
  return { stars: json.stargazers_count }
}

export default UserContextProvider

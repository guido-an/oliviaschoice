import { useContext, useEffect } from 'react'
import Head from 'next/head'
import Navbar from './navbar'
import { UserContext } from '../contexts/UserContext'

const Layout = (props) => {
  const { user, fetchUser } = useContext(UserContext)

  useEffect(() => {
    // Create an scoped async function in the hook
    async function fetchAppUser () {
      await fetchUser()
    }
    // Execute the created function directly
    fetchAppUser()
  }, [])

  return (
    <div>
      <Head>
        <title>Hello Next.js</title>
      </Head>
      <Navbar />
      <div className='container'>
        {props.children}
      </div>
    </div>
  )
}
export default Layout

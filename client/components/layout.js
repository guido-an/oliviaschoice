import { useContext, useEffect } from 'react'
import Head from 'next/head'
import Navbar from './navbar'
import { UserContext } from '../contexts/UserContext'
import { CartContext } from '../contexts/CartContext'

const Layout = (props) => {
  const { user, fetchUser } = useContext(UserContext)
  const { productsInCart } = useContext(CartContext)

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
        <title>Olivia's Choice</title>
      </Head>
      <Navbar user={user} />
      <div className='container'>
        {props.children}
      </div>
      <style jsx>{`
        .container {
          margin-top: 140px
        }
        
        `}
      </style>
    </div>
  )
}
export default Layout

// components/layout.js
import Head from 'next/head'
import Navbar from './navbar'
const Layout = (props) => {
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

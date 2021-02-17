import React, { useContext, useEffect } from 'react'
import Link from 'next/link'

import { ProductContext } from '../contexts/ProductContext'
import Hero from '../components/Hero'
import Values from '../components/Values'
import Categories from '../components/Categories'
import Testimonials from '../components/Testimonials'
import OverFooter from '../components/OverFooter'
import Footer from '../components/Footer'

const Index = () => {
  const { products, getProducts } = useContext(ProductContext)

  // useEffect(() => {
  //   // Create an scoped async function in the hook
  //   async function fetchProducts () {
  //     await getProducts()
  //   }
  //   // Execute the created function directly
  //   fetchProducts()
  // }, [])

  function createMarkup (text) { return { __html: text } };

  return (
    <div>
      <Hero />
      <Values />
      <Categories />
      <Testimonials />
      <OverFooter />
      <Footer />
    </div>
  )
}

// export async function getServerSideProps () {
//   // Fetch data from external API
//   const res = await fetch(`${process.env.APP_API}/api/products`, {
//     headers: {
//       credentials: 'include'
//     }
//   })
//   const products = await res.json()

//   // Pass data to the page via props
//   return { props: { products } }
// }

export default Index

import React, { useContext, useEffect } from 'react'
import Link from 'next/link'

import { ProductContext } from '../contexts/ProductContext'
import Hero2 from '../components/Hero2'
import Values from '../components/Values'
import Categories from '../components/Categories'
import Testimonials from '../components/Testimonials'
import OverFooter from '../components/OverFooter'
import Footer from '../components/Footer'
import ReminderOffer from '../components/ReminderOffer'
import ProductsOfTheMonth from '../components/ProductsOfTheMonth'

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
      <Hero2 />
      <Values />
      <Categories />
      <div id='reminder-offer'>
        <ReminderOffer />
      </div>
      <div id='testimonials'>
        <Testimonials />
      </div>
      <div id='products-of-the-month'>
        <ProductsOfTheMonth />
      </div>

      <div id='over-footer'>
        <OverFooter />
      </div>
      <div id='footer'>
        <Footer />
      </div>
      <style jsx='true'>
        {`

        #reminder-offer {
          position: relative;
          bottom: 140px
        }
        #testimonials, #products-of-the-month{
          position: relative;
          bottom: 160px
        }
        #over-footer, #footer {
          position: relative;
          bottom: 300px
        }
        #footer {
          height: 440px
         }
        @media(min-width: 968px){
          #testimonials{
            position: relative;
          bottom: 260px
        }
        #reminder-offer {
          position: relative;
          bottom: 280px
        }
        #over-footer, #footer, #products-of-the-month {
          position: relative;
          bottom: 280px
        }
        #footer {
          height: 100px
         }
        }
       

        `}
      </style>
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

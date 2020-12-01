import React, { useContext, useEffect } from 'react'
import Link from 'next/link'
import { ProductContext } from '../contexts/ProductContext'

const Index = () => {
  const { products, getProducts } = useContext(ProductContext)

  useEffect(() => {
    // Create an scoped async function in the hook
    async function fetchProducts () {
      await getProducts()
    }
    // Execute the created function directly
    fetchProducts()
  }, [])

  return (
    <div>
      <h1>Welcome to Next Application</h1>
      <a href={`${process.env.APP_API}/auth/logout`}>Logout</a>
      {/* {products && products.map(product =>
        <div key={product._id}>
          <Link href='/prodotto/[id]' as={`/prodotto/${encodeURIComponent(product._id)}`}>
            <p>{product.name}</p>
          </Link>
        </div>
      )} */}
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

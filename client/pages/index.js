import React, { useContext } from 'react'
import Link from 'next/link'

const Index = ({ products }) => {
  console.log(products)
  return (
    <div>
      <h1>Welcome to Next Application</h1>
      <a href={`${process.env.APP_API}/auth/logout`}>Logout</a>
      {products && products.map(product =>
        <div key={product._id}>
          <Link href={`/prodotto/${encodeURIComponent(product.name)}`}>
            <p>{product.name}</p>
          </Link>
        </div>
      )}
    </div>
  )
}

export async function getServerSideProps () {
  // Fetch data from external API
  const res = await fetch(`${process.env.APP_API}/api/products`)
  const products = await res.json()

  // Pass data to the page via props
  return { props: { products } }
}

export default Index


import ProductList from '../components/categories/ProductsList'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

export const service = axios.create({
  baseURL: process.env.APP_API,
  withCredentials: true
})

const ProductsOfTheMonth = () => {
  const [searchInput, setSearchInput] = useState('')
  const [productsOfTheMonth, setProductsOfTheMonth] = useState([])

  useEffect(() => {
    async function getProducts () {
      try {
        const response = await service.get('/api/products-of-the-month')
        setProductsOfTheMonth(response.data)
        console.log(response.data, 'montnh')
      } catch (err) {
        console.error(err)
      }
    }
    getProducts()
  }, [searchInput])

  return (
    <div className='products-of-the-month'>
      <h1>PRODOTTI DEL MESE</h1>
      <p>I migliori prodotti scelti da noi per te per questo mese.</p>
      <div id='products-list'>
        <ProductList products={productsOfTheMonth} />
      </div>
      <style jsx='true'>{`
          .products-of-the-month {
              background-color: #f4f4f2;
              padding: 80px 10px;
          }
          .products-of-the-month #products-list {
              position: relative;
              top: 80px
          }
          @media(min-width: 968px){
              .products-of-the-month {
                  padding: 40px 80px 80px;
              }
           }
          `}
      </style>
    </div>
  )
}
export default ProductsOfTheMonth

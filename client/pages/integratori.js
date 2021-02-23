import React, { useState, useEffect } from 'react'
import axios from 'axios'
// const { default: PageTitle } = require('../components/categories/PageTitle')
import PageTitle from '../components/categories/PageTitle'
import ProductsList from '../components/categories/ProductsList'
import Footer from '../components/Footer'
import { filterByCategory, service, onCategoryChange } from '../components/categories/helpersFunctions/helpersFunctions'
import Spinner from '../components/helpersComponent/Spinner'

const Integratori = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function getProducts () {
      try {
        const response = await service.get('/api/category-products/10')
        setProducts(response.data)
      } catch (e) {
        console.error(e)
      }
    }
    // Execute the created function directly
    getProducts()
  }, [])

  if (!products) {
    return <Spinner />
  }

  return (
    <div>
      <PageTitle
        title='Integratori'
        subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, alias.'
      />
      <div className='category-page-container'>
        <ProductsList products={products} />
      </div>
      <Footer />
      <style jsx>{`
            .category-page-container {
              margin-top: 120px
            }
          `}
      </style>
    </div>
  )
}
export default Integratori

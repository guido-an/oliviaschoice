import React, { useState, useEffect } from 'react'
import axios from 'axios'
// const { default: PageTitle } = require('../components/categories/PageTitle')
import PageTitle from '../components/categories/PageTitle'
import ProductsList from '../components/categories/ProductsList'
import Footer from '../components/Footer'
import { filterByCategory, service, onCategoryChange } from '../components/categories/helpersFunctions/helpersFunctions'

const Integratori = () => {
  const [products, setProducts] = useState([])

  //   Start subcategories

  //   End subcategories

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

  return (
    <div>
      <PageTitle
        title='Mamma e Bimbo'
        subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, alias.'
      />
      <div className='category-page-container'>
        <ProductsList products={products} />
      </div>
      <Footer />
      <style jsx>{`
             @media(min-width: 969px){
              .wrapper-categories {
                 margin: 0 10px;
                 display: flex;
                 overflow-x: scroll;
                }
                .input-wrapper {
                   padding-right: 60px;
               }
               .total-filtered-products {
                 position: relative;
                 bottom: 40px;
                 position: relative;
                 left: 10px
               }
             }             
          `}
      </style>
    </div>
  )
}
export default Integratori

import React, { useState, useEffect } from 'react'
import axios from 'axios'
// const { default: PageTitle } = require('../components/categories/PageTitle')
import PageTitle from '../components/categories/PageTitle'
import ProductsList from '../components/categories/ProductsList'
import Footer from '../components/Footer'
import { filterByCategory, service, onCategoryChange } from '../components/categories/helpersFunctions/helpersFunctions'

const Elettromedicali = () => {
  const [products, setProducts] = useState([])
  const [productsToDisplay, setProductsToDisplay] = useState([])
  const [categoriesSelected, setCategoriesSelected] = useState([])
  const [totalProducts, setTotalProducts] = useState(false)

  //   Start subcategories
  const [accessoriAerosol, setAccessoriAerosol] = useState([])
  const [accessoriCaraffa, setAccessoriCaraffa] = useState([])
  const [idropulsori, setIdropulsori] = useState([])
  const [accessorIdropulsori, setAccessorIdropulsori] = useState([])
  const [accessoriMisuratoridiPressione, setAccessoriMisuratoridiPressione] = useState([])
  //   const [accessoriAerosol, setAaccessoriAerosol] = useState([])
  const [bilance, setBilance] = useState([])
  const [caraffa, setCaraffa] = useState([])
  const [misuratoriDiPressione, setMisuratoriDiPressione] = useState([])
  const [termometri, setTermometri] = useState([])
  //   End subcategories

  const categories = ['Accessori Aerosol', 'Accessori Caraffa', 'Idropulsori', 'Accessori Idropulsori', 'Accessori Misuratori Di Pressione', 'Bilance', 'Caraffa', 'Misuratori Di Pressione', 'Termometri']

  useEffect(() => {
    async function getProducts () {
      try {
        const response = await service.get('/api/category-products/1')
        setProducts(response.data)
        setAccessoriAerosol(filterByCategory(response.data, '1.1'))
        setAccessoriCaraffa(filterByCategory(response.data, '1.2'))
        setIdropulsori(filterByCategory(response.data, '1.3'))
        setAccessorIdropulsori(filterByCategory(response.data, '1.4'))
        setAccessoriMisuratoridiPressione(filterByCategory(response.data, '1.5'))
        // setAaccessoriAerosol(filterByCategory(response.data, '1.6'))
        setBilance(filterByCategory(response.data, '1.7'))
        setCaraffa(filterByCategory(response.data, '1.8'))
        setMisuratoriDiPressione(filterByCategory(response.data, '1.9'))
        setTermometri(filterByCategory(response.data, '1.10'))
        const newArray = products.filter(product => {
          if (categoriesSelected.includes(product.category)) {
            return product
          }
        })
        setProductsToDisplay(newArray)
      } catch (e) {
        console.error(e)
      }
    }
    // Execute the created function directly
    getProducts()
  }, [categoriesSelected])

  return (
    <div>
      <PageTitle
        title='Elettromedicali'
        subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, alias.'
      />
      <div className='category-page-container'>
        <div className='wrapper-categories'>
          {categories.map((category, i = 1) => {
            return <div key={i} className='input-wrapper'>
              <div className='switch'>
                <input
                  onChange={(e) => onCategoryChange(e, setCategoriesSelected, categoriesSelected)}
                  name={`1.${i + 1}`}
                  id={`switch-${i + 1}`}
                  type='checkbox'
                  className='switch-input'
                />
                <label htmlFor={`switch-${i + 1}`} className='switch-label'>
                  {category}
                </label>
              </div>
              <div><p className='category-name'>{category}</p></div>
            </div>
          })}

        </div>
        {categoriesSelected.length < 1
          ? <ProductsList products={products} />
          : <ProductsList products={productsToDisplay} />}
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
             }             
          `}
      </style>
    </div>
  )
}
export default Elettromedicali

import React, { useState, useEffect } from 'react'
import PageTitle from '../components/categories/PageTitle'
import ProductsList from '../components/categories/ProductsList'
import Footer from '../components/Footer'
import { filterByCategory, service, onCategoryChange } from '../components/categories/helpersFunctions/helpersFunctions'

const EmergenzaCovid = () => {
  const [products, setProducts] = useState([])
  const [productsToDisplay, setProductsToDisplay] = useState([])
  const [categoriesSelected, setCategoriesSelected] = useState([])

  //   Start subcategories
  const [mascherine, setMascherine] = useState([])
  const [gelMani, setGelMani] = useState([])
  const [visiere, setVisiere] = useState([])
  //   End subcategories

  const categories = ['Mascherine', 'Gel mani', 'Visiere']

  useEffect(() => {
    async function getProducts () {
      try {
        const response = await service.get('/api/category-products/7')
        setProducts(response.data)
        setMascherine(filterByCategory(response.data, '7.1'))
        setGelMani(filterByCategory(response.data, '7.2'))
        setVisiere(filterByCategory(response.data, '7.3'))
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
        title='Emergenza Covid-19'
        subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, alias.'
      />
      <div className='category-page-container'>
        <div className='wrapper-categories'>
          {/* name to be changed for each category */}
          {categories.map((category, i = 1) => {
            return (
              <div key={i} className='input-wrapper'>
                <div className='switch'>
                  <input
                    onChange={(e) => onCategoryChange(e, setCategoriesSelected, categoriesSelected)}
                    name={`7.${i + 1}`}
                    id={`switch-${i + 1}`}
                    type='checkbox'
                    className='switch-input'
                  />
                  <label htmlFor={`switch-${i + 1}`} className='switch-label'>
                    {category}
                  </label>
                </div>
                <div>
                  <p className='category-name'>{category}</p>
                </div>
              </div>
            )
          })}
        </div>
        {/* End categories wrapper */}
        {categoriesSelected.length < 1
          ? <p className='total-filtered-products'>{products.length} prodotti</p>
          : <p className='total-filtered-products'>{productsToDisplay.length} prodotti</p>}
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
export default EmergenzaCovid

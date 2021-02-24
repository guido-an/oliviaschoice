import React, { useState, useEffect } from 'react'
import PageTitle from '../components/categories/PageTitle'
import ProductsList from '../components/categories/ProductsList'
import Footer from '../components/Footer'
import { filterByCategory, service, onCategoryChange } from '../components/categories/helpersFunctions/helpersFunctions'
import Spinner from '../components/helpersComponent/Spinner'

const ControlloEPrevenzione = () => {
  const [products, setProducts] = useState([])
  const [productsToDisplay, setProductsToDisplay] = useState([])
  const [categoriesSelected, setCategoriesSelected] = useState([])

  //   Start subcategories
  const [controlloDellaPressione, setControlloDellaPressione] = useState([])
  const [controlloDelPeso, setControlloDelPeso] = useState([])
  const [medicazioniEdEsami, setMedicazioniEdEsami] = useState([])

  //   End subcategories
  console.log(products.length, 'produtct')
  const categories = ['Controllo Della Pressione', 'Controllo Del Peso', 'Medicazioni ed Esami']

  useEffect(() => {
    async function getProducts () {
      try {
        const response = await service.get('/api/category-products/1')
        console.log(response, 'data')
        setProducts(response.data)
        setControlloDellaPressione(filterByCategory(response.data, '1.1'))
        setControlloDelPeso(filterByCategory(response.data, '1.2'))
        setMedicazioniEdEsami(filterByCategory(response.data, '1.3'))
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

  if (!products) {
    return <Spinner />
  }

  return (
    <div>
      <PageTitle
        title='Controllo e Prevenzione'
        subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, alias.'
        bgColor='#f2977a'
        color='#222'
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
export default ControlloEPrevenzione

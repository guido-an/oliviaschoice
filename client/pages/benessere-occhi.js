import React, { useState, useEffect } from 'react'
import PageTitle from '../components/categories/PageTitle'
import ProductsList from '../components/categories/ProductsList'
import Footer from '../components/Footer'
import { filterByCategory, service, onCategoryChange } from '../components/categories/helpersFunctions/helpersFunctions'

const BenessereOcchi = () => {
  const [products, setProducts] = useState([])
  const [productsToDisplay, setProductsToDisplay] = useState([])
  const [categoriesSelected, setCategoriesSelected] = useState([])

  //   Start subcategories
  const [occhialiDaLettura, setOcchialiDaLettura] = useState([])
  const [lentiContatto, setLentiContatto] = useState([])
   //   End subcategories

  const categories = ['Occhiali da lettura', 'Lenti a contatto']

  useEffect(() => {
    async function getProducts () {
      try {
        const response = await service.get('/api/category-products/8')
        setProducts(response.data)
        setOcchialiDaLettura(filterByCategory(response.data, '8.1'))
        setLentiContatto(filterByCategory(response.data, '8.2'))
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
        title='Benessere occhi'
        subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, alias.'
      />      
      <div className="category-page-container">    
        <div className='wrapper-categories'>
        {/* name to be changed for each category */}
          {categories.map((category, i = 1) => {
            return (
            <div key={i} className='input-wrapper'>
              <div className='switch'>
                <input
                  onChange={(e) => onCategoryChange(e, setCategoriesSelected, categoriesSelected)}
                  name={`8.${i + 1}`}
                  id={`switch-${i +1}`}
                  type='checkbox'
                  className='switch-input'
                />
                <label htmlFor={`switch-${i + 1}`} className='switch-label'>
                  {category}
                </label>
              </div>
              <div>
                  <p className="category-name">{category}</p>
              </div>
           </div>
            )
          })}
        </div>
           {categoriesSelected.length < 1 ? 
            <ProductsList products={products}/> 
            :
            <ProductsList products={productsToDisplay}/>
           }
       </div>
      <Footer/>
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
          `}</style>  
    </div>
  )
}
export default BenessereOcchi

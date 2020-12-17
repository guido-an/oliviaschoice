import ProductList from '../components/categories/ProductsList'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

export const service = axios.create({
  baseURL: process.env.APP_API,
  withCredentials: true
})

const Cerca = () => {
  const [searchInput, setSearchInput] = useState('')
  const [productsToDisplay, setProductsToDisplay] = useState([])
  const [noFoundMsg, setNoFoundMsg] = useState(false)

  const router = useRouter()

  useEffect(() => {
    async function getProducts () {
      if (searchInput.length > 0) {
        const response = await service.get(`/api/search?searchInput=${searchInput}`)
        const products = response.data
        setProductsToDisplay(response.data)
        if (products.length === 0) {
          setNoFoundMsg(true)
        }
      } else {
        setProductsToDisplay([])
        setNoFoundMsg(false)
      }
    }
    getProducts()
  }, [searchInput])

  return (
    <>
      <input
        className='search-bar'
        type='text'
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <span onClick={() => router.back()}>Go back ></span>
      <ProductList
        products={productsToDisplay}
      />
      {noFoundMsg && <p>Nessun prodotto trovato</p>}

      <style jsx>{`
         .search-bar {
           width: 90vw;
           margin: 0 auto 80px;
           display: block;
           border-top: none;
           border-right: none;
           border-left: none;
           height: 50px;
           font-size: 32px;
           border-bottom: 1px solid #222
         }
         p {
           margin-left: 5vw
         }
         span {
           display: block;
           text-align: right;
           margin-right: 5vw;
           position: relative;
           bottom: 60px;
           cursor: pointer;
           font-size: 14px
         }
         @media(min-width: 968px){
           .search-bar{
             width: 70vw
           }
           p {
           margin-left: 15vw
           }
           span {
             margin-right: 15vw
           }
         }
          
          `}
      </style>
    </>
  )
}
export default Cerca

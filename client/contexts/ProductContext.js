import { createContext, useState } from 'react'
import axios from 'axios'

export const ProductContext = createContext()

const service = axios.create({
  baseURL: process.env.APP_API,
  withCredentials: true
})

const ProductContextProvider = props => {
  let [products, setProducts] = useState([])
  const [singleProduct, setSingleProduct] = useState(null)

  const getProducts = async () => {
    const response = await service.get(`${process.env.APP_API}/api/products`)
    setProducts(products = response.data)
  }

  const getSingleProduct = async id => {
    if (!id) {
      return
    }
    const response = await service.get(`${process.env.APP_API}/api/product/${id}`)
    setSingleProduct(response.data)
  }
  return (
    <ProductContext.Provider value={{ products, getProducts, getSingleProduct, singleProduct }}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider

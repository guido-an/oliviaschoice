import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const CartContext = createContext()

const service = axios.create({
  baseURL: process.env.APP_API,
  withCredentials: true
})

const CartContextProvider = props => {
  const [productsInCart, setProductsInCart] = useState([])
  const [renderPage, setRenderPage] = useState(false) // without this localStorage in addProductToLocalStorage would be undefined (rendered on the server)

  useEffect(() => {
    const productsFromLocalStorage = JSON.parse(localStorage.getItem('productsInCart'))
    setProductsInCart(productsFromLocalStorage)
    setRenderPage(true)
  }, [])

  const addProductToLocalStorage = () => {
    if (renderPage) {
      console.log('add to local storage', productsInCart)
      localStorage.setItem('productsInCart', JSON.stringify(productsInCart))
    }
  }

  const addToCart = async (product, quantityFromInput) => {
    let productIsInCart = false
    productsInCart && productsInCart.forEach(productInCart => {
      if (productInCart._id === product._id) {
        productIsInCart = true
        product.boughtQuantity = Number(productInCart.boughtQuantity) + Number(quantityFromInput)
      }
    })
    if (!productsInCart) {
      product.boughtQuantity = Number(quantityFromInput)
      setProductsInCart([product])
    } else if (productIsInCart) {
      setProductsInCart([...productsInCart])
    } else {
      product.boughtQuantity = Number(quantityFromInput)
      setProductsInCart([...productsInCart, product])
    }
  }

  // it needs to be called when addToCart finish executing
  addProductToLocalStorage()
  const updateCart = (productInCart, quantityFromInput) => {
    const updateArray = productsInCart.map(product => {
      if (product._id === productInCart._id) {
        product.boughtQuantity = Number(quantityFromInput)
      }
      return product
    })
    setProductsInCart(updateArray)

    // productsInCart && productsInCart.forEach(productInCart => {
    //   if (productInCart._id === product._id) {
    //     productIsInCart = true
    //     product.boughtQuantity = Number(productInCart.boughtQuantity) + Number(quantityFromInput)
    //   }
    // })
  }

  return (
    <CartContext.Provider value={{ productsInCart, setProductsInCart, addToCart, updateCart }}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartContextProvider

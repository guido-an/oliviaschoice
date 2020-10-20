import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const CartContext = createContext()

const service = axios.create({
  baseURL: process.env.APP_API,
  withCredentials: true
})

const CartContextProvider = props => {
  const [productsInCart, setProductsInCart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [renderPage, setRenderPage] = useState(false) // without this localStorage in addProductToLocalStorage would be undefined (rendered on the server)
  const [shippingInfo, setShippingInfo] = useState(null) // for getting shipping info on checkout page

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
        if (product.boughtQuantity > product.effectiveStock) { // to avoid adding
          product.boughtQuantity = product.effectiveStock
        }
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
  }

  const calculateTotalPrice = () => {
    console.log(productsInCart, 'productsIn cart cart context')
    if (!productsInCart) {
      return
    }
    let sumPrice = 0
    productsInCart.forEach(product => {
      sumPrice += product.boughtQuantity * product.price
    })
    setTotalPrice(sumPrice)
  }

  return (
    <CartContext.Provider value={{ productsInCart, totalPrice, shippingInfo, setProductsInCart, addToCart, updateCart, setTotalPrice, setShippingInfo, calculateTotalPrice }}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartContextProvider

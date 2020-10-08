import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../contexts/CartContext'

const Carrello = () => {
  const { addToCart, productsInCart } = useContext(CartContext)

  return (
    <div>
      <h1>Carrello</h1>
      {productsInCart && productsInCart.map(product => {
        return (
          <div key={product._id}>
            <p>{product.name}</p>
            <p>{product.boughtQuantity}</p>
          </div>
        )
      })}
    </div>
  )
}
export default Carrello

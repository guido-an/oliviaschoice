import { useRouter } from "next/router";
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { ProductContext } from '../../contexts/ProductContext'

const Product = () => {
  const router = useRouter();
  const { id } = router.query; // Destructuring our router object
  const { addToCart, productsInCart } = useContext(CartContext)
  const { getSingleProduct, singleProduct } = useContext(ProductContext)

   useEffect(() => {
     document.getElementById('quantity').value = 1
      async function fetchProduct () {
        await getSingleProduct(id)
      }
      fetchProduct()
    }, [id])
  
    return (
      <div>
        <h1>Product page</h1>
        <p>{singleProduct && singleProduct.name}</p>
        <input id="quantity" type="number"></input>
        <button onClick={() => addToCart(singleProduct, document.getElementById('quantity').value)}>Add to cart</button>
      </div>
    )
  }


export default Product
  
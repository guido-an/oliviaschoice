import { useRouter } from "next/router";
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { ProductContext } from '../../contexts/ProductContext'

const Product = () => {
  const router = useRouter();
  const { id } = router.query; // Destructuring our router object
  const { addToCart, productsInCart } = useContext(CartContext)
  const { getSingleProduct, singleProduct } = useContext(ProductContext)
  const [displayExceedMsg, setDisplayExceedMsg] = useState(false)

   useEffect(() => {
     document.getElementById('quantity').value = 1
      async function fetchProduct () {
        await getSingleProduct(id)
      }
      fetchProduct()
    }, [id])
   
    const exceedQuantity = (singleProduct) => {
      console.log('exced', document.getElementById('quantity').value, singleProduct)
      if(document.getElementById('quantity').value > singleProduct.effectiveStock){
        document.getElementById('add-to-cart-btn').disabled = true
        setDisplayExceedMsg(true)
      } else {
        document.getElementById('add-to-cart-btn').disabled = false
        setDisplayExceedMsg(false)
      }
    }
    
    return (
      <div>
        <h1>Product page</h1>
        <p>{singleProduct && singleProduct.name}</p>
        <input onChange={() => exceedQuantity(singleProduct)} id="quantity" type="number" min="1"></input>
        <button id="add-to-cart-btn" onClick={() => addToCart(singleProduct, document.getElementById('quantity').value)}>Add to cart</button>
        {displayExceedMsg && <p>Sono rimaste {singleProduct.effectiveStock} unità di questo prodotto</p>}
      </div>
    )
  }


export default Product
  
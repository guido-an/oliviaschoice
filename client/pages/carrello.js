import { useContext, useEffect } from 'react'
import { CartContext } from '../contexts/CartContext'
import Link from 'next/link'

const Carrello = () => {
  let { updateCart, totalPrice, productsInCart, setProductsInCart, calculateTotalPrice } = useContext(CartContext)

  useEffect(() => {
    if (!productsInCart) {
      setProductsInCart(productsInCart = [])
    }
    productsInCart.forEach(product => {
      document.getElementById(product._id).value = product.boughtQuantity
    })
    calculateTotalPrice()
  }, [productsInCart, totalPrice])

  const removeProduct = product => {
    const updateArray = productsInCart.filter(element => {
      return element._id !== product._id
    })
    setProductsInCart(updateArray)
  }

  const exceedQuantity = singleProduct => {
    if (document.getElementById(singleProduct._id).value > singleProduct.effectiveStock) {
      document.getElementById('checkout-btn').disabled = true
      document.getElementById(`${singleProduct._id}-msg`).innerHTML = `Sono rimaste ${singleProduct.effectiveStock} unità di questo prodotto`
    } else {
      document.getElementById('checkout-btn').disabled = false
      document.getElementById(`${singleProduct._id}-msg`).innerHTML = ''
    }
  }

  const inputUpdate = (product) => {
    updateCart(product, document.getElementById(product._id).value)
    exceedQuantity(product)
  }

  return (
    <div>
      <h1>Carrello</h1>
      {productsInCart && productsInCart.map(product => {
        return (
          <div key={product._id}>
            <Link href='/prodotto/[id]' as={`/prodotto/${encodeURIComponent(product._id)}`}>
              <p>{product.name}</p>
            </Link>
            <p><strong>Prezzo: </strong>€ {product.price}</p>
            <p><strong>Subtotale: </strong>€ {product.price * product.boughtQuantity}</p>
            <input onChange={() => inputUpdate(product)} type='number' id={product._id} min='1' />
            <button onClick={() => removeProduct(product)}>x</button>
            {<p id={`${product._id}-msg`} />}
          </div>
        )
      })}
      {totalPrice >= 1
        ? <div>
          <h2>Total price: {totalPrice}</h2>
          <Link href='/checkout'><button id='checkout-btn'>Concludi ordine</button></Link>
          </div>
        : <p>Non ci sono prodotti nel carrello <Link href='/'>Ritorna alla home</Link></p>}

    </div>
  )
}
export default Carrello

import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from '../components/CheckoutForm'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../contexts/CartContext'

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with a fake API key.
// Sign in to see examples pre-filled with your key.
const promise = loadStripe(process.env.STRIPE_PK)

const Pagamento = () => {
  const { productsInCart, totalPrice, calculateTotalPrice } = useContext(CartContext)
  useEffect(() => {
    calculateTotalPrice()
  }, [productsInCart])

  return (
    <div>
      <div className="values">
          <h2>Pagamento</h2>
        </div>
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
      <h4 className="total">Pagamento: {totalPrice}</h4>
      <style jsx>{`
        .values {
          margin-top: 140px;
          padding: 40px 10px 60px;
          background-color: #8c2b2f;
          text-align: center;
      }
        .values h2  {
          color: #fff
      } 
      .total  {
        color: #222;
        font-weight: 500;
        right: 12vw;
        position: absolute;
        top: 530px;
    } 
        
        `}
      </style>
    </div>
  )
}
export default Pagamento

import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from '../components/CheckoutForm'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../contexts/CartContext'
// import { UserContext } from '../contexts/UserContext'
import axios from 'axios'
import Link from 'next/link'

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with a fake API key.
// Sign in to see examples pre-filled with your key.
const promise = loadStripe(process.env.STRIPE_PK)

const Pagamento = () => {
  const { productsInCart, shippingInfo, totalPrice, calculateTotalPrice } = useContext(CartContext)
  // const { user } = useContext(UserContext)
  useEffect(() => {
    calculateTotalPrice()
  }, [])

  return (
    <div>
      <h1>Pagamento: {totalPrice}</h1>
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </div>
  )
}
export default Pagamento

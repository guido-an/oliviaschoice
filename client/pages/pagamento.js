import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from '../components/CheckoutForm'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../contexts/CartContext'
import Footer from '../components/Footer'
import creditCardsLogo from '../images/icons/credit-cards-logo.png'

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
    <div className='payment-container'>

      <div className='values'>
        <h2>Pagamento</h2>
      </div>

      <div className='payment'>
        <img src={creditCardsLogo} />
        <Elements stripe={promise}>
          <CheckoutForm />
        </Elements>
        <h4 className=''>Totale: {totalPrice}€</h4>
      </div>
      <style jsx>{`

      .values {
              margin-top: 140px;
              padding: 40px 10px 60px;
              background-color: var(--main-color);
              text-align: center; 
              margin-bottom: 80px
          }

          .values h2 {
            color: #fff
          }
          
        .payment {
          margin: 0 10px 120px
        }
        .payment img {
          display: block;
          margin-bottom: 60px
        }
        .payment h4 {
          margin-top: 40px
        }

       

      @media(min-width: 768px){

        
        .total  {
          color: #222;
          font-weight: 500;
          right: 12vw;
          position: absolute;
          top: 530px;
         } 
         .payment {
           margin: 80px 25vw 120px
         }
      }

      @media(min-width: 968px){
        .values {
                padding: 60px 80px 80px;
                margin: 120px 85px;
                border-radius: 4px;
                margin-bottom: 40px;
                box-shadow: 0px 5px 15px 5px rgba(0,0,0,0.4)
            }
      }
        
        
        `}
      </style>
      <Footer />
    </div>
  )
}
export default Pagamento

import { useState, useEffect, useContext } from 'react'
import {
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js'
import axios from 'axios'

const service = axios.create({ // to update the order
  baseURL: process.env.APP_API,
  withCredentials: true
})

export default function CheckoutForm () {
  const [succeeded, setSucceeded] = useState(false)
  const [error, setError] = useState(null)
  const [processing, setProcessing] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState('')
  const stripe = useStripe()
  const elements = useElements()

  useEffect(() => {
    const productsFromLocalStorage = JSON.parse(localStorage.getItem('productsInCart'))
    // Create PaymentIntent as soon as the page loads
    window
      .fetch(process.env.APP_API + '/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ items: productsFromLocalStorage })
      })
      .then(res => {
        return res.json()
      })
      .then(data => {
        setClientSecret(data.clientSecret)
      })
  }, [])
  const cardStyle = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#32325d'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    }
  }
  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty)
    setError(event.error ? event.error.message : '')
  }
  const handleSubmit = async ev => {
    ev.preventDefault()
    setProcessing(true)
    const payload = await stripe.confirmCardPayment(clientSecret, {
      receipt_email: 'test@gmail.com',
      payment_method: {
        card: elements.getElement(CardElement)
      }
    })
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`)
      setProcessing(false)
    } else {
      setError(null)
      setProcessing(false)
      setSucceeded(true)
      // Our code
      var orderId = localStorage.getItem('orderId')
      service.post('/update-order', {
        _id: orderId
      })
      localStorage.removeItem('productsInCart')
      localStorage.removeItem('orderId')
      window.location.assign('/')
    }
    // end
  }
  return (
    <form className="container" id='payment-form' onSubmit={handleSubmit}>
      <CardElement className="card"id='card-element' options={cardStyle} onChange={handleChange} />
      <button
        disabled={processing || disabled || succeeded}
        id='submit'
      >
        <span id='button-text'>
          {processing ? (
            <div className='spinner' id='spinner' />
          ) : (
            'Pay'
          )}
        </span>
      </button>
      {/* Show any error that happens when processing the payment */}
      {error && (
        <div className='card-error' role='alert'>
          {error}
        </div>
      )}
      {/* Show a success message upon completion */}
      <p className={succeeded ? 'result-message' : 'result-message hidden'}>
        Payment succeeded, see the result in your
        <a
          href='https://dashboard.stripe.com/test/payments'
        >
          {' '}
          Stripe dashboard.
        </a> Refresh the page to pay again.
      </p>
      <style jsx>{`
        button {
          background-color: #8c2b2f;;
          color: #fff;
          border-radius: 4px;
          border: 1px solid #8c2b2f;;
          cursor: pointer;
          height: 40px;
          width: 180px;
          margin-top: 30px;
          letter-spacing: 0.2px;
          box-shadow: 0px 4px 10px 0 rgba(0,0,0,0.3);
        }
        .container{
          padding: 60px 80px 80px;
          margin: 120px 85px;
        }

        .card{
          width: 60vw;
        }
        
        `}
      </style>

    </form>
  )
}

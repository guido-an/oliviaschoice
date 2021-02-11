import { useContext, useState } from 'react'
import { CartContext } from '../contexts/CartContext'
import { UserContext } from '../contexts/UserContext'
import { useRouter } from 'next/router'
import Footer from '../components/Footer'
import axios from 'axios'
import { postcodeValidator, postcodeValidatorExistsForCountry } from 'postcode-validator';


const service = axios.create({
  baseURL: process.env.APP_API,
  withCredentials: true
})

const Checkout = () => {
  const { totalPrice, productsInCart } = useContext(CartContext)
  const { user } = useContext(UserContext)

  const router = useRouter()

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    VAT: '',
    streetAddress: '',
    city: '',
    province: '',
    zipCode: '',
    telephone: '',
    email: '',
    additionalNotes: ''
  })

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      if(postcodeValidator(form.zipCode, 'IT')){
        createOrder()
        router.push('/pagamento')
      }else{alert('invalid zip code')}
    } catch (err) {
      console.log(err)
    }
  }
  const createOrder = async () => {
      const shippingInfo = {
        firstName: form.firstName || user.firstName,
        lastName: form.lastName || user.lastName,
        VAT: form.VAT || user.VAT,
        streetAddress: form.streetAddress || user.shippingInfo && user.shippingInfo.streetAddress,
        city: form.city || user.shippingInfo && user.shippingInfo.city,
        province: '',
        zipCode: form.zipCode || user.shippingInfo && user.shippingInfo.zipCode,
        telephone: form.telephone || user.telephone,
        email: form.email || user.email,
        additionalNotes: form.additionalNotes
      }
      const response = await service.post('/create-order', {
        shippingInfo: shippingInfo,
        totalPrice,
        paid: false,
        productsInCart
      })
      const orderId = response.data.orderId
      localStorage.setItem('orderId', orderId) // So later if the order succeed we can update it to paid: true
  }

  return (
    <div>
      <div>
        <div className='values'>
          <h2>Checkout</h2>
        </div>
        <form onSubmit={handleSubmit}>
          {/* put back required */}
          <div className='block'>
            <div className='input-box'>
              <label>Nome</label>
              <input
                type='text'
                placeholder={user && user.firstName}
                required={!(user && user.firstName)}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              />
              <label>P.IVA/Codice fiscale</label>
              <input
                type='text'
                placeholder={user && user.VAT}
                required={!(user && user.VAT)}
                onChange={(e) => setForm({ ...form, VAT: e.target.value })}
              />
            </div>
            <div className='input-box'>
              <label>Cognome</label>
              <input
                type='text'
                placeholder={user && user.lastName}
                required={!(user && user.lastName)}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              />
              <label>Indirizzo</label>
              <input
                type='text'
                placeholder={user && user.shippingInfo && user.shippingInfo.streetAddress}
                required={!(user && user.shippingInfo && user.shippingInfo.streetAddress)}
                onChange={(e) => setForm({ ...form, streetAddress: e.target.value })}
              />
            </div>
            <div className='input-box'>
              <label>Città</label>
              <input
                type='text'
                placeholder={user && user.shippingInfo && user.shippingInfo.city}
                required={!(user && user.shippingInfo && user.shippingInfo.city)}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
              />

              <label>Provincia</label>
              <input
                type='text'
                placeholder={user && user.shippingInfo && user.shippingInfo.province}
                required={!(user && user.shippingInfo && user.shippingInfo.province)}
                onChange={(e) => setForm({ ...form, province: e.target.value })}
              />
              {/* check zip code */}
              <label>Zip code</label>
              <input
                type='text'
                placeholder={user && user.shippingInfo && user.shippingInfo.zipCode}
                required={!(user && user.shippingInfo && user.shippingInfo.zipCode)}
                onChange={(e) => setForm({ ...form, zipCode: e.target.value })}
              />
            </div>
            <div className='input-box'>
              <label>Telefono</label>
              <input
                type='text'
                placeholder={user && user.telephone}
                onChange={(e) => setForm({ ...form, telephone: e.target.value })}
              />
              <label>Email</label>
              <input
                type='email'
                placeholder={user && user.email}
                required={!(user && user.email)}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />

              <label>Note aggiuntive</label>
              <input
                type='textarea'
                onChange={(e) => setForm({ ...form, additionalNotes: e.target.value })}
              />
            </div>
          </div>
          <button style={{
            marginBottom: '80px'
          }}
          >Prosegui al pagamento
          </button>
        </form>
        <style jsx>{`
        .values {
            margin-top: 140px;
            padding: 40px 10px 60px;
            background-color: #8c2b2f;
            text-align: center;
        }
        .link-btn{
          color: rgb(140, 43, 47);
          font-weight: 500 !important;
          display: block
          margin-left: 5vw;
        }

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

        .block{
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        form {
          margin: 40px 85px;
        }
        .values h2  {
            color: #fff
        } 

        .values h3{
            color: #fff !important;
            font-weight: 600
        }
        p {
            font-weight: 300;
           letter-spacing: 0.2px;
           line-height: 26px;
           margin: 30px 0;
           color: #333;
        }

        label {
          color: #555;
        }
        @media(min-width:968px){
            .values {
                padding: 60px 80px 80px;
                margin: 120px 85px;
                border-radius: 4px;
                margin-bottom: 40px;
                box-shadow: 0px 5px 15px 5px rgba(0,0,0,0.4)
            }
        }
        .input-box{
          width:49%;
        }

        input, select {
          width: 100%;
          padding: 12px 20px;
          margin: 8px 0;
          display: inline-block;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
        }

        @media only screen and (max-width: 868px) {
          .input-box{
            width:100%;
          }
          form {
            margin: 40px 10px;
          }
        }
        `}
        </style>
      </div>
      <Footer />
    </div>
  )
}
export default Checkout

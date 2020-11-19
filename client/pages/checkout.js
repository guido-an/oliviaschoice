import { useContext, useState } from 'react'
import { CartContext } from '../contexts/CartContext'
import { UserContext } from '../contexts/UserContext'
import { useRouter } from 'next/router'
import axios from 'axios'

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
      const createOder = await createOrder()
      debugger
      router.push('/pagamento')
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
    desbugger
    const orderId = response.data.orderId
    localStorage.setItem('orderId', orderId) // So later if the order succeed we can update it to paid: true
  }

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        {/* put back required */}
        <label>Nome</label>
        <input
          type='text'
          placeholder={user && user.firstName}
          required={user && user.firstName ? 'false' : true}
          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
        />
        <label>Cognome</label>
        <input
          type='text'
          placeholder={user && user.lastName}
          required={user && user.lastName ? 'false' : true}
          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
        />
        <label>P.IVA/Codice fiscale</label>
        <input
          type='text'
          placeholder={user && user.VAT}
          required={user && user.VAT ? 'false' : true}
          onChange={(e) => setForm({ ...form, VAT: e.target.value })}
        />
        <label>Indirizzo</label>
        <input
          type='text'
          placeholder={user && user.shippingInfo && user.shippingInfo.streetAddress}
          required={user && user.shippingInfo && user.shippingInfo.streetAddress ? 'false' : true}
          onChange={(e) => setForm({ ...form, streetAddress: e.target.value })}
        />
        <label>Città</label>
        <input
          type='text'
          placeholder={user && user.shippingInfo && user.shippingInfo.city}
          required={user && user.shippingInfo && user.shippingInfo.city ? 'false' : true}
          onChange={(e) => setForm({ ...form, city: e.target.value })}
        />
        <label>Provincia</label>
        <input
          type='text'
          placeholder={user && user.shippingInfo && user.shippingInfo.province}
          required={user && user.shippingInfo && user.shippingInfo.province ? 'false' : true}
          onChange={(e) => setForm({ ...form, province: e.target.value })}
        />
        {/* check zip code */}
        <label>Zip code</label>
        <input
          type='text'
          placeholder={user && user.shippingInfo && user.shippingInfo.zipCode}
          required={user && user.shippingInfo && user.shippingInfo.zipCode ? 'false' : true}
          onChange={(e) => setForm({ ...form, zipCode: e.target.value })}
        />
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
          required={user && user.email ? 'false' : true}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <label>Note aggiuntive</label>
        <input
          type='textarea'
          onChange={(e) => setForm({ ...form, additionalNotes: e.target.value })}
        />
        <button>Prosegui al pagamento</button>
      </form>
    </div>
  )
}
export default Checkout

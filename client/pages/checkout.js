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
    vatNumber: '',
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
      createOrder()
      router.push('/pagamento')
    } catch (err) {
      console.log(err)
    }
  }
  const createOrder = async () => {
    const response = await service.post('/create-order', {
      shippingInfo: form,
      totalPrice,
      paid: false,
      productsInCart
    })
    const orderId = response.data.orderId
    localStorage.setItem('orderId', orderId) // So later if the order succeed we can update it to paid: true
  }

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        {/* put back required */}
        <input type='text' value={form.firstName} placeholder='* Nome' onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
        <input type='text' value={form.lastName} placeholder='* Cognome' onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
        <input type='text' value={form.vatNumber} placeholder='* P.IVA / Codice Fiscale' onChange={(e) => setForm({ ...form, vatNumber: e.target.value })} />
        <input type='text' value={form.streetAddress} placeholder='* Indirizzo' onChange={(e) => setForm({ ...form, streetAddress: e.target.value })} />
        <input type='text' value={form.city} placeholder='* Città' onChange={(e) => setForm({ ...form, city: e.target.value })} />
        {/* we need list of provincies here */}
        <input type='text' value={form.province} placeholder='* Provincia' onChange={(e) => setForm({ ...form, province: e.target.value })} />
        <input type='text' value={form.zipCode} placeholder='* C.A.P.' onChange={(e) => setForm({ ...form, zipCode: e.target.value })} />
        <input type='text' value={form.telephone} placeholder='* Telefono' onChange={(e) => setForm({ ...form, telephone: e.target.value })} />
        <input type='email' value={form.email} placeholder='* Email' onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input type='textarea' value={form.additionalNotes} placeholder='Note aggiuntive ' onChange={(e) => setForm({ ...form, additionalNotes: e.target.value })} />
        <button>Prosegui al pagamento</button>
      </form>
    </div>
  )
}
export default Checkout

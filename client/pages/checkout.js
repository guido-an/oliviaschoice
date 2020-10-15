import { useContext, useState } from 'react'
import { CartContext } from '../contexts/CartContext'
import { UserContext } from '../contexts/UserContext'
import Link from 'next/link'
import axios from 'axios'

const service = axios.create({
  baseURL: process.env.APP_API,
  withCredentials: true
})

const Checkout = () => {
  const { totalPrice, productsInCart, shippingInfo, setShippingInfo } = useContext(CartContext)
  const { user } = useContext(UserContext)

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
    console.log(user, 'user checkout')
    e.preventDefault()
    try {
      setShippingInfo(form)
      createOrder()
    } catch (err) {
      console.log(err)
    }
  }
  const createOrder = async () => {
    await service.post('/create-order', {
      user: user._id,
      shippingInfo,
      totalPrice,
      paid: false,
      productsInCart
    })
  }

  return (
    <div>
      <h1>Checkout</h1>
      <form onClick={handleSubmit}>
        <input type='text' value={form.firstName} placeholder='* Nome' required onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
        <input type='text' value={form.lastName} placeholder='* Cognome' required onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
        <input type='text' value={form.vatNumber} placeholder='* P.IVA / Codice Fiscale' required onChange={(e) => setForm({ ...form, vatNumber: e.target.value })} />
        <input type='text' value={form.streetAddress} placeholder='* Indirizzo' required onChange={(e) => setForm({ ...form, streetAddress: e.target.value })} />
        <input type='text' value={form.streetAddress} placeholder='* Città' required onChange={(e) => setForm({ ...form, city: e.target.value })} />
        {/* we need list of provincies here */}
        <input type='text' value={form.province} placeholder='* Provincia' required onChange={(e) => setForm({ ...form, province: e.target.value })} />
        <input type='text' value={form.zipCode} placeholder='* C.A.P.' required onChange={(e) => setForm({ ...form, zipCode: e.target.value })} />
        <input type='text' value={form.telephone} placeholder='* Telefono' required onChange={(e) => setForm({ ...form, telephone: e.target.value })} />
        <input type='email' value={form.email} placeholder='* Email' required onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input type='textarea' value={form.additionalNotes} placeholder='Note aggiuntive ' required onChange={(e) => setForm({ ...form, additionalNotes: e.target.value })} />
        <Link href='/pagamento'><button>Prosegui al pagamento</button></Link>
      </form>
    </div>
  )
}
export default Checkout

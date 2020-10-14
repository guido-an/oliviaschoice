import { useContext, useState } from 'react'
import { CartContext } from '../contexts/CartContext'
import Link from 'next/link'

const Checkout = () => {
  const { totalPrice, setShippingInfo } = useContext(CartContext)
  //   const [totalPrice, setTotalPrice] = useState(0)

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
      console.log(form)
      setShippingInfo(form)
    } catch (err) {
      console.log(err)
    }
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
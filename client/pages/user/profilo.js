import { useContext, useState } from 'react'
import { UserContext } from '../../contexts/UserContext'

const Profilo = () => {
  const { user, updateUser } = useContext(UserContext)

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    password: '',
    telephone: '',
    email: '',
    VAT: '',
    streetAddress: '',
    city: '',
    zipCode: ''
  })

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const updatedUser = {
        firstName: form.firstName || user.firstName,
        lastName: form.lastName || user.lastName,
        password: form.password || user.password,
        telephone: form.telephone || user.telephone,
        email: form.email || user.email,
        VAT: form.VAT || user.VAT,
        streetAddress: form.streetAddress || user.shippingInfo && user.shippingInfo.streetAddress,
        city: form.city || user.shippingInfo && user.shippingInfo.city,
        zipCode: form.zipCode || user.shippingInfo && user.shippingInfo.zipCode
      }

      updateUser(updatedUser)
      // window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      <h1>Profilo</h1>
      <form onSubmit={handleSubmit}>
        <p><strong>Profilo</strong></p>
        <label>Nome</label>
        <input type='text' placeholder={user.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
        <label>Cognome</label>
        <input type='text' placeholder={user.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
        <label>Telefono</label>
        <input type='text' placeholder={user.telephone} onChange={(e) => setForm({ ...form, telephone: e.target.value })} />
        <label>Email</label>
        <input type='email' placeholder={user.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <label>P.IVA/Codice fiscale</label>
        <input type='text' placeholder={user.VAT} onChange={(e) => setForm({ ...form, VAT: e.target.value })} />
        <p><strong>Update password</strong></p>
        <label>Nuova password</label>
        <input type='password' placeholder='*****' onChange={(e) => setForm({ ...form, password: e.target.value })} />

        <p><strong>Indirizzo di spedizione</strong></p>
        <label>Indirizzo</label>
        <input type='text' placeholder={user.shippingInfo && user.shippingInfo.streetAddress} onChange={(e) => setForm({ ...form, streetAddress: e.target.value })} />
        <label>Città</label>
        <input type='text' placeholder={user.shippingInfo && user.shippingInfo.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
        <label>zip code</label>
        <input type='text' placeholder={user.shippingInfo && user.shippingInfo.zipCode} onChange={(e) => setForm({ ...form, zipCode: e.target.value })} />

        <button>Aggiorna</button>
      </form>
    </div>
  )
}
export default Profilo

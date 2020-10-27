import { useContext, useState } from 'react'
import { UserContext } from '../../contexts/UserContext'

const Profilo = () => {
  const { user, updateUser } = useContext(UserContext)

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })


  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const updatedUser = {
          firstName: form.firstName || user.firstName,
          lastName: form.lastName || user.lastName,
          email: form.email || user.email,
      }
      updateUser(updatedUser)
      window.location.reload() 
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <h1>Profilo</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder={user.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
        <input type='text' placeholder={user.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
        <input type='email' placeholder={user.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input type='password' placeholder='*****' onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button>Aggiorna</button>
      </form>
    </div>
  )
}
export default Profilo
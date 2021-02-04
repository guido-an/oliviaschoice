import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Profilo = () => {
  const { user, logout, updateUser, checkIfLoggedIn } = useContext(UserContext)
  const [proceed, setProceed] = useState(false)

  const router = useRouter()

  useEffect(() => {
    async function validateUser () {
      const userLoggedIn = await checkIfLoggedIn()
      if (!userLoggedIn) {
        router.push('/login')
      } else {
        setProceed(true)
      }
    }
    validateUser()
  }, [])

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    telephone: '',
    email: '',
    VAT: '',
    streetAddress: '',
    city: '',
    province: '',
    zipCode: ''
  })

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const updatedUser = {
        firstName: form.firstName || user.firstName,
        lastName: form.lastName || user.lastName,
        telephone: form.telephone || user.telephone,
        email: form.email || user.email,
        VAT: form.VAT || user.VAT,
        streetAddress: form.streetAddress || user.shippingInfo && user.shippingInfo.streetAddress,
        city: form.city || user.shippingInfo && user.shippingInfo.city,
        province: form.province || user.shippingInfo && user.shippingInfo.province,
        zipCode: form.zipCode || user.shippingInfo && user.shippingInfo.zipCode
      }
      updateUser(updatedUser)
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }

  const logoutUser = async () => {
    await logout()
    router.push('/login')
  }

  if (!proceed) {
    return <p>Loading..</p>
  }
  return (
    <div>
      <div className='values'>
        <h2>{user.firstName} {user.lastName}</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className='block'>
          <p><strong>Informazioni</strong></p>
          <Link href='/user/ordini' as='/user/ordini'>
            <p className='link-btn'> Vai agli ordini</p>
          </Link>
        </div>
        <div className='block'>
          <div className='input-box'>
            <label>Nome</label>
            <input
              type='text'
              placeholder={user.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            />
          </div>
          <div className='input-box'>
            <label>Cognome</label>
            <input
              type='text'
              placeholder={user.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            />
          </div>
          <div className='input-box'>
            <label>Telefono</label>
            <input
              type='text'
              placeholder={user.telephone}
              onChange={(e) => setForm({ ...form, telephone: e.target.value })}
            />
          </div>
          <div className='input-box'>
            <label>Email</label>
            <input
              type='email'
              placeholder={user.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div className='input-box'>
            <label>P.IVA/Codice fiscale</label>
            <input
              type='text'
              placeholder={user.VAT}
              onChange={(e) => setForm({ ...form, VAT: e.target.value })}
            />
          </div>
        </div>
        <p><strong>Indirizzo di spedizione</strong></p>
        <div className='block'>
          <div className='input-box'>
            <label>Indirizzo</label>
            <input
              type='text'
              placeholder={user.shippingInfo && user.shippingInfo.streetAddress}
              onChange={(e) => setForm({ ...form, streetAddress: e.target.value })}
            />
          </div>
          <div className='input-box'>
            <label>Città</label>
            <input
              type='text'
              placeholder={user.shippingInfo && user.shippingInfo.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
            />
          </div>
          <div className='input-box'>
            <label>Provincia</label>
            <input
              type='text'
              placeholder={user.shippingInfo && user.shippingInfo.province}
              onChange={(e) => setForm({ ...form, province: e.target.value })}
            />
          </div>
          <div className='input-box'>
            <label>zip code</label>
            <input
              type='text'
              placeholder={user.shippingInfo && user.shippingInfo.zipCode}
              onChange={(e) => setForm({ ...form, zipCode: e.target.value })}
            />
          </div>
        </div>

        <button>Aggiorna</button>
      </form>
      <p
        className='logout' onClick={logoutUser}
      >Logout
      </p>
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
        .logout {
          padding: 0 10px;
          color: #777;
          font-weight: 500;
          cursor: pointer
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

        .logout {
          padding: 0 80px;
          
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
  )
}
export default Profilo

import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { UserContext } from '../../contexts/UserContext'
import Link from 'next/link'
import Spinner from '../../components/helpersComponent/Spinner'

const service = axios.create({
  baseURL: process.env.APP_API,
  withCredentials: true
})

const ProductOfTheMonth = () => {
  const [proceed, setProceed] = useState(false)
  const [codeArticle, setCodeArticle] = useState('')
  const [displaySuccessMsg, setDisplaySuccessMsg] = useState(false)
  const [errorMsg, setErrorMsg] = useState(false)
  const router = useRouter()

  const { logout } = useContext(UserContext)

  useEffect(() => {
    // Create an scoped async function in the hook
    async function checkIfAdmin () {
      try {
        const res = await service.get('/admin/get-admin')
        if (res.data.admin) {
          setProceed(true)
        } else {
          router.push('/')
        }
      } catch (e) {
        console.log(e)
      }
    }
    // Execute the created function directly
    checkIfAdmin()
  }, [])

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault()
      const res = await service.post('/product/product-in-offer',
        {
          codeArticle
        })
      console.log(res, 'data')
      if (res.status === 200) {
        setDisplaySuccessMsg(`${res.data.product.name}`)
        setCodeArticle('')
        setErrorMsg(false)
      }
    } catch (err) {
      console.error(err)
      setErrorMsg(true)
      setDisplaySuccessMsg(false)
    }
  }

  if (!proceed) {
    return <Spinner />
  }

  return (
    <div className='product-in-offer'>
      <Link href='/admin/private' as='/admin/private'>
        <p className='back-to-private'>Back to private area</p>
      </Link>
      <div className='form-container'>
        <p>Prodotto in offerta al momento: <Link href='/offerta' as='/offerta'>Prodotto In Offerta</Link></p>
        <p style={{ marginTop: '20px' }}>Per aggiornare il prodotto del mese:</p>
        <form onSubmit={onSubmitHandler}>
          <input
            type='text'
            value={codeArticle}
            placeholder='Inserire Codice Articolo'
            onChange={(e) => setCodeArticle(e.target.value)}
            required
          />
          <button>Save</button>

        </form>
        <div style={{
          marginTop: '40px'
        }}
        >
          {displaySuccessMsg && <p>Nuovo prodotto in offerta: <strong>{displaySuccessMsg}</strong></p>}
          {errorMsg && <p>Il codice articolo inserito non è corretto.</p>}
        </div>
      </div>
      <style jsx>{`
          .product-in-offer {
              margin: 0 6vw
          }
        .back-to-private {
            color: var(--main-color);
            cursor: pointer
        }
        .form-container {
            margin-top: 40px
        }
        .form-container input {
            padding: 10px 20px;
            width: 240px;
            border-radius: 4px;
            border: none;
            box-shadow: 0px 3px 10px 3px rgba(0,0,0,0.1);
            margin: 20px 0 20px;
            display: block

        }
        .form-container button {
            background-color: green;
            color: #fff;
            width: 240px;
            border: none;
            height: 30px;
            border-radius: 4px;
            cursor: pointer
        }
  `}
      </style>

    </div>
  )
}

export default ProductOfTheMonth

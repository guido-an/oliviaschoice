import HeroOffer from '../components/offerPage/HeroOffer'
import GalleryOffer from '../components/offerPage/GalleryOffer'
import FirstBlock from '../components/offerPage/FirstBlock'
import SecondBlock from '../components/offerPage/SecondBlock'
import Footer from '../components/Footer'
import OverFooter from '../components/OverFooter'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ProductView from '../components/product/ProductView'

const service = axios.create({ // to update the order
  baseURL: process.env.APP_API,
  withCredentials: true
})

const Offerta = () => {
  const [productInOffer, setProdutInOffer] = useState(false)

  useEffect(() => {
    async function fetchProduct () {
      try {
        const response = await service.get(process.env.APP_API + '/product/product-in-offer')
        setProdutInOffer(response.data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchProduct()
  }, [])
  console.log('productInOffer', productInOffer)

  return (
    <div>
      <div id='hero-offer'>
        <HeroOffer />
      </div>
      <div id='block-one'>
        <FirstBlock />
      </div>
      <div id='block-two'>
        <SecondBlock />
      </div>
      <div id='gallery-offer'>
        <GalleryOffer />
      </div>
      <div id='acquista'>
        <ProductView productId={productInOffer._id} />
      </div>
      <div id='overfooter'>
        <OverFooter />
      </div>
      <div id='footer'>
        <Footer />
      </div>

      <style jsx='true'>{`
          #hero-offer {
              position:relative;
              bottom: 40px
          }

          #gallery-offer {
             position:relative;
              bottom: 110px 
          }

          #block-one,
          #block-two {
              position: relative;
              bottom: 110px
          }
          #overfooter, #footer {
            position: relative;
            bottom: 140px
          }

          #footer {
            height: 650px
          }

          @media(min-width: 968px){
            #footer {
            height: 220px
            }
          }
          
          `}
      </style>

    </div>
  )
}

export default Offerta

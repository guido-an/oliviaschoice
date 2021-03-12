
import img1 from '../../images/offer/mewa-1.png'
import img2 from '../../images/offer/mewa-2.png'
import img3 from '../../images/offer/mewa-3.png'

const HeroOffer = () => {
  return (
    <div className='gallery-offer'>
      <div className='img-container'>
        <img src={img1} />
      </div>
      <div className='img-container'>
        <img src={img2} />
      </div>
      <div className='img-container'>
        <img src={img3} />
      </div>
      <style jsx>{`
         .img-container img {
             width: 100%;
             height: auto
         }
         @media(min-width: 968px){
             display: flex
         }
           `}
      </style>
    </div>
  )
}

export default HeroOffer

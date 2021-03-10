
import heroImg from '../../images/hero-img.jpg'

const HeroOffer = () => {
  return (
    <div className='gallery-offer'>
      <div className='img-container'>
        <img src={heroImg} />
      </div>
      <div className='img-container'>
        <img src={heroImg} />
      </div>
      <div className='img-container'>
        <img src={heroImg} />
      </div>
      <div className='img-container'>
        <img src={heroImg} />
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

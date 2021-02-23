import ButtonRed from './helpersComponent/ButtonRed'
import Link from 'next/link'
const Hero = () => {
  return (
    <div className='hero'>
      <span>HEALTHY WELLNESS AND BEAUTY SHOP</span>
      <h1>OLIVIA'S CHOICE</h1>
      <p id='description'>La nostra selezione di prodotti per farti stare bene, ogni giorno.</p>
      <div className='cta-container'>
        <div>
          <ButtonRed link='#' text="L'OFFERTA DEL MESE" />
        </div>
        <div>
          <Link href='/'><a className='cta-hero'>> Incontra Olivia</a></Link>
        </div>
      </div>
      <style jsx>{`
           .hero {
              text-align: center;
           }
           .hero span {
               color: #777;
               position: relative;
               top: 20px;
               letter-spacing: 0.4px;
           }
           .hero h1 {
               font-size: 38px
           }
           #description {
               letter-spacing: 0.2px;
               margin-bottom: 80px
           }
           .cta-hero {
               color: #222;
               font-weight: 500 !important;
               margin-top: 60px;
               display: block
           } 
           @media(min-width: 968px){
               .hero {
                   position: relative;
                   bottom: 40px
               }
              .hero span {
                  font-size: 20px;
                  top: 60px;
                  font-weight: 300
              }
              .hero h1 {
                  font-size: 84px
              }
              #description {
                  width: 50%;
                  margin: 0 auto;
                  font-size: 18px;
                  position: relative;
                  bottom: 40px;
                  line-height: 30px
              }
              .cta-container {
                  display: flex;
                  justify-content: center;
                  flex-direction:row-reverse
              }
              .cta-container {
                  position: relative;
                  top: 10px
              }
              .cta-hero {
                  position: relative;
                  bottom: 55px;
                  margin-right: 40px
              } 
           }
           `}
      </style>
    </div>
  )
}

export default Hero

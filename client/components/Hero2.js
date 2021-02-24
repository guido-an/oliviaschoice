import ButtonRed from './helpersComponent/ButtonRed'
import heroImg from '../images/hero-img.jpg'

const Hero2 = () => {
  return (
    <div className='hero'>

      <div className='hero-left' />
      <div className='hero-right'>
        <h1>La rivoluzione della skincare</h1>
        <p>Prenditi cura della tua pelle ogni giorno comodamente a casa.
          <div id='btn-container'>
            <ButtonRed
              text='Acquista Ora'
              link='offerta'
              paddingSides='60px'
              color='red'
            />
          </div>
        </p>
      </div>
      <style jsx>{`
           .hero-left {
              background: url('${heroImg}');
              height: 60vh;
              background-size: cover;
           }

           .hero-right {
               margin: 0 15px
           }

           .hero h1 {
               font-size: 30px;
               line-height: 39px
           }
           .hero-right p {
               color: #2e2f2f;
               position: relative;
               bottom: 10px;
               line-height: 27px
           }

           #btn-container {
                   margin-top: 80px !important;
               }
          
           @media(min-width: 968px){
              .hero {
                  display: flex;
                  position: relative;
                  bottom: 40px
              }
              .hero h1 {
                  font-size: 50px;
                  line-height: 60px
              }
              .hero-left {
                  width: 50vw;
                  height: 70vh
              }

              .hero-right {
                  margin: 10vh auto;
                  width: 40vw;
                  position: relative;
                  bottom: 30px
              }
              .hero-right p {
                 bottom: 25px;
           }
           #btn-container {
                   margin-top: 100px !important;
               }
              
           }
           `}
      </style>
    </div>
  )
}

export default Hero2

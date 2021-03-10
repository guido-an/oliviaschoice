import ButtonRed from '../helpersComponent/ButtonRed'
import heroImg from '../../images/hero-img.jpg'

const HeroOffer = () => {
  return (
    <div className='hero'>
      <div className='hero-right'>
        <h1>MEWA si prende cura della tua pelle</h1>
        <p>La rivoluzione della routine skincare quotidiana comodamente a casa tua. </p>
        <div id='btn-container'>
          <a className='red-button' href='/offerta#acquista'>Acquista Ora</a>
        </div>
      </div>
      <div className='hero-left' />
      <style jsx>{`
          .hero {
              display: flex;
              flex-direction: column-reverse
          }
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
                   height: 180px
               }

               .red-button{
                  border: 1px solid #8c2b2f;
                  color: #fff;
                  font-weight: 400;
                  font-size: 12px;
                  padding: 10px 60px;
                  height: 40px;
                  border-radius: 4px;
                  letter-spacing: 1px;
                  box-shadow: 0px 4px 10px 0 rgba(0,0,0,0.3);
                  transition: 0.3s;
                  background-color: #8c2b2f;
                }
               .red-button:hover {
                 color: #8c2b2f;
                 background-color: #fff;
                 font-weight: 500;        
                 border: 1px solid #8c2b2f
               }   
           @media(min-width: 968px){
              .hero {
                  display: flex;
                  flex-direction: row
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
                   margin-top: 40px !important;
                   padding-bottom: 40px;
                   height: auto;
                  
               }
              
           }
           `}
      </style>
    </div>
  )
}

export default HeroOffer

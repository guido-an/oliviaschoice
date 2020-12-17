import logo from '../images/oliviaschoice-logo.png'
import NavBarSearch from './helpersComponent/NavBarSearch'
import creditCardsLogo from '../images/credit-cards-logo.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src={logo} />
      </div>
      <div className='footer-info-main-container'>
        <div className='footer-info-container'>
          <h3>Contatti</h3>
          <p className='footer-info'>info@mywebsite.com</p>
          <p className='footer-info'>+39 348 89 78 647</p>
          <p className='footer-info'>Via del pero, 2, 60100, Messina</p>
        </div>
        <div className='footer-info-container'>
          <h3>Social</h3>
          <p className='footer-info'><a href='#'>Instagram</a></p>
          <p className='footer-info'><a href='#'>Facebook</a></p>
        </div>
        <div className='footer-info-container'>
          <h3>Pagamenti</h3>
          <img src={creditCardsLogo} />
        </div>
        <div className='footer-info-container'>
          <h3>Credits</h3>
          <p className='footer-info'><a href='#'>Vanilla Marketing</a></p>
        </div>
      </div>
      <style jsx>{`
         .footer {
             display:block;
             margin: 60px 10px;
         }

        .footer-info-main-container {
            margin-top: 60px
        }

        .footer-info-container {
            margin-top: 40px
        }

        .footer-info a {
            color: #777
        }

        .footer-info a:hover {
            color: #8c2b2f
        }
    
    @media(min-width: 968px){
        .footer-info-main-container {
             display: flex;
             justify-content: space-evenly;
             margin-top: 0px
         }

         .footer-logo img {
             margin: 0 auto;
             display: block

         }
    }
         
         `}
      </style>
    </div>
  )
}

export default Footer

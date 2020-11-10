import React, { useState } from 'react'
import Link from 'next/link'
import HamburgerMenu from 'react-hamburger-menu'
import logo, { search } from '../images/oliviaschoice-logo.png'
import logoMobile from '../images/oliviaschoice-logo-mobile.png'
import cartIcon from '../images/shopping-cart-icon.png'
import NavBarSearch from '../components/NavBarSearch'
const Navbar = ({ user }) => {
  const [mobileMenu, setMobileMenu] = useState(false)

  const closeMobileMenuOnClik = () => {
    if (mobileMenu) {
      setMobileMenu(false)
    }
  }
  return (
    <nav className='navbar'>
      <div className='navbar-top-mobile'>
        <Link href='/'>
          <img
            className='logo'
            src={logoMobile}
            alt='logo-olivias-choice-mobile'
          />
        </Link>
        <div className='burger-icon-container'>
          <NavBarSearch />
          <Link href='/carrello'>
            <img
              className='cart-icon-mobile'
              width='24px'
              height='24px'
              src={cartIcon}
            />
          </Link>

          <HamburgerMenu
            isOpen={mobileMenu}
            menuClicked={() => setMobileMenu(!mobileMenu)}
            width={30}
            height={18}
            strokeWidth={3}
            rotate={0}
            color='#222'
            borderRadius={0}
            animationDuration={0.3}
          />
        </div>
      </div>
      <div className='mobile-menu'>
        {mobileMenu &&
          <ul onClick={closeMobileMenuOnClik}>
            <li><Link href='/'><a>Home</a></Link></li>
            <li><Link href='/chi-siamo'><a>Chi siamo</a></Link></li>
            <li><Link href='/offerta'><a>Offerta</a></Link></li>
            <li><Link href='#'><a>Prodotti</a></Link></li>
            <li><Link href='/faq'><a>Faq</a></Link></li>
            <li><Link href='/contatti'><a>Contatti</a></Link></li>
            {!user
              ? <p>
                <Link href='/login'><a className='profile-link'>Accedi</a></Link> o <Link href='/signup'><a className='profile-link'>Registrati</a></Link>
              </p>
              : <Link href='/'>Profilo</Link>}
          </ul>}
      </div>
      <div className='desktop-menu'>
        <ul>
          <li><Link href='/'><a>Home</a></Link></li>
          <li><Link href='/chi-siamo'><a>Chi siamo</a></Link></li>
          <li><Link href='/offerta'><a>Offerta</a></Link></li>
          <li><Link href='/#'><a>Prodotti</a></Link></li>
          <li><Link href='/faq'><a>Faq</a></Link></li>
          <li><Link href='/contatti'><a>Contatti</a></Link></li>
        </ul>
      </div>
      <div className='icons-desktop-right'>
        <div
          className='search-bar-desktop' style={{
            position: 'relative',
            top: '33px'
          }}
        >
          <NavBarSearch />
        </div>
        <div>
          <Link href='/carrello'>
            <img
              className='cart-icon-desktop'
              src={cartIcon}
              width='24px'
              height='24px'
            />
          </Link>
        </div>
      </div>
      <style jsx>{`
                .navbar {
                 overflow: hidden;
                 position: fixed;
                 top: 0;
                 width: 100%;
                 padding: 10px 10px;
                 background-color: #fff;
               }
               .logo {
                 cursor: pointer
               }
               .desktop-menu {
                 display: none
               }
               .cart-icon-desktop, .search-bar-desktop {
                 display: none
               }
               .navbar-top-mobile {
                 display: flex;
                 justify-content: space-between
               }
               .burger-icon-container {
                 margin-top: 30px;
                 display: flex;
               }
               .cart-icon-mobile {
                 position: relative;
                 right: 15px;
                 bottom: 3px;
                 margin-left: 20px
               }
              
                ul {
                    color: #fff;
                    list-style: none;
                }
                ul li {
                    padding: 8px 0;
                }
                ul li a {
                    color: #777;
                }
                ul li a:hover {
                  color: #8c2b2f;
                  border-bottom: 2px solid #8c2b2f
                }

                .profile-link{
                  margin-top: 20px;
                  color: #222;
                  font-size: 15px;
                }


        
                @media(min-width: 968px){
                  .burger-icon-container, mobile-menu {
                    display: none
                  }
                  .navbar {
                    display: flex;
                    justify-content: space-between;
                    padding: 0 80px;
                  }
                
                  .mobile-menu {
                    display: none
                  }
                  .desktop-menu {
                     display: block;
                  }
                  .desktop-menu ul {
                    display: flex;
                  }
                  .desktop-menu ul {
                    display: flex;
                  }
                  .desktop-menu ul li {
                    padding:  17px 23px;
                  }
                  .icons-desktop-right {
                  display: flex;
                }
                .icons-desktop-right:hover {
                  cursor: pointer
                }
                  .cart-icon-desktop {
                   display: block;
                   position: relative;
                   top: 30px;
                   margin-left: 20px
                  }
                  .search-bar-desktop {
                    display: block
                  }
                 
                }
            `}
      </style>
    </nav>
  )
}
export default Navbar

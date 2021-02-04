import React, { useState, useContext, useEffect } from 'react'
import Link from 'next/link'
import HamburgerMenu from 'react-hamburger-menu'
import logoMobile from '../images/oliviaschoice-logo-mobile.png'
import ocLogo from '../images/oc-logo.png'
import cartIcon from '../images/icons/shopping-cart-icon.png'
import userIcon from '../images/icons/user-icon.png'
import NavBarSearch from './helpersComponent/NavBarSearch'
import { CartContext } from '../contexts/CartContext'

const Navbar = ({ user }) => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [scroll, setScroll] = useState(false) // stateCheck for Scroll
  let [dropDownMenu, setDropDownMenu] = useState(false)
  const [dropDownMenuDesktop, setDropDownMenuDesktop] = useState(false)

  const listenScrollEvent = () => {
    if (window.scrollY > 200) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }
  console.log(mobileMenu, 'mobile menu')
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent) // add event listner
  })

  const { productsInCart } = useContext(CartContext)

  return (
    <div>
      <nav className='navbar'>
        <div className='navbar-top-mobile'>
          <Link href='/'>
            {!scroll
              ? <img
                className='logo'
                src={logoMobile}
                alt='logo-olivias-choice-mobile'
              />
              : <img
                style={{
                  marginTop: '10px'
                }}
                className='logo'
                src={ocLogo}
                alt='logo-olivias-choice-iniziali'
                width='152px'
                height='57px'
              />}

          </Link>
          <div className='burger-icon-container'>
            <NavBarSearch />
            <Link href='/carrello'>
              <img
                className='cart-icon-mobile'
                width='20px'
                height='20px'
                src={cartIcon}
              />
            </Link>
            <div className='products-in-cart'>
              <Link href='/carrello'><a>{productsInCart ? productsInCart.length : 0}</a></Link>
            </div>

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
            <ul>
              <li onClick={() => setMobileMenu(false)}><Link href='/'><a>Home</a></Link></li>
              <li onClick={() => setMobileMenu(false)}><Link href='/chi-siamo'><a>Chi siamo</a></Link></li>
              <li onClick={() => setMobileMenu(false)}><Link href='/offerta'><a>Offerta</a></Link></li>
              <li onClick={() => setDropDownMenu((dropDownMenu = !dropDownMenu))}><Link href='#'><a>Prodotti</a></Link></li>
              {dropDownMenu && (
                <div className='submenu' onClick={() => setMobileMenu(false)}>
                  <Link href='/elettromedicali'><p>Elettromedicali</p></Link>
                  <Link href='/mamma-e-bimbo'><p>Mamma e bimbo</p></Link>
                  <Link href='/gioielli-anallergici'><p>Gioielli anallergici</p></Link>
                  <Link href='/igiene-e-cosmesi'><p>Igiene e cosmesi</p></Link>
                  <Link href='/viso-e-capelli'><p>Viso e capelli</p></Link>
                  <Link href='/igiene-dentale'><p>Igiene dentale</p></Link>
                  <Link href='/emergenza-covid'><p>Emergenza covid</p></Link>
                  <Link href='/benessere-occhi'><p>Benessere occhi</p></Link>
                  <Link href='/articoli-sanitari'><p>Articoli sanitari</p></Link>
                  <Link href='/integratori'><p>Integratori</p></Link>
                </div>
              )}
              <li onClick={() => setMobileMenu(false)}><Link href='/faq'><a>Faq</a></Link></li>
              <li
                onClick={() => setMobileMenu(false)}
                style={{
                  marginBottom: '20px'
                }}
              ><Link href='/contatti'><a>Contatti</a></Link>
              </li>
              {!user
                ? <span>
                  <img className='user-icon' src={userIcon} alt='user-icon' />
                  <Link href='/login'><a className='profile-link'>Accedi</a></Link> <span>|</span> <Link href='/signup'><a className='profile-link'>Registrati</a></Link>
                  </span>
                : <div>
                  <img className='user-icon' src={userIcon} alt='user-icon' />
                  <Link href='/user/profilo'>
                    <a onClick={() => setMobileMenu(false)} className='profile-link'>Il mio account</a>
                  </Link>
                  </div>}

            </ul>}
        </div>
        <div className='desktop-menu' onMouseLeave={() => setDropDownMenuDesktop(false)}>
          <ul>
            <li><Link href='/'><a>Home</a></Link></li>
            <li><Link href='/chi-siamo'><a>Chi siamo</a></Link></li>
            <li><Link href='/offerta'><a>Offerta</a></Link></li>
            <li
              className='prodotti-menu-item'
              onMouseEnter={() => setDropDownMenuDesktop(true)}
              onClick={() => setDropDownMenuDesktop(!dropDownMenuDesktop)}
            >Prodotti {!dropDownMenuDesktop ? <span>></span> : <span
                style={{
                  transform: 'rotate(90deg)',
                  display: 'inline-block'

              }}
                                                               >>
                                                               </span>}
            </li>
            <li><Link href='/faq'><a>Faq</a></Link></li>
            <li><Link href='/contatti'><a>Contatti</a></Link></li>
          </ul>
        </div>

        <div className='icons-desktop-right'>
          <div className='search-bar-desktop'>
            <NavBarSearch />
          </div>
          <div>
            <Link href='/user/profilo'><a><img src={userIcon} /></a></Link>
          </div>
          <Link href='/carrello'>
            <a>
              <img
                className='cart-icon-desktop'
                src={cartIcon}
                width='20px'
                height='20px'
              />
            </a>
          </Link>
          <div className='products-in-cart'>
            <Link href='/carrello'><a>{productsInCart ? productsInCart.length : 0}</a></Link>
          </div>
        </div>
      </nav>
      {dropDownMenuDesktop && (
        <div className='submenu-desktop' onMouseEnter={() => setDropDownMenuDesktop(true)}>
          <Link href='/elettromedicali'><p onClick={() => setDropDownMenuDesktop(false)}>Elettromedicali</p></Link>
          <Link href='/mamma-e-bimbo'><p onClick={() => setDropDownMenuDesktop(false)}>Mamma e bimbo</p></Link>
          <Link href='/gioielli-anallergici'><p onClick={() => setDropDownMenuDesktop(false)}>Gioielli anallergici</p></Link>
          <Link href='/igiene-e-cosmesi'><p onClick={() => setDropDownMenuDesktop(false)}>Igiene e cosmesi</p></Link>
          <Link href='/viso-e-capelli'><p onClick={() => setDropDownMenuDesktop(false)}>Viso e capelli</p></Link>
          <Link href='/igiene-dentale'><p onClick={() => setDropDownMenuDesktop(false)}>Igiene dentale</p></Link>
          <Link href='/emergenza-covid'><p onClick={() => setDropDownMenuDesktop(false)}>Emergenza covid</p></Link>
          <Link href='/benessere-occhi'><p onClick={() => setDropDownMenuDesktop(false)}>Benessere occhi</p></Link>
          <Link href='/articoli-sanitari'><p onClick={() => setDropDownMenuDesktop(false)}>Articoli sanitari</p></Link>
          <Link href='/integratori'><p onClick={() => setDropDownMenuDesktop(false)}>Integratori</p></Link>
        </div>
      )}
      <style jsx>{`

              .desktop-menu, .icons-desktop-right {
                 display: none
               }
                .navbar {
                 overflow: hidden;
                 position: fixed;
                 top: 0;
                 width: 100%;
                 padding: 10px 10px;
                 background-color: #fff;
                 z-index: 90;
              
               }
               .logo {
                 cursor: pointer;
                 width: 110px
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
                 margin-left: 25px
               }
              
                ul li {
                    padding: 8px 0;
                }
                ul li a {
                    color: #222;
                    font-weight: 500;
                }
                ul li a:hover {
                  color: #8c2b2f;
                  border-bottom: 2px solid #8c2b2f
                }

                .submenu p {
                  padding-left: 10px;
                  line-height: 15px
                }

                .user-icon {
                  margin-right: 10px;
                  top: 2px;
                  position: relative
                }

                .profile-link{
                  margin-top: 20px;
                  color: #222;
                  font-size: 15px;
                }

                .products-in-cart{
                    background-color: #8c2b2f;
                    height: 18px;
                    width: 18px;
                    border-radius: 50%;
                    margin-right: 5px;
                    position: relative;
                    top: 10px;
                    right: 14px
                  }
                  .products-in-cart a {
                    font-size: 10px;
                    position: relative;
                    bottom: 5px;
                    left: 6px;
                    color: #fff;
                  }

                @media(min-width: 1295px){
                  .burger-icon-container, mobile-menu {
                    display: none
                  }
                  .navbar {
                    display: flex;
                    justify-content: space-between;
                    padding: 0 80px;
                  }

                  .logo {
                     width: 130px
                   }
                
                  .mobile-menu {
                    display: none
                  }
                  .desktop-menu {
                     display: block;
                  }
                  .desktop-menu ul {
                    display: flex;
                    margin-right: 140px
                  }
                  .desktop-menu ul {
                    display: flex;
                  }
                  .desktop-menu ul li {
                    padding:  17px 19px;
                  }
                  .icons-desktop-right {
                  display: flex;
                  width: 300px;
                  position: relative;
                  top: 30px;
                  justify-content: space-evenly
                }
                .icons-desktop-right:hover {
                  cursor: pointer
                }
                  .cart-icon-desktop {
                   display: block;
                   position: relative;
                   right: 10px
                  }
                  .search-bar-desktop {
                    display: block;
                    margin-right: 10px
                  }
                  .profile-link {
                    font-size: 14px;
                    position: relative;
                
                  }
                  .products-in-cart{
                    position: relative;
                    top: 10px;
                    right: 30px 
                  }
                  
                  .submenu-desktop {
                    z-index: 99;
                    position: fixed;
                    background-color: #fff;
                    border-radius: 4px;
                    box-shadow: 0px 2px 7px 3px rgba(0,0,0,0.2);
                    padding: 10px 20px;
                    top: 60px;
                    left: 42vw;
                  }

                  .submenu-desktop p:hover {
                    color: #222;
                    cursor: pointer
                  }
                 
                }
            `}
      </style>

    </div>
  )
}
export default Navbar

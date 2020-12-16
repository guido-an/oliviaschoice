import CategoryContainer from './helpersComponent/CategoryContainer'
import elettromedicali from '../images/categories-icons/elettromedicali.jpg'
import mammaBimbo from '../images/categories-icons/mamma-e-bimbo.png'
import igieneCosmesi from '../images/categories-icons/igiene-e-cosmesi.jpg'
import visoCapelli from '../images/categories-icons/viso-e-capelli.png'
import igieneDentale from '../images/categories-icons/igiene-dentale.png'
import benessereOcchi from '../images/categories-icons/benessere-occhi.png'
import gioielli from '../images/categories-icons/gioielli-anallergici.png'
import covid from '../images/categories-icons/prodotti-emergenza-covid.png'
import articoliSanitari from '../images/categories-icons/articoli-sanitari.png'
import integratori from '../images/categories-icons/integratori.png'

const Categories = () => {
  return (
    <div className='categories'>
      <span className='overtitle'>LOREM ISPUM SIN AMET</span>
      <h2 className='title-section'>LOREM ISPUMN DOLORET SENT AT</h2>
      <div className='divider-grey' style={{ margin: '0 auto 30px' }} />
      <p className='description-section'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus ad maiores optio expedita temporibus doloremque.</p>
      <div className='categories-container'>
        <CategoryContainer img={elettromedicali} title='Ellettromedicali' link='elettromedicali' />
        <CategoryContainer img={mammaBimbo} title='Mamma e bimbo' link='mamma-e-bimbo' />
        <CategoryContainer img={gioielli} title='Gioielli anallergici' link='gioielli-anallergici' />
        <CategoryContainer img={igieneCosmesi} title='Igiene e cosmesi' link='igiene-e-cosmesi' />
        <CategoryContainer img={visoCapelli} title='Viso e capelli' link='viso-e-capelli' />
        <CategoryContainer img={igieneDentale} title='Igiene dentale' link='igiene-dentale' />
        <CategoryContainer img={covid} title='Emergenza CoViD-19' link='emergenza-covid' />
        <CategoryContainer img={benessereOcchi} title='Benessere occhi' link='benessere-occhi' />
        <CategoryContainer img={articoliSanitari} title='Articoli sanitari' link='articoli-sanitari'  />
        <CategoryContainer img={integratori} title='Integratori' link='integratori' />
      </div>

      <style jsx>{`
          .categories {
              text-align: center;
              margin-top: 80px;
              padding: 0 10px
          }
          .categories .divider {
             margin: 0 auto 30px
          }

          @media(min-width: 968px){
              .categories-container {
                  display: flex;
                  flex-wrap: wrap;
                  margin: 0 80px
              }
          }    
      `}
      </style>
    </div>
  )
}

export default Categories

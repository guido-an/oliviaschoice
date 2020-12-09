import CategoryContainer from './helpers/CategoryContainer'
import elettromedicali from '../images/categories-icons/elettromedicali.jpg'
import mammaBimbo from '../images/categories-icons/mamma-e-bimbo.png'
import igieneCosmesi from '../images/categories-icons/igiene-e-cosmesi.jpg'
import visoCapelli from '../images/categories-icons/viso-e-capelli.png'
import igieneDentale from '../images/categories-icons/igiene-dentale.png'
import benessereOcchi from '../images/categories-icons/benessere-occhi.png'

const Categories = () => {
  return (
    <div className='categories'>
      <span className='overtitle'>LOREM ISPUM SIN AMET</span>
      <h2 className='title-section'>LOREM ISPUMN DOLORET SENT AT</h2>
      <div className='divider-grey' style={{ margin: '0 auto 30px' }} />
      <p className='description-section'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus ad maiores optio expedita temporibus doloremque.</p>
      <div className='categories-container'>
        <CategoryContainer img={elettromedicali} title='Ellettromedicali' link='elettromedicali' />
        <CategoryContainer img={mammaBimbo} title='Mamma e bimbo' />
        <CategoryContainer title='Gioielli anallergici' />
        <CategoryContainer img={igieneCosmesi} title='Igiene e cosmesi' />
        <CategoryContainer img={visoCapelli} title='Viso e capelli' />
        <CategoryContainer img={igieneDentale} title='Igiene dentale' />
        <CategoryContainer title='Emergenza CoViD-19' />
        <CategoryContainer img={benessereOcchi} title='Benessere occhi' />
        <CategoryContainer title='Articoli sanitari' />
        <CategoryContainer title='Integratori' />
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

import CategoryContainer from './helpers/CategoryContainer'
import test from '../images/test.jpg'

const Categories = () => {
  return (
    <div className='categories'>
      <span className='overtitle'>LOREM ISPUM SIN AMET</span>
      <h2 className='title-section'>LOREM ISPUMN DOLORET SENT AT</h2>
      <div className='divider-grey' style={{ margin: '0 auto 30px' }}/>
      <p className='description-section'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus ad maiores optio expedita temporibus doloremque.</p>
      <div className='categories-container'>
        <CategoryContainer img={test} title='Ellettromedicali' />
        <CategoryContainer img={test} title='Mamma e bimbo' />
        <CategoryContainer title='Gioielli anallergici' />
        <CategoryContainer title='Igiene e cosmesi' />
        <CategoryContainer title='Viso e capelli' />
        <CategoryContainer title='Igiene dentale' />
        <CategoryContainer title='Emergenza CoViD-19' />
        <CategoryContainer title='Benessere occhi' />
        <CategoryContainer title='Articoli sanitari' />
        <CategoryContainer title='Articoli sanitari' />
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

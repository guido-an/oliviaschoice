import Link from 'next/link'
import testImg from '../../images/test-prodotto.jpg'
import arrow from '../../images/icons/arrow-right.png'

const ProductList = ({ products }) => {
  return (
    <div className='products-list-container'>
      {products.map(product => {
        return (
          <div key={product._id} className='product-container'>
            <img src={testImg} width='200' height='200px' />
            <p className='product-title'>{product.name}</p>
            <p>{product.price} €</p>
            <Link href={'/prodotto/' + product._id}>
              <a>Scopri di più</a>
            </Link>
            <Link href={'/prodotto/' + product._id}>
              <img className='arrow' src={arrow} />
            </Link>
          </div>
        )
      })}

      <style jsx>{`
               .products-list-container {
                 position: relative;
                 bottom: 40px;
    
               }
                 .product-title {
                     color: #222;
                     font-weight: 500
                   }
    
                   .product-container {
                    padding: 20px 40px 80px;
                    box-shadow: 0px 4px 10px 0 rgba(0,0,0,0.3);
                    margin: 20px 10px;
                    border-radius: 4px;
                    background-color: #fff
                   }
                   
                   .product-container .arrow {
                      top: 22px;
                     position: relative;
                     left: 10px;
                     cursor: pointer            
                   }

                 .product-container a {
                     color: var(--main-color);
                     font-weight: 500;
                     top: 20px;
                     position: relative;
                     cursor: pointer
                 }

                 @media(min-width: 968px){
                  .products-list-container {
                     display: flex;
                     flex-wrap: wrap;
                     justify-content: space-evenly
                    
                  }
                  .product-container {
                    width: 31%;
                    padding: 10px 20px 40px;

                  }

                  .products-list-container {
                     bottom: 80px
               }
                
                 }
                 `}
      </style>
    </div>
  )
}

export default ProductList

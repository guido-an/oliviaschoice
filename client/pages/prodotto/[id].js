import { useRouter } from "next/router";
import { useContext, useEffect, useState } from 'react'
import Footer from "../../components/Footer";
import OverFooter from "../../components/OverFooter";
import { CartContext } from '../../contexts/CartContext'
import { ProductContext } from '../../contexts/ProductContext'
import testImg from '../../images/test-prodotto.jpg'


function createMarkup (text) { return { __html: text } };


const Product = () => {
  const router = useRouter();
  const { id } = router.query; // Destructuring our router object
  const { addToCart, productsInCart } = useContext(CartContext)
  const { getSingleProduct, singleProduct } = useContext(ProductContext)
  const [displayExceedMsg, setDisplayExceedMsg] = useState(false)

   useEffect(() => {
     document.getElementById('quantity').value = 1
      async function fetchProduct () {
        await getSingleProduct(id)
      }
      fetchProduct()
    }, [id])

    const increaseQuantity = () => {
      const inputQty = document.getElementById('quantity').value 
      document.getElementById('quantity').value = Number(inputQty) + 1
      exceedQuantity(singleProduct)
    }

    const decreaseQuantity = () => {
      const inputQty = document.getElementById('quantity').value 
      document.getElementById('quantity').value = Number(inputQty) - 1
      if(inputQty <= 1) {
        document.getElementById('quantity').value = 1
      }
    }
   
    const exceedQuantity = (singleProduct) => {
      if(document.getElementById('quantity').value > singleProduct.effectiveStock){
        document.getElementById('add-to-cart-btn').disabled = true
        setDisplayExceedMsg(true)
      } else {
        document.getElementById('add-to-cart-btn').disabled = false
        setDisplayExceedMsg(false)
      }
    }

    console.log(singleProduct, 'singleProduct')
    
    return (
        <div>
      <div className="product-page-container">
        <img src={testImg} width="90%"></img>
        <p className="product-title">{singleProduct && singleProduct.name}</p>
        <p className="product-price">{singleProduct && singleProduct.price} €</p>
        <div className="product-description" dangerouslySetInnerHTML={createMarkup(singleProduct && singleProduct.description)} />
        <button className="minus" onClick={decreaseQuantity}>-</button>
        <input id="quantity" type="number"></input>
        <button className="plus" onClick={increaseQuantity}>+</button>
        <button id="add-to-cart-btn" onClick={() => addToCart(singleProduct, document.getElementById('quantity').value)}>Add to cart</button>
       
        {displayExceedMsg && <p>Sono rimaste {singleProduct.effectiveStock} unità di questo prodotto</p>}
     
       <style jsx>{`
           
           .product-page-container {
             padding: var(--container-padding)
           }
           .product-page-container img {
             display: block;
             margin: 0 auto
           }
           
           .product-page-container .product-title {
             color: #222;
             font-weight: 600
           }
            
          .product-price {
            font-weight: 500;
          }
           .product-description {
             margin-bottom: 60px
           }
           input[type=number] {
               -moz-appearance: textfield;
            }
            input::-webkit-outer-spin-button,
            input::-webkit-inner-spin-button {
                       -webkit-appearance: none;
                       margin: 0;
                 }
          #add-to-cart-btn {
             background-color: var(--main-color);
             color: #fff;
             border-radius: 4px;
             border: 1px solid var(--main-color);
             cursor: pointer;
             height: 40px;
             width: 180px;
             margin-left: 20px;
             letter-spacing: 0.2px;
             box-shadow: 0px 4px 10px 0 rgba(0,0,0,0.3);
             position: relative;
             right: 130px;
           }
           
           #add-to-cart-btn:disabled {
             background-color: #f7f7f7;
             cursor: not-allowed;
             border: 2px solid #f7f7f7;
             color: #222
           }
           .product-page-container input {
             height: 40px;
             border: 1px solid #fff;
             font-size: 16px;
             color: #222;
             font-weight: 500;
             padding-left: 15px
           }
           
           .plus {
               position: relative;
               right: 142px;
               width: 25px;
              height: 25px;
              display: inline-block;
              border-radius: 50%;
              border: 1px solid #999;
              color: #999;
              text-align: center;
           }
           .plus:hover {
            color: #222;
              border: 1px solid #222;
              cursor: pointer
           }
           
            .minus {
              width: 25px;
              height: 25px;
              display: inline-block;
              border-radius: 50%;
              border: 1px solid #999;
              color: #999;
              text-align: center;
           } 
           .minus:hover {
              color: #222;
              border: 1px solid #222;
              cursor: pointer
          }
           
           `}
        </style>
        
      </div>
          <OverFooter/>
          <Footer/>
      </div>
            )
      }


export default Product
  
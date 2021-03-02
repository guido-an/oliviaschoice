import { useRouter } from "next/router";
import { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import Footer from "../../components/Footer";
import OverFooter from "../../components/OverFooter";
import { CartContext } from '../../contexts/CartContext'
import { ProductContext } from '../../contexts/ProductContext'
import testImg from '../../images/test-prodotto.jpg'
import Spinner from "../../components/helpersComponent/Spinner";


function createMarkup (text) { return { __html: text } };

const Product = () => {

  const router = useRouter();
  const { id } = router.query; // Destructuring our router object
  const { addToCart, productsInCart } = useContext(CartContext)
  const { getSingleProduct, singleProduct } = useContext(ProductContext)
  const [addedToCartMsg, setAddedToCartMsg] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [display, setDisplay] = useState(false)

  

   useEffect(() => {
      async function fetchProduct () {
        await getSingleProduct(id)
        setDisplay(true)
      }
      fetchProduct()
    }, [id])

    const increaseQuantity = () => {
      setQuantity(quantity + 1 )
      setAddedToCartMsg(false)
    }

    const decreaseQuantity = () => {
       quantity > 1 && setQuantity(quantity - 1)
       setAddedToCartMsg(false)
    }
   
    const addProductToCart = () => {
       addToCart(singleProduct, quantity)
       setAddedToCartMsg(true)
    }

    if(!singleProduct){
      return <Spinner/>
    } 
   

    return (
        <div>
           <div className="product-page-container">
             <div className="img-container">
                 <img src={testImg} width="300px"></img>
             </div>
            <div className="product-container">
                 <h1 className="product-title">{singleProduct.name}</h1>
                 <p className="product-price">{singleProduct.price} €</p>
                 <div className="quantity-container">
                    <p>Quantità:</p>
                    <div className="quantity">
                     <p className="minus" onClick={decreaseQuantity}>-</p>
                     <input id="quantity" type="number" value={quantity}></input>
                     <p className="plus" 
                     onClick={increaseQuantity}>+
                     </p>
                    </div>
                 </div>
                 <button id="add-to-cart-btn" 
                 onClick={addProductToCart}
                 disabled={quantity > singleProduct.effectiveStock && true}
                 >
                 Aggiungi al Carello
                 </button>
            
                 <p style={{
                   fontSize: '14px',
                   marginTop: '60px'
                 }}>{singleProduct.effectiveStock} unità rimaste</p>

                {addedToCartMsg && <div>
                     <p>Prodotto aggiunto! Vai al <Link href="/carrello">carrello</Link></p>
                  </div>
                  }
             </div>        
      </div>
        <div id="more-info-section">
           <MoreInfo singleProduct={singleProduct}/>
        </div>
        <div id="over-footer">
           <OverFooter/>
        </div>
       <div id="footer">
         <Footer/>
       </div>
        <style jsx>{`
           
           .product-page-container {
             padding: var(--container-padding);
             position: relative; 
             bottom: 40px
           }
           .product-page-container img {
             display: block;
             margin: 0 auto
           }
           
           .product-page-container .product-title {
             color: #222;
             font-weight: 600;
             line-height: 36px
           }
           .quantity-container {
             display: flex
           }
           .quantity {
             position: relative;
             left: 40px;
             top: 5px
           }
            
          .product-price {
            font-weight: 400;
            font-size: 20px;
            color: #222
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
             height: 45px;
             width: 100%;
             margin-left: 20px;
             letter-spacing: 0.2px;
             box-shadow: 0px 4px 10px 0 rgba(0,0,0,0.3);
             position: relative;
             right: 20px;
             top: 40px
           }

           #add-to-cart-btn:hover {
            box-shadow: 0px 6px 15px 0 rgba(0,0,0,0.3);
            color: #f7f7f7;
            background-color: #E9D0CD;
            color: #222;
            border: 1px solid #E9D0CD
           }
           
           #add-to-cart-btn:disabled {
             background-color: #f7f7f7;
             cursor: not-allowed;
             border: 2px solid #f7f7f7;
             color: #222
           }
           .product-page-container input {
             height: 40px;
             border: 1px solid #777;
             font-size: 16px;
             color: #222;
             font-weight: 500;
            text-align: center;
            position: relative;
            width: 220px;
            bottom: 6px;
           }
           
           .plus {
              position: relative;
              display: inline-block;             
              color: #999;
              bottom: 6px;
              right: 20px;
              font-weight: 500
           }
           .plus:hover {
              color: #222;
             
              cursor: pointer
           }
           
            .minus {
              display: inline-block;
              color: #999;
              bottom: 6px;
              left: 20px;
              position: relative;
              z-index: 99;
              font-weight: 500

           } 
           .minus:hover {
              color: #222;
             
              cursor: pointer
          }

          #more-info-section {
            position: relative;
            bottom: 60px;
            background-color: #f4f4f2;
            padding: 20px 10px 80px;
          }

          #over-footer, #footer {
            position: relative;
            bottom: 200px;
          }

          #footer {
            height: 600px
          }
    
          @media(min-width: 968px){
            .product-page-container {
             display:flex;
             bottom: 60px
           }

           .product-page-container .img-container {
             width: 50%
           }
           .product-page-container .product-container {
             width: 40%;
             margin-bottom: 120px
           }

           #more-info-section {
             bottom: 180px
           }
           #over-footer, #footer {
            position: relative;
            bottom: 180px;
          }

          #footer {
            height: 200px
          }
        
          }
           
           `}
        </style>
       
      </div>
            )
      }

      const MoreInfo = ({ singleProduct }) => {
        const [displayDescription, setDisplayDescription] = useState(true)
        const [displayDetails, setDisplayDetails] = useState(false)
        const [displayHowToUseIt, setHowToUseIt] = useState(false)
      
        const handleDescription = () => {
          setDisplayDescription(true)
          setDisplayDetails(false)
          setHowToUseIt(false)
        }
        const handleDetails = () => {
          setDisplayDescription(false)
          setDisplayDetails(true)
          setHowToUseIt(false)
        }
        const handleHowToUseIt = () => {
          setDisplayDescription(false)
          setDisplayDetails(false)
          setHowToUseIt(true)
        }

        
        return(
              <div id="more-info-section">
                <div className="titles-container">
                  {singleProduct.description && 
                   <div className="more-info-item">
                     <span
                     onClick={handleDescription}
                     className={displayDescription && 'active-item'}
                     >
                     Descrizione
                     </span>
                    </div>
                   }
    
                   {singleProduct.details && 
                   <div className="more-info-item">
                     <span
                     onClick={handleDetails}
                     className={displayDetails && 'active-item'}
                     >
                     Informazioni
                     </span>
                    </div>
                   }
    
                   {singleProduct.howToUseIt && 
                   <div className="more-info-item">
                     <span
                     onClick={handleHowToUseIt}
                     className={displayHowToUseIt && 'active-item'}
                     >
                     Come Usarlo
                     </span>
                    </div>
                   }
               </div>

                {displayDescription &&
                  <div  
                 dangerouslySetInnerHTML={createMarkup(singleProduct && singleProduct.description)} 
                 />
                }
                {displayDetails &&
                <div  
                 dangerouslySetInnerHTML={createMarkup(singleProduct && singleProduct.details)} 
                 />
                }
                {displayHowToUseIt &&
                  <div  
                 dangerouslySetInnerHTML={createMarkup(singleProduct && singleProduct.howToUseIt)} 
                 />
                }
                <style jsx="true">{`
                  .more-info-item span {
                    cursor: pointer;
                    width: 33%;
                    color: #222
                  }
                  
                  .active-item { 
                    color: var(--main-color) !important;
                    border-bottom: 3px solid var(--main-color);
                    padding-bottom: 5px;
                    width: 110px;
                    font-weight: 500          
                  }
                  .titles-container {
                    display: flex;
                    justify-content: space-evenly;
                    margin-bottom: 40px
                  
                  }
                  @media(min-width: 968px){
                    #more-info-section{
                       width: 50%;
                       margin: 0 auto
                    }
                  }
                  
                  `}</style>
             </div>
        )
      }

export default Product
 
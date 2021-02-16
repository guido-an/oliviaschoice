import { useContext, useEffect } from 'react'
import { CartContext } from '../contexts/CartContext'
import Link from 'next/link'
import Footer from '../components/Footer'

import testImg from '../images/test-prodotto.jpg'

const Carrello = () => {
  let { updateCart, totalPrice, productsInCart, setProductsInCart, calculateTotalPrice } = useContext(CartContext)

  useEffect(() => {
    if (!productsInCart) {
      setProductsInCart(productsInCart = [])
    }
    productsInCart.forEach(product => {
      document.getElementById(product._id).value = product.boughtQuantity
    })
    calculateTotalPrice()
  }, [productsInCart, totalPrice])

  const removeProduct = product => {
    const updateArray = productsInCart.filter(element => {
      return element._id !== product._id
    })
    setProductsInCart(updateArray)
  }

  const increaseQuantity = (product) => {
    const updateArray = productsInCart.filter(element => {
      if (element._id == product._id) {
        return element.boughtQuantity++
      } else {
        return element._id !== product._id
      }
    })
    setProductsInCart(updateArray)
  }

  const decreaseQuantity = (product) => {
    const updateArray = productsInCart.filter(element => {
      // Ideally this should be <= 0, problem with callback apparently.
      if (product.boughtQuantity <= 1) {
        return element._id !== product._id
      }
      if (element._id == product._id) {
        console.log(element.boughtQuantity, 'bought')
        return element.boughtQuantity--
      } else {
        return element._id !== product._id
      }
    })
    setProductsInCart(updateArray)
  }

  const exceedQuantity = singleProduct => {
    if (document.getElementById(singleProduct._id).value > singleProduct.effectiveStock) {
      document.getElementById('checkout-btn').disabled = true
      document.getElementById(`${singleProduct._id}-msg`).innerHTML = `Sono rimaste ${singleProduct.effectiveStock} unità di questo prodotto`
    } else {
      document.getElementById('checkout-btn').disabled = false
      document.getElementById(`${singleProduct._id}-msg`).innerHTML = ''
    }
  }

  const inputUpdate = (product) => {
    updateCart(product, document.getElementById(product._id).value)
    exceedQuantity(product)
  }

  return (

    <div>
      <style jsx>{`
          .values {
              margin-top: 140px;
              padding: 40px 10px 60px;
              background-color: #8c2b2f;
              text-align: center;
          }
          .link-btn{
            color: rgb(140, 43, 47);
            font-weight: 500 !important;
            display: block
            margin-left: 5vw;
          }
          button {
            background-color: #8c2b2f;;
            color: #fff;
            border-radius: 4px;
            border: 1px solid #8c2b2f;;
            cursor: pointer;
            height: 40px;
            width: 225px;
            margin-top: 30px;
            letter-spacing: 0.2px;
            box-shadow: 0px 4px 10px 0 rgba(0,0,0,0.3);
          }
          .block{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }
          form {
            margin: 40px 85px;
          }
          .values h2  {
              color: #fff
          } 
          .values h3{
              color: #fff !important;
              font-weight: 600
          }
          p {
              font-weight: 300;
            letter-spacing: 0.2px;
            line-height: 26px;
            margin: auto;
            color: #333;
          }
          .price{
            width: 300px;
          }
          .name{
            width: 70% !important;
            font-weight: 700;
          }
          label {
            color: #555;
          }
          .shipping {
            margin: 60px 0
          }
          .shipping p:nth-child(3){
            font-size: 14px;
            margin-top: 20px
          }
          @media(min-width:901px){
              .values {
                  padding: 60px 80px 80px;
                  margin: 120px 85px 0;
                  border-radius: 4px;
                  margin-bottom: 40px;
                  box-shadow: 0px 5px 15px 5px rgba(0,0,0,0.4)
              }
              .container{
                margin: 40px 85px 120px;
              }
              .product-page-container .img-container {
            width: 20%
          }
          .product-page-container .product-container {
            display: flex;
            margin-bottom: 120px
            padding: 10px;
            width: 80%;
          }
          }
          .input-box{
            width:49%;
          }
          input, select {
            width: 100%;
            padding: 12px 20px;
            margin: 8px 0;
            display: inline-block;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
          }
          .product-page-container {
            padding: var(--container-padding)
          }
          .product-page-container img {
            display: block;
            margin: 0 auto;
            width: 120px;
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
          #add-to-cart-btn:hover {
           box-shadow: 0px 6px 15px 0 rgba(0,0,0,0.3);
           color: #f7f7f7
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
            padding-left: 15px;
            width: 100px;
            margin: auto;
          }
          ml-3{
            margin left:20px;
          }
          
          .close {
              position: relative;
              width: 25px;
             height: 20px;
             display: inline-block;
             border-radius: 50%;
             border: 1px solid #999;
             color: #fff;
             right: 30px;
              top: 20px;
             text-align: center;
          }
          .close:hover {
           color: #999;
             border: 1px solid #888;
             cursor: pointer
          }
          .plus {
            position: relative;
            position: relative;
            right: 77px;
            width: 22px;
            height: 22px;
            display: inline-block;
            border-radius: 50%;
            border: 1px solid #999;
            color: #999;
            background-color: #f7f7f7;
            text-align: center;
          }
          .plus:hover {
          color: #222;
            border: 1px solid #2222;
            cursor: pointer
          }
          
          .minus {
            width: 25px;
             height: 22px;
             display: inline-block;
             border-radius: 50%;
             border: 1px solid #999;
             color: #999;
             text-align: center;
             position: relative;
            right: 55px;
            top: 35px;
            background-color: #f7f7f7
          } 
          .minus:hover {
            color: #222;
            border: 1px solid #2222;
            cursor: pointer
        }
          .overflow{
            overflow-x: scroll;
            display: inline-flex;
            padding: 10px;
          }
          .producto{
            display: inline-flex;
            padding: 10px;
            width: 100%;
            border-bottom: 0.5px solid rgb(140 43 47 / 16%);
            
          }
          .producto div{
            margin-right: 10px;
            padding: 30px 0;
          }
          .total {
            margin-bottom: 80px;
            text-align: center
          }
          
           .minus {
             width: 25px;
             height: 22px;
             display: inline-block;
             border-radius: 50%;
             border: 1px solid #999;
             color: #999;
             background-color: #f7f7f7
             text-align: center;
             position: relative;
            right: 55px;
            top: 35px;
          } 
          .minus:hover {
             color: #222;
             border: 1px solid #222;
             cursor: pointer
         }

         @media only screen and (max-width: 900px) and (min-width: 500px) {
          .close {
             right: -173px !important;
          }
           }

           @media only screen and (max-width: 385px) {
          .close {
             right: 0px !important;
             top: -155px !important;
          }
          .name {
             width: 60% !important;
          }
           }
   
          @media only screen and (max-width: 900px) {
            .input-box{
              width:100%;
            }
            .price {
              margin-top: 10px
            }
            p{
              margin: 0;
            }
            form {
              margin: 40px 10px;
            }
            .unita{
              display:none
            }
            .close {
              position: relative;
              width: 20px;
             height: 20px;
             display: inline-block;
             border-radius: 50%;
             border: 1px solid #fff;
             color: #fff;
             right: -73px;
            top: -133px;
             text-align: center;
          }
          .close:hover {
           color: #999;
             border: 1px solid #888;
             cursor: pointer
          }
          .plus {
            position: relative;
            position: relative;
            width: 22px;
            height: 22px;
            right: 75px;
            top: -1px;
            display: inline-block;
            border-radius: 50%;
            border: 1px solid #999;
            background-color: #f7f7f7 !important;
            color: #999;
            text-align: center;
          }
          .plus:hover {
          color: #222;
            border: 1px solid #222;
            cursor: pointer
          }
          
          .minus {
            width: 22px;
             height: 22px;
             display: inline-block;
             border-radius: 50%;
             border: 1px solid #999;
             color: #999;
             text-align: center;
             position: relative;
             right: 120px;
             top: -1px;
          } 
          .minus:hover {
            color: #999;
            border: 1px solid #888;
            cursor: pointer;
        }
          }
          
          `}
      </style>
      <div>
        <div className='values'>
          <h2>Carrello</h2>
        </div>
        <div className='container'>
          <div className='product-page-container'>
            <div className=''>
              {productsInCart && productsInCart.map(product => {
                return (
                  <div className='producto' key={product._id}>
                    <div className='img-container'>
                      <img src={testImg} width='300px' />
                    </div>
                    <div className='product-container'>
                      <Link href='/prodotto/[id]' as={`/prodotto/${encodeURIComponent(product._id)}`}>
                        <p className='name'>{product.name}</p>
                      </Link>
                      <p className='price'><strong>Prezzo: </strong>{product.price}€ </p>
                      <p className='unita'><strong>Unità:</strong></p>
                      <input onChange={() => inputUpdate(product)} type='number' id={product._id} min='1' />
                      <button className='minus' onClick={() => decreaseQuantity(product)}>-</button>
                      <button
                        className='plus'
                        onClick={() => increaseQuantity(product)}
                      >+
                      </button>
                      <button
                        className='close'
                        onClick={() => removeProduct(product)}
                      >x
                      </button>
                      {<p id={`${product._id}-msg`} />}
                      <p
                        className='price'
                      ><strong>Subtotale: </strong>€ {product.price * product.boughtQuantity}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
            {productsInCart.length > 0 &&
              <div className='shipping'>
                <h3>Spedizione</h3>
                {totalPrice > 39.00 ? <p>Spedizione Gratuita</p> : <p>Costo Spedizione: 4.90€</p>}
                <p>Spedizione gratuita oltre i 39€ di spesa.</p>
              </div>}
            {productsInCart.length > 0
              ? <div className='total'>
                <h2 className='ml-3'>Prezzo Totale: {totalPrice}€</h2>
                <Link href='/checkout'><button id='checkout-btn'>Concludi ordine</button></Link>
                </div>
              : <p>Non ci sono prodotti nel carrello <Link href='/'>Ritorna alla home</Link></p>}
          </div>

        </div>

      </div>
      <Footer />
    </div>

  )
}
export default Carrello

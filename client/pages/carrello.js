import { useContext, useEffect } from 'react'
import { CartContext } from '../contexts/CartContext'
import Link from 'next/link'

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
    console.log(productsInCart)
  }, [productsInCart, totalPrice])

  const removeProduct = product => {
    const updateArray = productsInCart.filter(element => {
      return element._id !== product._id
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
            width: 180px;
            margin-top: 30px;
            letter-spacing: 0.2px;
            box-shadow: 0px 4px 10px 0 rgba(0,0,0,0.3);
          }

          button .x {
            background-color: #8c2b2f;;
            color: #fff;
            border-radius: 4px;
            border: 1px solid #8c2b2f;;
            cursor: pointer;
            height: 40px;
            width: 180px;
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
            margin: 30px 0;
            color: #333;
          }
          
          .name{
            width: 70% !important;
            font-weight: 700;
          }

          label {
            color: #555;
          }
          @media(min-width:968px){
              .values {
                  padding: 60px 80px 80px;
                  margin: 120px 85px;
                  border-radius: 4px;
                  margin-bottom: 40px;
                  box-shadow: 0px 5px 15px 5px rgba(0,0,0,0.4)
              }
              .container{
                padding: 60px 80px 80px;
                margin: 120px 85px;
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
          }

          ml-3{
            margin left:20px;
          }
          
          .plus {
              position: relative;
              right: 142px;
              width: 25px;
             height: 25px;
             display: inline-block;
             border-radius: 50%;
             border: 1px solid #999;
             color: #fff;
             text-align: center;
             top: -100px;
             right: -50px;
          }
          .plus:hover {
           color: #888;
             border: 1px solid #888;
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
            width: 90%;
          }

          .total{
            position: relative;
            left: 50px;
            top: 120px;
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

   
         @media(min-width: 968px){
           .product-page-container {
            display:flex;
          }

          .product-page-container .img-container {
            width: 40%
          }
          .product-page-container .product-container {
            width: 35vw;
            margin-bottom: 120px
            padding: 10px;
          }
         }

          @media only screen and (max-width: 868px) {
            .input-box{
              width:100%;
            }
            form {
              margin: 40px 10px;
            }
          }
          `}
        </style>
        <div className="values">
          <h2>Carrello</h2>
        </div>
        <div className="container">
          <div className="product-page-container">
            <div className="overflow">
              {productsInCart && productsInCart.map(product => {
                return (
                  <div className="producto" key={product._id}>
                      <div className="img-container">
                          <img src={testImg} width="300px"></img>
                      </div>
                      <div className="product-container">
                      <Link href='/prodotto/[id]' as={`/prodotto/${encodeURIComponent(product._id)}`}>
                        <p className="name">{product.name}</p>
                      </Link>
                      <p><strong>Prezzo: </strong>€ {product.price}</p>
                      <p><strong>Subtotale: </strong>€ {product.price * product.boughtQuantity}</p>
                      <p><input onChange={() => inputUpdate(product)} type='number' id={product._id} min='1' /></p>
                      <button className="plus" 
                        onClick={() => removeProduct(product)}>x
                      </button>
                        {<p id={`${product._id}-msg`} />}
                      </div>
                    </div>
                  )
                })}
            </div>
                {totalPrice >= 1
                  ? <div className="total">
                    <h2 className="ml-3">Total price: {totalPrice}</h2>
                    <Link href='/checkout'><button id='checkout-btn'>Concludi ordine</button></Link>
                    </div>
                  : <p>Non ci sono prodotti nel carrello <Link href='/'>Ritorna alla home</Link></p>}
              </div>

        </div>
      </div>
      
  )
}
export default Carrello

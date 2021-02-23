import React from 'react'
import App from 'next/app'
import Layout from '../components/layout'
import UserContextProvider from '../contexts/UserContext'
import CartContextProvider from '../contexts/CartContext'
import ProductContextProvider from '../contexts/ProductContext'

class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <UserContextProvider>
        <CartContextProvider>
          <ProductContextProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ProductContextProvider>
        </CartContextProvider>
        <style jsx global>{`
                html,
                body {
                  padding: 0;
                  margin: 0;
                  font-family: 'Poppins', sans-serif;
                  overflow-x: hidden;
                  overscroll-behavior: none;
                  scroll-behavior: smooth;
                }

                :root {
                --main-color: #8c2b2f;
                --container-padding: 40px 10px 60px;
                  }

                h1, h2, h3 {
                  color: #222
                }

                p {
                  color: #777
                }

                ul {
                    list-style: none;
                }

                a {
                  text-decoration: none
                }

                button:focus,
                input:focus {
                  outline:0;
                  }

             

                strong {
                  color: #222;
                  font-weight: 400
                }

                .overtitle {
                  color: #777;
                  letter-spacing: 0.6px;
                  position: relative;
                  top: 15px;
                  font-weight: 300
                }
              
                .divider-red {
                    height: 3px;
                    width: 120px;
                    background-color: #8c2b2f;
                    margin-bottom: 30px
                }
                .divider-grey {
                    height: 3px;
                    width: 120px;
                    background-color: #f7f7f7;
                    margin-bottom: 30px
                }
                .divider-dark-grey {
                    height: 3px;
                    width: 120px;
                    background-color: #777;
                    margin-bottom: 30px
                }

                .description-section {
                  margin-bottom:40px
                }
               
                * {
                  box-sizing: border-box;
                }


                {/* INPUT STYLING */}
                          

                .input-wrapper {
                   display: flex;
                   margin-bottom: 20px;
               }
               
               .input-wrapper div:nth-child(2) {
                   position: relative;
                   left: 10px;
                   font-weight: 400;
                   color: #777;
                   font-size: 16px;
               }
               
               .switch {
                   position: relative;
                   display: inline-block;
               }
               
               .switch-input {
                   display: none;
               }
               
               .switch-label {
                   display: block;
                   width: 48px;
                   height: 24px;
                   text-indent: -150%;
                   clip: rect(0 0 0 0);
                   color: transparent;
                   user-select: none;
               }
               
               .switch-label::before, .switch-label::after {
                   content: "";
                   display: block;
                   position: absolute;
                   cursor: pointer;
               }
               
               .switch-label::before {
                   width: 100%;
                   height: 25px;
                   background-color: #dedede;
                   border-radius: 9999em;
                   -webkit-transition: background-color 0.25s ease;
                   transition: background-color 0.25s ease;
               }
               
               .switch-label::after {
                   top: 0;
                   left: 0;
                   width: 24px;
                   height: 24px;
                   border-radius: 50%;
                   background-color: #fff;
                   box-shadow: 0 0 2px rgba(0, 0, 0, 0.45);
                   -webkit-transition: left 0.25s ease;
                   transition: left 0.25s ease;
               }
               
               .switch-input:checked+.switch-label::before {
                   background-color: var(--main-color);
               }
               
               .switch-input:checked+.switch-label::after {
                   left: 24px;
               }


               .category-name {
               font-size: 14px;
               position: relative;
               bottom: 12px;
               white-space: nowrap
             }

               
               .wrapper-categories {
                 padding: 0 10px;
                 position: relative;
                 top: 40px
               }

                .total-filtered-products {
                  padding: 30px 10px 60px;
                  font-size: 14px
                 } 

               

               ::-webkit-scrollbar {
                       width: 0px;
                       background: transparent; /* make scrollbar transparent */
                   }
                                  
               
               @media only screen and (min-width: 600px) {

               
                  :root {
                   --container-padding: 60px 80px 80px;
                   --container-margin: 120px 85px;
                   }
                   
                   .overtitle {
                   font-size: 18px;
                   top: 20px;
                   }
                   .title-section {
                   font-size: 28px;
                   }
                   .description-section {
                   width: 50%;
                   margin: 0 auto 40px;
                   } 
            
                }
            `}
        </style>
      </UserContextProvider>
    )
  }
}

export default MyApp

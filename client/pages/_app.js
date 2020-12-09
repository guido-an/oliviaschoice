import React from 'react'
import App from 'next/app'
import Layout from '../components/Layout'
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

                .description-section {
                  margin-bottom:40px
                }
               
                * {
                  box-sizing: border-box;
                }

                @media(min-width: 968px){
                  .overtitle {
                  font-size: 18px;
                  top: 20px
                }
                .title-section {
                  font-size: 28px
                }
                .description-section {
                  width: 50%;
                  margin: 0 auto 40px
                }
                }
            `}
        </style>
      </UserContextProvider>
    )
  }
}

export default MyApp

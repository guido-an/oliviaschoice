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

                a {
                  text-decoration: none
                }
               
                * {
                  box-sizing: border-box;
                }
            `}
        </style>
      </UserContextProvider>
    )
  }
}

export default MyApp

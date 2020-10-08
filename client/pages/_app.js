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
      </UserContextProvider>
    )
  }
}

export default MyApp

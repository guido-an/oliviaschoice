import React from 'react'
import App from 'next/app'
import Layout from '../components/Layout'
import UserContextProvider from '../contexts/UserContext'

class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <UserContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserContextProvider>
    )
  }
}

export default MyApp

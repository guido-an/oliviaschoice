import React, { useContext } from 'react'

const Index = () => {
  return (
    <div>
      <h1>Welcome to Next Application</h1>
      <a href={`${process.env.APP_API}/auth/logout`}>Logout</a>
    </div>
  )
}
export default Index

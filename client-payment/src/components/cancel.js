import React from 'react'
import Header from './header'

const Cancel = () => {
  return (
    <div>
      <Header/>
      <h1 style={{color:"black",marginTop:"5%"}}>payment Failure</h1>
      <p>Your payment was not successful. Please try again.</p>

    </div>
  )
}

export default Cancel

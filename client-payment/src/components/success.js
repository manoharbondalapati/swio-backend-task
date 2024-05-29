import React from 'react'
import Header from './header'

const Success = () => {
  return (
    <div >
      <Header/>
      <h1 style={{color:"black",marginTop:"5%"}}> Payment success</h1>
      <p>Thank you for your payment.</p>
    </div>
  );
};

export default Success

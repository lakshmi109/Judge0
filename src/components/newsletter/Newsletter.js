import React from 'react'
import './newsletter.css'

const Newsletter = () => {
  return (
    <>
    <div className='newsl-main-container'>
      <div className='newsl-container'>
        <h1>Join our mailing list</h1>
        <form action="">
          <input type="text" placeholder='Email address'/>
        </form>
        <p>By joining to our newsletter you're agreeing to our <span>Terms and Conditions</span></p>
      </div>
      <img id="plane" src="/images/plane2.webp" alt="" />
    </div>
    </>

  )
}

export default Newsletter
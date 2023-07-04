import React, {Fragment} from 'react'
import './product.css'

const Product = () => {
  return (
    <>
      <div className="main-heading-container">
        <h1>Judge0</h1>
      </div>
      <div className="main-subheading-container">
        <h2>More than <span className='number-highl'>39042894</span> codes run with us</h2>
      </div>
        
      <div className="product-main-container">
        <h1>Products</h1>
        <div className="product-subcontainer">
          {/* <img className="blob" src="/images/blob1.png" alt="" /> */}
          <img src="/images/sample.png" alt="sample" />
          <div className="product-text-container">
            <h2>Judge0</h2>
            <p>Robust, scalable, and <span className='highl-prod-text'>open-source</span> online code execution system
that can be used to build a wide range of applications that need
online code execution features. Some examples include
competitive programming platforms, e-learning platforms,
candidate assessment and recruitment platforms, online code
editors, online IDEs, and many more.</p>
            <ul>
              <li>Quick and easy installation</li>
              <li>Rich and verbose <span className='highl-prod-text'>API documentation</span></li>
              <li>Scalable architecture</li>
              <li>Sandboxed compilation and execution</li>
              <li>Support for <span className='highl-prod-text'>60+ languages</span></li>
              <li>Support for additional files alongside the user's program</li>
              <li>Support for custom user-defined compiler options, command-line arguments, and time and memory limits</li>
              <li>Detailed execution results</li>
              <li>Webhooks (HTTP callbacks)</li>
            </ul>
            <div className="prod-button-container">
              <button>Read the research paper</button>
              <button>Get started</button>
            </div>
          </div>
        </div>
        <div className="product-subcontainer">
          <div className="product-text-container">
            <h2>Judge0 IDE</h2>
            <p>Free and <span className='highl-prod-text'>open-source</span> online code editor that allows you to write
and execute code from a rich set of languages. It's perfect for
anybody who just wants to quickly write and run some code
without opening a full-featured IDE on their computer. Moreover, it
is also useful for teaching and learning or just trying out a new
language.</p>
            <div className="prod-button-container">
              <button>Get started</button>
            </div>
          </div>
          <img src="/images/sample.png" alt="sample" />
        </div>
      </div>
    </>
  )
}

export default Product;
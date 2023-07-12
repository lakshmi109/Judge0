import React, { Component } from 'react'
import './footer.css'
export default class Footer extends Component {
  render() {
    return (
        <div className="footer-grid">
            <p className='logo'>LOGO</p>
            <div className="footer-content-grid">
                <ul className='list'>
                    <li className='list-title'>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li className='socials'>logo@gmail.com</li>
                </ul>
                <ul className='list'>
                    <li className='list-title'>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                </ul>
                <ul className='list'>
                    <li className='list-title'>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                </ul>
            </div>
        </div>
    )
  }
}

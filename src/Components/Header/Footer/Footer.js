import React from 'react'
import './Footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {AiFillYoutube} from 'react-icons/ai'



const Footer = () => {
  return (
    <div className='F-container'>
        <div className="footer">
        <div className="menu">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Preformer</li>
                <li>Event schedule</li>
                <li>Blog</li>
            </ul>
          </div>
          <div className="icon">
          <div className="f-icon">
          <a href="http://">  <FaFacebook /></a>
          <a href="http://">  <FaLinkedin /></a>
          <a href="http://">  <FaTwitter /></a>
          <a href="http://">  <AiFillYoutube /></a>
          </div>
            
          </div>

          {/* <div className="f-text">
            <span>Made By : Ali Salama </span>
          </div> */}
        </div>
    </div>
  )
}

export default Footer
import React from 'react'
import Headimage from '../img/MuzicLogo.png'
import CenterMenu from './CenterMenu'
import './Header.css'
const Header = () => {
  return (
    <div className="container">
    <div className='header'>
        <img src={Headimage} alt="" />
        <CenterMenu />
        <span>asd</span>
    <div className="buttons">
        <button type="button">ali</button>
        <button >Sign up</button>
        <button>Login</button>
    </div>
    </div>
    </div>
  )
}

export default Header
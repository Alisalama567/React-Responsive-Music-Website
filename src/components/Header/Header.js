import React, { useState } from 'react'
import './Header.css'
import headimage from '../../img/MuzicLogo.png'
import { FaBars } from "react-icons/fa";
const Header = () => {
  const [showbar , setshowbar ]=useState(false)
  const toggleMenu=()=>{
    setshowbar ((showbar)=>!showbar)
  } 
  return (
    <div className='container'>
        <div className="header">
          <img src={headimage} alt="" srcset="" />
          <div className="Bars" onClick={toggleMenu}>
        <FaBars />
      </div>
          <div className="menus"  style={{display :showbar? 'inherit':'none'}} >
            <ul className='menu'>
                <li >Home</li>
                <li>About</li>
                <li>Preformer</li>
                <li>Event schedule</li>
                <li>Blog</li>
                
            </ul>
          </div>
          <div className="btns" >
            <button className='btn' >Sign up</button>
            <button className='btn'>Login</button>
          </div>
        </div>
    </div>
  )
}

export default Header

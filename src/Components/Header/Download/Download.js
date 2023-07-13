import React from 'react'
import './Download.css'
import path1 from '../../../img/Path 318.png'
import APPe from '../../../img/App Store.png'
import Google from '../../../img/Google Play.png'

const Download = () => {
  return (
    <div className='d-container'>
        <div className="download">
            <img src={path1} alt="" />
             <span>Download The Best Music</span>
             <span>App Now!</span>
             <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique rem temporibus inventore
              perspiciatis quos magni possimus .</span>
             <div className="d-ima">
             <img src={Google} alt="" />
             <img src={APPe} alt="" />
             </div>
            

        </div>
    </div>
  )
}

export default Download
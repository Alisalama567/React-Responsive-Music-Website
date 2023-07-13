import React, { useState } from 'react'
import './Experience.css'
import path1 from '../../../img/Path 318.png'
import path2 from '../../../img/Group 2.png'
import path3 from '../../../img/Group 4.png'
import path4 from '../../../img/music icon.png'
import VisibilitySensor from 'react-visibility-sensor'
import {motion} from 'framer-motion'
const Experience = () => {
  const [elementIsvisabil , SetelementIsvisabil]=useState(false)
  const pa={
    true:{
      transform : 'scale(0.5)'
    },
    false:{
      transform : 'scale(1)'

    }
  }
  return (
    <VisibilitySensor
        onChange={(isvisable)=>SetelementIsvisabil(isvisable)}
    >
    <div className='container1'>
    <div className='title'> 
    <img src={path1} alt="" srcset="" />
    <span>An Amazing App Can Change Your Daily Life</span>
    <span>Music Experience</span>
    </div>
    <div className="music">
    <div className="mus1">
        <motion.img
        variants={pa}
        transition={{duration: 1 , type:'ease-out'}}
        animate={`${elementIsvisabil}`}
         src={path2} alt="" srcset="" />
        <span>For Live Music</span>
        <span>Lorem ipsum, dolor sit amet <br/>consectetur adipisicing elit. Rem laudantium numquam<br/> aspernatur ut tempora veritatis?</span>
        <a href="http://">Learn More</a>
    </div>
    
    <div className="mus1">
        <motion.img
        variants={pa}
        animate={`${elementIsvisabil}`}
        transition={{duration: 1 , type:'ease-out'}}
         src={path4} alt="" srcset="" />
        <span>For Deliy Music</span>
        <span>Lorem ipsum, dolor sit amet <br/>consectetur adipisicing elit. Rem laudantium numquam<br/> aspernatur ut tempora veritatis?</span>
        <a href="http://">Learn More</a>
    </div>
    <div className="mus1">
        <motion.img
        variants={pa}
        animate={`${elementIsvisabil}`}
        transition={{duration: 1 , type:'ease-out'}}
         src={path3} alt="" srcset="" />
        <span>For Artist</span>
        <span>Lorem ipsum, dolor sit amet <br/>consectetur adipisicing elit. Rem laudantium numquam<br/> aspernatur ut tempora veritatis?</span>
        <a href="http://">Learn More</a>
    </div>
    </div>
    </div>
    </VisibilitySensor>
  )
}

export default Experience
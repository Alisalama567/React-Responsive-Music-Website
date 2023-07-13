import React, { useState } from 'react'
import './Search.css'
import D1 from '../../../img/d1.png'
import D2 from '../../../img/d2.png'
import D3 from '../../../img/d3.png'
import D4 from '../../../img/d4.png'
import Background from '../../../img/backgraphics.png'
import search from '../../../img/search.png'
import path from '../../../img/Path 318.png'
import { AiFillStepForward } from 'react-icons/ai';
import { AiFillStepBackward } from 'react-icons/ai';
import {AiOutlinePauseCircle} from 'react-icons/ai';
import mask from '../../../img/Mask Group 23.png'
import g2 from '../../../img/Group 9.png'
import VisibilitySensor from 'react-visibility-sensor'
import {motion} from 'framer-motion'

const Search = () => {
  const [elementIsvisabil , SetelementIsvisabil]=useState(false)
  const d3={
    true :{
        left : '11rem'
    },
    false:{
      left : '14rem'
    }
  }
  const d4={
    true :{
      left : '3rem'
    },
    false:{
       left : '-1rem'
    }
  }
  const d5={
    true :{
      left : '-61rem'
    },
    false:{
       left : '-35rem'
    }
  }

  return (
    <VisibilitySensor
    onChange ={(isvisabile)=>SetelementIsvisabil(isvisabile)}
     >
    <div className='s-container'>
    <div className="search">
        <div className="s-left">
            <img src={D1} alt="" srcset="" />
            <img src={D2} alt="" srcset="" />
            <motion.img 
            variants={d3}
            animate={`${elementIsvisabil}`}
             transition={{duration: 2 , type:'ease-out'}}
            src={D3} alt="" srcset="" />
            <motion.img
             variants={d4}
            animate={`${elementIsvisabil}`}
             transition={{duration: 2 , type:'ease-out'}}
             src={D4} alt="" srcset="" />
            <motion.img
             variants={d5}
            animate={`${elementIsvisabil}`}
             transition={{duration: 2 , type:'ease-out'}}
             src={Background} alt="" srcset="" />

        </div>
        <div className="s-right">
        <div className="search1">
        <input type="text" placeholder='Enter Keyword or Url'/>
        <img src={search} alt="" srcset="" />
        </div>
        <div className="text">
            <img src={path}  alt="" srcset="" />
            <span>Search Music by</span>
            <span>Name Or Direct URl</span>
            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Doloribus ullam  Doloribus ullam  Doloribus ullam </span>
        </div>
        <div className="musicc">
        <div className="m-text">
        <div className="t-image">
            <img src={mask}  alt="" srcset="" />
        </div>
        <div className='m-text1'>
        <span>Ali Music</span>
        <span>unknown Artisi</span>
        </div>
        </div>
        <div className="m-control">
        <span> 2 : 30</span>
        <img src={g2} alt="" srcset="" />
        <span> 4 : 30</span>
        <AiFillStepBackward/>
        <AiOutlinePauseCircle/>
        <AiFillStepForward />

        </div>
        
        </div>
        </div>
    </div>
    </div>
    </VisibilitySensor>
  )
}

export default Search
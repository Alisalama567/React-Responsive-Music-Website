import React, { useState } from 'react'
import './Hero.css'
import phoneimge from '../../../img/p 1.png'
import p2 from '../../../img/p 2.png'
import p3 from '../../../img/p 3.png'
import p4 from '../../../img/p 4.png'
import background from '../../../img/backgraphics.png'
import Google from '../../../img/Google Play.png'
import app from '../../../img/App Store.png'
import VisibilitySensor from 'react-visibility-sensor'
import {motion} from 'framer-motion'
const Hero = () => {
    const [elementIsvisabil , SetelementIsvisabil]=useState(false)
    const bg = {
        true :{
            left : '6%'
        },
        false :{
          left : '27%'
        }
    }
    const p2g={
        true :{
            left : '0'
        },
        false :{
          left : '-3rem'
        }
    }
    const p3g={
        true :{
            left : '-1rem'
        },
        false :{
          left : '-5rem'
        }
    }
    const p4g={
        true :{
            left : '0'
        },
        false :{
          left : '-16rem'
        }
    }
  return (
    <VisibilitySensor
    onChange={(isvisable)=>SetelementIsvisabil(isvisable)}
    minTopValue={300}
    >
    <div className='container' id='hero'>
        <div className="h-left">
            <div className="text">
                <span>Experience The</span>
                <span>Best Qulaity Music</span>
                <p>
                Donec laoreet nec velit vitae aliquam. Ut quis tincidunt purus.
            <br />
            Suspendisse in leo non risus tincidunt lobortis.
                </p>
            </div>
            
            <div className="h-right">
                <div className="image" >
                    <img 
                     src={phoneimge} alt="" srcset="" />
                    <motion.img
                    variants={bg}
                    animate={`${elementIsvisabil}`}
                    transition={{duration: 3 , type:'ease-out'}}
                     src={p2} alt="" srcset="" />
                    <motion.img
                    variants={p2g}
                    animate={`${elementIsvisabil}`}
                    transition={{duration: 3 , type:'ease-out'}}
                     src={p3} alt="" srcset="" />
                    <motion.img 
                    variants={p3g}
                    animate={`${elementIsvisabil}`}
                    transition={{duration: 3 , type:'ease-out'}}
                    src={p4} alt="" srcset="" />
                    <motion.img
                    variants={p4g}
                    animate={`${elementIsvisabil}`}
                    transition={{duration: 3 , type:'ease-out'}}
                     src={background} alt="" srcset="" />

                </div>
                
            </div>
        </div>
        <div className="text2">
        <span>Download now on IOS and Android</span>
            <div className="image1">
            <a href="https://play.google.com/store/search?q=music&c=apps&hl=ar&gl=US">
            <img src={Google} alt="" srcset="" />
            </a>
            <a href="https://www.apple.com/eg-ar/apple-music/">
            <img src={app} alt="" srcset="" />
            </a>

        </div>
        </div>
        
    </div>
    </VisibilitySensor>
  )
}

export default Hero
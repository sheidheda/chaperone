import React from 'react'

import "./Joggers.css"

import Slider2 from './Slider2';
import {motion} from 'framer-motion'



function Joggers() {
 
  return (
    <motion.div 
    initial ={{scaleX: 0}}
    animate={{scaleX: 1}}
    exit={{scaleX: 0}}
    className='joggers'
    transition={{duration: 0.5}}
    >
       <Slider2 />
    
    </motion.div>
  )
}

export default Joggers
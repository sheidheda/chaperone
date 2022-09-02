import React from 'react'
import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import './Slider2.css'
import Images from '../data/Shop/Slider2Data'

function Slider2() {
    const [width, setWidth] = useState(0);
    const carousel = useRef()

    useEffect(() => {
      
     console.log(carousel.current.scrollWidth, carousel.current.offsetWidth)
     setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth )
    }, [])
    

  return (
    <div className='Slider2'>
         <motion.div ref={carousel} className='carousel'>
            <motion.div
             drag = 'x' 
             className='inner-carousel'
             dragConstraints={{right: 0, left: -width}}
             whileTap={{cursor: "grabbing"}}
             >
                {Images.map(item => {
                    return(
                        <motion.div className='baba'>

                            <img src={item.image} alt=""  />
                            <motion.div 
                            className='title-wrap'
                            >
                                <motion.h2 className='title'>
                                    {item.title}
                                </motion.h2>
                            </motion.div>

                        </motion.div>

                    )
                })}
            </motion.div>
         </motion.div>
        
    </div>
  )
}

export default Slider2

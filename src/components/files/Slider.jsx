 import React, { useState } from 'react'
 import SliderData from '../data/Shop/SliderData'
 import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
 import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
 import './Slider.css'



 function Slider() {
    
   const [current, setCurrent] = useState(0) 
   const length = SliderData.length
 
  const nextSlide = () => {
    setCurrent(current === length - 1? 0 : current + 1)
  };
  const prevSlide = () => {
    setCurrent(current === 0? length - 1 : current - 1)
  };
 
   if (!Array.isArray(SliderData) || SliderData.length <= 0 ) {
        return null
    }

   return (
     <div className='slider'>
        <ArrowBackIosIcon  className='left-arrow' onClick = {prevSlide} />
        <ArrowForwardIosIcon
         
         className='right-arrow' onClick = {nextSlide} />
         {SliderData.map((slide, index)=> {
           
           return (
            <div className={index === current ? "slide active" : 'slide'} 
            key ={index}
            >
                {index === current && (
                <div className='slidecc'>
                  <img src={slide.image} className = " myImg" alt=""/>
                  <div className="title-wrap">
                                <h2 className='title'>
                                    {slide.title}
                                </h2>
                  </div>
                </div>
                ) }
                
            </div>
                
            )
         })}
       
     </div>
   )
 }
 
 export default Slider
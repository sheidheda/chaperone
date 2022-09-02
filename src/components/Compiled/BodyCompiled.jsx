import React from 'react'
import Body from '../Landing/Body'
import Footer from '../Landing/Footer'
import Navbar from '../Landing/Navbar'
import data from "../data/Bodydata"

function Compiled() {
  const cards = data.map(item => {
    return (
        <Body
            key={item.id}
            {...item}
            
        />
    )
})
       
    return (
    
        <div>
        
          
          {cards}
    
          
          
        </div>
       
      
    )
  
}

export default Compiled
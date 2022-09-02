import React from 'react'
import Shop from '../files/Shop'
import bespokeData from "../data/Shop/BespokeData"
import senatorData from '../data/Shop/SenatorData'
import './ShopCompiled.css'


function ShopCompiled() {

    const bespoke = bespokeData.map(item => {
        return (
            <div >
                <Shop
                    key={item.id}
                    {...item}  
                />
                
            </div>
            
    
        )
    })

    const senator = senatorData.map(item => {
        return (
            <div >
                <Shop
                    key={item.id}
                    {...item}  
                />
                
            </div>
            
    
        )
    })


  return (
    <div className="ShopCompiled">
        <h2>BESPOKE WEARS</h2>
        <div className='shopItems'>
            {bespoke} 
        </div>
        <h2>SENATOR</h2>
        <div className='shopItems'>
            {senator} 
        </div>
    </div>
    
  )
}

export default ShopCompiled
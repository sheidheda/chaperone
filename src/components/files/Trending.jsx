import React from 'react'
import Slider from './Slider'
import Slider2 from './Slider2'
import {motion} from 'framer-motion'
import './Trending.css'
import { Button } from '@mui/material'
import Feedback from './Feedback'
import data from '../data/shop/FeedbackData'
import { Link } from 'react-router-dom'

function Trending() {
   const buttonSX = {
    bgcolor: 'goldenrod', 
    width: '200PX', 
    marginTop: '20px',
    marginBottom: '10px',
    marginLeft: '100px',
    padding: '20px',
    borderRadius: '40px',
    "&:hover": {
      bgcolor: 'rgb(196, 146, 22)',
    },
  };

  const feeds = data.map(item => {
    return (
        <Feedback
            key={item.id}
            {...item}
            
        />
    )
})

  return (
  
    <motion.div 
    className='trending'
    initial ={{scaleX: 0}}
    animate={{scaleX: 1}}
    exit={{scaleX:0}}
    transition={{duration: 0.5}}
    
    >
      <motion.div className='imgWrapper'>
        <motion.div className='discoverMore'>
            <p>CUSTOM <br />	&nbsp; WEARS</p>
            <Button
            sx={buttonSX}
            variant='contained'
             >
              DISCOVER MORE 
            </Button>
        </motion.div>
      </motion.div>
      <h1>All Custom Made Products</h1>
      <div className='sl2'>
        <Slider2 />
      </div>
      <Slider />
      <div className="where-trib">
      <h1 id='tribb'>Where Tribal Culture meets Craftmanship</h1>
      <hr />
      <p id='approach'>Our approach to fashion brings together the convenience of online shopping and the experience of having clothes custom made. This allows us to offer you a great product at the best price through a touchless experience.
      </p>
      </div>
      
      <h1 id='sat'>Over 8,000 Satisfied Customers</h1>
      
      <div className="feed">
        {feeds}
      </div>
      <div className="aboutUs">
        <img src="/images/logo4.png" alt="n" className='needu'/>
        <h6>About Chaperone Wears</h6>
        <p>Founded in 2020, Chaperone is the e-commerce leader in <strong>custom suits</strong>  and <strong>custom ankara wears</strong> , as we offer our customers complete freedom to design their own clothes by choosing from a wide range of styles and fabrics. <br />
          <strong><Link to="/about">Know more</Link></strong>
        </p>
      </div>
     
      
    </motion.div>
   
        

  )
}

export default Trending
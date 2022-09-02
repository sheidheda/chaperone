import { Button } from '@mui/material'
import React from 'react'
import './Body.css'
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import {motion} from 'framer-motion'
function Body(props) {
  const buttonSX = {
    bgcolor: 'goldenrod', 
    width: '200px',
    height: '60px',
    borderRadius: '30px',
    marginTop: "20px",
    "&:hover": {
      bgcolor: 'rgb(196, 146, 22)',
    },
  };

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <motion.div 
     
    initial ={{scaleX: 0}}
    animate={{scaleX: 1}}
    exit={{scaleX:0}}
    transition={{duration: 0.5}}
    
    > 
      <div className='Body'>
          <img src={props.image} alt="sitting"  className='body---img'/>
          <h2>{props.Text}
          <div className="likeDem">
            <Button sx={buttonSX} variant='contained' >{props.buttonText}</Button> 
             
            </div>
          </h2>
          
      </div>
     <div>
       
     </div>
    </motion.div>
    
  )
}

export default Body
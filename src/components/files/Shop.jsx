import React from 'react'
import './Shop.css'
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
 
import {motion} from 'framer-motion'

function Shop(props) {
  const buttonSX = {
    bgcolor: 'goldenrod', 
    width: '100%', 
    marginTop: '20px',
    marginBottom: '10px',
    "&:hover": {
      bgcolor: 'rgb(196, 146, 22)',
    },
  };

  return (
    <motion.div 
    className='shop2'
    initial ={{scaleX: 0}}
    animate={{scaleX: 1}}
    exit={{scaleX:0}}
    transition={{duration: 0.5}}
    
    > 
     
      <div className="shops">
        <div>
          <img src={props.clothImg} alt="" className='cloth'/>
        </div> 
        <div className='demdem'>
          <p>{props.clothText}</p>
          <h4>{props.price}</h4>
          <s>{props.slash}</s> <strong id='percent'>{props.percent}</strong>
          <div className="rating">
          <Rating
           value ="4" 
           readOnly
           
            />
          <h5>({props.reviewCount})</h5>
          </div>
          <Button 
            variant='contained'
            sx={buttonSX}
            >
            Add to cart
          </Button>
        </div>
      </div>

     
    </motion.div>
  )
}

export default Shop
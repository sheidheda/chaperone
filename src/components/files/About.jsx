import React from 'react'
import './About.css'
import {motion} from 'framer-motion'

function About() {
  return (
    <motion.div 
    className='About'
    initial ={{scaleX: 0}}
    animate={{scaleX: 1}}
    exit={{scaleX:0}}
    transition={{duration: 0.5}}
    
    >
     
      <div className="machine">
        <h1>ABOUT US</h1>
      </div>
      <p id='first'>Chaperone Tribe was created by two young entrepreneurs at their early 20's as they realized it was difficult to find affordable tailor-made clothing. Like most other startups, they started from their own bedroom with money they could get from friends and family.

      </p>
      <div className="sideee">
        <img src="https://images.unsplash.com/photo-1555529771-835f59fc5efe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="vv" 
        className='leftImg'
        />
        <div className="inner-sideee">
          <p>
            As the company grew, more young and passionate professionals joined the team and helped us grow the company following our vision: “the desire to spread comfortable, elegant and perfectly fitted clothing throughout the world“.
          </p>
          <p>
            Two years later, this dream has come true. More than 300,000 customers have already placed their trust in us and we continue to serve you with ever greater rigour and intransigence on the quality of the clothing we manufacture. Our team of more than 60 people based in Abia (Nigeria) with offices in Abuja, Lagos and Aba work hard to bring new custom made products to you.
          </p>
        </div>
      </div>
      <div className="achievement">
        <img src="/images/en-us.webp" alt="c"  
       
        />
      </div>
      <div className="sideee2">
     
        <div className="inner-sideee2">
          <p>
          We are really proud of our Made in Aba. We want each customer to benefit from recognized know-how and expertise at an affordable price while guaranteeing working conditions that respect our employees and the environment.
          </p>
          <p>
          This is our daily struggle and we will continue to do so because we firmly believe in the collective effort.
          </p>
          <p>
          Together, let's build a more equitable world. Buy less, buy better, buy clothes that will last and fit your body perfectly.
          </p>
          
        </div>
        <img src="https://images.unsplash.com/photo-1621370688441-8ce43a9903dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="vv" 
        className='leftImg'
        />
      </div>
      
     
       
    </motion.div>

  )
}

export default About
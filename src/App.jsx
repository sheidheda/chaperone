import React from 'react'
import './App.css'
import Body from './components/Landing/Body'
import Footer from './components/Landing/Footer'
import Navbar from './components/Landing/Navbar'
import data from "./components/data/Bodydata"
import { Route, Routes, useLocation} from 'react-router-dom'
import Compiled from './components/Compiled/BodyCompiled'
import Discount from './components/files/Discount'
import Joggers from './components/files/Joggers'
import Shop from './components/files/Shop'
import Trending from './components/files/Trending'
import About from './components/files/About'
import Speed from './components/Landing/Speed'
import ShopCompiled from './components/Compiled/ShopCompiled'
import {AnimatePresence} from 'framer-motion'

function App() {
    const location = useLocation()
  
       
    return (
     <div className='myBox'>
        <Navbar />
        <div className='nnam'>
            <AnimatePresence exitBeforeEnter
            initial={false}>
                <Routes location={location}
                key={location.pathname}
                >
                    <Route path='/' element={<Trending />} />
                    <Route path='/discount' element={<Discount />} />
                    <Route path='/joggers' element={<Joggers />} />
                    <Route path='/shop'    element={<ShopCompiled />} />
                    <Route path='/trending' element={<Compiled />} />
                    <Route path='/about' element={<About />} />

                </Routes>
            </AnimatePresence>
            <div className="speed">
                <Speed  /> 
            </div>
               
            
            
        </div>
        
        <Footer />
     
     </div>
        
       
      
    )
  
}

export default App
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import DiscountIcon from '@mui/icons-material/Discount';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import HeaderIcon from './HeaderIcon';
function Navbar() {
  const [value, setValue] = React.useState('');

   const handleChange = (event, newValue) => {
     setValue(newValue);
  };
  
  
  const actionSize = {
    color: 'goldenrod',
    background: 'none',
   
  }
  return (
    <div className='Navbar'>
        <div>
        <Link to='/'> <img src="../images/chap.png" alt="logo" className='logo'/> </Link>
        </div>
        <BottomNavigation sx={{ width : "100%", backgroundColor:"rgba(0, 0, 0, 0)", gap:"20px",  }} value={value} onChange={handleChange}>

              <BottomNavigationAction
              label = "Joggers"
              value="recents"
              component={Link} to="/joggers"
              icon = {<CheckroomIcon />}
              sx ={actionSize}
              />


              <BottomNavigationAction
              label = "Trending"
              value=  "trending"
              component={Link} to="/trending"
              icon = {<LocalFireDepartmentIcon />}
              />

              <BottomNavigationAction
              label = "Discount"
              value = "discount"
              component={Link} to="/discount"
              icon = {<DiscountIcon />}
              />


              <BottomNavigationAction
              label = "Shop"
              value = "shop"
              component={Link}
              to="/shop"
              icon = {<ShoppingBagIcon />}
              />


        </BottomNavigation>
        <div className='shop'>
            <Link to="/about">About Us</Link>
            {/* <HeaderIcon
            activeIcon={<MenuIcon /> }
            inactiveIcon={ <CloseIcon />}
            /> */}
        </div>
    </div>
  )
}

export default Navbar
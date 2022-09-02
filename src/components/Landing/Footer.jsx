import React from 'react'

import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'
import './Footer.css'
import Facebook from '@mui/icons-material/Facebook'
import Twitter from '@mui/icons-material/Twitter'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
function Footer() {
  return (
    <div className="Footer">
        <div className='footer1'>
          <div>
            <Link to='/'> <img src="../images/chap.png" alt="logo" className='logo'/> </Link>
          </div>
          <div className='men'>
                <input placeholder='Search' type='text' />
                <SearchIcon className='dem' />
          </div>    
        </div>

        <div className="footer2">
          <div className="list">
            <h5>HOW CAN WE HELP?</h5>
            <ul>
              <li>Help center</li>
              <li>How to contact chap</li>
              <li>modus operandi</li>
              <li>Delivery time</li>
              <li>Money back policy</li>
              <li>Report a product</li>
              <li>Corporate and bulk purchases</li>
            </ul>
          </div>
          <div className="list">
            <h5>ABOUT CHAPERONE TRIBE</h5>
            <ul>
              <li>About us</li>
              <li>Terms and Conditions</li>
              <li>Return policy</li>
              <li>Shipping</li>
              <li>Privacy and Cookie Notice</li>
              <li>Copyright Claim</li>
            
            </ul>
          </div>
          <div className="list">
            <h5>PARTNERSHIP</h5>
            <ul>
              <li>Sell on our site</li>
              <li>Become a consultant</li>
              <li>Dispatch Services</li>
              <li>Logistics</li>
              <li>Vendor Service Provision</li>
               
            </ul>
          </div>
         
        </div>

        <div className="footer3">
       
          <div className="join">
          <hr />
            <h5>JOIN US ON</h5>
            <ul>
              <li><Facebook /></li>
              <li><Twitter /></li>
              <li><InstagramIcon /></li>
              <li><WhatsAppIcon /></li>
            </ul>
            
          </div>
       
          <div className="pay">
          <hr />
           <p id='license'>
             © Faithful Ajah 2022
           </p>
           
          </div>
        </div>
        
    </div>
  )
}

export default Footer





























































// import * as React from 'react';
// import BottomNavigation from '@mui/material/BottomNavigation';
// import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import FolderIcon from '@mui/icons-material/Folder';
// import RestoreIcon from '@mui/icons-material/Restore';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import './Footer.css'
// import { Link } from "react-router-dom";




// export default function Footer() {
//   const [value, setValue] = React.useState('recents');

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <BottomNavigation sx={{ width: "100%", backgroundColor:"black", gap:"80px", }} value={value} onChange={handleChange} className="Footer">
      
//       <BottomNavigationAction
//         label="Recents"
//         value="recents"
//         component={Link} 
//         to="/"
//         icon={<RestoreIcon />}
//       />
    
//       <BottomNavigationAction
//         label="Favorites"
//         value="favorites"
//         icon={<FavoriteIcon />}
//       />
//       <BottomNavigationAction
//         label="Nearby"
//         value="nearby"
//         icon={<LocationOnIcon />}
//       />
//       <BottomNavigationAction
//        label="Cart" 
//        value="folder" 
//        icon={<ShoppingCartIcon />} />
//     </BottomNavigation>
//   );
// }

import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function HeaderIcon({ inactiveIcon, activeIcon }) {
 const [isActive, setIsActive] = useState(false);

 return (
   <div onClick={() => setIsActive(prevState => !prevState)}>
     {isActive ? activeIcon : inactiveIcon}
   </div>
 );
}

export default HeaderIcon;
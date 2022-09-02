import * as React from 'react';
import './Speed.css'
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';



const actions = [
  { icon: <FacebookIcon   />, name: 'Facebook', url: "https://web.facebook.com/faithful.miracleajah"  },
  { icon: <WhatsAppIcon />, name: 'Whatsapp', url:"https://wa.link/di3xxx"  },
  { icon: <TwitterIcon />, name: 'Twitter', url:"https://twitter.com/Faithfulmyrakul"},
  { icon: <LinkedInIcon />, name: 'Linkedin', url: "https://www.linkedin.com/in/faithful-ajah-125a80239"},
];
const actionSize = {
  color: 'black',
  backgroundColor: 'rgba(0, 0, 0, 0.568)',
 
}
export default function Speed() {
  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
      
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16,
        '& .MuiFab-primary': { backgroundColor: 'rgba(0, 0, 0, 0.568)', '&:hover': {backgroundColor: 'rgba(0, 0, 0, 0.568)'}}, 
      
      }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            
            href = {action.url}
            target = "_/blank"
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            sx={actionSize }
          />
        ))}
      </SpeedDial>
    </Box>
  );
}

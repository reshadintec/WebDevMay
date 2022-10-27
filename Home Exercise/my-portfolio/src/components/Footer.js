import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import "../styles/Footer.css"
import { Button } from '@mui/material';
function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
        <Button href='https://www.facebook.com/reshadhassani07' target="_blank"> 
        <FacebookIcon /> 
        </Button>
        <Button href='https://www.instagram.com/web.pandaa/' target="_blank">
          <InstagramIcon />
        </Button>
        <Button href='https://www.linkedin.com/in/reshad-hassani-275434158/' target="_blank">
          <LinkedInIcon />
        </Button>
        <Button href='mailto:reshadhassani@hotmail.com' target="_blank">
          <EmailIcon />
        </Button>
        </div>
        <p> &copy; {new Date().getFullYear()} webpandaa.com</p>
    </div>
  )
}

export default Footer
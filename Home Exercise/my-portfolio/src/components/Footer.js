import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import "../styles/Footer.css"
function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon />
            <FacebookIcon />
            <LinkedInIcon />
            <EmailIcon />
        </div>
        <p> &copy; {new Date().getFullYear()} webpandaa.com</p>
    </div>
  )
}

export default Footer
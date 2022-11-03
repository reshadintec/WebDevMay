import React from 'react';
import ContactForm from '../components/ContactForm';
import "../styles/Contact.css"
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Contact() {
  
  return (
    <div className='contact'>
      <div className='title'>
        <p>get in touch</p>
        <h2>Contact</h2>
      </div>
      <div  className='container'>
      <div className='leftSection'>
        <div className="info1">
          <PhoneIcon /> 
          <p>+32 (0) 492 87 22 03</p>
        </div>
        <div className="info1">
          <MailIcon />
          <p>reshadhassani@hotmail.com</p>
        </div>
        <div className="info1">
          <LocationOnIcon />
          <p>Leopoldplein 50, 3500 Hasselt Belgium</p>
        </div>
      </div>
      <div className='rightSection'>
        <ContactForm/>
      </div>
      </div>
    </div>
  )
}
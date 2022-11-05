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
        <h2>Contact</h2>
      </div>
      <div  className='container'>
      <div className='leftSection'>
        <h3>Get in touch</h3>
          <p>It is easy to get in touch with me. You can reach me with the contact info below or by filling out this form. I would love to hear from you if you got a job or a project that you want me to do it.</p>
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
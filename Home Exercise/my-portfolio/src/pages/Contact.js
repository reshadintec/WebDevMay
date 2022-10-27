import React from 'react';
import ContactForm from '../components/ContactForm';
import "../styles/Contact.css"
import PhoneIcon from '@mui/icons-material/Phone';


export default function Contact() {
  
  return (
    <div className='contact'>
      <div className='title'>
        <p>get in touch</p>
        <h2>Contact</h2>
      </div>
      <div className='leftSection'>
        <div info1>
          <PhoneIcon /> 
          <p>+32 (0) 492 87 22 03</p>
        </div>
      </div>
      <div className='rightSection'>
        <ContactForm/>
      </div>
    </div>
  )
}
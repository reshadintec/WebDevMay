import React from 'react';
import ContactForm from '../components/ContactForm';


export default function Contact() {
  
  return (
    <div className='contact'>
      <div className='title'>
        <p>get in touch</p>
        <h2>Contact</h2>
      </div>
      <div className='leftSection'>

      </div>
      <div className='rightSection'>
        <ContactForm/>
      </div>
    </div>
  )
}
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/ContactForm.css'

export default function ContactForm() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zf9zeqk', 'template_q8envfl', form.current, '2Zh1q-KJdamwXGl7T')
            .then((result) => {
                console.log(result.text);
                console.log("Email Sent");
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='container'>
            <form ref={form} onSubmit={sendEmail}>
                <label>Your Name</label>
                <input type="text" name="user_name" placeholder='John'/>
                <label>Your Email</label>
                <input type="email" name="user_email" placeholder='john@example.com' />
                <label>Message</label>
                <textarea name="message" placeholder='I want to hire you for my next project :)' />
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}
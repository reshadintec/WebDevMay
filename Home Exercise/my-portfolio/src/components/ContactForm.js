import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

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
        <div>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}
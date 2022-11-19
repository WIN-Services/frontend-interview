import React from 'react'
import ContactInfo from './ContactInfo'
import './contactPane.css';

const ContactPane = () => {
  return (
    <div className='contact-pane'>
      <h1>Contact Us</h1>
      <div className='contact-details'>
        <ContactInfo 
            head="Inspection" 
            phone='1234567890'
            email='info@wini.com'
        />

        <ContactInfo 
            head="Franchizing" 
            phone='8003096753'
            email='info@wini.com'
        />

        <ContactInfo 
            head="Vendors" 
            phone='3675573486'
            email='vendors@wini.com'
        />
      </div>
    </div>
  )
}

export default ContactPane
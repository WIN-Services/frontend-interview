import React from 'react'
import ContactForm from '../components/ContactForm';
import Subscribe from '../components/Subscribe';
import ContactPane from './../components/ContactPane';
import './Contact.css';

const Contact = () => {
  return (
    <div className='contactPage'>
        <div className='contact-page-main resp-block'>
          <ContactPane />
          <ContactForm />
        </div>
        <Subscribe />
    </div>
  )
}

export default Contact
import React from 'react'
import './ContactInfo.css'

const ContactInfo = (props) => {
  return (
    <div className='contact-info'>
        <h4>{props.head}</h4>
        <p><a href={'tel:' + props.phone}>{props.phone}</a> | <a href={"mailto:"+props.email}>{props.email}</a></p>
    </div>
  )
}

export default ContactInfo
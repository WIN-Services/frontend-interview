import React, { useState } from 'react'
import './ContactForm.css';
import Axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    phone:'',
    zipcode:'',
    message:''
  })

  const handleChange = (e) => {
    const newData = {...formData}
    newData[e.target.name] = e.target.value
    setFormData(newData)
    console.log(formData)
  }

  const handleSubmitClick = (e) => {
    console.log(formData)
    if(formData['email']==='') {
      alert('Please Enter Email!')
    } else if(formData['message']==='') {
      alert('Please Enter your message!')
    } else {
      Axios.post('http://localhost:3000/api/contact', formData)
      alert('Message Sent Successfully :)')
      setFormData({
        name:'',
        email:'',
        phone:'',
        zipcode:'',
        message:''
      })
    }
  }

  return (
    <div className='contact-form'>
      <div className='resp-block'>
        <div className='input-block'>
            <h4 className=''>Name</h4>
            <input className='col-12 text-field' name='name' placeholder='Full Name' value={formData.name} type='text' onChange={handleChange} />
        </div>
        <div className='input-block'>
            <h4 className=''>Email</h4>
            <input className='col-12 text-field' name='email' placeholder='xyz@abc.com' value={formData.email} type='email' onChange={handleChange} />
        </div>
      </div>
      <div className='resp-block'>
        <div className='input-block'>
            <h4 className=''>Phone Number</h4>
            <input className='col-12 text-field' placeholder='(123) 456-7890' name='phone' value={formData.phone} type='number' onChange={handleChange} />
        </div>
        <div className='input-block'>
            <h4 className=''>ZIP Code</h4>
            <input className='col-12 text-field' placeholder='XXXXXX' type='number' name='zipcode' value={formData.zipcode} onChange={handleChange} />
        </div>
      </div>
      <div className='resp-block'>
        <div className='message-inp'>
          <h4 className=''>Message</h4>
          <textarea name='message' className='col-12 msg-field' rows='6' placeholder='Please type it in here...' value={formData.message} type='text' onChange={handleChange} />
        </div>
      </div>
      <div className='btn-grp'>
        <button className='submit-btn' onClick={handleSubmitClick}>SUBMIT</button>
      </div>
    </div>
  )
}

export default ContactForm
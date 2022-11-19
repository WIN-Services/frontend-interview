import React, {useState} from 'react'
import { Axios } from 'axios'
import './Subscribe.css'

const Subscribe = () => {
  const [subscriptionEmail, setSubscriptionEmail] = useState('')

  const handleChange = (e) => {
    setSubscriptionEmail(e.target.value)
    console.log(subscriptionEmail)
  }

  const handleSubscriptionClick = () => {
    if(subscriptionEmail === '') {
      alert('Please Enter Email address to subscribe.')
    } else {
      // Axios.post('http://localhost:3000/api/subscribe', {
      //   email: subscriptionEmail
      // })
      alert('Subcription Successful :)')
      setSubscriptionEmail('')
    }
  }

  return (
    <div className='container-fluid subscribe'>
        <h1>Subscribe to our emails</h1>
        <p>Enter your Email Address to recieve the latest notifications, newsletters and updates from WIN!</p>
        <div>
            <input placeholder='Enter your Email' value={subscriptionEmail} className='text-field p-3' onChange={handleChange} />
            <button type='submit' className='subscribe-btn' onClick={handleSubscriptionClick}>Subscribe</button>
        </div>
    </div>
  )
}

export default Subscribe
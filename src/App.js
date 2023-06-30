import React, { useState } from 'react';
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    zipcode: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log(formData);
    // Reset the form
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      zipcode: '',
      message: '',
    });
  };
  const handleSubmitEmail=(e)=>{
e.preventDefault()
  }
  return (
    <div>

    <div className="my-5 container">
      <div className="container  ">
        <div className="row">
          <div className="col-lg-5 col-sm-12 ">
            <div className="contact_details">
              <h5>Contact US</h5>
              <div className="contact_details_item">
                <p>Inspections</p>
                <p>(800) 309-6753 | info@wini.com </p>
              <div />
              <div className="contact_details_item">
                <p>Franchising</p>
                <p>(800) 309-6753 | info@wini.com </p>
              </div>
              <div className="contact_details_item">
                <p>Vendors</p>
                <p>(312) 557-9319 | vendors@wini.com</p>
              </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6  col-sm-12 form_container"> 
             <form onSubmit={handleSubmit}>
              <div className='row'>

        <div className="col-lg-6 col-sm-12">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder='Full Name'
            value={formData.name}
            onChange={handleChange}
          />
          
        </div>
        <div className="col-lg-6 col-sm-12 ">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder='xyz@abc.com'
            value={formData.email}
            onChange={handleChange}
          />
        </div>
              </div>
              <div class="row">

        <div className="mb-3 col-lg-6 col-sm-12 my-3">
          <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder='(123) 456-7890'
          />
        </div>
        <div className="col-lg-6 col-sm-12 my-3">
          <label htmlFor="zipcode" className="form-label">Zipcode</label>
          <input
            type="text"
            className="form-control"
            id="zipcode"
            name="zipcode"
            value={formData.zipcode}
            onChange={handleChange}
            placeholder='XXXXX'
          />
        </div>
              </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder='Please type it in here...'
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary form_button">SUBMIT</button>
      </form></div>
          <div class="col-1"></div>
        </div>
      </div>
    </div>
    {/*  */}
    <div className='container text-center subscribe_email my-5'>
      <h2>Subscribe to our emails </h2>
      <p>Enter your email address to receive the latest notifications, newsletters, and updates from WIN! </p>
     
      <form className='row d-flex justify-content-center' onSubmit={handleSubmitEmail}>
      <div className='col-lg-4 col-sm-6'>

        <input type="email" class="form-control subscriber_input " id="email" placeholder="Your email address"/>
      </div>
        

      <button type="submit" class="btn btn-primary subscribe_button col-lg-2 col-sm-3">Subscribe</button>
      
      
    </form>
     
    </div>
    </div>

  );
}

export default App;

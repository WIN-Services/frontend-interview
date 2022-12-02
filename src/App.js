import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
//importing axios to make post request
import axios from "axios";
function App() {

  const [Contactdetails, setContactdetails] = useState({
    name: "",
    email: "",
    phone: "",
    zipcode: "",
    message: ""
  });

  //textfield value change handler, it sets the values into the respective variables.
  const handleChange = (e) => {
    let { name, value } = e.target;
    setContactdetails({ ...Contactdetails, [name]: value });
  }

  const onSubmit = () => {
    //sending data to api/connect
    axios.post("/api/connect",Contactdetails)
    .then((res)=> {console.log(res)})
    .catch((err)=>{ console.log(err)});
  }
  return (
    <>
      <section className='d-flex py-5 flex-lg-row flex-column container'>
        <div className='col-lg-4 col-12 bg-light rounded home-left px-3 py-2' >
          <h1 className='pb-4'>Contact Us</h1>
          <div>

            <div>
              <h2>Inspections</h2>
              <p>(800) 309-6753 | info@wini.com </p>
            </div>

            <div>
              <h2>Franchising</h2>
              <p>(800) 309-6753 | info@wini.com </p>
            </div>

            <div>
              <h2>Vendors</h2>
              <p>(312) 557-9319 | vendors@wini.com</p>
            </div>
          </div>
        </div>
    
      {/* Contact form */}
      
        <div className='col-lg-8 col-12 px-4'>
          <form onSubmit={onSubmit} className='d-flex justify-content-between flex-wrap px-lg-5 px-0 py-lg-0 py-4' >

            <div className='col-lg-5 col-12 mb-4'>
              <label className='mb-2'>Name</label>
              <input type="text" name='name' onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Full Name" />
            </div>

            <div className='col-lg-6 col-12 mb-4'>
              <label className='mb-2' >Email</label>
              <input type="email" name="email" onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="xyz@gmai.com" />
            </div>


            <div className='col-lg-5 col-12 mb-4'>
              <label className='mb-2'>Phone Number</label>
              <input type="tel" name="phone" onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="(123) 456-7890" />
            </div>

            <div className='col-lg-6 col-12 mb-4'>
              <label className='mb-2'>ZIP Code</label>
              <input type="password" name="zipcode" onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="*****" />
            </div>

            <div className='col-12 mb-4'>
              <label className='mb-2'>Message</label>
              <textarea className="form-control" name='message' onChange={handleChange} placeholder='Please type it in here...' id="exampleFormControlTextarea1" rows="5" ></textarea>
            </div>

            <button className="submit-btn" type='submit'>Submit</button>

          </form>
        </div>
      </section>


    {/* Subscribe mail section */}

      <section className='d-flex p-3 py-5 mb-5 flex-column container  align-items-center justify-content-center subscribe-mail-container'>
        <h3>Subscribe to our emails </h3>
        <p>Enter your email address to receive the latest notifications, newsletters, and updates from WIN! </p>
        <div>
          <input className="form-control" type="email" placeholder='Your email address' />
          <button>Subscribe</button>
        </div>
      </section>
    </>
  )
}

export default App
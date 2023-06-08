import React, { useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    zip: "",
    messages: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSUbmit = async (e) => {
    e.preventDefault();
    await axios({
      url: `/api/contact`,
      data: values,
    })
      .then(() => {
        alert("Data Submited");
      })
      .catch(() => {
        console.error("err");
      });
  };

  return (
    <div className="App">
      <div className="form_root">
        <div className="row">
          <div className="col-lg-5 col-md-6 col-12">
            <div className="form_left_content">
              <p className="large_text_bold">Contact Us</p>
              <div className="mt-32">
                <p className="medium_text_bold">Inspections</p>
                <p className="small_text_light">
                  (800) 309-6753 | info@wini.com{" "}
                </p>
                <p className="medium_text_bold mt-16">Franchising</p>
                <p className="small_text_light">
                  (800) 309-6753 | info@wini.com
                </p>
                <p className="medium_text_bold mt-16">Vendors</p>
                <p className="small_text_light">
                  (312) 557-9319 | vendors@wini.com
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-6 col-12">
            <div className="form_main">
              <div className="row">
                <div className="col-lg-10 col-12">
                  <div className="row mtsm-42">
                    <div className="col-lg-6 col-12">
                      <div className="input_div">
                        <label htmlFor="name" className="medium_text_light">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="mt-8 normal_text_light"
                          placeholder="Full Name"
                          value={values.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12 mtlg-42">
                      <div className="input_div">
                        <label htmlFor="email" className="medium_text_light">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="mt-8 normal_text_light"
                          placeholder="xyz@abc.com"
                          value={values.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12 mt-42">
                      <div className="input_div">
                        <label htmlFor="phone" className="medium_text_light">
                          Phone Number
                        </label>
                        <input
                          type="number"
                          id="phone"
                          name="phone"
                          className="mt-8 normal_text_light"
                          placeholder="(123) 456-7890"
                          value={values.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12 mt-42">
                      <div className="input_div">
                        <label htmlFor="zip" className="medium_text_light">
                          Zip Code
                        </label>
                        <input
                          type="text"
                          id="zip"
                          name="zip"
                          className="mt-8 normal_text_light"
                          placeholder="XXXXX"
                          value={values.zip}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-12 mt-32">
                      <div className="input_div">
                        <label htmlFor="messages" className="medium_text_light">
                          Message
                        </label>
                        <textarea
                          name="messages"
                          id="messages"
                          className="mt-8 normal_text_light"
                          value={values.messages}
                          onChange={handleChange}
                          placeholder="Please type it in here..."
                        ></textarea>
                      </div>
                    </div>
                    <div className="mt-32 mb-72">
                      <button className="primary-cta" onClick={handleSUbmit}>
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-60 subscribe_root">
        <p className="exlarge_text_bold">Subscribe to our emails</p>
        <p className="mt-16 medium_text_light fw-light">
          Enter your email address to receive the latest notifications,
          newsletters, and updates from WIN!
        </p>
        <div className="mt-42 subs_input">
          <input
            type="email"
            placeholder="Your email address"
            className="medium_text_light"
          />

          <button className="ml-25 secondary_cta">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default App;

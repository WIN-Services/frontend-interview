import React, { useState } from "react";

import "./ContactUs.css";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [message, setMessage] = useState("");

  const onChangeHandler = (e) => {
    const targetName = e.target.name;
    const targetValue = e.target.value;

    switch (targetName) {
      case "name":
        setName(targetValue);
        break;
      case "email":
        setEmail(targetValue);
        break;
      case "number":
        setNumber(targetValue);
        break;
      case "zipcode":
        setZipcode(targetValue);
        break;
      case "message":
        setMessage(targetValue);
        break;
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      number,
      zipcode,
      message,
    };

    //Axios Can be used to do post data for the given object
    //Fetch also can be used
    /*
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json"
        }
    });
     */
    //Currently I am console logging it
    console.log(data);
    setName("");
    setEmail("");
    setMessage("");
    setNumber("");
    setZipcode("");
  };

  return (
    <div className="contact-us">
      <section className="contact-us__details">
        <h2>Contact Us</h2>
        <h4>Inspections</h4>
        <p>(800) 309-6753 | info@wini.com</p>
        <h4>Franchising</h4>
        <p>(800) 309-6753 | info@wini.com</p>
        <h4>Vendors</h4>
        <p>(312) 557-9319 | vendors@wini.com</p>
      </section>
      <form className="contact-us__form" onSubmit={onSubmitHandler}>
        <section className="contact-us__section">
          <div className="contact-us__fields">
            <label htmlFor="nameInput">Name</label>
            <input
              type="text"
              id="nameInput"
              placeholder="Full Name"
              value={name}
              name="name"
              onChange={onChangeHandler}
            />
          </div>
          <div className="contact-us__fields">
            <label htmlFor="emailInput">Email</label>
            <input
              type="email"
              id="emailInput"
              placeholder="xyz@abc.com"
              value={email}
              name="email"
              onChange={onChangeHandler}
            />
          </div>
        </section>
        <section className="contact-us__section">
          <div className="contact-us__fields">
            <label htmlFor="phoneInput">Phone Number</label>
            <input
              type="text"
              id="phoneInput"
              placeholder="(123) 456-789"
              value={number}
              name="number"
              onChange={onChangeHandler}
            />
          </div>
          <div className="contact-us__fields">
            <label htmlFor="zipInput">ZIP Code</label>
            <input
              type="text"
              id="zipInput"
              placeholder="XXXXXX"
              name="zipcode"
              value={zipcode}
              onChange={onChangeHandler}
            />
          </div>
        </section>
        <section className="contact-us__section">
          <div className="contact-us__fields">
            <label htmlFor="messageInput">Message</label>
            <textarea
              id="messageInput"
              cols="40"
              rows="5"
              placeholder="Please type it in here..."
              name="message"
              value={message}
              onChange={onChangeHandler}
            ></textarea>
          </div>
        </section>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default ContactUs;

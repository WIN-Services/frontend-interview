import React, { useState } from "react";
import "./contactus.css";
import { TextField } from "@mui/material";
import ContactusFooter from "../../components/footer/ContactusFooter";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    zip: "",
    message: "",
  });

  const data = [
    { title: "Inspections", detail: "(800) 309-6753 | info@wini.com " },
    { title: "Franchising", detail: "(800) 309-6753 | info@wini.com " },
    { title: "Vendors", detail: "(800) 309-6753 | info@wini.com " },
  ];

  const inputFields = [
    { label: "Name", placeholder: "Full Name", type: "text", name: "name" },
    {
      label: "Email",
      placeholder: "xyz@abc.com",
      type: "email",
      name: "email",
    },
    {
      label: "Phone Number",
      placeholder: "(123) 456-7890",
      type: "number",
      name: "phone",
    },
    { label: "ZIP Code", placeholder: "XXXX", type: "number", name: "zip" },
  ];

  const handleFormInput = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = value.replace(/\n/g, "");
    setFormData({ ...formData, [name]: sanitizedValue });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="contactus">
      <div className="contactContainer">
        <div className="contactItemsWrapper">
          <h2>Contact Us</h2>
          {data &&
            data.map((item, i) => (
              <div className="contactItem">
                <p>{item.title}</p>
                <span>{item.detail}</span>
              </div>
            ))}
        </div>
        <form style={{ width: "100%" }} onSubmit={(e) => handleFormSubmit(e)}>
          <div className="contactForm">
            {inputFields.map((field, i) => (
              <div key={i}>
                <p>{field.label}</p>
                <TextField
                  placeholder={field.placeholder}
                  type={field.type}
                  name={field.name}
                  variant="outlined"
                  onChange={(e) => handleFormInput(e)}
                  className="customTextField"
                  required
                />
              </div>
            ))}
          </div>
          <div className="messageFieldWrapper">
            <p>Message</p>
            <TextField
              placeholder={"Please type it in here..."}
              type={"text"}
              name="message"
              variant="outlined"
              multiline
              rows={5}
              className="customTextField"
              onChange={(e) => handleFormInput(e)}
              fullWidth
              required
            />
          </div>
          <button className="submitBtn" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="contactusFooter">
        <ContactusFooter />
      </div>
    </div>
  );
}

export default ContactUs;

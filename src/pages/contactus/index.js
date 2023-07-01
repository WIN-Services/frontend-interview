import React from "react";
import "./contactus.css";
import { TextField } from "@mui/material";
import ContactusFooter from "../../components/footer/ContactusFooter";

function ContactUs() {
  const data = [
    { title: "Inspections", detail: "(800) 309-6753 | info@wini.com " },
    { title: "Franchising", detail: "(800) 309-6753 | info@wini.com " },
    { title: "Vendors", detail: "(800) 309-6753 | info@wini.com " },
  ];

  const inputFields = [
    { label: "Name", placeholder: "Full Name", type: "text" },
    { label: "Email", placeholder: "xyz@abc.com", type: "email" },
    { label: "Phone Number", placeholder: "(123) 456-7890", type: "number" },
    { label: "ZIP Code", placeholder: "XXXX", type: "number" },
  ];

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
        <div style={{ width: "100%" }}>
          <div className="contactForm">
            {inputFields.map((field, i) => (
              <div key={i}>
                <p>{field.label}</p>
                <TextField
                  placeholder={field.placeholder}
                  type={field.type}
                  variant="outlined"
                  className="customTextField"
                />
              </div>
            ))}
          </div>
          <div className="messageFieldWrapper">
            <p>Message</p>
            <TextField
              placeholder={"Please type it in here..."}
              type={"text"}
              variant="outlined"
              multiline // Enable multiline input
              rows={5}
              className="customTextField"
              fullWidth
            />
          </div>
          <button className="submitBtn">Submit</button>
        </div>
      </div>
      <div className="contactusFooter">
        <ContactusFooter />
      </div>
    </div>
  );
}

export default ContactUs;

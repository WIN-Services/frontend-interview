import React, { useState } from "react";
import "./contactus.css";
import { Alert, Snackbar, TextField } from "@mui/material";
import ContactusFooter from "../../components/footer/ContactusFooter";
import axios from "axios";

function ContactUs() {
  const [open, setOpen] = useState(false);
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

  const handleToastMessageClose = () => {
    setOpen(false);
  };

  //api handling for form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let jwt = ""; // as of now its an empty string as it is a demo
    let apiData = {
      method: "POST",
      data: formData,
      headers: {
        Authorization: jwt,
        "Content-Type": "application/json",
      },
    };
    setOpen(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      zip: "",
      message: "",
    });
    const responseData = await axios("/api/contact", apiData);
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
                  value={formData[field.name]}
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
              value={formData["message"]}
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
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleToastMessageClose}
      >
        <Alert
          onClose={handleToastMessageClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Thank you, we'll get back to you soon.
        </Alert>
      </Snackbar>{" "}
    </div>
  );
}

export default ContactUs;

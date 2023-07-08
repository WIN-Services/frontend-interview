import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  TextareaAutosize,
  Modal,
  Dialog,
} from "@mui/material";
import {
  isEmailValid,
  isMobileValid,
  whiteSpaceValid,
} from "../../Constant/Validations";
import axios from "axios";
import "./index.scss";

const Index = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [message, setMessage] = useState("");
  const [emailSubscribe, setEmailSubscribe] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [onloadName, setOnloadName] = useState(false);
  const [nameErrMsg, setNameErrMsg] = useState(false);
  const [onloadEmail, setOnloadEmail] = useState(false);
  const [emailErrMsg, setEmailErrMsg] = useState(false);
  const [onloadMobile, setOnloadMobile] = useState(false);
  const [mobileErrMsg, setMobileErrMsg] = useState(false);
  const [onloadMessage, setOnloadMessage] = useState(false);
  const [messageErrMsg, setMessageErrMsg] = useState(false);
  const [onloadZipcode, setOnloadZipcode] = useState(false);
  const [zipcodeErrMsg, setZipCodeErrMsg] = useState(false);
  const [emailSubscribeErrMsg, setEmailSubscribeErrMsg] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModalSubscribe, setShowModalSubscribe] = useState(false);

  const contact_us_details = [
    {
      heading: "Inspections",
      mail: "(800) 309-6753 | info@wini.com",
    },
    {
      heading: "Franchising",
      mail: "(800) 309-6753 | info@wini.com",
    },
    {
      heading: "Vendors",
      mail: "(312) 557-9319 | vendors@wini.com",
    },
  ];

  useEffect(() => {
    if (userName && email && mobile && zipCode && message) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }

    if (whiteSpaceValid(userName)) {
      setNameErrMsg(false);
    } else {
      setNameErrMsg(true);
    }

    if (isEmailValid(email)) {
      setEmailErrMsg(false);
    } else {
      setEmailErrMsg(true);
    }

    if (isMobileValid(mobile)) {
      setMobileErrMsg(false);
    } else {
      setMobileErrMsg(true);
    }

    if (zipCode.length === 6) {
      setZipCodeErrMsg(false);
    } else {
      setZipCodeErrMsg(true);
    }

    if (whiteSpaceValid(message)) {
      setMessageErrMsg(false);
    } else {
      setMessageErrMsg(true);
    }
  }, [userName, email, mobile, zipCode, message]);

  // handle submit
  const handleSubmit = () => {
    axios
      .post("/api/contact", {
        name: userName,
        email: email,
        phone: mobile,
        zipCode: zipCode,
        message: message,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));

    setShowModal(true);
    setUserName("");
    setEmail("");
    setMobile("");
    setMessage("");
    setZipCode("");
    setOnloadEmail("");
    setOnloadMessage("");
    setOnloadMobile("");
    setOnloadMessage("");
    setOnloadName("");
    setOnloadZipcode("");
  };

  // handle subscribe
  const handleSubscribe = () => {
    if (isEmailValid(emailSubscribe)) {
      setEmailSubscribeErrMsg(false);
      setShowModalSubscribe(true);
      setEmailSubscribe("");
    } else {
      setEmailSubscribeErrMsg(true);
    }
  };

  const handleClose = () => setShowModal(false);

  const handleCloseSubscribe = () => setShowModalSubscribe(false);

  return (
    <>
      <div className="contact__container">
        <div className="contact-us-wrapper">
          <div className="contact-us-details">
            <h4>Contact Us</h4>
            {contact_us_details.map((item) => {
              return (
                <div className="details-heading-wrapper">
                  <h6>{item.heading}</h6>
                  <p>{item.mail}</p>
                </div>
              );
            })}
          </div>
          <div className="contact-us-form">
            <form>
              <div className="name-email-wrapper">
                <div className="name-wrapper">
                  <label>Name</label>
                  <TextField
                    type="text"
                    variant="outlined"
                    placeholder="Full Name"
                    margin="normal"
                    value={userName}
                    onChange={(e) => {
                      setUserName(e.target.value);
                      setOnloadName(true);
                    }}
                  />
                  {onloadName && nameErrMsg && (
                    <p className="error-msg">Please enter valid name</p>
                  )}
                </div>

                <div className="name-wrapper">
                  <label>Email</label>
                  <TextField
                    type="email"
                    variant="outlined"
                    placeholder="xyz@abc.com"
                    margin="normal"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setOnloadEmail(true);
                    }}
                  />
                  {onloadEmail && emailErrMsg && (
                    <p className="error-msg">Please enter valid email id</p>
                  )}
                </div>
              </div>

              <div className="name-email-wrapper">
                <div className="name-wrapper">
                  <label>Phone Number</label>
                  <TextField
                    type="text"
                    variant="outlined"
                    placeholder="(123) 456-7890"
                    margin="normal"
                    value={mobile}
                    onChange={(e) => {
                      setMobile(e.target.value);
                      setOnloadMobile(true);
                    }}
                  />
                  {onloadMobile && mobileErrMsg && (
                    <p className="error-msg">Please enter valid phone number</p>
                  )}
                </div>

                <div className="name-wrapper">
                  <label>ZIP Code</label>
                  <TextField
                    type="text"
                    variant="outlined"
                    placeholder="XXXXX"
                    margin="normal"
                    value={zipCode}
                    inputProps={{
                      maxLength: 6,
                    }}
                    onChange={(e) => {
                      setZipCode(e.target.value);
                      setOnloadZipcode(true);
                    }}
                    className="text-field"
                  />
                  {onloadZipcode && zipcodeErrMsg && (
                    <p className="error-msg">Please enter valid zip code</p>
                  )}
                </div>
              </div>

              <div className="name-email-wrapper">
                <div className="textarea-wrapper">
                  <label>Message</label>
                  <TextareaAutosize
                    type="text"
                    variant="outlined"
                    placeholder="Please type it in here..."
                    margin="normal"
                    value={message}
                    minRows={5}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      setOnloadMessage(true);
                    }}
                  />
                  {onloadMessage && messageErrMsg && (
                    <p className="error-msg">Please enter valid message</p>
                  )}
                </div>
              </div>
            </form>

            <Button
              className={
                disabled ? "disabled submit-wrapper" : "submit-wrapper"
              }
              disabled={disabled}
              onClick={handleSubmit}
            >
              SUBMIT
            </Button>
          </div>
        </div>
        <div className="subscribe-container">
          <h1>Subscribe to our emails</h1>
          <p>
            Enter your email address to receive the latest notifications,
            newsletters, and updates from WIN!
          </p>
          <div className="input-wrapper">
            <div>
              <TextField
                type="email"
                variant="outlined"
                placeholder="Your email address"
                margin="normal"
                value={emailSubscribe}
                onChange={(e) => setEmailSubscribe(e.target.value)}
                className="text-field"
              />
              {emailSubscribeErrMsg && (
                <div className="error-msg">
                  Please enter valid email address
                </div>
              )}
            </div>
            <Button className="submit-btn" onClick={handleSubscribe}>
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={showModal} onClose={handleClose}>
        <div className="success-dialog-box">
          <h4>Thank you!</h4>
          <p>You have successfully submitted</p>
          <Button className="ok-btn" onClick={handleClose}>
            Ok
          </Button>
        </div>
      </Dialog>

      <Dialog open={showModalSubscribe} onClose={handleCloseSubscribe}>
        <div className="success-dialog-box">
          <h4>Thank you!</h4>
          <p>You have successfully subscribed</p>
          <Button className="ok-btn" onClick={handleCloseSubscribe}>
            Ok
          </Button>
        </div>
      </Dialog>
    </>
  );
};

export default Index;

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
  isZipCodeValid,
  whiteSpaceValid,
} from "../../Constant/Validations";
import axios from "axios";
import "./index.scss";
import { Strings } from "../../Constant/Strings";

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

  const {
    email_err_msg,
    name_err_msg,
    mobile_err_msg,
    zipcode_err_msg,
    msg_err,
    subscribe_heading,
    subscribe_msg,
    subscribe_success_msg,
    form_success_msg,
  } = Strings;

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

    if (isZipCodeValid(zipCode)) {
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
                    <p className="error-msg">{name_err_msg}</p>
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
                    <p className="error-msg">{email_err_msg}</p>
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
                    <p className="error-msg">{mobile_err_msg}</p>
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
                      maxLength: 5,
                    }}
                    onChange={(e) => {
                      setZipCode(e.target.value);
                      setOnloadZipcode(true);
                    }}
                    className="text-field"
                  />
                  {onloadZipcode && zipcodeErrMsg && (
                    <p className="error-msg">{zipcode_err_msg}</p>
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
                    <p className="error-msg">{msg_err}</p>
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
          <h1>{subscribe_heading}</h1>
          <p>{subscribe_msg}</p>
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
                <div className="error-msg">{email_err_msg}</div>
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
          <p>{form_success_msg}</p>
          <Button className="ok-btn" onClick={handleClose}>
            Ok
          </Button>
        </div>
      </Dialog>

      <Dialog open={showModalSubscribe} onClose={handleCloseSubscribe}>
        <div className="success-dialog-box">
          <h4>Thank you!</h4>
          <p>{subscribe_success_msg}</p>
          <Button className="ok-btn" onClick={handleCloseSubscribe}>
            Ok
          </Button>
        </div>
      </Dialog>
    </>
  );
};

export default Index;

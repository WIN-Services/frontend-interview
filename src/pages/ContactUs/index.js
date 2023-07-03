import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  createTheme,
  ThemeProvider,
  Container,
} from "@mui/material";
import toast, { Toaster } from "react-hot-toast";

import "./style.css";

const theme = createTheme();
const configList = [
  { name: "Inspections", phone: "+1 123-456-7890", mail: "info@example.com" },
  { name: "Franchising", phone: "+1 123-456-7890", mail: "info@example.com" },
  { name: "Vendors", phone: "+1 123-456-7890", mail: "info@example.com" },
];

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    const isFormValid = validateForm();

    if (isFormValid) {
      // Reset form fields
      setName("");
      setEmail("");
      setPhone("");
      setZipCode("");
      setMessage("");

      // Set form submission state
      setFormSubmitted(true);

      // Show success toast message
      toast.success("Form submitted successfully!");
    } else {
      // Set form submission state
      setFormSubmitted(true);

      // Show error toast message
      toast.error("Please fill all the required fields.");
    }
  };

  const validateForm = () => {
    // Perform your form validations here
    // For example, check if required fields are not empty
    const isNameValid = name.trim() !== "";
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Check for a valid email format
    const isPhoneValid = /^\+?\d{1,3}[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(phone); // Check for a valid phone number format
    const isZipCodeValid = zipCode.trim() !== "";
    const isMessageValid = message.trim() !== "";

    return (
      isNameValid &&
      isEmailValid &&
      isPhoneValid &&
      isZipCodeValid &&
      isMessageValid
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
      <Toaster position="top-center" reverseOrder={true} />
        <Grid container className="mainContainer">
          <Grid item xs={12} sm={4}>
            <Card className="formInfo">
              <CardContent style={{ textAlign: "left" }}>
                <Typography variant="h4" gutterBottom>
                  Contact Information
                </Typography>
                {configList.map((config, index) => (
                  <div key={index}>
                    <Typography variant="h5">{config.name}</Typography>
                    <Typography variant="body1">
                      {config.phone} | {config.mail}
                    </Typography>
                  </div>
                ))}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Card style={{ border: "none", boxShadow: "none" }}>
              <CardContent>
                <Typography variant="h4">Contact Form</Typography>
                <form onSubmit={handleSubmit}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    style={{ width: "47%", marginRight: 2 }}
                    margin="normal"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    error={formSubmitted && !name.trim()}
                  />
                  <TextField
                    label="Email"
                    variant="outlined"
                    style={{ width: "47%" }}
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={formSubmitted && (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))}
                  />
                  <TextField
                    label="Phone Number"
                    variant="outlined"
                    style={{ width: "47%", marginRight: 2 }}
                    margin="normal"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    error={formSubmitted && (!phone.trim() || !/^\+?\d{1,3}[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(phone))}
                  />
                  <TextField
                    label="Zip Code"
                    variant="outlined"
                    style={{ width: "47%" }}
                    margin="normal"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    error={formSubmitted && !zipCode.trim()}
                  />
                  <TextField
                    label="Message"
                    variant="outlined"
                    style={{ width: "94%" }}
                    margin="normal"
                    multiline
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    error={formSubmitted && !message.trim()}
                  />

                  <div style={{ textAlign: "left" }}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      style={{ width: "20%", marginLeft: "3%" }}
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Card
              style={{
                padding: theme.spacing(2),
                border: "none",
                boxShadow: "none",
              }}
              className="subscribeCardInner"
            >
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  Subscribe to Our Emails
                </Typography>
                <Typography variant="body1">
                  Enter your email address to receive the latest notifications,
                  newsletters, and updates from WIN!
                </Typography>
                <TextField
                  label="Your email address"
                  variant="outlined"
                  margin="normal"
                />
                <Button variant="contained" className="submitBtn">
                  Subscribe
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default ContactUs;

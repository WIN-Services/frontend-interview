import React from "react";

// import Material-UI components
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import "./ContactForm.css";

const ContactForm = ({ userData, handleChange, submitForm }) => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          component="form"
          noValidate
          sx={{ mt: 3, ml: 3, fontFamily: "Axiforma" }}
          onSubmit={submitForm}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <label className="contact-form-label">Name</label>
              <TextField
                size="medium"
                variant="outlined"
                autoFocus
                autoComplete="given-name"
                name="name"
                placeholder="Full Name"
                sx={{ fontFamily: "Axiforma" }}
                required
                fullWidth
                value={userData.name}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <label className="contact-form-label">Email</label>
              <TextField
                required
                fullWidth
                autoComplete="family-name"
                id="email"
                name="email"
                size="medium"
                placeholder="xyz@abc.com"
                sx={{ fontFamily: "Axiforma" }}
                value={userData.email}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <label className="contact-form-label">Phone Number</label>
              <TextField
                size="medium"
                autoComplete="email"
                required
                fullWidth
                id="phone"
                name="phone"
                placeholder="(123)456-7890"
                sx={{ fontFamily: "Axiforma" }}
                value={userData.phone}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <label className="contact-form-label">ZIP Code</label>
              <TextField
                size="medium"
                autoComplete="zipcode"
                required
                fullWidth
                name="zipcode"
                id="zipcode"
                placeholder="XXXXX"
                sx={{ fontFamily: "Axiforma" }}
                value={userData.code}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <label className="contact-form-label">Message</label>
              <TextField
                required
                name="message"
                fullWidth
                id="Message"
                size="large"
                autoComplete="message"
                placeholder="Please type it in here..."
                value={userData.message}
                onChange={(e) => {
                  handleChange(e);
                }}
                multiline
                sx={{ fontFamily: "Axiforma" }}
                rows={6}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, borderRadius: "10px" }}
            style={{ background: "#004461", fontFamily: "Axiforma" }}
            size="large"
          >
            Submit
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default ContactForm;

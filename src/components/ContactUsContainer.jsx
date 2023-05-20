import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Content from "@mui/material/CardContent";

import { ContactForm, Sidedetail, Footer } from ".";

import React, { useState } from "react";

const initialState = {
  name: "",
  email: "",
  phone: "",
  zipcode: "",
  message: "",
};

const ContactUsContainer = () => {
  const [userData, setUserData] = useState(initialState);

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(userData);
    fetch("/api/contact", {
      method: "POST",
      body: userData,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json)
      .catch((data) => console.log(data));
  };

  return (
    <div>
      <Card sx={{ minWidth: 275, mt: 3, mb: 3, borderRadius: "20px" }}>
        <Content>
          <Grid container spacing={2}>
            <Grid item md={4} xs={12}>
              <Sidedetail />
            </Grid>
            <Grid item md={8} xs={12}>
              <ContactForm
                userData={userData}
                handleChange={handleChange}
                submitForm={submitForm}
              />
            </Grid>
          </Grid>
        </Content>
      </Card>
      <Card sx={{ minWidth: 275, mt: 3, mb: 3 }}>
        <Content sx={{ background: "#eeeeee" }}>
          <Footer />
        </Content>
      </Card>
    </div>
  );
};

export default ContactUsContainer;

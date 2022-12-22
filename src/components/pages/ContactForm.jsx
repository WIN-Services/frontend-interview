import React from "react";
import { Container, Box, Grid } from "@mui/material";
import Form from "./../ui/Form";
import ContactUs from "./../ui/ContactUs";
import Footer from "./../ui/Footer";

const ContactForm = () => {
  return (
    <div>
      <Container>
        <Box
          sx={{
            bgcolor: "white",
            borderRadius: "5px",
            marginTop: "50px",
            boxShadow:
              "0px 54px 54px rgba(74, 58, 255, 0.02), 1px 4px 104px rgba(20, 20, 43, 0.04), 0px 98px 66px rgba(19, 18, 66, 0.02)",
          }}
        >
          {/* <Paper elevation={1}> */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} md={4}>
              <ContactUs />
            </Grid>
            <Grid item xs={12} sm={8} md={8}>
              <Form />
            </Grid>
          </Grid>
          {/* </Paper> */}
        </Box>
        <Footer />
      </Container>
    </div>
  );
};

export default ContactForm;

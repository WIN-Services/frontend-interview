import * as React from 'react';
import axios from 'axios'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {
  leftContainerHeading,
  leftContainerSubHeading,
  leftContainerText,
  labelText,
  sumbitButtonStyle,
  subscibeBtn,
  rightInputStyle,
  leftInputStyle,
  messageInputStyle
} from "../Style";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


export default function ContactUs() {

  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
   await axios.post('/api/contact',data)
    .then(()=>{
       console.log({
      name: data.get('name'),
      email: data.get('email'),
      number: data.get('number'),
      zipcode: data.get('zipcode'),
      message: data.get('message'),
    });
    })
   .catch((err)=>{
  console.log(err.message);
   })

  };

  return (
    <>
     <Grid container component="main" sx={{ maxWidth: "100vw" }}>
  <CssBaseline />
  <Grid item xs={12} sm={6} md={6}>
    <Box
      style={{ height: "100%" }}
      sx={{ bgcolor: "#FAFAFA", m: 2.5, p: 2.5, borderRadius: 5 }}
    >
      <Grid sx={{ pl: 3 }}>
        <Typography style={leftContainerHeading}>Contact Us</Typography>
        <Typography style={leftContainerSubHeading}>
          Inspections
          <br />
          <span style={leftContainerText}>(800) 309-6753 | info@wini.com</span>
        </Typography>
        <Typography style={leftContainerSubHeading}>
          Franchising
          <br />
          <span style={leftContainerText}>(800) 309-6753 | info@wini.com</span>
        </Typography>
        <Typography style={leftContainerSubHeading}>
          Vendors
          <br />
          <span style={leftContainerText}>
            (312) 557-9319 | vendors@wini.com{" "}
          </span>
        </Typography>
      </Grid>
    </Box>
  </Grid>
  <Grid item xs={12} sm={6} md={6}>
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit}
      sx={{ mt: 6, p: 2.5 }}
      maxWidth="lg"
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <InputLabel style={labelText}>Name</InputLabel>
          <TextField
            required
            fullWidth
            id="name"
            name="name"
            placeholder="Full Name"
            variant="standard"
            sx={{ ...leftInputStyle,width: '100%',
            '@media (max-width: 600px)': {
              width: '80%',
            }, }}
            InputProps={{
              disableUnderline: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel style={labelText}>Email</InputLabel>
          <TextField
            required
            fullWidth
            id="email"
            name="email"
            placeholder="xyz@abc.com"
            variant="standard"
            sx={{ ...rightInputStyle, width: '80%',
            '@media (max-width: 600px)': {
              width: '80%',
            }, }}
            InputProps={{
              disableUnderline: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel style={labelText}>Phone Number</InputLabel>
          <TextField
            required
            fullWidth
            id="number"
            name="number"
            placeholder="(123) 456-7890"
            variant="standard"
            sx={{ ...leftInputStyle, width: '100%',
            '@media (max-width: 600px)': {
              width: '80%',
            }, }}
            InputProps={{
              disableUnderline: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel style={labelText}>ZIP Code</InputLabel>
          <TextField
            required
            fullWidth
            id="zipcode"
            name="zipcode"
            placeholder="XXXXX"
            variant="standard"
            sx={{ ...rightInputStyle, width: '80%',
            '@media (max-width: 600px)': {
              width: '80%',
            },}}
            InputProps={{
              disableUnderline: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel style={labelText}>Message</InputLabel>
          <TextField
            multiline
            rows={5}
            fullWidth
            id="message"
            name="message"
            placeholder="Please type it in here... "
            variant="standard"
            sx={{ ...messageInputStyle, width: '80%',
            '@media (max-width: 600px)': {
              width: '80%',
            }, }}
            InputProps={{
              disableUnderline: true,
            }}
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        style={sumbitButtonStyle}
      >
        Submit
      </Button>
    </Box>
  </Grid>
</Grid>


      <Grid container sx={{ p: 2.5 }}>
        <Box
          component="footer"
          sx={{ bgcolor: "#EEEEEE", mt:7.5,p: 2.5, borderRadius: 5, width: "100vw" }}
        >
          <Container>
            <Typography
              sx={{
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "36px",
                mb: 2,
              }}
              align="center"
              gutterBottom
            >
              Subscribe to our emails
            </Typography>
            <Typography
              sx={{ fontStyle: "normal", fontWeight: "400", fontSize: "18px" }}
              align="center"
              gutterBottom
            >
              Enter your email address to receive the latest notifications,
              newsletters, and updates from WIN!
            </Typography>
            <Grid
              container
              sx={{
                display: "flex",
                align: "center",
                justifyContent: "center",
              }}
            >
              <TextField
                required
                id="name"
                name="name"
                placeholder="Your Email Address"
                sx={{
                  bgcolor: "#FFFFFF",
                  m: 5,
                  height: "56px",
                  width: "370px",
                }}
              />
              <Button variant="contained" style={subscibeBtn}>
                Subscribe
              </Button>
            </Grid>
          </Container>
        </Box>
      </Grid>
   </>
  );
}
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import InputLabel from '@material-ui/core/InputLabel';


function App() {
  return (
    <div className="App">
    <Grid container  className= "paddingStyle" spacing={3}>
    <Paper className ="insideContainer">
    <Grid item xs={12} sm={6} md={4} lg={4} ><Paper className= "paddingCard">
          <h1>Contact us</h1>
          <h4>Inspection</h4>
          (800) 309-6753 | info@wini.com 
          <h4>Franchising</h4>
          (800) 309-6753 | info@wini.com 
          <h4>Vendors</h4>
          (312) 557-9319 | vendors@wini.com

          </Paper>

        </Grid>
        
        <Grid className = "padding" item xs={12} sm={6} md={6} lg={6}>
          <Grid container className= "paddingCard" spacing={3} >
          <Grid item xs={12} sm={6} md={6} lg={6}> 
      <div className= "labelStyle">Name</div>
       <TextField
          id="filled-password-input"
          label="Full Name"
          type="Full Name"
          autoComplete="Full Name"
          variant="outlined"
        />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}> 
        <div className= "labelStyle">E-mail</div>
        <TextField   
          id="filled-password-input"
          label="xyz@abc.com"
          type="xyz@abc.com"
          autoComplete="xyz@abc.com"
          variant="outlined"
        />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}> 
        <div className= "labelStyle">Phone Number</div>
        <TextField
          id="filled-password-input"
          label="(123) 456-7890"
          type="(123) 456-7890"
          autoComplete="(123) 456-7890"
          variant="outlined"
        />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}> 
        <div className= "labelStyle">Zip Code</div>
        <TextField
          id="filled-password-input"
          label="xxxxx"
          type="xxxxx"
          autoComplete="xxxxx"
          variant="outlined"
        />
        </Grid>
        <Grid item xs={12} sm={12} md={10} lg={10}> 
        <div className= "labelStyle">Message</div>
        <TextareaAutosize aria-label="minimum height"  className= "textAreaStyle" minRows={10}  placeholder="Please type it in here..." />
      </Grid>
      
    <Grid item xs={12} sm={6} md={6} lg={6}>
    <Button variant="contained" color="primary">
  Submit
</Button>
  </Grid>
    </Grid>
    
    </Grid>
    </Paper>
    <Grid container className= "inside" spacing={3} >
     <Grid className = {`paddings subscribeStyle`} item xs={12} sm={8} md={8} lg={8}>
     
     
     <h3>Subscribe to our emails </h3>
    <span>Enter your email address to receive the latest notifications, newsletters, and updates from WIN! </span>
    <div className='displayStyle'>
    <TextField   
          id="filled-password-input"
          label="Your email address"
          type="Your email address"
          autoComplete="Your email address"
          variant="outlined"
          size="small"
          className= "backgroundText"
        />
      
    <Button className= "buttonStyle" variant="contained" color="primary">
    
  Subscribe
</Button>
</div>

    
     </Grid>
     </Grid>
    </Grid>
    
   
   
    </div>
  )
}

export default App;

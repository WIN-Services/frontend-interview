import React from 'react';
import "../ContactTop.css"
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import { useState } from "react";

import ReactDOM from "react-dom"


const RightContInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(7),
    },
    '& .MuiInputBase-input': {
      borderRadius: 8,
      backgroundColor: theme.palette.mode === 'light' ? '#ffffff' : '#ffffff',
      boxShadow: '0px 2px 6px rgba(19, 18, 66, 0.07)',
      fontSize: 18,
      fontFamily:'Open Sans',
      width: '150%',
      padding: '6% 12%',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),

    },
  }));

  const defaultValues = {
    fullname: "",
    email: "",
    phoneno: "",
    zipcode: "",
    message: "",
  };
  
  
function ContactUsTop(){
  
  
   
  const [formValues, setFormValues] = useState(defaultValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    
    console.log(formValues);
ReactDOM.render()

fetch('http://localhost:3000/contact/api', {  // Enter your IP address here

method: 'POST', 
mode: 'cors', 
body: JSON.stringify(formValues) // body data type must match "Content-Type" header

})
    
  };


    return(
        
          <form  onSubmit={handleSubmit}>
             <Grid container sm={10} md={10} lg={10} id="topCont">
                   <Grid container sm={10}  md={10} lg={4} id="leftCont">
                    <div id="heading">Contact Us</div>
                    <div id='commonDiv'>
                        <h3>Inspections</h3>
                        <p>(800) 309-6753 | info@wini.com</p>
                    </div>
                    <div id='commonDiv'>
                        <h3>Franchising</h3>
                        <p>(800) 309-6753 | info@wini.com</p>
                    </div>
                    <div id='commonDiv'>
                        <h3>Vendors</h3>
                        <p>(312) 557-9319 | vendors@wini.com</p>
                    </div>
                   </Grid>

                   <Grid container sm={10} md={10} lg={6} id="rightCont">

                   <Grid container sm={10} md={10} lg={12} id='commondiv2'>
                   <Grid container sm={10} md={10} lg={6} id='input1'>
                            <h4 >Name</h4>
                            <RightContInput placeholder='Full Name' name="fullname" value={formValues.fullname} onChange={handleInputChange} style={{width: '90%'}}/>
                    </Grid>

                    <Grid container sm={10} md={10} lg={6} id='input2' >
                            <h4 >Email</h4>
                            <RightContInput placeholder='xyz@abc.com' name="email" value={formValues.email} onChange={handleInputChange} style={{width: '90%'}} />
                    </Grid>
                    </Grid>

                    <Grid container sm={10} md={10} lg={12} id='commondiv3'>
                   <Grid container sm={10} md={10} lg={6} id='input1'>
                            <h4 >Phone Number</h4>
                            <RightContInput placeholder='(123) 456-7890' name="phoneno" value={formValues.phoneno} onChange={handleInputChange} style={{width: '90%'}}/>
                    </Grid>

                    <Grid container sm={10} md={10} lg={6} id='input2' >
                            <h4 >ZIP Code</h4>
                            <RightContInput placeholder='XXXXX' name="zipcode" value={formValues.zipcode} onChange={handleInputChange} style={{width: '90%'}} />
                    </Grid>
                    </Grid>
                    
                    <Grid container sm={10} md={10} lg={12} id='commondiv3'>
                    <Grid container sm={10} md={10} lg={12} id='input1'>
                            <h4 >Message</h4>
                            <RightContInput multiline rows={4} name="message" value={formValues.message} onChange={handleInputChange} placeholder='Please type it in here...' style={{width: '90%'}} />
                    </Grid>
                    </Grid>
                    
                    <Grid container sm={10} md={10} lg={12} id='commondiv3'>
                    <Grid container sm={10} md={10} lg={4} id='input1'>
                   
                    <Button variant="contained" size="large" id="submit" type="submit">SUBMIT</Button>
           
                    </Grid>
                    </Grid>
                   </Grid>

             </Grid>
             </form>
        
    );
}


export default ContactUsTop;
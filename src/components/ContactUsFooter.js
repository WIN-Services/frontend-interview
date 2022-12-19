import React from "react"
import   "../ContactFooter.css"
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const BottomContInput = styled(InputBase)(({ theme }) => ({
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


function ContactUsFooter(){
    return(
        <div>
           <Grid container sm={10} md={10} lg={10}   id="footercont">
                 <p id="h1" >Subscribe to our emails</p>

                <p id="h2">
                    Enter your email address to receive the latest notifications, newsletters, and updates from WIN!
                </p>
                <Grid container sm={10} md={10} lg={10} id="emaildiv">
                     <BottomContInput id="filled-basic" placeholder="Your email address" color="" />
                     <Button variant="contained" size="large" id="subscribe">Subscribe</Button>
                    </Grid>
                
            </Grid>
        </div>
    );
}

export default ContactUsFooter;
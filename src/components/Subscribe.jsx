import React from 'react';
import {TextField, Button} from '@mui/material';
import './Subscribe.css';

function Subscribe() {
  return (
    <div className="subscribe">
        <h1 className="text-heading">Subscribe to our emails</h1>
        <p className='para-subs' >Enter your email address to receive the latest notifications, newsletters, and updates from WIN! </p>
        <div className="subsForm">
            <div className="field">
                <TextField 
                    style={{"backgroundColor": "#fff"}} id="outlined-basic" placeholder='Your email address' size='small' variant="outlined"
                />
            </div>
            <div className="subBtn">
                <Button style={{"backgroundColor": "#D4A656"}} variant="contained" >Subscribe</Button>
            </div>
        </div>
    </div>
  );
}

export default Subscribe;
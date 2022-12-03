import React from 'react';
import {TextField, Button} from '@mui/material';
import './Contact.css';

const Contact =()=>{

    return(

        <div className="contact">
            <div className="left">
                <h1 className="text-subHeading">Contact Us</h1>
                <h1 className="contact-head">Inspections</h1>
                <h1 className="contact-row">(800) 309-6753 | info@wini.com </h1>

                <h1 className="contact-head">Franchising</h1>
                <h1 className="contact-row">(800) 309-6753 | info@wini.com </h1>

                <h1 className="contact-head">Vendors</h1>
                <h1 className="contact-row">(312) 557-9319 | vendors@wini.com </h1>

            </div>

            <div className="right">
                <form action="" className='form'>

                    <div className="form-row">
                        <p className="label">Name</p>
                        <TextField id="outlined-basic" placeholder='Full name' size='small' variant="outlined" />
                    </div>

                    <div className="form-row">
                        <p className="label">Email</p>
                        <TextField id="outlined-basic" placeholder='xyz@abc.com' size='small' variant="outlined" />
                    </div>

                    <div className="form-row">
                        <p className="label">Phone Number</p>
                        <TextField id="outlined-basic" placeholder='(123) 456-7890' size='small' variant="outlined" />
                    </div>

                    <div className="form-row">
                        <p className="label">ZIP Code</p>
                        <TextField id="outlined-basic" placeholder='XXXXX' size='small' variant="outlined" />
                    </div>

                    <div className="text-area">
                        <p className="label">Message</p>
                        <TextField
                            multiline={true}
                            rows={5}
                            placeholder="Please type it in here..."
                            style={{"width": "250px"}}
                        />
                    </div>

                    <div className="submit-btn">
                        <Button variant="contained" >Submit</Button>
                    </div>

                </form>
            </div>

        </div>

    );

}

export default Contact;
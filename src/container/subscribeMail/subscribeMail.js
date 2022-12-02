import React, { useRef } from "react";
import Button from '@material-ui/core/Button';

import EmailInputField from 'components/emailField/emailField';

import './subscribe.css';

function SuscribeMail() {

    let email = useRef(null);

    const onUpdateDeatils = ( value ) => {
        email.current = value;
    }

    const suscribe = () => {
        console.log("suscribe", email);
    }

    return (
        <div className="suscribe_mail">
            <h2>Subscribe to our mail</h2>
            <p>Enter your email address to receive the latest notification, newsletters, and updates from WIN!</p>
            <div className="field_body d-flex w-100 gap-50 mt-40px">
                <div className="text_field d-flex w-100 align_center">
                    <EmailInputField placeholder="Your email address" updateDeatils={onUpdateDeatils} />

                    <div className="suscribe_btn">
                        <Button variant="contained" color="primary" disableElevation onClick={ suscribe } >
                            Subscribe
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuscribeMail;
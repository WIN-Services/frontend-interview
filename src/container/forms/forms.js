import React, { useRef, useState } from "react";
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import TextInputField from 'components/textField/textField';
import NumberInputField from 'components/numberField/numberField';
import InputLabelField from 'components/inputLabel/inputLabel';
import EmailInputField from 'components/emailField/emailField';

import customFormValidator from 'utils/customFormValidator';

/* eslint-disable no-useless-escape */

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

function ContactForm() {

    const [formValidationDetails, setFormValidationDetails] = useState({
        name: {
            error: {
                isError: false,
                message: "",
            },
            checkParams: ["required"]
        },
        email: {
            error: {
                isError: false,
                message: "",
            },
            checkParams: ["required", "regexValidation"],
            validation: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
        },
        phoneNumber: {
            error: {
                isError: false,
                message: "Invalid phone number",
            },
            checkParams: ["required", "regexValidation"],
            validation: '^[0-9]{10}$'
        },
        message: {
            error: {
                isError: false,
                message: "",
            },
            checkParams: ["required"]
        },
        zipcode: {
            error: {
                isError: false,
                message: "Inavlid zipcode",
            },
            checkParams: ["required", 'regexValidation'],
            validation: '^[0-9]*$'
        },
    });

    let formDetails = useRef({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
        zipcode: ""
    })

    const [open, setOpen] = React.useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }

        setOpen(false);
      };

    const onUpdateDeatils = ( key, value ) => {
        formDetails.current[key] = value;
    }

    const submitDetails = () => {        
        const { isError, tempState } = customFormValidator(formValidationDetails, formDetails.current);   
        // console.log(isError)     
        if( !isError ) {
            console.log("valueeeeeeeeeee", formDetails.current);
            setOpen( true );
        }      
        setFormValidationDetails( {...tempState} )
    }

    return (
        <div className="contact_form">
            <div className="d-flex w-100 gap-50">
                <div className="text_field w-100">
                    <InputLabelField label="Name" />
                    <TextInputField placeholder="Full Name"  minRows={1} updateDeatils={(value) => onUpdateDeatils('name', value) } />
                    { formValidationDetails.name.error.isError && <p style={{ color: 'red' }}>Required</p> }
                </div>           

                <div className="text_field w-100">
                    <InputLabelField label="Email" />
                    <EmailInputField placeholder="xyz@abcd.com" updateDeatils={(value) => onUpdateDeatils('email', value) } validationError={formValidationDetails.email.error.isError} />
                </div>
            </div>
            <div className="d-flex w-100 gap-50 mt-40px">
                <div className="text_field w-100">
                    <InputLabelField label="Phone Number" />
                    <NumberInputField placeholder="(123)456-7890" maxLength={10} updateDeatils={(value) => onUpdateDeatils('phoneNumber', value) }  />
                    { formValidationDetails.phoneNumber.error.isError && <p style={{ color: 'red' }}>{ formValidationDetails.phoneNumber.error.message }</p> }
                </div>

                <div className="text_field w-100">
                    <InputLabelField label="ZIP Code" />
                    <NumberInputField placeholder="xxxxxx" maxLength={6} updateDeatils={(value) => onUpdateDeatils('zipcode', value) } />
                    { formValidationDetails.zipcode.error.isError && <p style={{ color: 'red' }}>{ formValidationDetails.zipcode.error.message }</p> }
                </div>
            </div>

            <div className="text_field w-100 mt-40px">
                <InputLabelField label="Message" />
                <TextInputField placeholder="Please type it here...." minRows={10} updateDeatils={(value) => onUpdateDeatils('message', value) } formValidationDetails={ formValidationDetails } />
                { formValidationDetails.message.error.isError && <p style={{ color: 'red' }}>Required</p> }
            </div>

            <div className="btn mt-40px">
                <Button variant="contained" color="primary" disableElevation onClick={ submitDetails }>
                    Submit
                </Button>
            </div>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    This is a success message!
                </Alert>
            </Snackbar>
        </div>
    )
}

export default ContactForm;
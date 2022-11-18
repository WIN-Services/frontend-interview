import React, { useEffect, useState } from "react";
import TextField from '@material-ui/core/TextField';

/* eslint-disable no-useless-escape */

function EmailInputField( props ) {
    const { placeholder, updateDeatils, validationError=false } = props;
    const [value, setValue] = useState("");
    const [error, setError] = useState( validationError );

    useEffect(() => {
        setError( Boolean(validationError) );
    }, [validationError])

    const getValue = ( event ) => {
        let val = event.target.value;
        const regex = new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);
        if (regex.test(val) || !val) {            
            if (updateDeatils) {
                updateDeatils(val);
            }
            setError( false );
        } else {
            setError( true );
        }
        setValue(val);
    }

    return (
        <>
            <TextField
                fullWidth
                type="email"
                placeholder={placeholder}
                variant="outlined"
                value={ value }
                onChange={ getValue }
                error={ error }
                helperText={ error ? "Please enter correct email" : "" }
            />
            {/* { error && <p style={{ color: 'red' }}>Please enter correct email</p> } */}
        </>
    )
}

export default EmailInputField;
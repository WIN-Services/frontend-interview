import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';

function TextInputField( props ) {
    const { placeholder, minRows, updateDeatils } = props;
    const [value, setValue] = useState('');

    const getValue = ( event ) => {
        let val = event.target.value;
        setValue( val );
        if( updateDeatils ) {
            updateDeatils( val );
        }
    }

    return (
        <TextField
                fullWidth
                type="text"
                minRows={minRows}
                placeholder={ placeholder }
                variant="outlined"
                value={ value }
                onChange={ getValue }
            />
    )
}

export default TextInputField;
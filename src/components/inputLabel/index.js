import React from "react";
import InputLabel from '@material-ui/core/InputLabel';

function InputLabelField( props ) {
    const { label } = props;
    return (
        <>
            <InputLabel shrink htmlFor="bootstrap-input">{ label }</InputLabel>
        </>
    )
}

export default InputLabelField;
import React from 'react'
import { TextField } from '@mui/material';
import './Input.css';

const Input = (props) => {
  return (
    <div className='input-block'>
        <h4 className='d-block'>{props.label}</h4>
        <input className='col-12 text-field' variant="outlined" placeholder={props.placeholder} type={props.type} />
    </div>
  )
}

export default Input
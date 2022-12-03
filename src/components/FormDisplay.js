import { Grid, Typography } from '@mui/material'
import React from 'react'
import FormComponent from './FormComponent'

const FormDisplay = () => {
  return (
    <Grid container sx={{backgroundColor:"#ffffff",borderRadius:"20px"}}>
        <Grid item sm={3} sx={{backgroundColor:"#FAFAFA",margin:"20px",borderRadius:"20px",padding:"20px"}}>
            <Typography sx={{fontSize:"25px",fontWeight:800}}>
            Contact Us
            </Typography>
            <Typography sx={{marginTop:"30px",fontSize:"18px"}}>
            Inspections
            </Typography>
            <Typography sx={{fontSize:"12px"}}>
            (800) 309-6753 | info@wini.com 
            </Typography>
            <Typography sx={{marginTop:"15px",fontSize:"18px"}}>
            Franchising
            </Typography>
            <Typography sx={{fontSize:"12px"}}>
            (800) 309-6753 | info@wini.com 
            </Typography>
            <Typography sx={{marginTop:"15px",fontSize:"18px"}}>
            Vendors
            </Typography>
            <Typography sx={{fontSize:"12px"}}>
            (312) 557-9319 | vendors@wini.com
            </Typography>
        </Grid>
        <Grid item sm={8}>
            <FormComponent/>
        </Grid>
    </Grid>
  )
}

export default FormDisplay
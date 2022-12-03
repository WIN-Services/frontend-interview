import {  TextField ,Box,Grid, Button} from '@mui/material'
import React from 'react'

const FormComponent = () => {
  return (
    <Box sx={{paddingTop:"90px"}}>
        <Grid container>
            <Grid sm={6}>
                <label className="label-name">Name</label> <br/>
            <TextField sx={{borderRadius:"10px",width:"80%",marginTop:"10px",boxShadow:"0px 2px 6px rgba(19, 18, 66, 0.07)",border:"1px solid #EFF0F7"}} id="outlined-basic" label="Full Name" variant="outlined" />
            </Grid>
            <Grid sm={6}>
                <label className="label-name">Email</label> <br/>
            <TextField sx={{borderRadius:"10px",width:"80%",marginTop:"10px",boxShadow:"0px 2px 6px rgba(19, 18, 66, 0.07)",border:"1px solid #EFF0F7"}} id="outlined-basic" label="xyz@abc.com" variant="outlined" />
            </Grid>
        </Grid>

        <Grid container sx={{marginY:"30px"}}>
            <Grid sm={6}>
                <label className="label-name">Phone Number</label> <br/>
            <TextField sx={{borderRadius:"10px",width:"80%",marginTop:"10px",boxShadow:"0px 2px 6px rgba(19, 18, 66, 0.07)",border:"1px solid #EFF0F7"}} id="outlined-basic" label="(123) 456-7890" variant="outlined" />
            </Grid>
            <Grid sm={6}>
                <label className="label-name">Zip Code</label> <br/>
            <TextField sx={{borderRadius:"10px",width:"80%",marginTop:"10px",boxShadow:"0px 2px 6px rgba(19, 18, 66, 0.07)",border:"1px solid #EFF0F7"}} id="outlined-basic" label="XXXXX" variant="outlined" />
            </Grid>
        </Grid>
        <Box>
        <label className="label-name">Message</label> <br/>
            <TextField multiline rows={4} sx={{borderRadius:"10px",width:"80%",marginTop:"10px",boxShadow:"0px 2px 6px rgba(19, 18, 66, 0.07)",border:"1px solid #EFF0F7"}} id="outlined-basic" label="Please type it in here..." variant="outlined" /> <br/>
            <Button sx={{backgroundColor:"#005981",color:"#ffffff",marginY:"30px",padding:"8px 15px"}}>Submit</Button>
        </Box>
    </Box>
  )
}

export default FormComponent
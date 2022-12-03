import { TextField,Box, Typography, Grid, Button } from '@mui/material'
import React from 'react'

const Footercomponent = () => {
  return (
    <Box sx={{marginTop:"20px",background:"#EEEEEE",borderRadius:"12px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <Typography sx={{margin:"30px 20px 20px",fontSize:"26px",fontWeight:600}}>
        Subscribe to our emails 
        </Typography>
        <Typography>
        Enter your email address to receive the latest notifications, newsletters, and updates from WIN! 
        </Typography>

        <Grid container sx={{maxWidth:"50%",margin:"30px 30px 50px"}}>
            <Grid item sm={8}>
                <TextField id="outlined-basic" label="Your email address" variant="outlined"  sx={{width:"100%",borderRadius:"10px",background:"#ffffff",boxShadow:"0px 2px 6px rgba(19, 18, 66, 0.07)",border:"1px solid #EFF0F7"}} />
            </Grid>
            <Grid item sm={3}>
                <Button sx={{background:"#D4A656",color:"#ffffff",padding:"15px 12px",marginLeft:"10px"}}>Subscribe</Button>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Footercomponent
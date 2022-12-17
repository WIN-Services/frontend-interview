import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField'
import { FilledInput, styled, Grid, Container, Typography, Input, Button } from '@mui/material';
import { borderRadius, Box } from '@mui/system';

const RounderTextfield = styled(Input)(({theme})=>({
  borderRadius:"10px",
  paddingLeft:'2em',
  paddingRight:'2em',
  paddingTop:"1em",
  paddingBottom:"1em",
  textAlign:"center",
  backgroundColor:"#FFFFFF",
  boxShadow: "0px 2px 6px rgba(19, 18, 66, 0.07)",
  border: '1px solid #EFF0F7',
}))

const RoundedBox = styled(Box)(({theme})=>({
  borderRadius:"10px",
  
}))
const RoundedButton = styled(Button)(({theme})=>({
  borderRadius:"10px",
  paddingLeft:'2em',
  paddingRight:'2em',
  paddingTop:"1em",
  paddingBottom:"1em",
  textAlign:"center",
  border: "2px solid"

}))

function App() {
  return (
      <Container maxWidth="lg" sx={{verticalAlign:"middle", display:"flex", flexDirection:"column", height: {md:"100vh"}, justifyContent:"space-around"}} >
        {
            //Main Box 1 - Top Box -- Contact Us
        }
        <RoundedBox p={3} sx={{
          backgroundColor:"#FFFFFF",
          marginTop:{xs:"3rem", sm:"3rem", md:"0", lg:"0", xl:"0"},
          boxShadow: "0px 54px 54px rgba(74, 58, 255, 0.02), 1px 4px 104px rgba(20, 20, 43, 0.04), 0px 98px 66px rgba(19, 18, 66, 0.02)"
        }}>
            <Grid
              container
              spacing={3}
              direction="row"
              justifyContent="start"
              alignItems="center"
              alignContent="center"
              wrap="wrap"
              height="100%"

            >
              {
                  //Left side--CONTACT info
              }
              <Grid item xs={12} sm={12} md={5} lg={5} sx={{height:"100%"}} >
                <RoundedBox p={2} sx={{backgroundColor: "#FAFAFA", alignContent:"left", height:"100%"}}>
                <Typography variant="h5" color="initial" sx={{fontWeight:"bold", marginBottom:"3rem"}}>Contact Us</Typography>

                  <Grid container spacing={3}>

                  <Grid item xs={12}>
                    <Typography variant="body1" color="initial" sx={{fontWeight:"bold"}}>Inspections</Typography>
                    <Typography variant="body2" color="initial">(800) 309-6753 | info@wini.com</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1" color="initial" sx={{fontWeight:"bold"}}>Franchising</Typography>
                    <Typography variant="body2" color="initial">(800) 309-6753 | info@wini.com</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1" color="initial" sx={{fontWeight:"bold"}}>Vendors</Typography>
                    <Typography variant="body2" color="initial">(800) 309-6753 | vendors@wini.com </Typography>
                  </Grid>
                  

                  </Grid>
                  
                  

                </RoundedBox>
              </Grid>
              {
                  //Right side--NAME/PHONE NUMBER/EMAIL/ZIPCODE
              }
              <Grid item xs={12}  sm={12} md={6} lg={6}>

                <Grid
                  container
                  spacing={3}
                  p={2}
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  alignContent="stretch"
                  wrap="wrap"
                  
                >
                  

                  <Grid item xs={12} sm={6}>
                    <Typography variant="body1" color="initial" sx={{marginBottom:"0.5rem", fontWeight:500}}>Name</Typography>
                    <RounderTextfield
                      disableUnderline
                      fullWidth
                      label="name"
                      placeholder="Full Name"
                      
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Typography variant="body1" color="initial" sx={{marginBottom:"0.5rem", fontWeight:500}}>Email</Typography>
                    <RounderTextfield
                    fullWidth
                      disableUnderline
                      label="email"
                      placeholder="xyz@abc.com"
                      
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Typography variant="body1" color="initial" sx={{marginBottom:"0.5rem", fontWeight:500}}>Phone Number</Typography>
                    <RounderTextfield
                    fullWidth
                      disableUnderline
                    
                      label="phonenumber"
                      placeholder="(123) 456-7890"
                      
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Typography variant="body1" color="initial" sx={{marginBottom:"0.5rem", fontWeight:500}}>ZIP Code</Typography>
                    <RounderTextfield
                      disableUnderline
                      fullWidth
                      label="zip"
                      placeholder="XXXXX"
                      
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Typography variant="body1" color="initial" sx={{marginBottom:"0.5rem"}}>Message</Typography>
                    <RounderTextfield
                      disableUnderline
                      multiline
                      fullWidth
                      rows={5}
                      label="message"
                      placeholder="Please type here"
                      
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <RoundedButton variant="contained" sx={{backgroundColor:"#005981", border:"0px", fontWeight:"bold"}}>
                      SUBMIT
                    </RoundedButton>
                  </Grid>
                  
                  </Grid>
              </Grid>


            </Grid>
          
        </RoundedBox>
        {
            //Main Box 2 - Bottom Box -- SUBSCRIBE Option
          }

        <RoundedBox p={3} sx={{
          marginTop: {xs:"3rem", sm:"3rem", md:"0"},
          marginBottom: {xs:"3rem", sm:"3rem", md:"0"},
          backgroundColor:"#EEEEEE",
          }}>
            <Grid
                container
                spacing={4}
                direction="row"
                justifyContent="center"
                alignItems="center"
                alignContent="center"
                wrap="wrap"
                
              >   
              <Grid item xs={12} sx={{textAlign:"center"}}>
                  <Typography variant="h4" color="initial">Subscribe to our emails</Typography>  

              </Grid>
              <Grid item xs={12} sx={{textAlign:"center"}}>
                  <Typography variant="body1" color="initial">Enter your email address to receive the latest notifications, newsletters, and updates from WIN!</Typography>
              </Grid>
             
                <Grid item xs={12} sm={6} md={4}>
                    <RounderTextfield 
                    disableUnderline
                    fullWidth
                    placeholder="Your email address" 

                    />
                  
                </Grid>
                <Grid item xs={12} sm={3}>
                  <RoundedButton fullWidth variant="contained"sx={{textTransform:"none", backgroundColor:"#D4A656", borderColor:"#D4A656", fontWeight:"bold"}} size="large">
                    Subscribe
                  </RoundedButton>
                </Grid>
                
              </Grid>
        </RoundedBox>
        
      </Container>
      
      
  );
}

export default App;

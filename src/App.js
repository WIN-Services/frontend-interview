import React from 'react';
import './App.css';
import ContactForm from './components/contactForm';
import { Paper, Grid } from "@material-ui/core";
import { alpha, styled } from '@mui/material/styles';
import TextField from "@material-ui/core/TextField";

const CustomInput = styled(TextField)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: '#fff',
    border: '1px solid',
    borderColor: '#e8eaed',
    fontSize: 16,
    // width: 'auto',
    padding: '16px 32px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));


function App() {
  return (
    <div className="App">
      <Paper elevation={2}>
      <div className='main-container'>
        <div className='contact-us'>
          <h1>Contact Us</h1>
          <div className='contact-box'>
            <section>
            <p className='contact-us-title'>Inspections</p>
            <p>{"(800) 309-6753 | info@wini.com" } 
            </p>
            </section>
            <section>
            <p className='contact-us-title'>Franchising</p>
            <p>{"(800) 309-6753 | info@wini.com"}
            </p>
            </section>
            <section>
            <p className='contact-us-title'>Vendors</p>
            <p>{"(800) 309-6753 | info@wini.com"}
            </p>
            </section>
            
          </div>
        </div>
        <div className='form'>
        <ContactForm/>
         </div>
      </div>
      </Paper>
      <footer className='footer'>
        <div className='footer-container'>
          <h1>Subscribe to our emails</h1>
          <p>Enter your email address to receive the latest notifications, newsletters and updates from WIN!</p>
          <form>
            <Grid container alignItems="flex-start" >
            <CustomInput
        id="outlined-full-width"
        placeholder="Your email address"
        InputLabelProps={{
          shrink: true,
        }}
        name="subscription-email"
        variant="outlined"
      />
      <button 
                    type="submit"
                    onClick={(event)=> event.preventDefault()}
                    >Subscribe</button>
            </Grid>
          </form>
        </div>
      </footer>
    </div>
  );
}

export default App;

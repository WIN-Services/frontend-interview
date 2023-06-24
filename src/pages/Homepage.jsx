import React from 'react';
import ContactScreen from '../components/ContactScreen';
import FormComponent from '../components/FormComponent';
import SubscriptionArea from '../components/SubscriptionArea';
import Container from '@mui/material/Container';
import "../App.css";
import Grid from '@mui/material/Grid';

const HomePage = () => {
  return (
    <>
       <Container  fixed className='containerMain'>
      <div className='mainBackground'>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <ContactScreen />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormComponent />
          </Grid>
        </Grid>
        <SubscriptionArea />
      </div>
    </Container>
    </>
  );
};

export default HomePage;



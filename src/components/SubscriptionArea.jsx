import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const SubscriptionArea = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Subscribed:', email);

    setEmail('');
  };


  const StyledHeading = styled(Typography)({
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  });
  
  const StyledSubheading = styled(Typography)({
    fontSize: '1rem',
    color: '#888',
  });
  

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '790px',
        height: 'auto',
        top: '888px',
        left: '101px',
        padding: '52px 184px',
        borderRadius: '12px',
        gap: '10px',
        background: 'whitesmoke',
        marginTop: '70px'
      }}
    >
      <Box sx={{ textAlign: 'center', display: 'flex', alignItems: 'center' }}>
        <div>
        <StyledHeading variant="h4" gutterBottom>
        Subscribe to our emails
      </StyledHeading>
      <StyledSubheading variant="subtitle1" gutterBottom>
        Enter your email address to receive the latest notifications, newsletters, and updates!
      </StyledSubheading>

          <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
            <TextField
              label="Email"
              value={email}
              onChange={handleEmailChange}
              variant="outlined"
              size="small"
              fullWidth
              required
              sx={{
                color: 'white',
                backgroundColor: 'white',
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ borderRadius: '10px', backgroundColor: 'rgba(212, 166, 86, 1)' }}
            >
              Subscribe
            </Button>
          </form>
        </div>
      </Box>
    </Box>
  );
};

export default SubscriptionArea;

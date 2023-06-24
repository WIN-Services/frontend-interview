import React from 'react';
import Box from '@mui/material/Box';
import "../App.css";

const ContactScreen = () => {
  return (
    <div>
      <Box
        sx={{
          width: "300px",
          height: '500px',
          backgroundColor: 'whitesmoke',
        //   '&:hover': {
        //     // backgroundColor: '',
        //     // opacity: [0, 0, 0.7],
        //   },
          padding: '56px',
          borderRadius: '20px',
          marginTop: '10px',
          marginLeft: '10px',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
        }}
      >
<p style={{ color: 'black', fontSize: '25px', fontWeight: '800' }}>Contact Us</p>
<p style={{ color: 'rgba(29, 43, 79, 1)', fontSize: '18px', fontWeight: '600' }}>Inspections</p>
<p style={{ color: 'black', fontSize: '12px', fontWeight: '400' }}>(800) 309-6753 | info@wini.com</p>
<p style={{ color: 'rgba(29, 43, 79, 1)', fontSize: '18px', fontWeight: '600' }}>Franchising</p>
<p style={{ color: 'black', fontSize: '12px', fontWeight: '400' }}>(800) 309-6753 | info@wini.com</p>
<p style={{ color: 'rgba(29, 43, 79, 1)', fontSize: '18px', fontWeight: '600' }}>Vendors</p>
<p style={{ color: 'black', fontSize: '12px', fontWeight: '400' }}>(312) 557-9319| info@wini.com</p>

      </Box>
    </div>
  );
};

export default ContactScreen;
// background: 

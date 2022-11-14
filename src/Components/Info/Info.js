import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


function Info() {
    return (
        <div>
            <Box sx={{
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <Typography variant="h4" gutterBottom sx={{
                    color:"black"
                }}> Contact Us</Typography>

                <Typography variant="subtitle2" gutterBottom sx={{
                    fontSize:"18px",
                    fontWeight:"500"
                }}>Inspection</Typography>
                <Typography variant="overline" gutterBottom >(800) 809-6753 | info@wini.com</Typography>

                <Typography variant="subtitle2" gutterBottom sx={{
                    fontSize:"18px",
                    fontWeight:"500"
                }}>Frenchising</Typography>
                <Typography variant="overline" gutterBottom>(800) 809-6753 | info@wini.com</Typography>

                <Typography variant="subtitle2" gutterBottom sx={{
                    fontSize:"18px",
                    fontWeight:"500"
                }}>Vendors</Typography>
                <Typography variant="overline" gutterBottom>(800) 809-9319 | vendors@wini.com</Typography>

            </Box>
        </div>
    );
}

export default Info;
import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
      border: '1px solid #ced4da',
      fontSize: 16,
      width: 'auto',
      padding: '10px 12px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));
  

function ContactSubscribe() {
    return (
        <div>
            <Box
                sx={{ pt: 3, pb: 3 }}        
            >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h4" align="center">
                            Subscribe to our emails
                        </Typography>         
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle2" gutterBottom align="center">
                            Enter your email address to receive the latest notifications, newsletters and updates from WIN!
                        </Typography>
                    </Grid>
                    <Grid item
                        xs={12}
                        align="center"
                        sx={{ display:'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <FormControl variant="standard">
                            <BootstrapInput
                                placeholder="Your email address"
                                />
                        </FormControl>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ pt: 1.3, pb: 1, ml: 3 }}
                            style={{ background: '#d4a656' }}
                        >
                            Subscribe
                        </Button>  
                    </Grid>
                </Grid>         
            </Box>
        </div>
    );
}

export default ContactSubscribe;
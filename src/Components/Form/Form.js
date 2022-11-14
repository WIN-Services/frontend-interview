import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function Form() {
    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <Box component="form" noValidate sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                
                                id="name"
                                label="Full Name"
                                size="small"
                                autoFocus
                                autoComplete="given-name"
                                name="name"
                                required
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                autoComplete="family-name"
                                id="email"
                                label="Email Address"
                                name="email"
                                size="small"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                size="small"
                                autoComplete="email"
                                required
                                fullWidth
                                id="phone"
                                label="Phone Number"
                                name="phone"
                                
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                
                                size="small"
                                autoComplete="zipcode"

                                required
                                fullWidth
                                name="zipcode"
                                label="Zip Code"
                                id="zipcode"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="message"
                                label="Message"
                                id="Message"
                                size="small"
                                autoComplete="message"
                                multiline
                                rows={4}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2, borderRadius:"10px" }}
                        style={{ background: '#004461' }}
                        size="large"
                    >
                        Submit
                    </Button>
                </Box>
            </Box>
        </div>
    );
}

export default Form;
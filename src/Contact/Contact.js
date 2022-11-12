import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Form from './Form/Form';
import ContactInfo from './ContactInfo/ContactInfo';
import ContactSubscribe from './ContactSubscribe/ContactSubscribe';

function Contact() {
    return (
        <div>
            <Card sx={{ minWidth: 275, mt:3, mb: 3 }}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item md={4} xs={12}>
                            <ContactInfo />           
                        </Grid>
                        <Grid item md={8} xs={12}>
                            <Form />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <Card sx={{ minWidth: 275, mt:3, mb: 3 }}>
                <CardContent sx={{ background: '#eeeeee' }}>
                    <ContactSubscribe />
                </CardContent>
            </Card>
        </div>
    );
}

export default Contact;
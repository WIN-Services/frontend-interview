import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Content from '@mui/material/CardContent';
import Form from './Form/Form';
import Info from './Info/Info';
import Subscribe from './Subscribe/ContactSubscribe';

function Contact() {
    return (
        <div>
            <Card sx={{ minWidth: 275, mt:3, mb: 3 }}>
                <Content>
                    <Grid container spacing={2}>
                        <Grid item md={4} xs={12}>
                            <Info />           
                        </Grid>
                        <Grid item md={8} xs={12}>
                            <Form />
                        </Grid>
                    </Grid>
                </Content>
            </Card>
            <Card sx={{ minWidth: 275, mt:3, mb: 3 }}>
                <Content sx={{ background: '#eeeeee' }}>
                    <Subscribe />
                </Content>
            </Card>
        </div>
    );
}

export default Contact;
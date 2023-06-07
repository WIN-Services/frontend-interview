import axios from 'axios';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const ContactUs = () => {
    const initialValues = {
        name: '',
        email: '',
        phoneNo: '',
        zipCode: '',
        message: '',
        subscribe: ''
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        phoneNo: Yup.string().required('Phone Number is required'),
        zipCode: Yup.string().required('ZIP Code is required'),
        message: Yup.string().required('Message is required'),
        subscribe: Yup.string().email('Invalid email address').required('Email is required')
    });

    
    
    const handleSubmit = async (values) => {
        try {
            
            const response = await axios.post('/api/contact', values);
            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
    const sidebarData = [
        {
            title: 'Inspections',
            para: '(800) 309-6753 | info@wini.com'
        },
        {
            title: 'Franchising',
            para: '(800) 309-6753 | info@wini.com'
        },
        {
            title: 'Vendors',
            para: '(312) 557-9319 | vendors@wini.com'
        }
    ];

    return (
        <div className="contact-us">
            <div className='main-container'>
                <div className="container">
                    <div className="sidebar">
                        <h1 className='heading'>Contact Us</h1>
                        {sidebarData.map((data) => {
                            return (
                                <div className="text-container">
                                    <h2 className='title'>{data.title}</h2>
                                    <h3 className='para'>{data.para}</h3>
                                </div>
                            );
                        })}
                    </div>
                    <div className="form-container">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            <Form>
                                <div className="form-group">
                                    <div className="field-group">
                                        <h3 className='placeholder'>Name</h3>
                                        <Field
                                            id="name"
                                            name="name"
                                            as={TextField}
                                            size='small'
                                            className='text-input'
                                            required
                                            variant="outlined"
                                        />
                                        <ErrorMessage name="name" component="div" className="error-message" />
                                    </div>
                                    <div className="field-group">
                                        <h3 className='placeholder'>Email</h3>
                                        <Field
                                            id="email"
                                            name="email"
                                            as={TextField}
                                            size='small'
                                            type="email"
                                            className='text-input'
                                            required
                                            variant="outlined"
                                        />
                                        <ErrorMessage name="email" component="div" className="error-message" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="field-group">
                                        <h3 className='placeholder'>Phone Number</h3>
                                        <Field
                                            id="phoneNo"
                                            name="phoneNo"
                                            as={TextField}
                                            type="tel"
                                            size='small'
                                            className='text-input'
                                            required
                                            variant="outlined"
                                        />
                                        <ErrorMessage name="phoneNo" component="div" className="error-message" />
                                    </div>
                                    <div className="field-group">
                                        <h3 className='placeholder'>ZIP Code</h3>
                                        <Field
                                            id="zipCode"
                                            name="zipCode"
                                            as={TextField}
                                            type="number"
                                            size='small'
                                            className='text-input'
                                            required
                                            variant="outlined"
                                        />
                                        <ErrorMessage name="zipCode" component="div" className="error-message" />
                                    </div>
                                </div>
                                <div className="message-container">
                                    <div className="message-group">
                                        <h3 className='placeholder'>Message</h3>
                                        <Field
                                            id="message"
                                            name="message"
                                            as={TextField}
                                            multiline
                                            rows={4}
                                            maxRows={4}
                                            className='multiline-input'
                                            required
                                            size='small'
                                            variant="outlined"
                                        />
                                        <ErrorMessage name="message" component="div" className="error-message" />
                                    </div>
                                    <div>
                                        <Button type='submit' variant='contained' className='submit-button'>Submit</Button>
                                    </div>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
                <div className="footer">
                    <h1 className='footer-heading'>Subscribe to our emails</h1>
                    <p className='footer-text'>Enter your email address to receive the latest notifications, newsletters, and updates from WIN!</p>
                    <div className="footer-input-container">
                        <TextField id="subscribe" required type="number" size='small' className='text-input' variant="outlined" />
                        <Button variant='contained' className='subscribe-button'>Subscribe</Button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactUs;


import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';


const CustomButton = styled(Button)({
  borderRadius: '10px',
  backgroundColor: 'rgba(0, 89, 129, 1)',
  paddingLeft: '2rem',
  paddingRight: '2rem',
});

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    zipCode: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = {};
    if (formData.name.trim() === '') {
      validationErrors.name = 'Name is required';
    }
    if (formData.email.trim() === '') {
      validationErrors.email = 'Email is required';
    }
    if (formData.phoneNumber.trim() === '') {
      validationErrors.phoneNumber = 'Phone number is required';
    } else if (!formData.phoneNumber.match(/^\d+$/)) {
      validationErrors.phoneNumber = 'Phone number should only contain digits';
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Form submitted:', formData);
      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        zipCode: '',
        message: '',
      });
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl margin="normal" sx={{ width: '45%', marginBottom: '10px' }}>
        <Typography variant="h5" gutterBottom>
          Name
        </Typography>
        <TextField
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
          required
          sx={{ borderRadius: '5px' }}
        />
      </FormControl>
      <FormControl margin="normal" sx={{ width: '45%', marginBottom: '10px' }}>
        <Typography variant="h5" gutterBottom>
          Email
        </Typography>
        <TextField
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          required
          sx={{ borderRadius: '5px', marginLeft: '10px' }}
        />
      </FormControl>
      <FormControl margin="normal" sx={{ width: '45%', marginBottom: '10px' }}>
        <Typography variant="h5" gutterBottom>
          Phone Number
        </Typography>
        <TextField
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber}
          required
          sx={{ borderRadius: '5px' }}
        />
      </FormControl>
      <FormControl margin="normal" sx={{ width: '45%', marginBottom: '10px' }}>
        <Typography variant="h5" gutterBottom>
          ZipCode
        </Typography>
        <TextField
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  sx={{ borderRadius: '5px', marginLeft: '10px' }}
                />
              </FormControl>
              <Typography variant="h5" gutterBottom>
                Message
              </Typography>
              <TextField
                name="message"
                value={formData.message}
                onChange={handleChange}
                fullWidth
                multiline
                rows={4}
                margin="normal"
                sx={{ borderRadius: '5px' }}
                placeholder="Please type it in here.."
              />
              <CustomButton type="submit" variant="contained" color="primary">
                SUBMIT
              </CustomButton>
            </form>
          );
        };
        
        export default FormComponent;
        

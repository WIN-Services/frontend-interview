import React, {useState} from 'react';
import {styled} from '@mui/system';
import {createTheme} from '@mui/material/styles';
import {Button, OutlinedInput, TextField, FormGroup} from '@mui/material';

export const theme = createTheme({
  breakpoints: {
    values: {
      6: 0,
      xs: 440,
      sm: 768,
      md: 1000,
      lg: 1200,
      xl: 1536,
    },
  },
});

const ContactUsContainer = styled('div')({
  padding: '18px 21px 17px 21px',
  boxShadow:
    '0px 54px 54px rgba(74, 58, 255, 0.02), 1px 4px 104px rgba(20, 20, 43, 0.04), 0px 98px 66px rgba(19, 18, 66, 0.02)',
  borderRadius: '20px',
  display: 'flex',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    display: 'block',
    width: '100vw',
  },
  gap: '46px',
});

const ContactUsDetails = styled('div')({
  padding: '21px 31px 21px 31px',
  backgroundColor: '#FAFAFA',
  borderRadius: '20px',
  width: '458px',
  minWidth: '300px',
  [theme.breakpoints.down('md')]: {
    width: '80% !important',
  },
  '.cu-title': {
    color: '#000000',
    fontSize: '25px',
    fontStyle: 'normal',
    fontWeight: '800px',
    fontFamily: 'Roboto',
    lineHeight: '160%',
  },
});

const DetailsContainer = styled('div')({
  marginTop: '16px',

  '.cu-labels': {
    color: '#1D2B4F',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '600px',
    fontFamily: 'Roboto',
    lineHeight: '160%',
    marginTop: '16px',
  },

  '.cu-emails': {
    color: '#000000',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '400px',
    fontFamily: 'Rubik',
    lineHeight: '24px',
    marginTop: '7px',
  },
});

const UserDetails = styled('div')({
  padding: '58px 46px 58px 0px',
  label: {
    fontSize: '18px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500px',
    lineHeight: '160%',
    color: '#000000',
    display: 'block',
  },
  '.input-field': {
    marginTop: '9.35px',
    boxShadow: '0px 2px 6px rgba(19, 18, 66, 0.07)',
    maxWidth: '295px',
    height: '66px',
    border: 'none !important',
    borderRadius: '10px',
    [theme.breakpoints.up('lg')]: {
      width: '295px !important',
    },
  },
  '.input-field::placeholder': {
    color: '#6F6C90',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400px',
    fontSize: '15px',
    lineHeight: '160%',
  },
});

const SubmitButton = styled(Button)({
  width: '129px',
  height: '58px',
  backgroundColor: '#005981',
  color: '#FFFFFF',
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontSize: '16px',
  lineHeight: '160%',
  fontWeight: '700',
  borderRadius: '10px',
  ':hover': {
    backgroundColor: '#004461',
    color: '#FFFFFF',
  },
});

const InputContainer = styled('div')({
  display: 'flex',
  gap: '20px',
  marginBottom: '43.65px',
});

const MessageTextField = styled(TextField)({
  maxWidth: '564px',
  height: '168px',
  marginTop: '8.5px',
  '::placeholder': {
    color: '#6F6C90',
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontSize: '18px',
    lineHeight: '20px',
    fontWeight: '500',
  },
});

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    code: '',
    message: '',
  });

  const updateData = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value});
  };

  const submitForm = () => {
    fetch('/api/contact', {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => console.log(r))
      .catch((e) => console.log(e));
  };

  return (
    <ContactUsContainer>
      <ContactUsDetails>
        <div className="cu-title">Contact Us</div>

        <DetailsContainer>
          <div className="cu-labels">Inspections</div>
          <div className="cu-emails">(800) 309-6753 | info@wini.com </div>

          <div className="cu-labels">Franchising</div>
          <div className="cu-emails">(800) 309-6753 | info@wini.com </div>

          <div className="cu-labels">Vendors</div>
          <div className="cu-emails">(312) 557-9319 | vendors@wini.com </div>
        </DetailsContainer>
      </ContactUsDetails>

      <UserDetails>
        <FormGroup action="/api/contact">
          <InputContainer>
            <div>
              <label htmlFor="name">Name</label>
              <OutlinedInput
                id="name"
                name="name"
                placeholder="Full Name"
                type="text"
                className="input-field"
                value={formData.name}
                onChange={(e) => {
                  updateData(e);
                }}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <OutlinedInput
                id="email"
                name="email"
                placeholder="xyz@abc.com"
                type="text"
                className="input-field"
                value={formData.email}
                onChange={(e) => {
                  updateData(e);
                }}
              />
            </div>
          </InputContainer>

          <InputContainer>
            <div>
              <label htmlFor="phone">Phone Number</label>
              <OutlinedInput
                id="phone"
                name="phone"
                placeholder="(123) 456-7890"
                type="number"
                className="input-field"
                value={formData.phone}
                onChange={(e) => {
                  updateData(e);
                }}
              />
            </div>
            <div>
              <label htmlFor="code">ZIP Code</label>
              <OutlinedInput
                id="code"
                name="code"
                placeholder="XXXXX"
                type="number"
                className="input-field"
                value={formData.code}
                onChange={(e) => {
                  updateData(e);
                }}
              />
            </div>
          </InputContainer>

          <label htmlFor="message">Message</label>
          <MessageTextField
            id="message"
            placeholder="Please type it in here..."
            multiline
            rows={4}
            name="message"
            value={formData.message}
            onChange={(e) => {
              updateData(e);
            }}
          />

          <SubmitButton type="submit" onClick={submitForm}>
            SUBMIT
          </SubmitButton>
        </FormGroup>
      </UserDetails>
    </ContactUsContainer>
  );
};

export default ContactSection;

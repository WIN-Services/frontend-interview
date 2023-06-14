import React, {useState} from "react";
import { Button, Grid } from "@material-ui/core";
import { styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import TextField from "@material-ui/core/TextField";
import InputLabel from '@mui/material/InputLabel';
import axios from "axios";

const CustomInput = styled(TextField)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(2),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: '#fff',
      border: '1px solid',
      borderColor: '#e8eaed',
      fontSize: 18,
      // width: 'auto',
      padding: '16px 32px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      '&:focus': {
        borderColor: theme.palette.primary.main,
      },
    },
  }));
  const CustomInputLabel = styled(InputLabel)(({theme})=>({
    
      fontSize: 25,
      fontWeight: "bold",
   
  }));
  const CustomInputMultiline = styled(TextField)(({theme})=>({
    'label + &': {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(2),
    },
    '& .MuiOutlinedInput-multiline': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: '#fff',
      border: '1px solid',
      borderColor: '#e8eaed',
      fontSize: 18,
      padding: '16px 32px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      '&:focus': {
        borderColor: theme.palette.primary.main,
      },
    },
  }));
const ContactForm = ()=>{
    // Define states for storing data to be sent to the api
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        zipCode: "",
        message: ""
    });
    const [formError, setFormError] = useState({});

    const handleChange = (event)=>{
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const validateField = ()=>{
      let errorCount=0;
      let errorObj ={}
      for(const key in formData) {
        if(!formData[key]) {
          errorObj[key] = true;
          errorCount++;
        };
      }
      setFormError(errorObj)
      if(errorCount !== 0) return false;
      return true;
    };

    const handleSubmit = ()=>{
    // Validate if all fields are filled
    if(validateField()) {
     // Make an API call with all the data
     console.log('API Call');
     axios.post('/api/contact', formData)
    .then((res)=>{
      console.log(res);
    })
    .catch((error)=> {
      console.log(error);
    });
    }
  }

    return (
<>
<Grid container alignItems="flex-start" spacing={2}>
        
        <Grid item sm={6} xs={12}>
          <FormControl variant="standard" fullWidth>
        <CustomInputLabel shrink htmlFor="outlined-full-width">
          Name
        </CustomInputLabel>
        <CustomInput
        fullWidth
        id="outlined-full-width"
        error={formError['fullName']}
        helperText={formError['fullName'] && "Cannot be empty"}
        placeholder="Full Name"
        InputLabelProps={{
          shrink: true,
        }}
        name="fullName"
        variant="outlined"
        onChange={handleChange}
        // inputProps={{
        //   maxlength:99,
        // }}
      />
      </FormControl></Grid>
      <Grid item sm={6} xs={12}>
          <FormControl variant="standard" fullWidth>
        <CustomInputLabel shrink htmlFor="outlined-full-width">
          Email
        </CustomInputLabel>
        <CustomInput
        fullWidth
        id="outlined-full-width"
        placeholder="xyz@abc.com"
        InputLabelProps={{
          shrink: true,
        }}
        name="email"
        variant="outlined"
        onChange={handleChange}
        error={formError['email']}
        helperText={formError['email'] && "Cannot be empty"}
      />
      </FormControl></Grid>
      <Grid item sm={6} xs={12}>
          <FormControl variant="standard" fullWidth>
        <CustomInputLabel shrink htmlFor="outlined-full-width">
          Phone Number
        </CustomInputLabel>
        <CustomInput
        fullWidth
        id="outlined-full-width"
        error={formError['phone']}
        helperText={formError['phone'] && "Cannot be empty"}
        placeholder="(800) 309-6753"
        InputLabelProps={{
          shrink: true,
        }}
        name="phone"
        variant="outlined"
        onChange={handleChange}
      />
      </FormControl></Grid>
      <Grid item sm={6} xs={12}>
          <FormControl variant="standard" fullWidth>
        <CustomInputLabel shrink htmlFor="outlined-full-width">
          ZIP Code
        </CustomInputLabel>
        <CustomInput
        fullWidth
        id="outlined-full-width"
        error={formError['zipCode']}
        helperText={formError['zipCode'] && "Cannot be empty"}
        placeholder="XXXXX"
        InputLabelProps={{
          shrink: true,
        }}
        name="zipCode"
        variant="outlined"
        onChange={handleChange}
      />
      </FormControl></Grid>
      <Grid item xs={12}>
          <FormControl variant="standard" fullWidth>
        <CustomInputLabel shrink htmlFor="outlined-full-width">
          Message
        </CustomInputLabel>
        <CustomInputMultiline
        fullWidth
        id="outlined-full-width"
        error={formError['message']}
        helperText={formError['message'] && "Cannot be empty"}
        placeholder="Please type it in here..."
        InputLabelProps={{
          shrink: true,
        }}
        name="message"
        variant="outlined"
        multiline
       minRows={10}
       onChange={handleChange}
      />
      </FormControl></Grid>

<Grid item xs = {12}>
      <Button variant="contained"
                    color="primary"
                    type="submit"
                    onClick={handleSubmit}
                    >Submit</Button></Grid>
       
        </Grid>
</>
    )
}
export default ContactForm;
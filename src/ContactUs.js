import * as React from 'react';
import { TextField, Button, Box, Typography, Grid, FormControl } from '@mui/material';
import PlacesAutocomplete from 'react-places-autocomplete';
import {
	geocodeByAddress,
	geocodeByPlaceId,
	getLatLng,
} from 'react-places-autocomplete';
import LocationSearchInput from './LocationSearchInput';
import axios from 'axios';

const ContactForm = () => {
	const [payload, setPayload] = React.useState({
		name: "",
		email: "",
		phone_no: "",
		zip_code: "",
		message: ""
	});
	const [isCorrectEmail, setEmailCorrect] = React.useState(true)
	const [subscribe_email, setSubScribeEmail] = React.useState('')

	const handleChange = ({ target: { name, value } }) => {
		if (name == "email") {
			setEmailCorrect(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value));
		}
		setPayload(prevState => { return { ...prevState, [name]: value } })
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await axios.post("/api/contact", payload)
		console.log('response: ', response);

		setPayload({
			name: "",
			email: "",
			phone_no: "",
			zip_code: "",
			message: ""
		})
	};

	return (
		<Box
			sx={{
				height: "100vh",
				width: "100vw",
				margin: "0px"
			}}
		>
			<Box sx={{ width: '80%', height: "100%", mx: "auto", p: 2, display: 'flex', flexDirection: "column", borderRadius: "20px", boxShadow: "0px 98px 66px 0px rgba(19, 18, 66, 0.02), 1px 4px 104px 0px rgba(20, 20, 43, 0.04), 0px 54px 54px 0px rgba(74, 58, 255, 0.02)" }}>
				<Box sx={{ display: "flex", height: "60vh" }} >
					<Box sx={{ width: '40%', p: 2, backgroundColor: "#FAFAFA", borderRadius: "20px", display: 'flex', flexDirection: 'column' }}>
						<Typography variant="h4" align="left" mb={2}>
							Contact Us
						</Typography>
						<Typography variant="h6" align="left" mb={2}>
							Inspections
						</Typography>
						<Typography variant="p" align="left" mb={2}>
							(800) 309-6753 | info@wini.com
						</Typography>
						<Typography variant="h6" align="left" mb={2}>
							Franchising
						</Typography>
						<Typography variant="p" align="left" mb={2}>
							(800) 309-6753 | info@wini.com
						</Typography>
						<Typography variant="h6" align="left" mb={2}>
							Vendors
						</Typography>
						<Typography variant="p" align="left" mb={2}>
							(312) 557-9319 | vendors@wini.com
						</Typography>
					</Box>
					<Box sx={{ width: '60%', mx: "auto", p: 2 }}>
						<form style={{ width: "100%" }} onSubmit={handleSubmit}>

							<Grid container spacing={2} >
								<Grid item xs={6} >
									<TextField
										sx={{ m: 2 }}
										fullWidth
										name="name"
										label="Name"
										InputLabelProps={{ shrink: true }}
										value={payload.name}
										onChange={handleChange}
										margin="normal"
										placeholder='Full Name'
										required
									/>
									<TextField
										sx={{ m: 2 }}
										fullWidth
										name="email"
										label="Email"
										value={payload.email}
										onChange={handleChange}
										margin="normal"
										required
										placeholder='xyz@abc.com'
										InputLabelProps={{ shrink: true }}
										error={!isCorrectEmail}
										helperText={isCorrectEmail ? "" : "Invalid Email"}
										type="email"
									/>
								</Grid>
								<Grid item xs={6} >
									<TextField
										sx={{ m: 2 }}
										fullWidth
										name="phone_no"
										label="Phone Number"
										value={payload.phone_no}
										onChange={handleChange}
										margin="normal"
										placeholder='(123) 456-7890'
										InputLabelProps={{ shrink: true }}
										required
									/>
									<TextField
										sx={{ m: 2 }}
										fullWidth
										name="zip_code"
										label="Zip Code"
										value={payload.zip_code}
										onChange={handleChange}
										placeholder='XXXXX'
										InputLabelProps={{ shrink: true }}

										margin="normal"
										required
									// error={!isCorrectEmail}
									// helperText={isCorrectEmail ? "" : "Invalid Email"}
									// type="email"
									/>

								</Grid>
								<Grid item xs={12} >
									<TextField
										sx={{ m: 2 }}
										fullWidth
										name="message"
										label="Message"
										placeholder='Please type it in here...'
										InputLabelProps={{ shrink: true }}
										value={payload.message}
										onChange={handleChange}
										margin="normal"
										required
										multiline
										rows={4}
									/>
								</Grid>
								<Button variant="contained" type="submit" sx={{ mt: 2, ml: 4, px: 4,py: 1, backgroundColor: "#005981", borderRadius: "10px" }}>
									Submit
								</Button>
							</Grid>
						</form>
						{/* <LocationSearchInput
						/> */}

					</Box>
				</Box>
				<Box sx={{ display: "flex", mt: 2, height: "20vh" }}>
					<Box sx={{
						width: '100%', mt: 2, height: "100%", p: 6, backgroundColor: "#EEE", borderRadius: "12px", display: 'flex',
						flexDirection: "column", alignItems: 'center', justifyContent: "center"
					}}>
						<Box sx={{ width: '100%', display: 'flex', flexDirection: "column", }}>

							<Typography variant="h4" align="center" mb={2}>
								Subscribe to our emails
							</Typography>
							<Typography variant="h6" align="center" mb={2}>
								Enter your email address to receive the latest notifications, newsletters, and updates from WIN!
							</Typography>
						</Box>
						<Box sx={{ width: '100%', display: 'flex', flexDirection: "row", alignItems: 'center', justifyContent: "center" }}>
							<TextField
								value={subscribe_email}
								onChange={(e) => { setSubScribeEmail(e.target.value) }}
								placeholder='Your Email Address'
								margin="normal"
								required
							/>
							<Button variant="contained" type="submit" sx={{
								ml: 2,
								borderRadius: '10px',
								border: '2px solid  #D4A656',
								background: '#D4A656',px: 4,py: 1,
							}}>
								Subscribe
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box >
		// </form >
	);
};

export default ContactForm;
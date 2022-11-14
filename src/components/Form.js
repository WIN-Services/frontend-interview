import React, {useState} from "react";
import FormInput from "./FormInput";

const Form = (props) => {
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const handleFormSubmit = async (e) => {
	e.preventDefault();
	setSubmitting(true);
	setError(false);
	
	const formData = new FormData(e.target);
	const formEntries = Object.fromEntries(formData.entries());
	for (const key in formEntries) {
	  if (!formEntries[key]) {
		setSubmitting(false);
		setError(true);
		return;
	  }
	}
	
	console.log({Submission: formEntries});
	
	// POSTing images
	try {
	  const res = await fetch('api/contact', {
		method : 'POST',
		headers: {
		  "Content-type": "application/json"
		},
		body   : JSON.stringify({Submission: formEntries}),
	  });
	  const data = await res.json();
	  console.log('Success:', JSON.stringify(data));
	} catch (err) {
	  console.log("Error: ", err);
	} finally {
	  setSubmitting(false);
	}
  }
  
  return (
	<form
	  onSubmit = {handleFormSubmit}
	  className = "form"
	>
	  <FormInput placeholder = "Full Name"
				 labelTitle = "Name"
				 name = "name"
	  ></FormInput>
	  <FormInput placeholder = "xyz@abc.com"
				 labelTitle = "Email"
				 name = "email"
				 type = "email"
	  ></FormInput>
	  <FormInput placeholder = "(123) 456-7890"
				 labelTitle = "Phone Number"
				 name = "phoneNumber"
				 maxLength = "10"
	  ></FormInput>
	  <FormInput placeholder = "XXXXX"
				 labelTitle = "Zip Code"
				 name = "zipcode"
				 maxLength = "5"
	  ></FormInput>
	  <div className = "messageBox">
		<FormInput placeholder = "Please type it in here..."
				   labelTitle = "Message"
				   name = "message"
		></FormInput>
	  </div>
	  <button disabled = {submitting}>Submit</button>
	  {error
	   ? (
		 <p className = "errorMessage">Please enter data.</p>
	   )
	   : (
		 <></>
	   )}
	</form>
  );
}

export default Form;
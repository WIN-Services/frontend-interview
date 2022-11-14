import React from 'react';

function FormInput({
					 placeholder,
					 name,
					 type,
					 labelTitle,
					 maxLength
				   }) {
  return (
	<div className = "formInput">
	  <label htmlFor = {name}>
		<h2>
		  {labelTitle}
		</h2>
	  </label>
	  <input id = {name}
			 name = {name}
			 type = {type || "text"}
			 placeholder = {placeholder}
			 maxLength={maxLength}
	  />
	</div>
  );
}

export default FormInput;
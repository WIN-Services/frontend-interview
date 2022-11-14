import React from "react";

const Footer = (props) => {
  return (
	<div className = "footer">
	  <h2>
		Subscribe to our emails
	  </h2>
	  <p>
		Enter your email address to receive the latest notifications, newsletter and
		updates from WIN!
	  </p>
	  <form>
		<input type = "email"
			   placeholder = "Your email address"
		/>
		<button>Subscribe</button>
	  </form>
	</div>
  );
}

export default Footer;
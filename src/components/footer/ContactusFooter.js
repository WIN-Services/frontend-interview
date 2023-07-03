import React from "react";
import "./ContactusFooter.css";

function ContactusFooter() {
  return (
    <div className="footerWrapper">
      <h3>Subscribe to our emails </h3>
      <p>
        Enter your email address to receive the latest notifications,
        newsletters, and updates from WIN!{" "}
      </p>
      <div className="submitEmail">
        <input type="email" placeholder="Your email address" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default ContactusFooter;

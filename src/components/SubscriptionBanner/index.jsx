import React, { useState } from "react";
import "./styles.css";

const SubscriptionBanner = () => {
  const [emailValue, setEmail] = useState();

  function handleEmailChange(event) {
    const value = event.target.value.trim();
    setEmail(value);
  }

  return (
    <section className="subscription-wrapper">
      <div className="title">Subscribe to our emails</div>
      <div className="sub-text">
        Enter your email address to receive the latest notifications,
        newsletters, and updates from WIN!
      </div>
      <div className="subscribe-form">
        <input
          type="email"
          value={emailValue}
          onChange={handleEmailChange}
          className="subscribe-input"
          placeholder="Your email address"
        />
        <button
          onClick={() => {
            console.log("Subscribed");
          }}
          className="subscribe-btn"
        >
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default SubscriptionBanner;

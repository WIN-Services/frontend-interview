import React, { useState } from "react";

import "./SubscribeMail.css";

const SubscribeMail = () => {
  const [emailId, setEmailId] = useState("");

  const onEmailChangeHandler = (e) => {
    const enteredEmail = e.target.value;

    setEmailId(enteredEmail);
  };

  const onSubscribeHandler = (e) => {
    e.preventDefault();
    console.log(emailId);
  };

  return (
    <form className="subscribe-form" onSubmit={onSubscribeHandler}>
      <h3 className="subscribe-form__heading">Subscribe to our emails</h3>
      <p className="subscribe-form__description">
        Enter your email address to recieve the latest notifications,
        newsletters, and updates from WIN!
      </p>
      <div className="subscribe-form__actions">
        <input
          type="email"
          id="emailInput"
          value={emailId}
          onChange={onEmailChangeHandler}
          placeholder="Your email Address"
        />
        <button type="submit">Subscribe</button>
      </div>
    </form>
  );
};

export default SubscribeMail;

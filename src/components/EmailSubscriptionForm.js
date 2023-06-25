import React, { useState } from "react";
import { POST, REQUEST_HEADERS } from "../utils/constant";

const EmailSubscriptionForm = () => {
  const [email, setEmail] = useState("");

  const cleanUpFields = () => setEmail("");

  const subscriptionHandler = (event) => {
    event.preventDefault();
    if (!email) return;
    const payloadObj = {
      email,
    };

    fetch("./api/subscribe", {
      body: JSON.stringify(payloadObj),
      method: POST,
      headers: REQUEST_HEADERS,
    })
      .then((response) => response.json())
      .then((response) =>
        console.log("Subscribed request with response ", response)
      )
      .catch((err) => console.error("Failed to subscribe with error", err));

    cleanUpFields();
  };

  return (
    <div className="bg-[#EEE] rounded-xl py-[3.25rem] px-auto flex justify-center items-center flex-col max-md:px-4">
      <div className="text-4xl font-bold">Subscribe to our emails</div>
      <div className="text-lg mt-4 mb-10">
        Enter your email address to receive the latest notifications,
        newsletters, and updates from WIN!
      </div>
      <form className="flex max-md:flex-col  " onSubmit={subscriptionHandler}>
        <input
          className="border-[2px] border-[#fff] rounded-lg py-3 px-8 bg-white text-xl text-black placeholder:text-black md:mr-6 max-md:mb-6"
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <button
          className="bg-[#D4A656] rounded-lg border-[2px] py-4 px-14 text-white text-xl font-bold"
          type="submit"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default EmailSubscriptionForm;

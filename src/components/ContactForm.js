import React, { useState } from "react";
import { POST, REQUEST_HEADERS } from "../utils/constant";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [message, setMessage] = useState("");

  const cleanUpFields = () => {
    setName("");
    setEmail("");
    setPhoneNumber("");
    setZipcode("");
    setMessage("");
  };

  const contactFormSubmissionHandler = (event) => {
    event.preventDefault();
    if (!name || !email || !phoneNumber || !zipcode || !message) return;

    const payloadObj = {
      name,
      email,
      phoneNumber,
      zipcode,
      message,
    };

    fetch("./api/contact", {
      body: JSON.stringify(payloadObj),
      method: POST,
      headers: REQUEST_HEADERS,
    })
      .then((response) => response.json())
      .then((response) =>
        console.log("response of posting contact details ", response)
      )
      .catch((err) => console.error("Error while posting data ", err));

    cleanUpFields();
  };

  return (
    <div className="mb-[5%] shadow-lg rounded-[1.25rem] p-4 flex flex-1 max-md:flex-col">
      <div className="py-5 px-8 bg-[#FAFAFA] rounded-[1.25rem] md:min-w-[30%] ">
        <div className="text-2xl font-bold leading-10 mb-8">Contact Us</div>
        <div className="mb-4">
          <div className="mb-2 text-lg font-semibold">Inspections</div>
          <div className="text-base">(800) 309-6753 | info@wini.com</div>
        </div>
        <div className="mb-4">
          <div className="mb-2 text-lg font-semibold">Franchising</div>
          <div className="text-base">(800) 309-6753 | info@wini.com</div>
        </div>
        <div className="mb-4">
          <div className="mb-2 text-lg font-semibold">Vendors</div>
          <div className="text-base">(800) 309-6753 | info@wini.com</div>
        </div>
      </div>
      <form
        className="lg:ml-12 max-lg:ml-4 grid grid-cols-2 max-md:grid-cols-1 items-center justify-between flex-1"
        onSubmit={contactFormSubmissionHandler}
      >
        <div className="mr-5 mb-7">
          <label className="text-lg mb-2" htmlFor="name">
            Name
          </label>
          <br />
          <input
            className="border py-5 px-6 rounded-[.625rem] border-[#EFF0F6] text-base w-full"
            type="text"
            placeholder="Full Name"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div className="mr-5 mb-7">
          <label className="text-lg mb-2" htmlFor="email">
            Email
          </label>
          <br />
          <input
            className="border py-5 px-6 rounded-[.625rem] border-[#EFF0F6] text-base w-full"
            type="email"
            placeholder="xyz@abc.com"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="mr-5 mb-7">
          <label className="text-lg mb-2" htmlFor="phone">
            Phone Number
          </label>
          <br />
          <input
            className="border py-5 px-6 rounded-[.625rem] border-[#EFF0F6] text-base w-full"
            type="tel"
            placeholder="(123) 456-7890"
            id="phone"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
            required
          />
        </div>
        <div className="mr-5 mb-7">
          <label className="text-lg mb-2" htmlFor="zip-code">
            ZIP Code
          </label>
          <br />
          <input
            className="border py-5 px-6 rounded-[.625rem] border-[#EFF0F6] text-base w-full"
            type="text"
            placeholder="XXXXX"
            id="zip-code"
            value={zipcode}
            onChange={(event) => setZipcode(event.target.value)}
            required
          />
        </div>
        <div className="w-full mb-7 md:col-span-[1.5] ">
          <label className="text-lg mb-2" htmlFor="message">
            Message
          </label>
          <br />
          <textarea
            className="border py-5 px-6 rounded-[.625rem] border-[#EFF0F6] text-base w-full"
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
          />
        </div>
        <div className="md:col-span-2 lg:mb-14">
          <button
            className="bg-[#005981] px-8 py-4 text-white rounded-[.625rem] text-base font-bold"
            type="submit"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

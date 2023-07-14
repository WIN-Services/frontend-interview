import { useState } from "react";

const useContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!name) {
      newErrors.name = "Please enter your name";
    }

    if (!email) {
      newErrors.email = "Please enter your email";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!phoneNumber) {
      newErrors.phoneNumber = "Please enter your phone number";
    } else if (!/^\(\d{3}\) \d{3}-\d{4}$/.test(phoneNumber)) {
      newErrors.phoneNumber =
        "Please enter a valid phone number (e.g., (123) 456-7890)";
    }

    if (!zipCode) {
      newErrors.zipCode = "Please enter your ZIP code";
    } else if (!/^\d{5}$/.test(zipCode)) {
      newErrors.zipCode = "Please enter a valid 5-digit ZIP code";
    }

    if (!message) {
      newErrors.message = "Please enter your message";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isFormValid = validateForm();

    if (isFormValid) {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phoneNumber,
            zipCode,
            message,
          }),
        });

        if (response.ok) {
          console.log("Form submitted successfully");
        } else {
          console.log("Form submission failed");
        }
      } catch (error) {
        console.error("Error occurred during form submission:", error);
      }
    } else {
      console.log("Form validation failed");
    }
  };

  return {
    name,
    setName,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    zipCode,
    setZipCode,
    message,
    setMessage,
    errors,
    handleSubmit,
  };
};

export default useContactForm;

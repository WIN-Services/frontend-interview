import { useState } from "react";

const useNewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter an email address");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    try {
      const response = await fetch("/api/v1/subscribe-newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      if (response.ok) {
        setIsSubscribed(true);
        console.log("Form submitted successfully");
      } else {
        setError("Failed to subscribe. Please try again.");
        console.log("Form submission failed");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
      console.error("Error occurred during form submission:", error);
    }
  };

  return {
    email,
    setEmail,
    isSubscribed,
    error,
    handleSubmit,
  };
};

export default useNewsletterForm;

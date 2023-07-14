import React from "react";
import { CustomButton } from "../../components/Button";
import CustomInput from "../../components/Input";
import { NewsLetterForm } from "./styled-components";
import useNewsletterForm from "./useNewsletterForm";

const NewsletterForm = () => {
  const { email, setEmail, isSubscribed, error, handleSubmit } =
    useNewsletterForm();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <NewsLetterForm>
        <CustomInput
          placeholder="Your email address"
          width={370}
          value={email}
          onChange={handleEmailChange}
          error={error}
        />
        <CustomButton type="submit" secondary>
          Subscribe
        </CustomButton>
        {isSubscribed && <p>Thank you for subscribing!</p>}
      </NewsLetterForm>
    </form>
  );
};

export default NewsletterForm;

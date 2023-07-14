import React from "react";
import {
  NewsLetterContainer,
  NewsLetterWrapper,
  NewsLetterTitle,
  NewsLetterDescription,
} from "./styled-components";
import NewsletterForm from "../../forms/NewsLetterForm";

const Newsletter = () => {
  const newsletterTitle = "Subscribe to our emails";
  const newsletterDescription =
    "Enter your email address to receive the latest notifications, newsletters, and updates from WIN!";

  return (
    <NewsLetterContainer>
      <NewsLetterWrapper>
        <NewsLetterTitle>{newsletterTitle}</NewsLetterTitle>
        <NewsLetterDescription>{newsletterDescription}</NewsLetterDescription>
        <NewsletterForm />
      </NewsLetterWrapper>
    </NewsLetterContainer>
  );
};

export default Newsletter;

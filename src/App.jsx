import React from "react";
import "./App.css";
import ContactForm from "./forms/ContactForm";
import ContactDetails from "./components/ContactDetails";
import Newsletter from "./components/NewsLetter";
import {
  ContactUsContainer,
  ContactUsWrapper,
  MainWrapper,
} from "./styled-components";

function App() {
  return (
    <MainWrapper>
      <ContactUsContainer>
        <ContactUsWrapper>
          <ContactDetails />
          <ContactForm />
        </ContactUsWrapper>
      </ContactUsContainer>
      <Newsletter />
    </MainWrapper>
  );
}

export default App;

import React from "react";
import {
  ContactDetailsContainer,
  ContactLabelWrapper,
  ContactDetailsWrapper,
  SectionWrapper,
  ContactCardWrapper,
} from "./styled-components";
import { LargeTextBold } from "../../typography";

const ContactDetails = () => {
  const inspectionContact = {
    label: "Inspections",
    phoneNumber: "(800) 309-6753",
    email: "info@wini.com",
  };

  const franchisingContact = {
    label: "Franchising",
    phoneNumber: "(800) 309-6753",
    email: "info@wini.com",
  };

  const vendorsContact = {
    label: "Vendors",
    phoneNumber: "(312) 557-9319",
    email: "vendors@wini.com",
  };

  return (
    <ContactDetailsContainer>
      <LargeTextBold>Contact Us</LargeTextBold>
      <SectionWrapper>
        <ContactCardWrapper>
          <ContactLabelWrapper>{inspectionContact.label}</ContactLabelWrapper>
          <ContactDetailsWrapper>
            {inspectionContact.phoneNumber} | {inspectionContact.email}
          </ContactDetailsWrapper>
        </ContactCardWrapper>
        <ContactCardWrapper>
          <ContactLabelWrapper>{franchisingContact.label}</ContactLabelWrapper>
          <ContactDetailsWrapper>
            {franchisingContact.phoneNumber} | {franchisingContact.email}
          </ContactDetailsWrapper>
        </ContactCardWrapper>
        <ContactCardWrapper>
          <ContactLabelWrapper>{vendorsContact.label}</ContactLabelWrapper>
          <ContactDetailsWrapper>
            {vendorsContact.phoneNumber} | {vendorsContact.email}
          </ContactDetailsWrapper>
        </ContactCardWrapper>
      </SectionWrapper>
    </ContactDetailsContainer>
  );
};

export default ContactDetails;

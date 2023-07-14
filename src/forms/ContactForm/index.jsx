import CustomInput, { ErrorText } from "../../components/Input";
import { CustomButton } from "../../components/Button";
import {
  ContactUsForm,
  FormItem,
  StyledLabel,
  StyledTextArea,
  UserDetailsForm,
} from "./styled-components";
import useContactForm from "./useContactForm";

const ContactForm = () => {
  const {
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
  } = useContactForm();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleZipCodeChange = (e) => {
    setZipCode(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <ContactUsForm>
        <UserDetailsForm>
          <FormItem>
            <StyledLabel>Name</StyledLabel>
            <CustomInput
              placeholder="Full Name"
              value={name}
              onChange={handleNameChange}
              error={errors.name}
              type="text"
            />
          </FormItem>

          <FormItem>
            <StyledLabel>Email</StyledLabel>
            <CustomInput
              placeholder="xyz@abc.com"
              value={email}
              type="email"
              onChange={handleEmailChange}
              error={errors.email}
            />
          </FormItem>

          <FormItem>
            <StyledLabel>Phone Number</StyledLabel>
            <CustomInput
              placeholder="(123) 456-7890"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              error={errors.phoneNumber}
              type="tel"
            />
          </FormItem>

          <FormItem>
            <StyledLabel>ZIP Code</StyledLabel>
            <CustomInput
              placeholder="XXXXX"
              value={zipCode}
              onChange={handleZipCodeChange}
              error={errors.zipCode}
            />
          </FormItem>
        </UserDetailsForm>

        <FormItem>
          <StyledLabel>Message</StyledLabel>
          <StyledTextArea
            placeholder="Message"
            value={message}
            onChange={handleMessageChange}
            error={errors.message}
          />
          {errors.message && <ErrorText>{`${errors.message} !`}</ErrorText>}
        </FormItem>

        <CustomButton type="submit">Send</CustomButton>
      </ContactUsForm>
    </form>
  );
};

export default ContactForm;

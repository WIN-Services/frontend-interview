import { styled } from "styled-components";

const primaryColor = "#000";
const secondaryColor = "#ff0000";
const neutralColor = "#eff0f6";
const placeholderColor = "#6f6c90";
const boxShadowColor = "rgba(19, 18, 66, 0.07)";

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const UserDetailsForm = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledLabel = styled.label`
  color: ${primaryColor};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
`;

export const StyledTextArea = styled.textarea`
  border-radius: 10px;
  border: 1px solid ${neutralColor};
  background: #fff;
  box-shadow: 0px 2px 6px 0px ${boxShadowColor};
  width: auto;
  height: 168px;
  flex-shrink: 0;
  padding: 16px 20px;
  font-family: " DM Sans", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  border: 1px solid ${(props) => (props.error ? secondaryColor : neutralColor)};

  &::placeholder {
    color: ${placeholderColor};
  }
`;

export const ContactUsForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

import styled from "styled-components";

const primaryColor = "#4f4f4f";
const dangerRedColor = "#ff0000";
const neutralColor = "#eff0f6";
const placeholderColor = "#6f6c90";
const boxShadowColor = "rgba(19, 18, 66, 0.07)";

export const StyledInput = styled.input`
  color: ${primaryColor};
  font-family: "Inter-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  left: 0;
  letter-spacing: 0;
  line-height: 22.4px;
  white-space: nowrap;
  width: auto;
  border-radius: 10px;
  border: 1px solid ${(props) => (props.error ? dangerRedColor : neutralColor)};
  background: #fff;
  box-shadow: 0px 2px 6px 0px ${boxShadowColor};
  padding: 16px 20px;
  ${(props) => props?.width && `width: ${props?.width}px;`}

  &::placeholder {
    color: ${placeholderColor};
  }
`;

export const ErrorText = styled.span`
  color: ${dangerRedColor};
  font-size: 12px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CustomInput = ({ error, width, ...props }) => {
  return (
    <InputWrapper>
      <StyledInput error={error} width={width} {...props} />
      {error && <ErrorText>{`${error} !`}</ErrorText>}
    </InputWrapper>
  );
};

export default CustomInput;

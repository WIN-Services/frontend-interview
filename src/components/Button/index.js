import styled from "styled-components";

const primaryColor = "#08b8a3";
const secondaryColor = "#D4A656";
const secondaryGradientColor = "#005981";
const whiteColor = "#ffffff";
const primaryGradient = `linear-gradient(25deg, ${primaryColor} 0%, ${secondaryGradientColor} 73.27%)`;
const hoverColor = "#004461";

export const CustomButton = styled.button`
  align-items: center;
  background-color: ${whiteColor};
  border: none;
  display: flex;
  gap: 10px;
  justify-content: center;
  min-height: 54px;
  padding: 16px 32px;
  color: ${whiteColor};
  font-family: "Axiforma-Bold", Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 700;
  width: max-content;
  position: relative;
  text-align: center;
  white-space: nowrap;
  border-radius: 10px;
  background: ${(props) =>
    props.secondary ? secondaryColor : primaryGradient};
  box-shadow: 0px 38px 50px 0px rgba(0, 89, 129, 0.2);
  transition: background-color 0.3s;
  cursor: pointer;
  &:hover {
    background-color: ${hoverColor};
  }
  &:active {
    scale: 0.95;
  }
`;

import { styled } from "styled-components";
import { LargeTextBold, MediumTextRegular } from "./typography";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background: #fff;
  max-width: 1920px;
  justify-content: center;
  margin: 0 auto;
  width: fit-content;
`;

export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 98px 66px 0px rgba(19, 18, 66, 0.02),
    1px 4px 104px 0px rgba(20, 20, 43, 0.04),
    0px 54px 54px 0px rgba(74, 58, 255, 0.02);
`;

export const ContactUsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactUsTitle = styled(LargeTextBold)``;

export const ContactUsDescription = styled(MediumTextRegular)``;

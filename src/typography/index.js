import { styled } from "styled-components";

const commonFontFamily = "Axiforma-Bold, Helvetica, sans-serif";
const commonColor = "#092c4c";
const commonFontStyle = "normal";

const commonBold = "700";
const commonRegular = "400";

const commonTextStyles = `
  font-family: ${commonFontFamily};
  color: ${commonColor};
  font-style: ${commonFontStyle};
`;

export const H1 = styled.h1`
  ${commonTextStyles};
  font-size: 50px;
  font-weight: ${commonBold};
`;

export const H2 = styled.h2`
  ${commonTextStyles};
  font-size: 48px;
  font-weight: ${commonBold};
`;

export const H3 = styled.h3`
  ${commonTextStyles};
  font-size: 36px;
  font-weight: ${commonBold};
`;

const commonLargeText = `
  ${commonTextStyles};
  font-size: 25px;
`;

export const LargeTextBold = styled.div`
  ${commonLargeText};
  font-weight: ${commonBold};
`;

export const LargeTextRegular = styled.div`
  ${commonLargeText};
  font-weight: ${commonRegular};
`;

const commonMediumText = `
  ${commonTextStyles};
  font-size: 18px;
`;

export const MediumTextBold = styled.div`
  ${commonMediumText};
  font-weight: ${commonBold};
`;

export const MediumTextRegular = styled.div`
  ${commonMediumText};
  font-weight: ${commonRegular};
`;

const commonSmallText = `
  ${commonTextStyles};
  font-size: 14px;
`;

export const SmallTextBold = styled.div`
  ${commonSmallText};
  font-weight: ${commonBold};
`;

export const SmallTextRegular = styled.div`
  ${commonSmallText};
  font-weight: ${commonRegular};
`;

const commonNormalText = `
  ${commonTextStyles};
  font-size: 15px;
`;

export const NormalTextBold = styled.div`
  ${commonNormalText};
  font-weight: ${commonBold};
`;

export const NormalTextRegular = styled.div`
  ${commonNormalText};
  font-weight: ${commonRegular};
`;

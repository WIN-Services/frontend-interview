import styled from "styled-components";

const primaryColor = "#1d2b4f";
const secondaryColor = "#000";
const backgroundColor = "#fafafa";

export const ContactDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border-radius: 20px;
  background: ${backgroundColor};
`;

export const ContactLabelWrapper = styled.div`
  color: ${primaryColor};
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%;
`;

export const ContactDetailsWrapper = styled.div`
  color: ${secondaryColor};
  font-family: Rubik;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 16px;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1200px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const ContactCardWrapper = styled.div`
  display: grid;
  gap: 8px;
`;

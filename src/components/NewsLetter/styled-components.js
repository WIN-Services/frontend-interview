import { styled } from "styled-components";
import { H3, MediumTextRegular } from "../../typography";

const backgroundColor = "#eee";
const mobilePadding = "20px";

export const NewsLetterContainer = styled.div`
  display: inline-flex;
  padding: 52px;
  flex-direction: column;
  gap: 10px;
  border-radius: 12px;
  background: ${backgroundColor};
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: ${mobilePadding};
  }
`;

export const NewsLetterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  width: auto;
`;

export const NewsLetterTitle = styled(H3)`
  margin: 0;
`;

export const NewsLetterDescription = styled(MediumTextRegular)`
  text-align: center;
`;

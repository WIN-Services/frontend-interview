import { styled } from "styled-components";

export const NewsLetterForm = styled.div`
  display: flex;
  gap: 25px;
  margin-top: 28px;
  align-items: flex-start;
  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
  }
`;

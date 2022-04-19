import styled, { keyframes } from "styled-components";

export const BennerForm = styled.a`
  display: ${(probs) => (probs.display === "true" ? "flex" : "none")};
  background-color: rgb(0, 187, 255);
  color: white;

  height: 40px;
  justify-content: space-between;
  transition: 2s;
  /* animation: ; */
`;

// const animation = keyframes`
//   50%{

//   }
// `

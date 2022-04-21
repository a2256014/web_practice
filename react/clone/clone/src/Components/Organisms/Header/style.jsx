import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;

  justify-content: center;
  padding-left: ${(probs) => (probs._case === "Full" ? "10%" : "5%")};
  padding-right: ${(probs) => (probs._case === "Full" ? "10%" : "5%")};
  padding-top: 5px;
  padding-bottom: 5px;
  height: 70px;
  border-bottom: 0.3px solid #424242;
  align-items: center;
`;

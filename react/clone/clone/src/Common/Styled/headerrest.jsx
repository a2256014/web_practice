import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  min-inline-size: ${(probs) => (probs._case === "Full" ? "640px" : "300px")};

  justify-content: end;
  font-weight: bold;
  opacity: 0.7;
  color: #242424;
`;

import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const InfoImg = styled.img`
  width: 100px;
  height: 40px;
`;

export const InfoContent = styled.a`
  color: white;
  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: center;
`;

export const Content = styled.div`
  font-size: ${(probs) => probs.size || "14px"};
  opacity: ${(probs) => probs.opacity};
  font-weight: bold;
  margin-right: 50px;
`;

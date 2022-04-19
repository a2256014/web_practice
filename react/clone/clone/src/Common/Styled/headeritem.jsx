import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  justify-content: space-between;

  font-size: 20px;
  font-weight: bold;
  color: #242424;
`;

export const Item = styled.a`
  cursor: pointer;
  :hover {
    color: rgb(0, 187, 255);
  }
`;

import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 40px;
  background-color: black;
  border-bottom: 1px solid gray;
`;

export const Logo = styled.p`
  font-size: 24px;
  transition: 0.3s;
  font-family: "Fira Mono", monospace;
  margin-left: 50px;

  &:hover {
    cursor: grab;
    color: red;
  }
`;

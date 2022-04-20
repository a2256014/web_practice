import styled from "styled-components";
import { Item } from "../../../Common/Styled/headeritem";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  justify-content: space-evenly;

  border-bottom: 0.3px solid #424242;

  font-weight: bold;
  opacity: 0.8;
`;

export const UItem = styled.a`
  font-weight: 10px;
  padding: 6px 8px 4px 8px;

  cursor: pointer;
  color: ${(probs) => probs.select && "rgb(0, 187, 255)"};
  border-bottom: ${(probs) => probs.select && "2px solid rgb(0, 187, 255)"};
`;

export const ThreeD = styled(Item)``;

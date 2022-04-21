import styled from "styled-components";
import { Item } from "../../../Common/Styled/headeritem";
import { HeaderContainer } from "../../Organisms/Header/style";

export const Container = styled(HeaderContainer)`
  height: 30px;
  font-weight: bold;
  opacity: 0.8;
`;

export const UItem = styled.a`
  position: relative;
  font-weight: 10px;
  padding: 6px 8px 4px 8px;
  margin: 6px 8px 4px 8px;

  cursor: pointer;
  color: ${(probs) => probs.select && "rgb(0, 187, 255)"};

  ::after {
    content: "";
    display: ${(probs) => (probs.select ? "block" : "none")};
    position: absolute;
    left: 0;
    right: 0;
    top: 105%;
    height: 2px;
    background-color: rgb(0, 187, 255);
  }
`;

export const UItems = styled.div`
  display: flex;
  justify-content: start;

  min-inline-size: ${(probs) => (probs._case === "Full" ? "1000px" : "500px")};
`;

export const ThreeD = styled(Item)``;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 500px;
  justify-content: space-evenly;
  padding-right: 20px;

  opacity: 0.85;
  font-size: 20px;
  font-weight: bold;
  color: #242424;
`;

export const Item = styled.a`
  cursor: pointer;
  color: ${(probs) => probs.select && "rgb(0, 187, 255)"};
  display: inline-block;
  :hover {
    color: rgb(0, 187, 255);
  }
  ::before {
    content: "";
    display: ${(probs) => (probs.select ? "block" : "none")};
    position: absolute;
    top: 110.2px;
    left: 28%;
    width: 0;
    height: 0;
    border-style: solid;
    margin: 1px 0 0 -5px;
    border-width: 0 5px 10px;
    border-color: transparent transparent #dbdbdb;
}

  }
  ::after {
    content: "";
    display: ${(probs) => (probs.select ? "block" : "none")};
    position: absolute;
    top: 110.2px;
    left: 251px;
    width: 0;
    height: 0;
    border-style: solid;
    margin: 2px 0 0 -4px;
    border-width: 0 4.5px 9px;
    border-color: transparent transparent #fff;
    transform: translateX(-0.5px);
  }
`;

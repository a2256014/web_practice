import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 500px;
  min-inline-size: 290px;

  opacity: 0.85;
  font-size: 20px;
  font-weight: bold;
  color: #242424;
`;

export const Item = styled.a`
  position: relative;
  display: inline-block;
  line-height: 26px;
  padding: 0 10px 0 10px;
  

  cursor: pointer;
  color: ${(probs) => probs.select && "rgb(0, 187, 255)"};
  
  :hover {
    color: rgb(0, 187, 255);
  }
  ::before {
    content: "";
    display: ${(probs) => (probs.select ? "block" : "none")};
    position: absolute;
    top: 163%;
    left: 45%;
    width: 0;
    height: 0;
    border-style: solid;
    margin: 1px 0 0 -5px;
    border-width: 0 5px 10px;
    border-color: transparent transparent #242424;
}

  }
  ::after {
    content: "";
    display: ${(probs) => (probs.select ? "block" : "none")};
    position: absolute;
    top: 162.5%;
    left: 45%;
    width: 0;
    height: 0;
    border-style: solid;
    margin: 2px 0 0 -4px;
    border-width: 0 4.5px 9px;
    border-color: transparent transparent white;
    transform: translateX(-0.5px);
  }
`;

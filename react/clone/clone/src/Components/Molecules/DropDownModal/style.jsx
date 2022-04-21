import styled from "styled-components";
import { keyframes } from "styled-components";

const FadeIn = keyframes`
    0%{
        transform: translateY(-5%);
        opacity: 0;
    }
    100%{
        transform: translateY(0%);
        opacity: 1;
    }
`;

const FadeOut = keyframes`
    0%{
      transform: translateY(0%);
        opacity: 1;
    }
    100%{
      transform: translateY(-5%);
        opacity: 0;
    }
`;

export const DropContiner = styled.div`
  position: absolute;

  background-color: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 6px;
  box-shadow: 0 4px 10px 0 rgb(63 71 77 / 20%);

  width: 340px;
  height: auto;

  right: 4.5%;
  top: 20.5%;

  animation: ${(probs) => (probs.visible ? FadeIn : FadeOut)} 0.2s ease-out;

  ::before {
    content: "";
    position: absolute;
    display: block;
    border-style: solid;
    border-width: 0 5px 10px;
    border-color: transparent transparent #dbdbdb;
    top: -2.8%;
    left: 85%;
  }
  ::after {
    position: absolute;
    content: "";
    display: block;
    border-style: solid;
    border-width: 0 4.5px 9.5px;
    border-color: transparent transparent #fff;
    top: -2.6%;
    left: 85.1%;
  }
`;

export const DropItems = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const DItem = styled.a`
  display: flex;
  width: 310px;
  height: 50px;

  margin-top: 10px;
  margin-left: 20px;

  :hover {
    background-color: gray;
    border-radius: 10px;
  }
`;

export const DItemImg = styled.img`
  display: inline;
  width: 40px;
  height: 40px;
  margin-top: 5px;
`;

export const DItemContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

export const DItemName = styled.div`
  display: inline;
  font-weight: bold;
  opacity: 0.7;
  margin-bottom: 5px;
`;

export const DItemData = styled.div`
  display: inline;
  font-size: 13px;
  opacity: 0.5;
`;

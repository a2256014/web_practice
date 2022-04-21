import { TextField } from "@mui/material";
import styled from "styled-components";
import { keyframes } from "styled-components";

export const ModalContainer = styled("div")`
  position: absolute;
  display: flex;
  justify-content: end;

  width: 100%;
  height: 100%;
  z-index: 10000;

  background-color: rgba(0, 0, 0, 0.5);
`;

const FadeIn = keyframes`
    0%{
        opacity: 0;
        width: 0%;
    }
    100%{
        opacity: 1;
        width: 35%;
        
    }
`;

const FadeOut = keyframes`
    0%{
        opacity: 1;
        width: 35%;
    }
    100%{
        opacity: 0;
        width: 0%;
    }
`;

export const ModalBoard = styled("div")`
  height: 100%;
  width: 35%;

  background-color: white;

  animation: ${(probs) => (probs.visible ? FadeOut : FadeIn)} 0.2s ease-out;
`;

export const InputForm = styled(TextField)`
  display: flex;
  padding: 30px 30px 5px 30px !important;
  width: 250px;

  outline: 0;
`;

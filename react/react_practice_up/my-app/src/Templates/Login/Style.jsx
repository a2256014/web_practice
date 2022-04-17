import styled from "styled-components";

export const Container = styled.div`
  max-width: 500px;
  min-width: 300px;
  max-height: 1000px;
  width: 450px;
  height: 400px;
  margin: 100px auto;
  background-color: #ffffff;
  border-radius: 25px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  max-width: 100%;
`;

export const Input = styled.input`
  width: 80%;
  box-sizing: border-box;
  border: none;
  font-size: 1.3rem;
  padding-left: 1.5rem;
  padding-bottom: 1rem;
  box-shadow: inset 0px -3px 0px 0px rgba(187, 187, 187, 0.2);
  transition: box-shadow 0.2s ease-in;

  text-align: center;

  
`;

export const Button = styled.div`
  text-align: center;
  border-radius: 25px;
  width: 80%;
  height: 40px;
  font-size: 1.3rem;
  color: white;
  font-weight: 700;
  background: #cf3333;
  border: 0px;
  cursor: pointer;
  transition: opacity 0.25s ease-out;

  :hover {
    opacity: 0.8;
  }
`;

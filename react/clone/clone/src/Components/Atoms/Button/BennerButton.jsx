import { IoIosClose } from "react-icons/io";
import styled from "styled-components";

const BennerButton = (probs) => {
  const onclick = () => {
    probs.setDisplay("false");
  };
  return (
    <>
      <ExitButton>
        <IoIosClose onClick={onclick} />
      </ExitButton>
    </>
  );
};
export default BennerButton;

export const ExitButton = styled.div`
  display: flex;
  align-items: center;
  padding-right: 10px;
  font-size: 30px;
`;

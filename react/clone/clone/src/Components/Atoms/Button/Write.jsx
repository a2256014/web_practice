import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";
const Write = () => {
  return (
    <WriteButton>
      <Text>글쓰기</Text>
      <FiChevronDown />
    </WriteButton>
  );
};

export default Write;

const WriteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: rgb(0, 187, 255);
  border: 0px;
  border-radius: 5px;
  width: 95px;
  height: 40px;

  font-size: 15px;
  font-weight: bold;
  :hover {
    background-color: rgb(4, 167, 226);
  }
`;

const Text = styled.div`
  color: white;
`;

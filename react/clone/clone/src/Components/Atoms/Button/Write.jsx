import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";
const Write = ({ drop, visible }) => {
  const onclick = () => {
    if (!visible.visible) {
      drop.setIsDrop(!drop.isDrop);
      visible.setVisible(!visible.visible);
    } else {
      visible.setVisible(!visible.visible);
      setTimeout(() => {
        drop.setIsDrop(!drop.isDrop);
      }, 200);
    }
  };

  return (
    <WriteButton onClick={onclick} id="글쓰기">
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
  width: 85px;
  height: 40px;
  color: white;

  font-size: 15px;
  font-weight: bold;
  :hover {
    background-color: rgb(4, 167, 226);
  }
`;

const Text = styled.div``;

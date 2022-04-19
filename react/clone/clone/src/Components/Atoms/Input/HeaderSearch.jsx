import { BiSearch } from "react-icons/bi";
import styled from "styled-components";
const HeaderSearch = () => {
  return (
    <>
      <BiSearch />
      <InputForm placeholder="오늘의집 통합검색"></InputForm>
    </>
  );
};

export default HeaderSearch;

const InputForm = styled.input`
  ::-webkit-input-placeholder {
    opacity: 1;
    transition: opacity 0.25s ease-out;
  }
  :focus::-webkit-input-placeholder {
    opacity: 0;
  }
  ::placeholder {
    color: gray;
    font-size: 15px;
    text-align: left;
  }
`;

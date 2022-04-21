import { IconButton, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { CgShoppingCart } from "react-icons/cg";
import { Container } from "../../../Common/Styled/headerrest";
import Write from "../../Atoms/Button/Write";
import HeaderSearch from "../../Atoms/Input/HeaderSearch";
const HeaderRest = ({ _case, modal, drop, visible }) => {
  const [display, setDisplay] = useState("true");

  useEffect(() => {
    switch (_case) {
      case "Full":
        return setDisplay("true");
      case "Middle":
        return setDisplay("false");
      default:
      //do nothing
    }
  }, [_case]);

  return (
    <Container _case={_case}>
      <HeaderSearch _case={_case} modal={modal} />
      <Button>
        <CgShoppingCart />
      </Button>
      <Item set="Full">로그인</Item>

      <Item set={_case}>회원가입</Item>
      <React display={display}>
        <Item>고객센터</Item>
      </React>
      <Write drop={drop} visible={visible} />
    </Container>
  );
};

export default HeaderRest;

const Button = styled(IconButton)`
  padding: 4px 4px 4px 4px;
  font-size: 30px;

  :hover {
    background-color: rgb(4, 167, 226);
    color: white;
  }
`;

const React = styled("div")`
  display: ${(probs) => (probs.display === "true" ? "flex" : "none")};
`;

const Item = styled("a")`
  position: relative;
  cursor: pointer;
  padding: 0 10px 0 10px;

  :hover {
    color: rgb(0, 187, 255);
  }
  ::after {
    content: "";
    display: ${(probs) => (probs.set === "Full" ? "flex" : "none")};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 100%;
    width: 1.5px;
    background-color: #242424;
  }
`;

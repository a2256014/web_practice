import { IconButton, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { CgShoppingCart } from "react-icons/cg";
import { Container, Right } from "../../../Common/Styled/headerrest";
import Write from "../../Atoms/Button/Write";
import HeaderSearch from "../../Atoms/Input/HeaderSearch";
const HeaderRest = (_case) => {
  const [display, setDisplay] = useState("true");
  useEffect(() => {
    switch (_case._case) {
      case "Full":
        return setDisplay("true");
      case "Middle":
        return setDisplay("false");
      default:
      //do nothing
    }
  }, [_case]);
  return (
    <Container>
      <HeaderSearch _case={_case._case} />
      <Button>
        <CgShoppingCart />
      </Button>
      <Item>로그인</Item>
      <Right />
      <Item>회원가입</Item>
      <React display={display}>
        <Right />
        <Item>고객센터</Item>
      </React>
      <Write />
    </Container>
  );
};

export default HeaderRest;

const Button = styled(IconButton)`
  padding: 0;
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
  cursor: pointer;
  color: ${(probs) => probs.select && "rgb(0, 187, 255)"};

  :hover {
    color: rgb(0, 187, 255);
  }
`;

import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Logo = () => {
  const nav = useNavigate();
  const onclick = () => {
    nav("/");
  };
  return (
    <LogoContainer onClick={onclick}>
      <LogoImg src="./오늘의집.png" />
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.a`
  font-family: OhouseSans;
`;
const LogoImg = styled.img`
  padding: 10px;
  padding-right: 30px;
  width: 150px;
  cursor: pointer;
`;

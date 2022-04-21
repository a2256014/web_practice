import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LOGO_URL } from "../../../Common/Constant";

const Logo = () => {
  const nav = useNavigate();
  const onclick = () => {
    nav("/");
  };
  return (
    <LogoContainer onClick={onclick}>
      <LogoImg src={LOGO_URL} />
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.a`
  font-family: OhouseSans;
  padding-right: 20px;
`;
const LogoImg = styled.img`
  width: 150px;
  cursor: pointer;
`;

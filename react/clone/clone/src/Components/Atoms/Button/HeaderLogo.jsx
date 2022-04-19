import styled from "styled-components";

const Logo = () => {
  return (
    <LogoContainer>
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

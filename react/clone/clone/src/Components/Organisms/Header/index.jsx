import Logo from "../../Atoms/Button/HeaderLogo";
import HeaderSearch from "../../Atoms/Input/HeaderSearch";
import HeaderItem from "../../Molecules/HeaderItem";
import { HeaderContainer } from "./style";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <HeaderItem />
      <HeaderSearch />
    </HeaderContainer>
  );
};

export default Header;

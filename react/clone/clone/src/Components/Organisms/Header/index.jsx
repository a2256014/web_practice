import { debounce } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../../Atoms/Button/HeaderLogo";
import HeaderItem from "../../Molecules/HeaderItem";
import HeaderRest from "../../Molecules/HeaderItem/HeaderRest";
import UnderHeader from "../../Molecules/UnderHeader";
import { HeaderContainer } from "./style";

const Header = () => {
  const [displaySize, setDisplaySize] = useState(window.innerWidth);
  const [displaycase, setDisplayCase] = useState("Full");
  const location = useLocation();
  let select = [false, false, false];

  useEffect(() => {
    if (displaySize > 1023) {
      setDisplayCase("Full");
    } else if (displaySize > 767) {
      setDisplayCase("Middle");
    }
  }, [displaySize]);

  const Resize = debounce(() => {
    setDisplaySize(window.innerWidth);
  }, 300);
  useEffect(() => {
    window.addEventListener("resize", Resize);
    return () => {
      window.removeEventListener("resize", Resize);
    };
  }, []);

  if (
    location.pathname.match(/^\/(?=contents)/) ||
    location.pathname.match(/^\/$/)
  ) {
    select[0] = true;
  } else if (location.pathname.match(/^\/store(\/[a-z]+)?/)) {
    select[1] = true;
  } else if (location.pathname.match(/^\/experts(\/[a-z]+)?/)) {
    select[2] = true;
  }

  return (
    <>
      <HeaderContainer>
        <Logo />
        <HeaderItem select={select} />
        <HeaderRest _case={displaycase} />
      </HeaderContainer>
      <UnderHeader location={location} />
    </>
  );
};

export default Header;

import * as React from "react";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Logo, Container } from "../Header/style";
import NavBar from "../NavBar";

const Header = () => {
  const navigator = useNavigate();
  const [isView, setView] = useState(false);
  const [y, setY] = useState(0);

  const handleLogo = () => navigator("/");

  const handleScroll = () => {
    // console.log(`움직인 y 값 : ${window.scrollY}`);
    setY(window.scrollY);
    if (window.scrollY < 0) {
    } else {
    }
    // console.log(`움직인 후 y 값 : ${y}`);
  };

  useEffect(() => {
    // console.log(`현 y 값 : ${y}`);
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Container>
        <Logo onClick={handleLogo}> Stop!</Logo>
        <NavBar />
      </Container>
    </>
  );
};

export default Header;

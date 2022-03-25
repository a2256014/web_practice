import * as React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Logo, Container, navBar, Menu, Name, SideBar, MenuBar } from "./style";
import { SidebarData } from "./SidebarData";

const NavBar = () => {
  const navigator = useNavigate();

  const handleLogo = () => navigator("/");

  const [open, setopen] = useState(false);
  const onclick = () => {
    setopen(!open);
  };

  return (
    <>
      <Container>
        <Logo onClick={handleLogo}> Stop!</Logo>
        <navBar>
          {open ? (
            <Menu>
              <MenuBar>
                <Link to="#">
                  <AiIcons.AiOutlineClose onClick={onclick} />
                </Link>
              </MenuBar>
              {SidebarData.map((item, index) => {
                return (
                  <SideBar key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <Name>{item.title}</Name>
                    </Link>
                  </SideBar>
                );
              })}
            </Menu>
          ) : (
            <MenuBar>
              <Link to="#">
                <FaIcons.FaBars onClick={onclick} />
              </Link>
            </MenuBar>
          )}
        </navBar>
      </Container>
    </>
  );
};

export default NavBar;

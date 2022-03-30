import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { DropList, DropMenu, MenuButton, Nav } from "./style";
// BiMenu

const NavBar = () => {
  const [show, setShow] = useState(false);
  const showMenu = () => {
    setShow(!show);
    console.log(show);
  };
  return (
    <>
      <Nav>
        {show ? (
          <>
            <MenuButton>
              <AiIcons.AiOutlineClose onClick={showMenu} />
            </MenuButton>
            <DropMenu>
              {SidebarData.map((item, index) => {
                return (
                  <DropList>
                    <Link to={item.path}>
                      {item.icon}
                      <div>{item.title}</div>
                    </Link>
                  </DropList>
                );
              })}
            </DropMenu>
          </>
        ) : (
          <MenuButton>
            <FaIcons.FaBars onClick={showMenu} />
          </MenuButton>
        )}
      </Nav>
    </>
  );
};

export default NavBar;

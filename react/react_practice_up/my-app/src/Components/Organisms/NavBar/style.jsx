import styled from "styled-components";

export const navBar = styled.nav`
  display: flex;
  align-items: center;
`;

export const Container = styled.header`
  width: 85vw;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  margin-left: 20px;
  margin-bottom: 50px;
  &::after {
    position: absolute;
    content: "";
    display: block;
    top: 100px;
    left: -20px;
    width: 100vw;
    border-bottom: 1px solid gray;
  }
`;

export const Logo = styled.p`
  font-size: 24px;
  transition: 0.3s;
  font-family: "Fira Mono", monospace;
  position: relative;

  &:hover {
    cursor: grab;
    color: red;
  }
`;

export const Name = styled.p`
  &:hover {
    cursor: grab;
    color: red;
  }
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding-left: 0;
  align-items: flex-start;
  right: 5%;
  position: fixed;
`;

export const SideBar = styled.li`
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  width: 100%;
  height: 130%;
  padding: 0 16px;
  border-radius: 4px;
`;

export const MenuBar = styled.div`
  margin-left: 2rem;
  font-size: 2rem;
  background: none;
  transition: 0.8s;
  &:active {
    right: 0;
    transition: 350ms;
  }
`;

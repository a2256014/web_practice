import styled from "styled-components";

export const Nav = styled.div`
  margin-left: 50px;
`;

export const DropMenu = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 80px;
  right: 10px;
  width: 100px;
`;

export const DropList = styled.li`
  padding: 0 10px;
  border-bottom: 1px solid #eaeaea;
  line-height: 25px;
  font-size: 15px;
  border-radius: 4px;
  background-color: black;
  z-index: 5;
`;

export const MenuButton = styled.div`
  margin-right: 50px !important;
  display: flex;
`;

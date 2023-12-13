import React from "react";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import LogoIcon from "../assets/logo.svg";
import Search from "./Search";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Nav>
      <Logo to={"/"}>
        <img src={LogoIcon} alt="" />
        <span>Recipes</span>
      </Logo>
      <Search />
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 1rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 1rem 4rem;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  text-decoration: none;

  span {
    font-weight: 500;
  }
`;

export default NavBar;

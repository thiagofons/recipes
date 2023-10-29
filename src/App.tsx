import React from "react";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cuisine from "./pages/Cuisine";
import Search from "./components/Search";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";

const App = () => {
  return (
    <BrowserRouter>
    <Nav>
      <GiKnifeFork />
      <Logo to={"/"}>delicious</Logo>
    </Nav>
      <Search />
      <Category />
      <Pages />
    </BrowserRouter>
  );
};

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;

const Nav = styled.nav`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    font-size: 2rem;
  }
`
export default App;

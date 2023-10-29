import React from "react";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cuisine from "./pages/Cuisine";
import Search from "./components/Search";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";
import NavBar from "./components/NavBar";
import BannerImg from "./assets/banner.jpg";

const App = () => {
  return (
    <BrowserRouter>
      <Main>
        <NavBar />
        <Banner>
          <img src={BannerImg} alt="" />
          <Gradient />
          <h2>Test</h2>
        </Banner>

        <Category />
        <Pages />
      </Main>
    </BrowserRouter>
  );
};

const Main = styled.div`
  background-color: #fff;
  margin: 1rem 0;
`;

const Banner = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: inherit;
    max-height: 15rem;
    object-fit: cover;
  }
  h2 {
    position: absolute;
    text-align: center;
    color: #ffffff;
    font-weight: bold;
    font-size: 2.5rem;
    z-index: 3;
  }
`;

const Gradient = styled.div`
  z-index: 2;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default App;

import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import React from "react";

const Category = () => {
  return (
    <List>
      <SLink to={'/cuisine/italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink> 
      <SLink to={'/cuisine/american'}>
        <FaHamburger />
        <h4>American</h4>
      </SLink> 
      <SLink to={'/cuisine/thai'}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink> 
      <SLink to={'/cuisine/japanese'}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </SLink> 
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0rem;

`

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  
  text-decoration: none;
  background: #FFDB63;
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: #F5F2F2;
    font-size: .8rem;
  }
  svg {
    color: #F5F2F2;
    font-size: 1.5rem;
  }

  &.active {
    background: linear-gradient(to right #f27121, #e94057);

    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
`

export default Category;

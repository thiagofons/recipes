import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <p>&copy;All rights reserved</p>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  padding: 1rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  color: #2c2b2b;
`

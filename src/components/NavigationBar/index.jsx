import React from "react";
import Logo from "./Logo";
import NavElements from "./NavElements";
import styled from 'styled-components';
import { useState } from "react";
import { useEffect } from "react";

const HeaderContainer = styled.header`
  display: flex;
  flex-wrap: no-wrap;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: 100%;
  padding: ${props => props.isScrolled ? "10px": "20px"} 5px;
  background-color: white;
  border-bottom: 2px solid ${props => props.isScrolled ? "gray": "orange"};
  transition: padding .6s ease;
`;

const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(
    window.scrollY > 100
  );

  const handleScroll = () => {
    if (isScrolled != (window.scrollY > 100)) {
      setIsScrolled(window.scrollY > 100);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return _ => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <Logo />
      <NavElements />
    </HeaderContainer>
  );
};

export default NavigationBar;

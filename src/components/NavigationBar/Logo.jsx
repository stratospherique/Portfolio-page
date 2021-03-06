import React from 'react';
import styled from 'styled-components';
import LogoPath from 'assets/img/Logo-transparent.png';

const LogoBox = styled.div`
  height: 2.5rem;
  width: 4rem;
  background-image: url(${LogoPath});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;

const Logo = () => (
  <LogoBox />
);

export default Logo;

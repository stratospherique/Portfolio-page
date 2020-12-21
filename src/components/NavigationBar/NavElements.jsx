import React from 'react';
import NavigationLink from './common/NavigationLink';

const NavElements = () => (
  <nav>
    <NavigationLink IdPath="intro" text="Intro" />
    <NavigationLink IdPath="work-section" text="Portfolio" />
    <NavigationLink IdPath="about" text="About" />
    <NavigationLink IdPath="contact" text="Contact" />
  </nav>
);

export default NavElements;
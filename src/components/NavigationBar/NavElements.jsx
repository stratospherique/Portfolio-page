import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NavigationLink from './common/NavigationLink';

const NavLinksContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: ${props => (props.isMobileView ? 'stretch' : 'center')};
  flex-direction: ${props => (props.isMobileView ? 'column' : 'row')};
  width: ${props => (props.isMobileView ? '20rem' : 'auto')};
  min-width: ${props => (props.isMobileView ? '100%' : '30rem')};
  margin-top: ${props => (props.isMobileView ? '3.5rem' : 'auto')};
  height: auto;
  z-index: inherit;
`;

const NavElements = ({ handlePopupClose, isMobileView, isScrolled }) => (
  <NavLinksContainer isMobileView={isMobileView}>
    <NavigationLink arrowEnabled={isMobileView} handleClick={handlePopupClose} IdPath="intro" text="Intro  </>" isScrolled={isScrolled} />
    <NavigationLink arrowEnabled={isMobileView} handleClick={handlePopupClose} IdPath="work-section" text="Portfolio" isScrolled={isScrolled} />
    <NavigationLink arrowEnabled={isMobileView} handleClick={handlePopupClose} IdPath="about" text="About" isScrolled={isScrolled} />
    <NavigationLink arrowEnabled={isMobileView} handleClick={handlePopupClose} IdPath="contact" text="Contact" isScrolled={isScrolled} />
  </NavLinksContainer>
);

NavElements.propTypes = {
  handlePopupClose: PropTypes.func.isRequired,
  isMobileView: PropTypes.bool.isRequired,
  isScrolled: PropTypes.bool.isRequired,
};

export default NavElements;

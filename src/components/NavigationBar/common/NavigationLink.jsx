import React, { memo } from 'react';
import styled from 'styled-components';
import { theme } from '../../../helpers/constants';

const StyledTab = styled.a`
  padding: .8em;
  color: ${props => (props.isScrolled ? theme.colors.secondary : theme.colors.fourth)};
  font-weight: 400;
  font-size: ${({arrowEnabled}) => arrowEnabled ? '1em' : '.8em'};
  margin-bottom: ${({arrowEnabled}) => arrowEnabled ? '2em' : 0};
  transition: color .5s ease;
  &:hover,
  &:active {
    color: ${theme.colors.primary};
    font-weight: 500;
  }
  display: flex;
  align-items: center;
  justify-content: ${props => (props.arrowEnabled ? 'space-between' : 'flex-start')};
  cursor: pointer;
  ${
  props => (props.arrowEnabled
    ? `
      &::after {
        content: '>';
        display: inline;
      }
    `
    : null)
}
`;

const NavigationLink = ({IdPath, text, handleClick, arrowEnabled, isScrolled}) => {
  const handleLinkVisit = () => {
    const targetSection = document.querySelector(`#${IdPath}`);
    window.scrollTo({
      top: targetSection.offsetTop - 100,
      behavior: 'smooth'
    });
    if (handleClick) {
      handleClick();
    }
  };
  return (
    <StyledTab 
      onPointerDown={handleLinkVisit}
      arrowEnabled={arrowEnabled}
      isScrolled={isScrolled}
    >
      {text}
    </StyledTab>
  );
};

export default memo(NavigationLink);
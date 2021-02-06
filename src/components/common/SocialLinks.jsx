import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { theme } from '../../helpers/constants';

const SocialContainer = styled.div`
  min-width: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 40%;
  height: auto;
  margin: 1rem 0;
  background-color: ${props => (props.color ? theme.colors[props.color] : 'transparent')};
  & > a {
    max-width: calc(90%/4);
    padding: .5rem;
    border-radius: 4px;
    color: ${props => (props.color === 'primary' ? theme.colors.secondary : theme.colors.primary)};
    transition: color, background-color .2s ease-in;
    &:hover {
      color: ${theme.colors.secondary};
      background-color: ${theme.colors.primary};
    }
  }
`;

const SocialLinks = ({ color }) => (
  <SocialContainer color={color}>
    <a href="https://twitter.com/AhmedMahfoudh8" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faTwitter} size="lg" />
    </a>
    <a href="https://www.linkedin.com/in/ahmed-mahfoudh/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLinkedin} size="lg" />
    </a>
    <a href="https://github.com/stratospherique" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faGithub} size="lg" />
    </a>
    <a href="mailto:ahmed.mahfoudh1991@gmail.com" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faEnvelope} size="lg" />
    </a>
  </SocialContainer>
);

SocialLinks.propTypes = {
  color: PropTypes.string.isRequired,
};

export default SocialLinks;

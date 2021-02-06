import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '../../helpers/constants';

const StackContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 1rem;
  flex-wrap: wrap;

  & > span {
    display: iniline-block;
    width: auto;
    background-color: ${theme.colors.fourth};
    color: ${theme.colors.secondary};
    border-right: 1px solid blue;
    text-align: center;
    padding: .5rem;
    margin: .3rem;
    border-radius: .4em;
    user-select: none;
    transition: background-color, color .3s ease;
    &:hover {
      background-color: ${theme.colors.secondary};
      color: ${theme.colors.fourth};
    }
  }
`;

const TechStack = ({ techList, className }) => (
  <StackContainer className={className}>
    {
      techList.map(tech => (
        <span key={tech}>
          {tech}
        </span>
      ))
    }
  </StackContainer>
);

TechStack.propTypes = {
  techList: PropTypes.array.isRequired,
  className: PropTypes.string.isRequired,
};

export default TechStack;

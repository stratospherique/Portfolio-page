import React from 'react';
import styled from 'styled-components';
import { theme } from 'helpers/constants';
import Summary from './Summary';
import Skills from './Skills';

const AboutContainer = styled.div`
  min-height: 500px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  & > div {
    flex-basis: 50%;
  }

  @media (max-width: ${theme.breakpoints.md}px) {
    & > div {
      flex-basis: 100%;
    }
  }
`;

const About = () => (
  <AboutContainer id="about">
    <Summary />
    <Skills />
  </AboutContainer>
);

export default About;

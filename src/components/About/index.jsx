import React from "react";
import styled from "styled-components";
import Summary from "./Summary";
import Skills from "./Skills";
import { BREAK_POINTS } from 'helpers/constants'

const AboutContainer = styled.div`
  min-height: 500px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  & > div {
    flex-basis: 50%;
  }

  @media (max-width: ${BREAK_POINTS.sm}px) {
    & > div {
      flex-basis: 100%;
    }
  }
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <Summary />
      <Skills />
    </AboutContainer>
  );
};

export default About;
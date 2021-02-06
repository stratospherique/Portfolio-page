import React from 'react';
import { SKILLS as skills } from 'helpers/constants';
import styled from 'styled-components';
import Section from './Section';

const SkillsContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const SkillContainer = styled.div`
  border: 1px solid;
`;

const Skills = () => (
  <SkillsContainer>
    {
      Object.keys(skills).map(skill => (
        <SkillContainer key={skill}>
          <Section skill={skill} skillsArray={skills[skill]} />
        </SkillContainer>
      ))
    }
  </SkillsContainer>
);

export default Skills;

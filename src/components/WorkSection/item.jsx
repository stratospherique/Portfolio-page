import React from 'react';
import styled from 'styled-components';
import Button from 'components/common/Button';
import TechStack from '../common/TechStack';

const ProjectContainer = styled.article`
  height: 500px;
  width: 100%;
  display: flex;
  margin: 1rem 0;

  & > h2 {
    color: pink;
  }
`;

const ProjectImage = styled.div`
  width: 50%;
  background-image: url(${props => props.link});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
`;

const ProjectInfoContainer = styled.section`
  & > h2 {
    color: magenta;
  }
`;

const Item = ({ project }) => {
  return (
    <ProjectContainer>
      <ProjectImage link={project.previews[0]} />
      <ProjectInfoContainer>
        <h2>
          { project.title }
        </h2>
        <p>
          { project.description }
        </p>
        <TechStack techList={project.technologies} />
        <Button text="See Project" />
      </ProjectInfoContainer>
    </ProjectContainer>
  );
};

export default Item;

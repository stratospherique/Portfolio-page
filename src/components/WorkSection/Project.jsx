import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TechStack from 'components/common/TechStack';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCut, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Button from 'components/common/Button';
import { theme } from 'helpers/constants';
import { useMediaQuery } from 'helpers/hooks';
import Previews from './Previews';
import Typography from '../common/Typography';

const ContentContainer = styled.div`
  background-color: ${theme.colors.secondary};
  display: grid;
  ${
  props => (props.isMobileView
    ? `grid-template-areas: 
      "snapshot"
      "previews"
      "title"
      "desc"
      "techstack"
      "buttons";
    grid-template-rows: auto 1fr auto auto auto 1fr;
    grid-template-columns: 1fr;`
    : `grid-template-areas: 
      "snapshot snapshot snapshot"
      "previews . buttons"
      "title . buttons"
      "techstack techstack ."
      "desc desc desc";
    grid-template-rows: auto 1fr 1fr 5rem 1fr;
    grid-template-columns: 1fr 1fr 1fr;`
  )}
  width: 95%;
  max-width: 1400px;
  height: auto;
  min-height: 550px;
  position: relative;
  

  .title {
    grid-area: title;
    padding: 2rem;
    align-self: end;
  }
  .description {
    grid-area: desc;
    padding: 2rem;
    text-align: justify;
    align-self: start;
  }
  .techstack {
    grid-area: techstack;
  }
  .buttons {
    grid-area: buttons;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    & > button {
      width: 10em;
      height: 3em;
      font-size: 1em;
    }
  }
  @media (max-width: 761px) {
    .title,
    .description {
      padding: 1rem;
    }
  }
`;

const Screenshot = ({ className, link }) => (
  <div className={className}>
    <img src={link} style={{ visibility: 'hidden', width: '100%' }} alt="screenshot" />
  </div>
);

Screenshot.propTypes = {
  className: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

const Pic = styled(Screenshot)`
  height: auto;
  max-height: ${props => (props.isMobileView ? '25rem' : '30rem')};
  width: 100%;
  grid-area: snapshot;
  ${props => (props.isMobileView
    ? null
    : `border-bottom: 8px double;
    background-color: ${theme.colors.tertiary};
    border-top: 8px double;`
  )}
  transition: background-image .8s ease-out;
  background-image: url(${props => props.link});
  background-size: ${props => (props.isMobileView ? '100% 100%' : 'contain')};
  background-position: center;
  background-repeat: no-repeat;
  & > img {
    max-height: ${props => (props.isMobileView ? '25rem' : '30rem')};
  }
`;

const Project = ({ project, onClose }) => {
  const isMobileView = useMediaQuery(`max-width: ${theme.breakpoints.md}`);
  const [activePreviewIndex, setActivePreviewIndex] = useState(0);
  const handleChangePreview = (index = 0) => {
    setActivePreviewIndex(index);
  };

  return (
    <ContentContainer isMobileView={isMobileView}>
      <Button
        size="large"
        style={{
          position: 'absolute',
          top: '0',
          right: '0',
        }}
        color="primary"
        action={onClose}
        Icon={({ size, Icon }) => (
          <FontAwesomeIcon
            icon={faCut}
            size={size}
          >
            {Icon}
          </FontAwesomeIcon>
        )}
        padding={2}
      />
      <Pic link={project.previews[activePreviewIndex]} isMobileView={isMobileView} />
      <Previews
        links={project.previews}
        activeIndex={activePreviewIndex}
        changeActive={handleChangePreview}
        className="previews"
      />
      <div className="title">
        <Typography
          size="medium"
          text={project.title}
          type="title"
          style={{
            margin: 0,
          }}
        />
      </div>
      <div className="description">
        <Typography
          size="small"
          text={project.description}
          style={{
            margin: 0,
          }}
        />
      </div>
      <TechStack className="techstack" techList={project.technologies} />
      <div className="buttons">
        <Button
          text="Source Code"
          padding={1}
          margin={1}
          Icon={({ size, Icon }) => (
            <FontAwesomeIcon icon={faGithub} size={size}>
              {Icon}
            </FontAwesomeIcon>
          )}
          size="small"
          bgColor="primary"
          color="secondary"
          action={() => window.open(project.repoLink, '_blank')}
        />
        <Button
          text="Live Demo"
          padding={1}
          margin={1}
          Icon={({ size, Icon }) => (
            <FontAwesomeIcon icon={faExternalLinkAlt} size={size}>
              {Icon}
            </FontAwesomeIcon>
          )}
          size="small"
          bgColor="primary"
          color="secondary"
          action={() => window.open(project.demoLink, '_blank')}
        />
      </div>
    </ContentContainer>
  );
};

Project.propTypes = {
  project: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Project;

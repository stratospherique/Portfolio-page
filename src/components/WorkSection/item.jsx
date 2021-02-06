import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'components/common/Button';
import TechStack from 'components/common/TechStack';
import Typography from 'components/common/Typography';
import { theme } from 'helpers/constants';
import PopUpDialog from 'components/common/PopUpDialog';
import debounce from 'lodash/debounce';
import { useSpring, animated } from 'react-spring';
import Project from './Project';
import useCurrentDevice from '../../hooks/useCurrentDevice';

const ProjectContainer = animated(styled.article`
  height: ${({ isMobileView, isTabletView }) => ((isMobileView || isTabletView) ? 'auto' : '18em')};
  width: 100%;
  max-width: ${theme.breakpoints.lg}px;
  overflow: hidden;
  margin: 1rem auto;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.secondary};
  box-shadow: 0 0 4px 4px ${theme.colors.fourth} inset;
  border-radius: 6px;

  & > h2 {
    color: pink;
  }
`);

const ProjectImage = styled.div`
  width: ${props => (props.isMobileView ? '90%' : '50%')};
  height: 100%;
  outline: 1px solid;
  padding: 1rem;
  background-image: url(${props => props.link});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  overflow: hidden;
  min-width: 270px;
  min-height: 270px;
`;

const ProjectInfoContainer = styled.section`
  width: ${props => (props.isMobileView ? '90%' : '50%')};
  padding: 1rem;

  .title {
    display: flex;
    align-items: flex-start;
    & > * {
      margin: .5rem;
    }
    &__main {
      display: inline-block;
      font-weight: bold;
      width: auto;
      color: magenta;
      font-size: 120%;
      line-height: 1.5rem;
    }
    &__separator {
      font-size: 100%;
      line-height: 1.5rem;
      font-weight: bold;
      color: magenta;
    }
    &__year {
      font-size: 100%;
      line-height: 1.5rem;
    }
  }
`;

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= -rect.height / 2
    && rect.bottom <= (
      window.innerHeight || document.documentElement.clientHeight
    ) + rect.height / 2
  );
}

const Item = ({ project, projectIndex }) => {
  const {
    isMobileView,
    isTabletView,
    isLargeView,
  } = useCurrentDevice();
  const [isVisible, setIsVisible] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const expand = useSpring({
    transformOrigin: 'left',
    config: { friction: 20 },
    transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(-100%, 0, 0)',
    opacity: isVisible ? 1 : 0,
  });

  const openPopup = () => {
    setDialogOpen(true);
  };

  const closePopup = () => {
    setDialogOpen(false);
  };

  const handleScroll = () => {
    const element = document.getElementById('project-'.concat(projectIndex));
    setIsVisible(isInViewport(element));
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', debounce(handleScroll, 100));

    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <ProjectContainer
        id={'project-'.concat(projectIndex)}
        style={isLargeView ? expand : null}
        isMobileView={isMobileView}
        isTabletView={isTabletView}
      >
        <ProjectImage isMobileView={isMobileView} link={project.mockView} />
        <ProjectInfoContainer isMobileView={isMobileView}>
          <div className="title">
            <Typography
              text={project.title}
              size="medium"
              color="fourth"
            />
            <Typography
              text="•"
              size="medium"
              color="primary"
            />
            <Typography
              text="2020"
              size="medium"
              color="tertiary"
            />
          </div>
          <Typography
            text={project.description}
            size="small"
            style={{
              padding: isMobileView ? 0 : '.5rem',
              fontSize: '1em',
            }}
          />
          <TechStack techList={project.technologies} />
          <Button
            text="See Project"
            color="secondary"
            bgColor="primary"
            padding={isMobileView ? 1 : 2}
            margin={1}
            size={isMobileView ? 'small' : 'medium'}
            action={openPopup}
          />
        </ProjectInfoContainer>
      </ProjectContainer>
      {dialogOpen && (
        <PopUpDialog onClose={closePopup}>
          <Project project={project} onClose={closePopup} />
        </PopUpDialog>
      )}
    </>
  );
};

Item.propTypes = {
  project: PropTypes.object.isRequired,
  projectIndex: PropTypes.number.isRequired,
};

export default memo(Item);

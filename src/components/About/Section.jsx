import React, { useState } from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';
import Typography from 'components/common/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleUp, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { theme } from 'helpers/constants';
import { animated, useSpring } from 'react-spring';
import useMeasure from 'hooks/useMeasure';

const SectionContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: stretch;
  transition: height .5s ease-out;
  transform-origin: top;
  height: ${props => (props.toggled ? 'auto' : '3em')};
  overflow-y: hidden;

  *, *::after, *::before {
    box-sizing: border-box;
  }

  .head {
    outline: 1px solid;
    display: flex;
    justify-content: space-between;
    padding: 1em;
    align-items: center;
    height: 3em;
    cursor: pointer;
    & > svg {
      color: ${theme.colors.primary};
      transition: color, .3s ease;
      
      &:hover,
      &:active {
        color: ${theme.colors.tertiary};
      }
    }
  }
  .body {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    height: auto;
    overflow-y: hidden;
  }
`;

const Skill = styled.div`
  background-image: url(${props => props.icon});
  background-size: 3rem;
  background-repeat: no-repeat;
  background-position: center 2px;
  height: 6rem;
  overflow: hidden;
  width: auto;
  padding: .25rem;
  margin: .5em;
  box-shadow: 0 0 2px 2px ${theme.colors.fourth};
  border-radius: 4px;
  background-color: ${theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;

  & > span {
    display: block;
    max-width: 8rem;
    min-width: 6rem;
    font-size: 70%; 
    margin-top: 3rem;
    text-align: center;
  }
`;

const Section = ({ skill, skillsArray }) => {
  const [isToggled, setIsToggled] = useState(false);
  const [ref, { height }] = useMeasure();

  const handleToggle = () => {
    setIsToggled(prevState => !prevState);
  };

  const props = useSpring({
    config: { friction: 20 },
    height: isToggled ? height : 0,
  });

  return (
    <SectionContainer toggled={isToggled}>
      <div className="head" onPointerDown={handleToggle}>
        <Typography text={skill} size="small" />
        <FontAwesomeIcon
          icon={isToggled ? faChevronCircleUp : faChevronCircleRight}
        />
      </div>
      <animated.div style={props}>
        <animated.div {...ref} className="body">
          {
            skillsArray.map(lang => (
              <div key={lang.name} className="skill">
                <Skill icon={lang.icon}>
                  <span>
                    {lang.name}
                  </span>
                </Skill>
              </div>
            ))
          }
        </animated.div>
      </animated.div>
    </SectionContainer>
  );
};

Section.propTypes = {
  skill: Proptypes.string.isRequired,
  skillsArray: Proptypes.array.isRequired,
};

export default Section;

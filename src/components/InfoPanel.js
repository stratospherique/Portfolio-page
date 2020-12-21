import React, { useReducer } from 'react';
import { slidingReducer, NEXT_SLIDE, PREVIOUS_SLIDE } from '../context/slider-reducer';
import ProjectsList from './ProjectsList';
import { InfoContainer } from './common/styled-components/containers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

const InfoPanel = () => {
  const [slidingIndex, dispatch] = useReducer(slidingReducer, 0);

  const triggerNext = () => {
    dispatch({ type: NEXT_SLIDE });
  }

  const triggerPrev = () => {
    dispatch({ type: PREVIOUS_SLIDE });
  }
  return (
    <InfoContainer>
      <span className="prev" onClick={triggerPrev}><FontAwesomeIcon icon={faChevronCircleLeft} /></span>
      <span className="next" onClick={triggerNext}><FontAwesomeIcon icon={faChevronCircleRight} /></span>
      <ProjectsList currentIndex={slidingIndex} />
    </InfoContainer>
  )
}

export default InfoPanel;

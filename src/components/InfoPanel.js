import React from 'react';
import { connect } from 'react-redux';
import ProjectsList from './ProjectsList';
import { NavArrow } from './styled-components/styledParts';
import { InfoContainer } from './styled-components/containers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

const InfoPanel = ({ triggerPrev, triggerNext }) => (
  <InfoContainer>
    <span className="prev" onClick={triggerPrev}><FontAwesomeIcon icon={faChevronCircleLeft} /></span>
    <span className="next" onClick={triggerNext}><FontAwesomeIcon icon={faChevronCircleRight} /></span>
    <ProjectsList />
  </InfoContainer>
)

const mapDispatchToProps = (dispatch) => ({
  triggerNext: () => {
    dispatch({
      type: 'NEXTSLIDEACTION',
    })
  },
  triggerPrev: () => {
    dispatch({
      type: 'PREVIOUSSLIDEACTION',
    })
  }
})

export default connect(null, mapDispatchToProps)(InfoPanel);
import React from 'react';
import { connect } from 'react-redux';
import ProjectsList from './ProjectsList';
import { NavArrow } from './styled-components/styledParts';
import { InfoContainer } from './styled-components/containers';

const InfoPanel = ({ triggerPrev, triggerNext }) => (
  <InfoContainer>
    <span className="prev" onClick={triggerPrev}>◄</span>
    <span className="next" onClick={triggerNext}>►</span>
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
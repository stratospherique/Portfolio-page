import React from 'react';
import { connect } from 'react-redux';
import ProjectsList from './ProjectsList';
import ContactAnimated from './ContactAnimated';
import { InfoContainer } from './styled-components/containers';

const InfoPanel = ({ triggerPrev, triggerNext }) => (
  <InfoContainer>
    <button className="prev" onClick={triggerPrev}>previous</button>
    <button className="next" onClick={triggerNext}>Next</button>
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
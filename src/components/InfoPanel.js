import React from 'react';
import { connect } from 'react-redux';
import ProjectsList from './ProjectsList';
import ContactAnimated from './ContactAnimated';

const InfoPanel = ({ triggerPrev, triggerNext }) => (
  <div>
    <button onClick={triggerPrev}>previous</button>
    <button onClick={triggerNext}>Next</button>
    <ProjectsList />
    <ContactAnimated />
  </div>
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
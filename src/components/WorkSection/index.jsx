import React from 'react';
import { PROJECTS } from 'helpers/constants';
import ProjectsList from './List';
import Typography from '../common/Typography';

const WorkSection = () => (
  <>
    <div id="work-section">
      <Typography
        text="My Finest Work"
        size="large"
        type="title"
        color="tertiary"
        style={{
          textAlign: 'center',
        }}
      />
      <ProjectsList list={PROJECTS} />
    </div>
  </>
);

export default WorkSection;

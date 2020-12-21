import React from 'react';
import SectionHeading from 'components/common/SectionHeading';
import { PROJECTS } from 'helpers/constants';
import ProjectsList from './List';

const WorkSection = () => {
  return (
    <div id="work-section">
      <SectionHeading text="My Finest Work" />
      <ProjectsList list={PROJECTS} />
    </div>
  );
};

export default WorkSection;

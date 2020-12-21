import React from 'react';
import Item from './item';

const ProjectsList = ({list}) => {

  return (
    <div>
      {
        list.map(project => (
          <Item project={project} />
        ))
      }
    </div>
  )
}

export default ProjectsList;

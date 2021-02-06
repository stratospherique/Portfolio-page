import React from 'react';
import PropTypes from 'prop-types';
import Item from './item';

const ProjectsList = ({ list }) => (
  <div>
    {
      list.map((project, index) => (
        <Item key={'project-'.concat(index)} project={project} projectIndex={index} />
      ))
    }
  </div>
);

ProjectsList.propTypes = {
  list: PropTypes.array.isRequired,
};

export default ProjectsList;

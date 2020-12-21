import React from 'react';

const TechStack = ({techList}) => {

  return (
    <div>
      {
        techList.map(tech => (
          <span>
            {tech}
          </span>
        ))
      }
    </div>
  );
};

export default TechStack;

import React from 'react';

const ProjectSlide = ({ project }) => (
  <div>
    <h2>{project.title}</h2>
    <div><img src={project.previews[0]} alt='img' /></div>
    <div>{project.description}</div>
    <div>
      {project.technologies.map((tech) => <span key={tech}>{tech}</span>)}
    </div>
    <div>
      <button>Source Code</button>
      <button>Live Demo</button>
    </div>
  </div>
)

export default ProjectSlide;
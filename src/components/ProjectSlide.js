import React, { useState } from 'react';
import { SlideContainer } from './styled-components/containers';
import { PreviewImages } from './styled-components/styledParts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectSlide = props => {

  const [isWebView, setWebView] = useState(true);

  const hanleWebClick = (e) => {
    setWebView(true);
    const imagesContainer = document.querySelectorAll('.images')[props.theIndex]
    imagesContainer.classList.remove('mobile-view');
    imagesContainer.classList.add('web-view')
  }

  const hanleMobileClick = (e) => {
    setWebView(false);
    const imagesContainer = document.querySelectorAll('.images')[props.theIndex]
    imagesContainer.classList.add('mobile-view');
    imagesContainer.classList.remove('web-view');
  }

  const handleDrag = (e) => {
    // e.preventDefault();
    if (document.innerWidth > 700) return;
    e.persist();
    const p = e.currentTarget;
    p.scrollTop = p.scrollTop === 40 ? 0 : 40;
  }

  const { project, styleClass, theIndex } = props;
  return (
    <SlideContainer isActive={styleClass} indice={theIndex} >
      <h2 className="title">{project.title}</h2>
      <PreviewImages>
        <div className="images">
          <div>
            {project.previews.map((pic) => <img src={pic} key={pic} />)}
          </div>
        </div>
        {project.previews.length > 1 ? <div className="anim-btn">
          <span onClick={hanleWebClick} className={isWebView ? 'active' : null}>Web</span>
          <span onClick={hanleMobileClick} className={isWebView ? null : 'active'}>Mobile</span>
        </div> : <div className="anim-btn">
            <span className="active">Web</span>
          </div>}
      </PreviewImages>
      <div className="description" onTouchStart={handleDrag}>
        <p>
          {project.description}
        </p>
      </div>
      <div className="technologies">
        {project.technologies.map((tech) => <span key={tech}>{tech}</span>)}
      </div>
      <div className="buttons">
        <a href={project.repoLink} target="_blank">Source Code <FontAwesomeIcon icon={faGithub} /></a>
        <a href={project.demoLink} target="_blank">Live Demo<FontAwesomeIcon icon={faExternalLinkAlt} /></a>
      </div>
    </SlideContainer>
  )
}

export default ProjectSlide;
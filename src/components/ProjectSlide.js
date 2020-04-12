import React, { useState } from 'react';
import { useTransition } from 'react-spring';
import { SlideContainer } from './styled-components/containers';
import { PreviewImages, BackPreview } from './styled-components/styledParts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const ProjectSlide = ({ project, theIndex, style }) => {

  const [isWebView, setWebView] = useState(0);

  const hanleWebClick = (e) => {
    setWebView(0);
    /* const imagesContainer = document.querySelector('.images')
    imagesContainer.classList.remove('mobile-view');
    imagesContainer.classList.add('web-view') */
  }

  const hanleMobileClick = (e) => {
    setWebView(1);
    /* const imagesContainer = document.querySelector('.images')
    imagesContainer.classList.add('mobile-view');
    imagesContainer.classList.remove('web-view'); */
  }

  const handleDrag = (e) => {
    if (document.innerWidth > 700) return;
    e.persist();
    const p = e.currentTarget;
    p.scrollTop = p.scrollTop === 40 ? 0 : 40;
  }

  const previews = [
    ({ style }) => <BackPreview style={style} url={project.previews[0]} />,
    ({ style }) => <BackPreview style={style} url={project.previews[1]} />,
  ]

  const transitions = useTransition(isWebView, p => p, {
    enter: { opacity: 1, transform: 'translate3d(0%, 0, 0)', width: '100%' },
    from: { opacity: 0, transform: 'translate3d(-50%, 0, 0)', width: '0%' },
    leave: { opacity: 0, transform: 'translate3d(50%, 0, 0)', width: '0%' },
  })

  return (
    <SlideContainer indice={theIndex} style={style} >
      <h2 className="title">{project.title}</h2>
      <PreviewImages>
        <div className="images">

          {transitions.map(({ item, props, key }) => {
            const Preview = previews[item];
            return <Preview key={key} style={props} />
          })}

        </div>
        {project.previews.length > 1 ? <div className="anim-btn">
          <span onClick={hanleWebClick} className={isWebView === 0 ? 'active' : null}>Web</span>
          <span onClick={hanleMobileClick} className={isWebView === 0 ? null : 'active'}>Mobile</span>
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
        <a href={project.repoLink} target="_blank" rel="noopener noreferrer">Source Code <FontAwesomeIcon icon={faGithub} /></a>
        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Live Demo<FontAwesomeIcon icon={faExternalLinkAlt} /></a>
      </div>
    </SlideContainer>
  )
}

export default ProjectSlide;
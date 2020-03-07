import React from 'react';
import { SlideContainer } from './styled-components/containers';
import { PreviewImages } from './styled-components/styledParts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

class ProjectSlide extends React.Component {

  state = {
    webView: true,
  }

  hanleWebClick = (e) => {
    this.setState({
      webView: true
    })
    document.querySelector('.images').classList.remove('mobile-view');
    document.querySelector('.images').classList.add('web-view')
  }

  hanleMobileClick = (e) => {
    this.setState({
      webView: false
    })
    document.querySelector('.images').classList.add('mobile-view');
    document.querySelector('.images').classList.remove('web-view')
  }

  handleDrag = (e) => {
    // e.preventDefault();
    if (document.innerWidth > 700) return;
    e.persist();
    const p = e.currentTarget;
    p.scrollTop = p.scrollTop === 40 ? 0 : 40;
  }

  render() {
    const { project, styleClass, theIndex } = this.props;
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
            <span onClick={this.hanleWebClick} className={this.state.webView ? 'active' : null}>Web</span>
            <span onClick={this.hanleMobileClick} className={this.state.webView ? null : 'active'}>Mobile</span>
          </div> : <div className="anim-btn">
              <span className="active">Web</span>
            </div>}
        </PreviewImages>
        <div className="description" onTouchStart={this.handleDrag}>
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
}

export default ProjectSlide;
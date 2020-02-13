import React from 'react';
import { SlideContainer } from './styled-components/containers';
import { PreviewImages } from './styled-components/styledParts';

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

  render() {
    const { project, styleClass } = this.props;
    return (
      <SlideContainer isActive={styleClass} >
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
        <div className="description">{project.description}</div>
        <div className="technologies">
          {project.technologies.map((tech) => <span key={tech}>{tech}</span>)}
        </div>
        <div className="buttons">
          <button>Source Code</button>
          <button>Live Demo</button>
        </div>
      </SlideContainer>
    )
  }
}

export default ProjectSlide;
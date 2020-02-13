import React from 'react';
import { connect } from 'react-redux';
import ProjectSlide from './ProjectSlide';
import mobileLinkOne from '../assets/img/1mobile.png';
import webLinkOne from '../assets/img/1-web.png';
import webLinkTwo from '../assets/img/2-web.png';
import webLinkThree from '../assets/img/3-web.png';
import webLinkFour from '../assets/img/4-web.png';

const PROJECTS = [
  {
    title: 'REMA',
    description: 'REMA is a full stack web app that enables the user to navigate through a wide variety of Real Estates via nice and easy to use responsive interface.',
    previews: [
      webLinkOne,
      mobileLinkOne,
    ],
    technologies: [
      'html',
      'css',
      'JavaScript',
      'React',
      'Redux',
      'Rails API'
    ],
    repoLink: 'https://github.com/stratospherique/real-estate-app',
    demoLink: 'https://clever-hugle-f515ec.netlify.com/'
  },
  {
    title: 'ODIN Facebook',
    description: 'Odin Facebook is a mini blog that allows users to publish new posts about a variety of topics.',
    previews: [
      webLinkTwo
    ],
    technologies: [
      'html',
      'css',
      'Rails',
      'Ruby'
    ],
    repoLink: 'https://github.com/stratospherique/odin-facebook',
    demoLink: 'https://desolate-badlands-67931.herokuapp.com/'
  },
  {
    title: 'Math Calculator',
    description: 'Math calculator is a web app that enables the user to perform a set of basic Mathematical operations on Numbers and to evaluate Basic expressions',
    previews: [
      webLinkThree
    ],
    technologies: [
      'html',
      'SCSS',
      'JavaScript',
      'React'
    ],
    repoLink: 'https://github.com/stratospherique/Calculator-React/tree/master',
    demoLink: 'https://gifted-bose-6eb952.netlify.com/'
  },
  {
    title: 'Weather-App-JS',
    description: 'Weather app is a web app that enables the user to get weather related info about any city in the world from reliable sources (OpenWeather API).',
    previews: [
      webLinkFour
    ],
    technologies: [
      'html',
      'SCSS',
      'JavaScript',
      'Webpack',
      'API'
    ],
    repoLink: 'https://github.com/stratospherique/Weather-App-JS/tree/development',
    demoLink: 'https://rawcdn.githack.com/stratospherique/Weather-App-JS/ef39618fc7a24fe22c79bb20a182d1814fc264c8/index.html'
  },
]

const ProjectsList = ({ currentIndex }) => (
  <div className="slide-container">
    <div className="wrapper" style={{ transform: `translateX(${currentIndex * -25}%)` }}>
      {PROJECTS.map((project, index) => <ProjectSlide project={project} key={index} styleClass={index != currentIndex ? false : true} />)}
    </div>
  </div>
)

const mapStateToProps = (state) => ({
  currentIndex: state.currentSlide
})

export default connect(mapStateToProps, null)(ProjectsList);
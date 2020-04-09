import React, { useContext } from 'react';
import ProjectSlide from './ProjectSlide';
import mobileLinkOne from '../assets/img/1mobile.png';
import webLinkOne from '../assets/img/1-web.png';
import webLinkTwo from '../assets/img/2-web.png';
import mobileLinkTwo from '../assets/img/2-mobile.png';
import webLinkThree from '../assets/img/3-web.png';
import mobileLinkThree from '../assets/img/3-mobile.png';
import webLinkFour from '../assets/img/4-web.png';
import mobileLinkFour from '../assets/img/4-mobile.png';
import webLinkFive from '../assets/img/5-web.png';
import mobileLinkFive from '../assets/img/5-mobile.png';

const PROJECTS = [
  {
    title: 'Battleship Game',
    description: 'Battleship (also Battleships or Sea Battle) is a strategy type guessing game for two players. We implemented a web version of the app where the two players are the user and his bot opponent.',
    previews: [
      webLinkThree,
      mobileLinkThree
    ],
    technologies: [
      'HTML',
      'SCSS',
      'JavaScript',
      'Webpack'
    ],
    repoLink: 'https://github.com/stratospherique/battleship-js',
    demoLink: 'https://stratospherique.github.io/battleship-js/'
  },
  {
    title: 'REMA',
    description: 'REMA is a full stack web app that enables the user to navigate through a wide variety of real estate via nice and easy to use responsive interface.',
    previews: [
      webLinkOne,
      mobileLinkOne,
    ],
    technologies: [
      'HTML',
      'SCSS',
      'JavaScript',
      'React',
      'Redux',
      'Rails API'
    ],
    repoLink: 'https://github.com/stratospherique/real-estate-app',
    demoLink: 'https://clever-hugle-f515ec.netlify.com/'
  },
  {
    title: 'ODIN Book',
    description: 'Odin Book is a mini blog that allows users to publish new posts about a variety of topics.',
    previews: [
      webLinkTwo,
      mobileLinkTwo
    ],
    technologies: [
      'HTML',
      'CSS',
      'Rails',
      'Ruby'
    ],
    repoLink: 'https://github.com/stratospherique/odin-facebook',
    demoLink: 'https://desolate-badlands-67931.herokuapp.com/'
  },
  {
    title: 'Weather-App-JS',
    description: 'Weather app is a web app that enables the user to get weather related info about any city in the world from reliable sources (OpenWeather API).',
    previews: [
      webLinkFour,
      mobileLinkFour,
    ],
    technologies: [
      'HTML',
      'SCSS',
      'JavaScript',
      'Webpack',
      'API'
    ],
    repoLink: 'https://github.com/stratospherique/Weather-App-JS/tree/development',
    demoLink: 'https://rawcdn.githack.com/stratospherique/Weather-App-JS/ef39618fc7a24fe22c79bb20a182d1814fc264c8/index.html'
  },

]

/* to be added React Animations
{
    title: 'Dashboard',
    description: 'Dashboard is a web app that mimics the behaviour and the look & feel of a dashboard along with validation-enabled forms.',
    previews: [
      webLinkFive,
      mobileLinkFive
    ],
    technologies: [
      'HTML',
      'SCSS',
      'JavaScript',
      'React',
      'Redux'
    ],
    repoLink: 'https://github.com/stratospherique/Dashboard',
    demoLink: 'https://proto-dashboard.netlify.com/'
  }
*/

const ProjectsList = ({ currentIndex }) => {
  return (
    <div className="slide-container" >
      <div className="wrapper" style={{ transform: `translateX(${currentIndex * -25}%)` }}>
        {PROJECTS.map((project, index) => <ProjectSlide project={project} key={index} styleClass={index != currentIndex ? false : true} theIndex={index} />)}
      </div>
    </div>
  )
}

export default ProjectsList;

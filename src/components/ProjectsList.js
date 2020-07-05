import React from 'react';
import { useTransition } from 'react-spring'
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
    _id: 0,
    title: 'Battleship Game',
    description: 'Battleship (also Battleships or Sea Battle) is a strategy type guessing game for two players. We implemented a web version of the app where the two players are the user and his bot opponent.',
    previews: [
      webLinkOne,
      mobileLinkOne
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
    _id: 1,
    title: 'REMA',
    description: 'REMA is a full stack web app that enables the user to navigate through a wide variety of real estate via nice and easy to use responsive interface.',
    previews: [
      webLinkTwo,
      mobileLinkTwo,
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
    demoLink: 'https://real-estate-mania.netlify.app/'
  },
  {
    _id: 2,
    title: 'ODIN Book',
    description: 'Odin Book is a mini blog that allows users to publish new posts about a variety of topics.',
    previews: [
      webLinkThree,
      mobileLinkThree
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
    _id: 3,
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
    demoLink: 'https://stratospherique.github.io/Weather-App-JS/',
  },
  {
    _id: 4,
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
]


const slides = PROJECTS.map((pj, ind) => (({ style }) => <ProjectSlide project={pj} theIndex={ind} style={style} />))

export default ({ currentIndex }) => {

  const transitions = useTransition(currentIndex, p => p, {
    from: { opacity: 0, transform: 'translate3d(0,100%,0)', height: '0%' },
    enter: { opacity: 1, transform: 'translate3d(0,0%,0)', height: '100%' },
    leave: { opacity: 0, transform: 'translate3d(0,-50%,0)', height: '0%' },
  })
  return (
    <div className="slide-container">
      {transitions.map(({ item, props, key }) => {
        const Slide = slides[item]
        return <Slide key={key} style={props} />
      })}
    </div>
  )
}



import React from 'react';

import { CSSTransition } from 'react-transition-group';
import IntroPanel from './IntroPanel';
import InfoPanel from './InfoPanel';
import '../assets/css/reset.css';
import '../assets/css/app.css';
import { MainContainer, CopyRightsBanner } from './styled-components/containers';
import ReactGA from 'react-ga';

const trackingId = 'UA-158499655-1'; // Replace with your Google Analytics tracking ID

const initAnalytic = (id) => {
  ReactGA.initialize(id);
  ReactGA.pageview('/');
}

const App = () => {
  initAnalytic(trackingId);
  return (
    <CSSTransition
        in={true}
        timeout={1000}
        appear={true}
        classNames="fade">
    <MainContainer>
      {
        //the container
      }
      <IntroPanel className="left-panel" />
      <InfoPanel className="right-panel" />
      <CopyRightsBanner>
        <span>ⓒ Made by Ahmed</span>
      </CopyRightsBanner>
    </MainContainer>
    </CSSTransition>
  )
}

export default App;

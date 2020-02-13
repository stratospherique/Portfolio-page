import React from 'react';
import IntroPanel from './IntroPanel';
import InfoPanel from './InfoPanel';
import '../assets/css/reset.css';
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
    <MainContainer>
      {
        //the container
      }
      <IntroPanel className="left-panel" />
      <InfoPanel className="right-panel" />
      <CopyRightsBanner>
        <span>Made by Ahmed ⓒ</span>
      </CopyRightsBanner>
    </MainContainer>
  )
}

export default App;

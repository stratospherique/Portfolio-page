import React from 'react';
import IntroPanel from './IntroPanel';
import InfoPanel from './InfoPanel';
import '../assets/css/reset.css';
import { MainContainer, CopyRightsBanner } from './styled-components/containers';
import ReactGA from 'react-ga';

const trackingId = '222863254'; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);

const App = () => (
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

export default App;

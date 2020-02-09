import React from 'react';
import IntroPanel from './IntroPanel';
import InfoPanel from './InfoPanel';
import '../assets/css/reset.css';
import { MainContainer, CopyRightsBanner } from './styled-components/containers';

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

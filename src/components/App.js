import React from 'react';
import IntroPanel from './IntroPanel';
import InfoPanel from './InfoPanel';
import '../assets/css/reset.css';
import { MainContainer } from './styled-components/containers';

const App = () => (
  <MainContainer>
    {
      //the container
    }
    <IntroPanel />
    <InfoPanel />
  </MainContainer>
)

export default App;

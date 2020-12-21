import React from 'react';

import { CSSTransition } from 'react-transition-group';
import ReactGA from 'react-ga';
import IntroPanel from './IntroPanel';
import InfoPanel from './InfoPanel';
import NavigationBar from 'components/NavigationBar';
import Intro from 'components/Intro';
import WorkSection from 'components/WorkSection';
import About from 'components/About';
import Contact from 'components/Contact';
import '../assets/css/reset.css';
// import '../assets/css/app.css';
import { MainContainer, CopyRightsBanner } from './common/styled-components/containers';

const trackingId = 'UA-158499655-1'; // Replace with your Google Analytics tracking ID

const initAnalytic = (id) => {
  ReactGA.initialize(id);
  ReactGA.pageview('/');
}

const App = () => {
  // initAnalytic(trackingId);
  return (
    <>
      <NavigationBar />
      <div style={{
        position: "absolute",
        top: 100,
        width: '100%'
      }}>
        <Intro />
        <WorkSection />
        <About />
        <Contact />
      </div>
    </>
  )
}
/* <CSSTransition
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
</CSSTransition> */

export default App;

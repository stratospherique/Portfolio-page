import React, { useReducer } from 'react';
import ReactGA from 'react-ga';
import NavigationBar from 'components/NavigationBar';
import Intro from 'components/Intro';
import WorkSection from 'components/WorkSection';
import About from 'components/About';
import Contact from 'components/Contact';
import '../assets/css/reset.css';
import '../assets/css/app.scss';
import { popUpReducer } from 'context/reducers';
import BlurComponent from 'components/common/BlurLayer';
// eslint-disable-next-line
const trackingId = 'UA-158499655-1'; // Replace with your Google Analytics tracking ID
// eslint-disable-next-line
const initAnalytic = id => {
  ReactGA.initialize(id);
  ReactGA.pageview('/');
};

const App = () => {
  if (process.env.NODE_ENV === 'production') {
    initAnalytic(trackingId);
  }

  const [popupActive, dispatch] = useReducer(popUpReducer, false);

  return (
    <>
      <NavigationBar dispatch={dispatch} />
      <div className="container">
        <Intro />
        <WorkSection />
        <About />
        <Contact />
      </div>
      {
        popupActive && <BlurComponent />
      }
    </>
  );
};

export default App;

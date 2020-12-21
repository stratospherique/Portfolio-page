import React from "react";
import styled from 'styled-components';
import SocialLinks from "components/common/SocialLinks";
import Typography from 'components/common/Typography';

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Intro = () => {
  return (
    <IntroContainer id="intro">
      <h1>I'm Ahmed, Glad to see you</h1>
      <p>I’m a software developer! I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hestiate to contact me.</p>
      <div>
        <Typography text="My works in social networks" />
        <SocialLinks />
      </div>
    </IntroContainer>
  );
};

export default Intro;

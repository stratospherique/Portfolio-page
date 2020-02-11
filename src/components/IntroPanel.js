import React from 'react';
import { IntroContainer } from './styled-components/containers';
import { SocialLinks } from './styled-components/styledParts';
import * as links from '../assets/assets';

const IntroPanel = () => (
  <IntroContainer>
    <h1 className="mantra">DESIGNER.
THINKER.
HUSBAND
& FATHER.</h1>
    <p className="current">Currently designing @Uber. Formerly Experience Design Director @GoPro and Interactive Director @Focus Lab. Follow my work, words and photos below.</p>
    <SocialLinks>
      <a href=""><img src={links.twitterIco} /></a>
      <a href=""><img src={links.linkedIco} /></a>
      <a href=""><img src={links.githubIco} /></a>
      <a href=""><img src={links.gmailIco} /></a>
    </SocialLinks>
  </IntroContainer>
)

export default IntroPanel;
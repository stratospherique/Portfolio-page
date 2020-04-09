import React from 'react';
import { IntroContainer } from './styled-components/containers';
import { SocialLinks } from './styled-components/styledParts';
import * as links from '../assets/assets';

const IntroPanel = () => (
  <IntroContainer>
    <h1 className="mantra">Developer.
Critical Thinker.
Coding Enthuthiast.</h1>
    <p className="current">Currently working as a part-time Technical Support Engineer <b style={{ fontWeight: 900 }}>@Microverse</b> conducting code reviews. Open to full-stack web developing positions. Follow my work, words and photos below.</p>
    <SocialLinks>
      <a href="https://twitter.com/AhmedMahfoudh8" target="_blank"><img src={links.twitterIco} /></a>
      <a href="https://www.linkedin.com/in/ahmed-mahfoudh/" target="_blank"><img src={links.linkedIco} /></a>
      <a href="https://github.com/stratospherique" target="_blank"><img src={links.githubIco} /></a>
      <a href="mailto:ahmed.mahfoudh1991@gmail.com" target="_blank"><img src={links.gmailIco} /></a>
    </SocialLinks>
  </IntroContainer>
)

export default IntroPanel;
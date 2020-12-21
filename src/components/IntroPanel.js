import React from 'react';
import { IntroContainer } from './common/styled-components/containers';
import { SocialLinks } from './common/styled-components/styledParts';
import * as links from '../assets/assets';

const IntroPanel = () => (
  <IntroContainer>
    <h1 className="mantra">Developer.
Critical Thinker.
Coding Enthuthiast.</h1>
    <p className="current">Currently working as a part-time Technical Support Engineer <b style={{ fontWeight: 900 }}>@Microverse</b> conducting code reviews. Open to full-stack web developing positions. Follow my work, words and photos below.</p>
    <SocialLinks>
      <a href="https://twitter.com/AhmedMahfoudh8" target="_blank" rel="noopener noreferrer"><img src={links.twitterIco} alt="twitter" /></a>
      <a href="https://www.linkedin.com/in/ahmed-mahfoudh/" target="_blank" rel="noopener noreferrer"><img src={links.linkedIco} alt="linkedin" /></a>
      <a href="https://github.com/stratospherique" target="_blank" rel="noopener noreferrer"><img src={links.githubIco} alt="github" /></a>
      <a href="mailto:ahmed.mahfoudh1991@gmail.com" target="_blank" rel="noopener noreferrer"><img src={links.gmailIco} alt="gmail" /></a>
    </SocialLinks>
  </IntroContainer>
)

export default IntroPanel;
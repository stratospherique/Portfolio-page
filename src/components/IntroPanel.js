import React from 'react';
import { IntroContainer } from './styled-components/containers';
import { SocialLinks } from './styled-components/styledParts';
import * as links from '../assets/assets';

const IntroPanel = () => (
  <IntroContainer>
    <h1 className="mantra">Developper.
Critical Thinker.
Coding Enthuthiast.</h1>
    <p className="current">Currently Currently working as a Part-Time Technical Support Engineer @Microverse conducting Code Reviews. Open for Full stack web developing positions. Follow my work, words and photos below.</p>
    <SocialLinks>
      <a href="https://twitter.com/AhmedMahfoudh8" target="_blank"><img src={links.twitterIco} /></a>
      <a href="https://www.linkedin.com/in/ahmed-mahfoudh-6414b6121/" target="_blank"><img src={links.linkedIco} /></a>
      <a href="https://github.com/stratospherique" target="_blank"><img src={links.githubIco} /></a>
      <a href="mailto:ahmedosm10@gmail.com" target="_blank"><img src={links.gmailIco} /></a>
    </SocialLinks>
  </IntroContainer>
)

export default IntroPanel;
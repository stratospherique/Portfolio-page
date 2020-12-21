import React from 'react';
import twitterIco from 'assets/icon/twitter.png';
import gmailIco from 'assets/icon/gmail.png';
import linkedIco from 'assets/icon/linkedin.png';
import githubIco from 'assets/icon/github.png';

const SocialLinks = () => (
  <div>
    <a href="https://twitter.com/AhmedMahfoudh8" target="_blank" rel="noopener noreferrer"><img src={twitterIco} alt="twitter" /></a>
    <a href="https://www.linkedin.com/in/ahmed-mahfoudh/" target="_blank" rel="noopener noreferrer"><img src={linkedIco} alt="linkedin" /></a>
    <a href="https://github.com/stratospherique" target="_blank" rel="noopener noreferrer"><img src={githubIco} alt="github" /></a>
    <a href="mailto:ahmed.mahfoudh1991@gmail.com" target="_blank" rel="noopener noreferrer"><img src={gmailIco} alt="gmail" /></a>
  </div>
)

export default SocialLinks;

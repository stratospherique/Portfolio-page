import React from 'react';
import styled from 'styled-components';
import SocialLinks from 'components/common/SocialLinks';
import Typography from 'components/common/Typography';
import { useMediaQuery } from 'helpers/hooks';
import { theme } from 'helpers/constants';

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: ${props => (props.isMobileView ? '500px' : 'calc(100vh - 120px)')};
  position: relative;
  padding: 5vw;

  & > div {
    max-width: 40rem;
  }
`;

const Intro = () => {
  const isMobileView = useMediaQuery(`(max-width: ${theme.breakpoints.lg})`);
  return (
    <IntroContainer id="intro" isMobileView={isMobileView}>
      <div>
        <Typography text="Diamond Solid Code by 'Stratospherique' 💪" type="title" size="large" />
        <Typography
          text="My name is ♣ Ahmed Mahfoudh ♣"
          size="small"
          style={{
            margin: 0,
          }}
        />
        <Typography
          text="I’m a software developer! I can help you build a product, feature or website. Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hestiate to contact me."
          size="small"
          style={{
            margin: 0,
          }}
        />
        <div>
          <Typography
            text="My works in social networks:"
            style={{
              fontWeight: 'bold',
            }}
            size="small"
          />
          <SocialLinks color="secondary" />
        </div>
      </div>
    </IntroContainer>
  );
};

export default Intro;

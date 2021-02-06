import React from 'react';
import styled from 'styled-components';
import Button from 'components/common/Button';
import Typography from '../common/Typography';

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5vw;
`;

const Summary = () => (
  <SummaryContainer>
    <Typography
      text="About me"
      size="medium"
      type="title"
      color="primary"
    />
    <Typography
      text="I am goal-driven, detail-oriented, and proactive developer. I like building eye-catching, yet efficient web products. The Diamond in the logo stands for code robustness, quality, and coherence with the best practices. You need assistance in building a website or launching an online business, or you're on a talent hunt mission, don’t hesistate to contact me."
      size="small"
    />
    <Button
      text="Get my resume"
      type="primary"
      bgColor="primary"
      color="secondary"
      size="small"
      padding={2}
      action={() => window.open('https://drive.google.com/file/d/1onrZK2ZR76KZm96pyQoyWsytvBuOEYpT/view?usp=sharing', '__blank')}
    />
  </SummaryContainer>
);

export default Summary;

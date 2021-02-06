import React from 'react';
import Typography from 'components/common/Typography';
import styled from 'styled-components';
import { theme } from 'helpers/constants';
import ContactForm from './ContactForm';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: ${theme.colors.primary};
  border-radius: 1rem 0 1rem 0;
  margin-bottom: 3rem;
`;

const Contact = () => (
  <ContactContainer id="contact">
    <Typography
      text="Interested in collaborating?"
      size="large"
      type="title"
      color="hover"
    />
    <Typography
      style={{ textAlign: 'center' }}
      size="small"
      text="If you have an application you are interested in developing, a feature that you need built or a project that needs coding, I’d love to help you with it."
      color="secondary"
    />
    <ContactForm />
    <Typography
      size="small"
      text="© Ahmed Mahfoudh"
    />
  </ContactContainer>
);

export default Contact;

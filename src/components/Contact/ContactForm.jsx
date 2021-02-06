import React from 'react';
import SocialLinks from 'components/common/SocialLinks';
import styled from 'styled-components';
import { useMediaQuery } from 'helpers/hooks';
import { theme } from 'helpers/constants';
import Button from 'components/common/Button';
import Typography from 'components/common/Typography';
import sendEmail from 'helpers/mailer';
import { useForm } from 'react-hook-form';

const FormContainer = styled.form`
  width: ${props => (props.isMobileView ? '100%' : '60%')};
  display: flex;
  flex-direction: column;
  align-items: stretch;

  .field {
    padding: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    & > input {
      width: ${props => (props.isMobileView ? '100%' : '48%')};
      padding: 1rem;
      margin: 1%;
    }

    & > textarea {
      display: block;
      width: 98%;
      padding: 1em;
      margin: 0 auto;
      resize: vertical;
    }
  }
  hr {
    height: 5px;
    margin: 2rem;
  }
`;

const ContactForm = () => {
  const isMobileView = useMediaQuery(`max-width: ${theme.breakpoints.md}`);

  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    const body = `
      Visitor Name: ${data.name} ${data.surname}<br />
      ${data.body}<br />
    `;
    // uncomment on deploy
    sendEmail(body);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)} isMobileView={isMobileView}>
      <div className="field">
        <input type="text" name="name" placeholder="Name" ref={register({ required: true })} />
        <input type="text" name="surname" placeholder="Last Name" ref={register({ required: true })} />
      </div>
      <div className="field">
        <textarea rows="4" placeholder="Message" name="body" ref={register({ required: true })} />
      </div>
      <div className="field">
        <Button
          text="Get In Touch"
          size="medium"
          padding={2}
          color="secondary"
          bgColor="tertiary"
          style={{
            width: '98%',
          }}
          type="submit"
        />
      </div>
      <div className="field">
        <Typography
          text="ahmed.mahfoudh1991@gmail.com"
          size="small"
          style={{
            marginRight: '1rem',
          }}
        />
        <SocialLinks color="primary" />
      </div>
      <hr />
    </FormContainer>
  );
};

export default ContactForm;

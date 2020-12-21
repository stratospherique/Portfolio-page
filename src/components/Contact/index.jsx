import React from "react";
import SectionHeading from "components/common/SectionHeading";
import Typography from 'components/common/Typography';
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div id="contact">
      <SectionHeading text="Interested in collaborating?" />
      <Typography text="If you have an application you are interested in developing, a feature that you need built or a project that need coding, I’d love to help you with it." />
      <ContactForm />
    </div>
  );
};

export default Contact;

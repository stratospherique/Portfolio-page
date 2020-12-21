import React from 'react';
import SocialLinks from 'components/common/SocialLinks';

const ContactForm = () => (
  <form>
    <div>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Last Name" />
    </div>
    <div>
      <input type="text" placeholder="Message" />
    </div>
    <div>
      <button>
        Get in Touch
      </button>
    </div>
    <div>
      <span>ahmed.mahfoudh1991@gmail.com</span>
      <SocialLinks />
    </div>
  </form>
);

export default ContactForm;

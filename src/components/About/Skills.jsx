import React from 'react';
import SectionHeading from 'components/common/SectionHeading';
import Button from 'components/common/Button';
import { SKILLS as skills } from 'helpers/constants';

const Skills = () => (
  <div>
    {
      Object.keys(skills).map(skill => (
        <div key={skill}>
          <h4>{skill}</h4>
          <div>
            {
              skills[skill].map(lang => (
                <span key="lang">{lang.name}</span>
              ))
            }
          </div>
        </div>
      ))
    }
  </div>
);

export default Skills;

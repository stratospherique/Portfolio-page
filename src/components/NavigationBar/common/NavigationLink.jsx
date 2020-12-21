import React from 'react';

const NavigationLink = ({IdPath, text}) => (
<a href={`#${IdPath}`}>{text}</a>
);

export default NavigationLink;
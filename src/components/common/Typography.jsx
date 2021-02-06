import React from "react";
import styled from "styled-components";
import { theme } from "helpers/constants";

const Component = {
  title: ({className, children, style}) => <h1 style={{...style}} className={className}>{children}</h1>,
  'section-heading': ({text, style}) => <h2 style={{...style}}>{text}</h2>,
  default: ({className, children, style}) => <p style={{...style}} className={className}>{children}</p>
};

const Typography = ({type, text, size, color, style = {}}) => {
  let C = Component[type];
  if (!C) {
    C = Component.default;
  }
  C = styled(C)`
    ${size && `font-size: ${theme.typography.fontSizes[size]};`}
    ${size && `margin: ${theme.typography.spacings[size]} 0;`}
    ${color && theme.colors[color] && `color: ${theme.colors[color]};`}
  `;

  return (
    <C style={{
      ...style
    }}>{text}</C>
  );
};

export default Typography;
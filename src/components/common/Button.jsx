import React from 'react';
import styled from 'styled-components';
import { theme } from 'helpers/constants';

const Btn = ({className, children, style, action ,type}) => (
  <button
    className={className}
    style={{...style}}
    onClick={action}
    onAuxClick={action}
    type={type}
  >
    {children}
  </button>
);

const Button = ({text, type, size, Icon, action, style, padding, margin, color, bgColor}) => {

  const C = styled(Btn)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: auto;
  flex-wrap: no-wrap;
  z-index: inherit;
  border: none;
  background-color: ${(bgColor && theme.colors[bgColor]) || 'transparent'};
  outline: 1px solid ${(bgColor && theme.colors[bgColor]) || 'transparent'};
  color: ${(color && theme.colors[color]) || 'gray'};
  & svg {
    font-size: ${theme.icons.size[size] || '8px'};
    font-weight: bold;
  }

  & > span {
    font-size: ${theme.typography.fontSizes[size] || '8px'};
  }

  cursor: pointer;

  border-radius: 4px;

  transition: background-color .5s ease;

  &:hover {
    color: ${(bgColor && theme.colors[bgColor]) || 'transparent'};
    background-color: ${(color && theme.colors[color]) || 'gray'};
    & svg {
      color: ${(bgColor && theme.colors[bgColor]) || 'white'};
    }
  }
  `;
  
  return (
      <C 
        action={action}
        style={{
          ...style,
          padding: padding ? theme.spacing(padding) : 0,
          margin: margin ? theme.spacing(margin) : 0
        }}
        type={type}
      >
        {
          text && <span>{text}</span>
        } 
        {
          Icon ? <Icon size={theme.icons.size[size]} /> : null
        }
      </C>
    )
}

export default Button;

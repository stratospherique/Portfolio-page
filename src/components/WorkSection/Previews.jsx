import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from 'helpers/constants';

const PreviewsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
`;

const Pic = styled.div`
  background-image: url(${props => props.link});
  background-size: 100% 100%;
  background-postion: center center;
  background-repeat: no-repeat;
  flex-grow: 1;
  height: 4rem;
  border: 1px solid ${props => (props.active ? theme.colors.primary : 'transparent')};
 
  margin: 0 .5em;
  cursor: pointer;
  user-select: none;
`;

const Previews = ({
  links,
  activeIndex,
  changeActive,
  className,
}) => (
  <PreviewsContainer className={className}>
    {
      links.map((link, index) => (
        <Pic
          active={activeIndex === index}
          key={'link-'.concat(index)}
          link={link}
          onClick={() => changeActive(index)}
        />
      ))
    }
  </PreviewsContainer>
);

Previews.propTypes = {
  links: PropTypes.array.isRequired,
  activeIndex: PropTypes.number.isRequired,
  changeActive: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default Previews;

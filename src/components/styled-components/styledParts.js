import styledComponent from 'styled-components';
import palette from './colors';
import { animated } from 'react-spring';

const SocialLinks = styledComponent.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 40%;

  & a {
    border: 1px solid transparent;
    border-radius: 50%;
    transition: background-color .4s ease-in;
    &:hover {
      background-color: ${palette.colorFour};
    }
  }

  & img {
    width: 2rem;
  }
`;

const PreviewImages = styledComponent.div`
  border-bottom: 1px solid ${palette.colorFour};
  width: 100%;
  height: 70%;
  margin: .5rem 0 2% 0;
  position: relative;

  @media screen and (min-width: 700px) {
    height: 60%;
  }

  .images {
    width: 100%;
    height: 95%;
    overflow-x: hidden;
    display: flex;
    flex-wrap: none;
    justify-content: center;  
    @media screen and (max-width: 1020px) {
      height: 100%;
    }
  }
  

  .mobile-view {
    & div {
      transform: translateX(-50%);
    }
  }

  .web-view {
    & div {
      transform: translateX(0);
    }
  }

  .anim-btn {
    display: flex;
    justify-content: center;
    width: 8rem;
    height: 1.5rem;
    @media screen and (max-width: 700px) {
      height: 1.2em;
    }
    position: absolute;
    bottom: 0;
    left: calc(50% - 4rem);

    & span {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid ${palette.colorFour};
      color: ${palette.colorFive};
      width: 50%;
      height: 100%;
      cursor: pointer;
    }
    .active {
      background-color: yellow;
    }
  }
`;

const BackPreview = styledComponent(animated.div)`
  ${props => `background: url(${props.url});`}
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

const NavArrow = styledComponent.span`
font-size: 3rem;
position: relative;
  &::after {
  content: '^';
  position: absolute;
  top: 1rem;
  left: 0;
}
  &::before {
  content: '^';
  position: absolute;
  bottom: 0;
}
`;

export { SocialLinks, PreviewImages, NavArrow, BackPreview }
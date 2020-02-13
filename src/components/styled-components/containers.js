import styledComponent from 'styled-components';
import palette from './colors';

const MainContainer = styledComponent.div`
  position: relative;
  
	overflow: hidden;
  display: grid;
  grid-template-areas: "left right";
  grid-template-columns: 35% 1fr;
  grid-template-rows: 1fr;



  @media screen and (max-width: 700px){
    height: 1000px;
    grid-template-areas: "left" 
                         "right";
    grid-template-columns: 1fr;
    grid-template-rows: 500px 500px;
  }

`;

const IntroContainer = styledComponent.div`
  background-color: white;
  grid-area: left;
  display: flex;
  
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > .mantra {
    width: 90%;
    margin-bottom: 2rem;
    font-size: 1.5em;
    text-align: left;
    color: ${palette.colorFive};
  }

  & > .current {
    width: 90%;
    text-align: justify;
    margin-bottom: 4rem;
    font-size: 1em;
  }
`;

const CopyRightsBanner = styledComponent.div`
  background-color: transparent;
  position: absolute;
  bottom: .5%;
  width: 10rem;
  font-size: .8em;
  text-align: center;
  right: calc(35% - 6rem);
  @media screen and (max-width: 700px){
    right: calc(50% - 5rem);
  }
`;

const InfoContainer = styledComponent.div`
  grid-area: right;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;

  & > span {
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    width: 2rem;
    padding: 0;
    border: none;
    background-color: ${palette.colorFour};
    cursor: pointer;
    transition: background-color .5s ease;
    &:hover {
      background-color: ${palette.colorSix};
    }

    z-index: 1000;
    
  }
  .prev {
    position: absolute;
    top: calc(50% - 1rem);
    left: 4%;
    @media screen and (max-width: 700px){
      left: 1%;
      top: 30%;
    }
  }

  .next {
    position: absolute;
    top: calc(50% - 1rem);
    right: 4%;
    @media screen and (max-width: 700px){
      right: 1%;
      top: 30%;
    }
  }

  .slide-container {
    width: 100%;
    height: 100%;
    overflow: hidden;

    .wrapper {
      width: 400%;
      height: 100%;
      display: flex;
      transition: transform 1s ease-out;
    }
  }  
`;

const SlideContainer = styledComponent.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: opacity 2s ease;
  ${props => `background-color: ${palette.colorarray[props.indice]};`}
  ${props => props.isActive ? `
  opacity: 1;` : `
  opacity: 0;
  `}

  .title {
  margin: 2% 0 0 0;
  font-size: 2em;
  color: ${palette.colorFive};
}

  .description {
  text-align: justify;
  line-height: 1.3rem;
  width: 90%;
  font-size: 1em;
  color: ${palette.colorFive};
  @media screen and(max-width: 300px) {
    font-size: .8em;
  }
}

  .technologies {
  margin: 5% 0 0 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
    
    & span {
    padding: .3rem;
    border: 1px solid;
    margin: .5rem .5rem;
    cursor: default;
    font-size: .8em;
    color: ${palette.colorTwo};
    @media screen and(max-width: 300px) {
      font-size: .6em;
    }
      &: hover {
      background-color: ${palette.colorFour};
      color: ${palette.colorThree};
    }
  }
}

  .buttons {
  margin: 6% 0;
  width: 80%;
  display: flex;
  justify-content: space-around;

    & a {
    border: 1px solid ${palette.colorOne};
    background-color: ${palette.colorTwo};
    color: ${palette.colorOne};
    border-radius: .2rem;
    text-decoration: none;
    height: 1.5rem;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .7em;
    transition: transform .8s ease;

      & svg {
      margin-left: 5%;
      }

      &:hover {
        background-color: ${palette.colorFour};
        color: ${palette.colorOne};
        transform: translateX(1px) translateY(1px);
      }
    }

    @media screen and(max-width: 300px) {
      font-size: .5em;
    }
  }
}
/*
@keyframes slide {
  0 % {
    opacity: .3;
    transform: rotate3d(0, 1, 0, 90deg) scaleX(0);
  }

  25 % {
    opacity: .5;
    transform: rotate3d(0, 1, 0, 90deg) ;
  }

  50 % {
    opacity: .7;
    transform: rotate3d(0, 1, 0, 90deg) ;
  }

  75 % {
    opacity: .9;
    transform: rotate3d(0, 1, 0, 90deg) ;
  }

  100 % {
    opacity: 1;
    transform: rotate3d(0, 1, 0, 90deg) scaleX(1);
  }*/
}
`;




export { MainContainer, IntroContainer, InfoContainer, CopyRightsBanner, SlideContainer }
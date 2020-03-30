import styledComponent from 'styled-components';
import palette from './colors';

const MainContainer = styledComponent.div`
  position: relative;
  
	overflow: hidden;
  display: grid;
  grid-template-areas: "left right";
  grid-template-columns: 35% 1fr;
  grid-template-rows: 1fr;



  @media screen and (max-width: 1000px) and (min-width: 701px){
    height: 1200px;
    grid-template-areas: "left" 
                         "right";
    grid-template-columns: 1fr;
    grid-template-rows: 500px 700px;
  }

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
  right: calc(35% - 8rem);
  @media screen and (max-width: 1000px){
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
  `};
  position: relative;


  .title {
    @media screen and (max-width: 1000px) and (min-width: 701px){
      position: absolute;
      top: 20%;
    }
    @media screen and (max-width: 1000px) {
      position: absolute;
      top: 4%;
    }
    font-size: 2em;
    color: ${palette.colorFive};
  }

  .description {
    height: 40px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    cursor: pointer;
    scroll-behavior: smooth;
    p {
      text-align: justify;
      line-height: 1.3rem;
      width: 90%;
      font-size: 1em;
      color: ${palette.colorFive};
      @media screen and(max-width: 300px) {
        font-size: .8em;
      }
      transition: margin-top 1s ease;
    }

  /*  @media screen and (max-width: 700px) {
      &:hover p{
        margin-top: -12%;
      }
    }*/
    
  }

  .technologies {
    margin: 2.5% 0 0 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    
    & span {
      padding: .3rem;
      border: 1px solid;
      margin: .2rem .5rem;
      cursor: default;
      font-size: .8em;
      user-select: none;
      color: ${palette.colorTwo};

      @media screen and(max-width: 300px) {
        font-size: .6em;
      }
      &:hover {
        background-color: ${palette.colorFour};
        color: ${palette.colorThree};
      }
    }
  }

  .buttons {
    margin: 2% 0 6% 0;
    width: 80%;
    display: flex;
    justify-content: space-around;
    & > a {
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
      user-select: none;
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
  }
  @media screen and(max-width: 300px) {
    font-size: .5em;
  }
`;




export { MainContainer, IntroContainer, InfoContainer, CopyRightsBanner, SlideContainer }
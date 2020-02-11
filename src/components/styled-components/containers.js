import styledComponent from 'styled-components';

const MainContainer = styledComponent.div`
  position: relative;
  background-color: gray;
  height: 100vh;
  min-height: 600px;
  min-width: 300px;
  display: grid;
  grid-template-areas: "left right";
  grid-template-columns: 35% 1fr;
  grid-template-rows: 1fr;   

  @media screen and (max-width: 700px and min-width: 301px){
    height: 1000px;
    grid-template-areas: "left" 
                         "right";
    grid-template-columns: auto;
    grid-template-rows: 500px 500px;
  }

  @media screen and (max-width: 300px){
    height: 100%; 
    grid-template-areas: "left" 
                         "right";
    grid-template-columns: 300px;
    grid-template-rows: 500px 500px;
  }
`;

const IntroContainer = styledComponent.div`
  border: 1px solid green;
  grid-area: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > .mantra {
    width: 90%;
    border: 1px solid;
    margin-bottom: 2rem;
    font-size: 1.5rem;

  }

  & > .current {
    border: 1px solid;
    width: 90%;
    text-align: justify;
    margin-bottom: 4rem;
  }
`;

const CopyRightsBanner = styledComponent.div`
  background-color: pink;
  position: absolute;
  bottom: 0;
  width: 8rem;
  right: calc(35% - 6rem);
  @media screen and (max-width: 700px){
    right: calc(50% - 4rem);
  }
`;

const InfoContainer = styledComponent.div`
  grid-area: right;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .prev {
    position: absolute;
    top: 5vh;
    left: 5vw;
  }

  .next {
    position: absolute;
    bottom: 5vh;
    left: 5vw;
  }
  & img {
    width:20%;
    height: 20%;
  }
`;

const SlideContainer = styledComponent.div`
  border: 1px solid yellow;
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: all 1s ease-in;
`;


export { MainContainer, IntroContainer, InfoContainer, CopyRightsBanner, SlideContainer }
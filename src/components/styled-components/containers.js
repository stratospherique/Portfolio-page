import styledComponent from 'styled-components';

const MainContainer = styledComponent.div`
  position: relative;
  background-color: gray;
  height: 100vh;
  display: grid;
  grid-template-areas: "left right";
  grid-template-columns: 35% 1fr;
  grid-template-rows: 1fr;   

  @media screen and (max-width: 700px){
    height: auto;
    grid-template-areas: "left" 
                         "right";
    grid-template-columns: 1fr;
    grid-template-rows: 500px 500px;
  }
`;

const IntroContainer = styledComponent.div`
  border: 1px solid green;
  grid-area: left;
  display: flex;
  justify-content: center;
  align-items: center;
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
  border: 1px solid red;
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
`;

export { MainContainer, IntroContainer, InfoContainer, CopyRightsBanner, SlideContainer }
import styledComponent from 'styled-components';

const MainContainer = styledComponent.div`
  position: relative;
  background-color: gray;
  
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
    background-color: pink;
    cursor: pointer;
    transition: background-color .5s ease;
    &:hover {
      background-color: green;
    }
  }
  .prev {
    position: absolute;
    top: calc(50% - 1rem);
    left: 4%;
    /*@media screen and (max-width: 700px){
      left: calc(50% - 4rem);
      top: 4vw;
    }*/
  }

  .next {
    position: absolute;
    top: calc(50% - 1rem);
    right: 4%;
    /*@media screen and (max-width: 700px){
      right: calc(50% - 4rem);
      top: 4vw;
    }*/
  }

  .slide-container {
    width: 80%;
    height: 90%;
    overflow: hidden;
    border: 1px solid blue;

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
  ${props => props.isActive ? `
  opacity: 1;` : `
  opacity: 0;
  `}

  .title {
    margin: 2% 0 0 0;
  }

  .description {
    border: 1px solid;
    text-align: justified;
    line-height: 1.3rem;
    width: 90%;
    font-size: .6em;
  }

  .technologies {
    border: 1px solid;
    margin: 5% 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    
    & span {
      padding: .3rem;
      border: 1px solid;
      margin: .5rem .5rem;
    }
  }

  .buttons {
    margin: 3% 0;
  }

  @keyframes slide {
    0% {
      opacity: .3;
      transform: rotate3d(0,1,0,90deg) scaleX(0) ;
    }

    25% {
      opacity: .5;
      transform: rotate3d(0,1,0,90deg) ;
    }

    50% {
      opacity: .7;
      transform: rotate3d(0,1,0,90deg) ;
    }

    75% {
      opacity: .9;
      transform: rotate3d(0,1,0,90deg) ;
    }

    100% {
      opacity: 1;
      transform: rotate3d(0,1,0,90deg) scaleX(1);
    }
  }
`;




export { MainContainer, IntroContainer, InfoContainer, CopyRightsBanner, SlideContainer }
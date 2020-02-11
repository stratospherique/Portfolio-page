import styledComponent from 'styled-components';

const SocialLinks = styledComponent.div`
  border: 1px solid;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 40%;

  & img {
    width: 2rem;
  }
`;

const PreviewImages = styledComponent.div`
  border: 1px solid;
  width: 80%;
  height: 20rem;
  margin: 2rem 0;
  position: relative;

  .images {
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-wrap: none;

    & div {
      width: 200%;
      display: flex;
      transition: transform 0.5s ease;
      
      & img {
        width: 100%;
        height: 20rem;
      }
    }
  }

  .mobile-view {
    & div {
      transform: translateX(-100%);
    }
  }

  .web-view {
    & div {
      transform: translateX(0);
    }
  }

  .anim-btn {
    border: 1px solid;
    display: flex;
    justify-content: center;
    width: 8rem;
    height: 1.5rem;
    position: absolute;
    bottom: 0;
    left: calc(50% - 4rem);

    & span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 100%;
      cursor: pointer;
    }
    .active {
      background-color: yellow;
    }
  }
`;

export { SocialLinks, PreviewImages }
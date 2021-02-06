import styled from 'styled-components';

const BlurComponent = styled.div`
  display: block;
  background-color: white;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 1200;
  opacity: 0.95;
  filter: blur();
`;

export default BlurComponent;

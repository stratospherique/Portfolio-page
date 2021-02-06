import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PopupContainer = styled.div`
  position: fixed;
  z-index: 1500;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  padding-top: 5vh;
  padding-bottom: 5vh;
  width: 100%;
  min-width: 270px;
  top: 0;
  left: 0;
  background-color: rgba(100,90,10,.6);
  overflow-y: scroll;
`;

const PopUpDialog = ({ onClose, children, style = {} }) => {
  const handleClose = e => {
    if (e.target.id === 'popup') {
      onClose();
    }
  };

  const handleKeyPress = e => {
    if (e.keyCode === 27) onClose();
  };

  useEffect(() => {
    const rootElement = document.querySelector('body');
    window.addEventListener('keydown', handleKeyPress);
    rootElement.classList.add('stop-scrolling');
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      rootElement.classList.remove('stop-scrolling');
    };
  });

  return (
    <PopupContainer
      onPointerDown={handleClose}
      id="popup"
      style={{
        ...style,
      }}
    >
      { children }
    </PopupContainer>
  );
};

PopUpDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  style: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
};

export default memo(PopUpDialog);

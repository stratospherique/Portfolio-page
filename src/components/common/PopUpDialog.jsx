import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PopupContainer = styled.div`
  position: fixed;
  z-index: 1500;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  min-width: 270px;
  top: 0;
  left: 0;
  overflow: scroll;
  background-color: rgba(100,90,10,.6);
`;

const PopUpDialog = ({ onClose, children, style = {} }) => {
  const handleClose = e => {
    if (e.target.id === 'popup') {
      onClose();
    }
  };

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

export default PopUpDialog;

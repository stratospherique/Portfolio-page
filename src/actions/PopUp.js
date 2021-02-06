import * as actions from './actionTypes';

export const closePopup = dispatch => {
  dispatch({ type: actions.CLOSE_POPUP });
};

export const openPopup = dispatch => {
  dispatch({ type: actions.OPEN_POPUP });
};

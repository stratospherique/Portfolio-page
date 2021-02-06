import * as actions from 'actions/actionTypes';

const popUpReducer = (state = false, action) => {
  switch (action.type) {
    case actions.OPEN_POPUP:
      return true;
    case actions.CLOSE_POPUP:
      return false;
    default:
      return state;
  }
};

// eslint-disable-next-line import/prefer-default-export
export { popUpReducer };

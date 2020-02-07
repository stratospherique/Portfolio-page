import { combineReducers } from 'redux';
import currentSlideReducer from './currentSlideReducer';

const globalReducer = combineReducers({
  currentSlide: currentSlideReducer,
})

export default globalReducer;
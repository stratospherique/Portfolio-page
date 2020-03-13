export const NEXT_SLIDE = 'NEXT_SLIDE';
export const PREVIOUS_SLIDE = 'PREVIOUS_SLIDE';

export const slidingReducer = (state, action) => {
  switch (action.type) {
    case NEXT_SLIDE:
      return state + 1 > 3 ? 0 : state + 1;
    case PREVIOUS_SLIDE:
      return state - 1 < 0 ? 3 : state - 1;
    default:
      return state;
  }
}
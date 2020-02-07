
const currentSlideReducer = (state = 0, action) => {
  switch (action.type) {
    case 'NEXTSLIDEACTION':
      return state + 1 > 3 ? 0 : state + 1;
    case 'PREVIOUSSLIDEACTION':
      return state - 1 < 0 ? 3 : state - 1
    default:
      return state;
  }
}

export default currentSlideReducer;
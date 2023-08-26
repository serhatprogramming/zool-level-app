// Initial state for the zoom level
const initialState = 100;

// Zoom level reducer function
const zoomLevelReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ZOOM_IN":
      return state + 5;
    case "ZOOM_OUT":
      return state - 5;
    case "RESET_ZOOM":
      return 100; // Reset to the initial state
    default:
      return state;
  }
};

export default zoomLevelReducer;

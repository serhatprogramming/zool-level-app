import { configureStore } from "@reduxjs/toolkit";
import zoomLevelReducer from "../reducers/zoomLevelReducer";

const store = configureStore({
  reducer: {
    zoomLevel: zoomLevelReducer,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import { reducer as authSliceReducer } from "app-header";
import videoSliceReducer from "./videoSlice";

export default configureStore({
  reducer: {
    auth: authSliceReducer,
    videos: videoSliceReducer,
  },
});

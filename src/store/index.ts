import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./messageSlice";

export default configureStore({
  reducer: {
    message: messageReducer,
  },
});

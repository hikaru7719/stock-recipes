import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name: "message",
  initialState: {
    value: "none",
  },
  reducers: {
    error: (state) => {
      state.value = "error";
    },
    success: (state) => {
      state.value = "success";
    },
    reset: (state) => {
      state.value = "none";
    },
  },
});

export const { error, success, reset } = messageSlice.actions;
export const stateMessage = (state) => state.message.value;

export default messageSlice.reducer;

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
  },
});

export const { error, success } = messageSlice.actions;
export const stateMessage = (state) => state.message.value;

export default messageSlice.reducer;

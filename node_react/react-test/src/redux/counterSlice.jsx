import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  // state 이름
  name: "counter",

  // 초기값
  initialState: {
    value: 0,
  },

  // setState
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",

  initialState: {
    value: true,
  },

  reducers: {
    logout: (state) => {
      state.value = true;
    },
    login: (state) => {
      state.value = false;
    },
  },
});

export const { logout, login } = loginSlice.actions;
export default loginSlice.reducer;

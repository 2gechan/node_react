import { createSlice } from "@reduxjs/toolkit";

export const curruntUserSlice = createSlice({
  name: "curruntUser",

  initialState: {
    curruntUser: {
      su_id: "",
      su_password: "",
      su_name: "",
      su_tel: "",
      su_role: "",
    },
  },

  reducers: {
    setCurruntUser: (state, action) => {
      state.curruntUser = { ...state.curruntUser, ...action.payload };
    },
  },
});

export const { setCurruntUser } = curruntUserSlice.actions;
export default curruntUserSlice.reducer;

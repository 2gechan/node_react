import { createSlice } from "@reduxjs/toolkit";

export const curruntUser = createSlice({
  name: "currentUser",

  initialState: {
    currentUser: {
      u_id: "",
      u_pwd: "",
      u_tel: "",
      u_addr: "",
      u_email: "",
      u_name: "",
      u_rnum: "",
      u_point: 0,
    },
  },

  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = { ...state.currentUser, ...action.payload };
    },

    resetCurrentUser: (state) => {
      state.currentUser = {
        u_id: "",
        u_pwd: "",
        u_tel: "",
        u_addr: "",
        u_email: "",
        u_name: "",
        u_rnum: "",
        u_point: 0,
      };
    },
  },
});

export const { setCurrentUser, resetCurrentUser } = curruntUser.actions;
export default curruntUser.reducer;

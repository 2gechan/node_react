import { createSlice } from "@reduxjs/toolkit";

export const userInfoSlice = createSlice({
  name: "userInfo",

  initialState: {
    user: { su_id: "", su_password: "", su_name: "", su_tel: "", su_role: "" },
  },

  reducers: {
    joinUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
  },
});

export const { joinUser } = userInfoSlice.actions;
export default userInfoSlice.reducer;

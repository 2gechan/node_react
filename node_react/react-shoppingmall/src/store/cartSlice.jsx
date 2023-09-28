import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: { sc_seq: 0, sc_siSeq: 0, sc_suid: "" },
  },

  reducers: {
    inCart: (state, action) => {
      state.cart = { ...state.cart, ...action.payload };
    },
    outCart: (state, action) => {
      state.cart = {};
    },
  },
});

export const { inCart, outCart } = cartSlice.actions;
export default cartSlice.reducer;

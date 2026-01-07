import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems: (state, action) => {
      const incoming = action.payload;

      // Check if item already exists
      const existingItem = state.find(item => item.name === incoming.name);

      if (existingItem) {
        existingItem.quantity += incoming.quantity;
        existingItem.price += incoming.price;
      } else {
        state.push(incoming);
      }
    },

    removeItems: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    }
  }
});

/* ✅ FIXED SELECTOR */
export const getTotalPrice = (state) =>
  state.cart.reduce((total, item) => total + item.price, 0);

export const { addItems, removeItems } = cartSlice.actions;
export default cartSlice.reducer;

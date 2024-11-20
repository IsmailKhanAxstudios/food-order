import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const newItemId = action.payload.card.info.id;

      // Directly accessing the state without `current()`
      const existingItem = state.items.find(
        (item) => item.card.info.id === newItemId
      );

      if (existingItem) {
        // Since Redux Toolkit uses Immer, directly modifying the state is fine here
        console.log(current(existingItem));
        existingItem.quantity += 1;
      } else {
        // Push a new item to the state array with quantity initialized to 1
        state.items.push({ quantity: 1, ...action.payload });
      }
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearItems: (state, action) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearItems } = cart.actions;
export default cart.reducer;

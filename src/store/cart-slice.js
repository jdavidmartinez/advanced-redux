import { createSlice } from "@reduxjs/toolkit";
import { is } from "@reduxjs/toolkit/node_modules/immer/dist/internal";

createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantuty: 0,
    totalAmount: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.findIndex(
        (item) => item.id === newItem.id
      );
      if (!existingItem) {
        state.item.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      }else {
          existingItem.quantity++;
          existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart() {},
  },
});

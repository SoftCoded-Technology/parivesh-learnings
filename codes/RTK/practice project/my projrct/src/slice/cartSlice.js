import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    addToCart: (state, action) => {
      const { id, title, price, image } = action.payload;
      const existingProduct = state.cart.find((product) => product.id === id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        const newProduct = {
          id,
          title,
          price,
          quantity: 1,
          image
        };
        state.cart.push(newProduct);
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increseQuantity: (state, action) => {
      const { id } = action.payload
      const existingProduct = state.cart.find((product) => product.id === id);
      existingProduct.quantity += 1;
    },
    decreseQuantity: (state, action) => {

      const { id } = action.payload
      const existingProduct = state.cart.find((product) => product.id === id);
      if (existingProduct.quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== id);
      }else{
        existingProduct.quantity -= 1;
      }
    }
  },
});

export const { setCart, addToCart, removeFromCart, increseQuantity, decreseQuantity } = cartSlice.actions;
export default cartSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCartProducts = createAsyncThunk(
  "cartProducts/fetching",
  async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/carts/1");
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    isLoading: false,
    lastFetched: 0,
    error: null,
  },
  reducers: {
    // cartProductsRequested: (state) => {
    // 	state.isLoading = true
    // },
    // cartProductsRequestError:(state,action) =>{
    //   state.isLoading = false
    //   state.error = action.payload
    // },
    // setCart: (state, action) => {
    // 	state.cart = action.payload.products
    // 	state.isLoading = false
    // },
    addToCart: (state, action) => {
      const { productId } = action.payload;
      const existingProduct = state.cart.find(
        (product) => product.productId === productId
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        const newProduct = {
          productId,
          quantity: 1,
        };
        state.cart.push(newProduct);
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (item) => item.productId !== action.payload
      );
    },
    increseQuantity: (state, action) => {
      const { productId } = action.payload;
      const existingProduct = state.cart.find(
        (product) => product.productId === productId
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      }
    },
    decreseQuantity: (state, action) => {
      const { productId } = action.payload;
      const existingProduct = state.cart.find(
        (product) => product.productId === productId
      );
      if (existingProduct.quantity === 1) {
        state.cart = state.cart.filter((item) => item.productId !== productId);
      } else {
        existingProduct.quantity -= 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCartProducts.fulfilled, (state, action) => {
        state.cart = action.payload.products;
        state.lastFetched = Date.now();
        state.isLoading = false;
      })
      .addCase(fetchCartProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Something Went Wrong !";
      });
  },
});

export const { addToCart, removeFromCart, increseQuantity, decreseQuantity } =
  cartSlice.actions;
// const {cartProductsRequested,cartProductsRequestError,setCart} = cartSlice.actions

export default cartSlice.reducer;

// this is basically working as a thunk action creator function
// export const fetchCartProducts =()=> async (dispatch) => {

//   dispatch(cartProductsRequested())
//   try {
//       const response = await axios.get("https://fakestoreapi.com/carts/1")
//       dispatch(setCart(response.data))
//   } catch (error) {

//       dispatch(cartProductsRequestError(error.message))
//   }
// }

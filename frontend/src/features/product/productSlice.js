// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import {fetchAllProduct } from './productAPI';

// const initialState = {
//   products: [],
//   status: "idel",
// };

// export const fetchAllProductAsync = createAsyncThunk(
//   "product/fetchAllProduct",
//   async () => {
//     const response = await fetchAllProduct();
//     console.log(response); // log the entire response first
//     return response; // return the entire response
//   }
// );

// export const productSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {
//     addProduct :(state)=>{
//         state.value +=1;
//     },
//   },
//     extraReucers: (builder) => {
//       builder
//         .addCase( fetchAllProductAsync.pending, (state) => {
//           state.status = "loading";
//         })
//         .addCase( fetchAllProductAsync.fulfilled, (state, action) => {
//           state.status = "idel";
//           state.products = action.payload;
//         });
//     },
 
// });

// export const {addProduct,removeProduct} = productSlice.actions;

// export const selectAllProducts = (state)=>state.product.products

// export default productSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllProduct } from './productAPI';

const initialState = {
  products: [],
  status: "idle",
};

export const fetchAllProductAsync = createAsyncThunk(
  "product/fetchAllProduct",
  async () => {
    const response = await fetchAllProduct();
    return response;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter((product) => (product.id) !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      });
  },
});

export const { addProduct, removeProduct } = productSlice.actions;
export const selectAllProducts = (state) => state.product.products;
export default productSlice.reducer;

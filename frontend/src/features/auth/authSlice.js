import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProduct } from "./productListAPI";

const initialState = {
  auth: [],
  status: "idel",
};

export const incrementAsync = createAsyncThunk(
  "auth/fetchProduct",
  async (product) => {
    const response = await fetchProduct(product);
    return response.data;
  }
);
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addProduct :(state)=>{
        state.value +=1;
    },
  },
    extraReucers: (builder) => {
      builder
        .addCase(incrementAsync.pending, (state) => {
          state.status = "loading";
        })
        .addCase(incrementAsync.fulfilled, (state, action) => {
          state.status = "idel";
          state.value += action.payload;
        });
    },
 
});

export const {addProduct,removeProduct} = productSlice.actions;

export const selectProduct = (state)=>state.counter.value

export default authSlice.reducer;
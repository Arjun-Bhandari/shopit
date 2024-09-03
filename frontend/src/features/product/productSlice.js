import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllProduct,fetchProductByFilter } from './productAPI';

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

export const fetchProductByFilterAsync = createAsyncThunk(
  "product/fetchProductByFilter",
  async (filter) => {
    const response = await fetchProductByFilter(filter);
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
      })
      .addCase( fetchProductByFilterAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase( fetchProductByFilterAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      });
  },
});

export const { addProduct, removeProduct } = productSlice.actions;
export const selectAllProducts = (state) => state.product.products;
export default productSlice.reducer;

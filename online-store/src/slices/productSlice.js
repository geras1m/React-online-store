import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {useHttp} from "../hooks/http.hooks";

const initialState = ({
  products: [],
  filteredProducts: [],
  productsLoadingStatus: 'idle',
  checkedFilterBrand: [],
  checkedFilterPrice: null,
  // checkedFilterCategory: [],
  // checkedFilterStock: [0,0],
});

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const {request} = useHttp();
    const data = await request("https://dummyjson.com/products?limit=100");
    return data.products;
  }
)

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    filterProducts(state, action) {
      state.filteredProducts = action.payload;
    },
    updateCheckedFilterBrand(state, action) {
      state.checkedFilterBrand = action.payload;
    },
    updateValueRangeSliderPrice(state, action) {
      state.checkedFilterPrice = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.productsLoadingStatus = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.productsLoadingStatus = 'idle';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.productsLoadingStatus = 'error';
      })
      .addDefaultCase(() => {
      })
  }
})

export const {
  filterProducts,
  updateCheckedFilterBrand,
  updateValueRangeSliderPrice,
} = productsSlice.actions;
export default productsSlice.reducer;



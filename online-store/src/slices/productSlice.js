import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {useHttp} from "../hooks/http.hooks";

// поместить в массив мин и мах цену и склад
const initialState = ({
  products: [],
  filteredProducts: [],
  productsLoadingStatus: 'idle',
  checkedFilterCategory: [],
  checkedFilterBrand: [],
  minAndMaxValueOfPrice: [],
  checkedMinFilterPrice: null,
  checkedMaxFilterPrice: null,
  minAndMaxValueOfStock: [],
  checkedMinFilterStock: null,
  checkedMaxFilterStock: null,
  searchInputValue: '',
  typeOfSorting: 'default',
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
    updateCheckedFilterCategory(state, action) {
      state.checkedFilterCategory = action.payload;
    },
    updateCheckedFilterBrand(state, action) {
      state.checkedFilterBrand = action.payload;
    },
    setMinAndMaxValueRangeSliderPrice(state, action) {
      state.minAndMaxValueOfPrice = action.payload;
    },
    updateMinValueRangeSliderPrice(state, action) {
      state.checkedMinFilterPrice = action.payload;
    },
    updateMaxValueRangeSliderPrice(state, action) {
      state.checkedMaxFilterPrice = action.payload;
    },
    setMinAndMaxValueRangeSliderStock(state, action) {
      state.minAndMaxValueOfStock = action.payload;
    },
    updateMinValueRangeSliderStock(state, action) {
      state.checkedMinFilterStock = action.payload;
    },
    updateMaxValueRangeSliderStock(state, action) {
      state.checkedMaxFilterStock = action.payload;
    },
    resetAllFilters(state) {
      state.checkedFilterCategory = [];
      state.checkedFilterBrand = [];
      state.checkedMinFilterPrice = state.minAndMaxValueOfPrice[0];
      state.checkedMaxFilterPrice = state.minAndMaxValueOfPrice[1];
      state.checkedMinFilterStock = state.minAndMaxValueOfStock[0];
      state.checkedMaxFilterStock = state.minAndMaxValueOfStock[1];
      state.typeOfSorting = 'default';
      state.searchInputValue = '';
    },
    updateTypeOfSorting(state, action){
      state.typeOfSorting = action.payload;
    },
    updateSearchInputValue(state, action){
      state.searchInputValue = action.payload;
    } ,
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
  updateCheckedFilterCategory,
  updateCheckedFilterBrand,
  setMinAndMaxValueRangeSliderPrice,
  updateMinValueRangeSliderPrice,
  updateMaxValueRangeSliderPrice,
  setMinAndMaxValueRangeSliderStock,
  updateMinValueRangeSliderStock,
  updateMaxValueRangeSliderStock,
  resetAllFilters,
  updateTypeOfSorting,
  updateSearchInputValue,
} = productsSlice.actions;
export default productsSlice.reducer;



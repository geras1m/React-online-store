import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {useHttp} from "../hooks/http.hooks";

const initialState = ({
  products: [],
  filteredProducts: [],
  productsLoadingStatus: 'idle',
  checkedFilterCategory: [],
  checkedFilterBrand: [],
  minAndMaxValueOfPrice: [],
  checkedMinAndMaxFilteredPrice: [0,0],
  minAndMaxValueOfStock: [],
  checkedMinAndMaxFilteredStock: [0,0],
  searchInputValue: '',
  typeOfSorting: '',
  viewOfCards: null
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
    updateMinAndMaxValueRangeSliderPrice(state, action){
      state.checkedMinAndMaxFilteredPrice = action.payload;
    },

    setMinAndMaxValueRangeSliderStock(state, action) {
      state.minAndMaxValueOfStock = action.payload;
    },
    updateMinAndMaxValueRangeSliderStock(state, action){
      state.checkedMinAndMaxFilteredStock = action.payload;
    },

    resetAllFilters(state) {
      state.checkedFilterCategory = [];
      state.checkedFilterBrand = [];
      state.checkedMinAndMaxFilteredPrice = state.minAndMaxValueOfPrice;
      state.checkedMinAndMaxFilteredStock = state.minAndMaxValueOfStock;
      state.typeOfSorting = '';
      state.searchInputValue = '';
      state.viewOfCards = null;
    },
    updateTypeOfSorting(state, action){
      state.typeOfSorting = action.payload;
    },
    updateSearchInputValue(state, action){
      state.searchInputValue = action.payload;
    } ,
    changeTypeOfCardsView(state, action){
      state.viewOfCards = action.payload;
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
  updateCheckedFilterCategory,
  updateCheckedFilterBrand,
  setMinAndMaxValueRangeSliderPrice,
  updateMinAndMaxValueRangeSliderPrice,
  setMinAndMaxValueRangeSliderStock,
  updateMinAndMaxValueRangeSliderStock,
  resetAllFilters,
  updateTypeOfSorting,
  updateSearchInputValue,
  changeTypeOfCardsView,

} = productsSlice.actions;
export default productsSlice.reducer;



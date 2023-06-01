import {configureStore} from "@reduxjs/toolkit";
import user from '../slices/userSlice';
import products from '../slices/productSlice';

export const store = configureStore({
  reducer: {
    user,
    products
  }
})

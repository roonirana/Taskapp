import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productlist";

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;

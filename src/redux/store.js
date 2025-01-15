import { configureStore } from "@reduxjs/toolkit";
import detailReducer from "./detailSlice"; 

const store = configureStore({
  reducer: {
    detail: detailReducer,
  },
});

export default store;

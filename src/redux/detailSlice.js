import { createSlice } from "@reduxjs/toolkit";

export const detailSlice = createSlice({
  name: 'detail', 
  initialState: {
    data: null,
  },
  reducers: {
    setDetail: (state, action) => {
      state.data = action.payload; 
    },
  },
});

export const { setDetail } = detailSlice.actions;

export default detailSlice.reducer;

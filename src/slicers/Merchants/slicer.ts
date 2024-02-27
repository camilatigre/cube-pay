// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { getMerchantsApi } from "../../api/api";

// export const fetchMerchants = createAsyncThunk(
//   "merchants/fetchMerchants",
//   async () => {
//     const response = await getMerchantsApi(); // Replace with your actual API endpoint
//     return await response.json();
//   }
// );

// const slice = createSlice({
//   name: "merchants",
//   initialState: {
//     data: [],
//     isLoading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchMerchantsThunk.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(fetchMerchantsThunk.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.data = action.payload;
//       })
//       .addCase(fetchMerchantsThunk.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export const { fetchMerchantsThunk } = slice.actions;
// export default slice.reducer;

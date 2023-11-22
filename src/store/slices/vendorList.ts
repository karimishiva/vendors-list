import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VendorsListState } from "src/types/types";
import { vendorsApi } from "../apis/vendorsApi";

const initialState = {
  vendors: [],
  page: 1,
  page_size: 10,
  lat: 35.754,
  long: 51.328,
};
const vendorsListSlice = createSlice({
  name: "vendorsList",
  initialState,
  reducers: {
    changePageSize(state: VendorsListState, action: PayloadAction<number>) {
      state.page_size = action.payload;
    },
    changeGeoLocation(
      state: VendorsListState,
      action: PayloadAction<Pick<VendorsListState, "lat" | "long">>
    ) {
      state.lat = action.payload.lat;
      state.long = action.payload.long;
    },
    changePage(state: VendorsListState) {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      vendorsApi.endpoints.fetchVendors.matchFulfilled,
      (state, { payload }) => {
        console.log("payload", payload?.data?.finalResult);
        state.vendors = payload?.data?.finalResult;
      }
    );
  },
});

export const vendorsListReducer = vendorsListSlice.reducer;
export const { changePageSize, changeGeoLocation } = vendorsListSlice.actions;

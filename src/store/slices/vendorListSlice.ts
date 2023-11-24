import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VendorsListState, VendorsT } from "src/types/types";
import { vendorsApi } from "../apis/vendorsApi";

const initialState = {
  vendors: [],
  page: 0,
  page_size: 10,
  lat: 35.774,
  long: 51.418,
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
      (state: VendorsListState, { payload }) => {
        const temp: VendorsT[] = [
          ...state.vendors,
          ...payload.data.finalResult,
        ];
        state.vendors = temp;
      }
    );
  },
});

export const vendorsListReducer = vendorsListSlice.reducer;
export const { changePageSize, changeGeoLocation, changePage } =
  vendorsListSlice.actions;

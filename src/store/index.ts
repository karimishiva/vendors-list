import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { vendorsApi } from "./apis/vendorsApi";
import {
  vendorsListReducer,
  changePageSize,
  changeGeoLocation,
} from "./slices/vendorList";

export const store = configureStore({
  reducer: {
    vendorsList: vendorsListReducer,
    [vendorsApi.reducerPath]: vendorsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(vendorsApi.middleware);
  },
});

setupListeners(store.dispatch);

export { useFetchVendorsQuery } from "./apis/vendorsApi";
export { changePageSize, changeGeoLocation };

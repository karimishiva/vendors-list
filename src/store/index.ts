import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { rtkQueryErrorLogger, vendorsApi } from "./apis/vendorsApi";
import {
  vendorsListReducer,
  changePageSize,
  changeGeoLocation,
  changePage,
} from "./slices/vendorListSlice";

export const store = configureStore({
  reducer: {
    vendorsList: vendorsListReducer,
    [vendorsApi.reducerPath]: vendorsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      vendorsApi.middleware,
      rtkQueryErrorLogger
    );
  },
});

setupListeners(store.dispatch);

export { useFetchVendorsQuery } from "./apis/vendorsApi";
export { changePageSize, changePage, changeGeoLocation };

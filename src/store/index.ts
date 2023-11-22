import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { vendorsApi } from "./apis/vendorsApi";

export const store = configureStore({
  reducer: {
    [vendorsApi.reducerPath]: vendorsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(vendorsApi.middleware);
  },
});

setupListeners(store.dispatch);

export { useFetchVendorsQuery } from "./apis/vendorsApi";

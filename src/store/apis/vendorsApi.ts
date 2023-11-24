import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { toast } from "react-toastify";
import { isRejectedWithValue } from "@reduxjs/toolkit";
import type { Middleware } from "@reduxjs/toolkit";

export const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    if (action.payload.originalStatus === 404) {
      toast.error("صفحه مورد نظر یافت نشد.");
    } else if (action.payload.originalStatus === 500) {
      toast.error("خطایی در سرور رخ داده است.");
    } else {
      toast.error("مشکلی پیش آمده! مجدد سعی کنید.");
    }
  }

  return next(action);
};
const vendorsApi = createApi({
  reducerPath: "vendors",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://snappfood.ir/mobile/v3/restaurant",
  }),
  endpoints(builder) {
    return {
      fetchVendors: builder.query({
        query: (body) => {
          return {
            url: "/vendors-list",
            params: body,
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchVendorsQuery, useLazyFetchVendorsQuery } = vendorsApi;
export { vendorsApi };

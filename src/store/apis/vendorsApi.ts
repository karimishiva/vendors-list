import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
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

export const { useFetchVendorsQuery } = vendorsApi;
export { vendorsApi };

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const OrderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/v1",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    GetCart: builder.query<any, void>({
      query: () => "/cart",
    }),
  }),
});

export const { useGetCartQuery } = OrderApi;
export { OrderApi };

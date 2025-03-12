import { createApi, CreateApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const OrderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
  }),
  endpoints: (builder) => ({}),
});

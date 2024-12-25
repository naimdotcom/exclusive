import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const ProductApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    GetAllProducts: builder.query({
      query: () => "/products",
    }),
  }),
});

const { useGetAllProductsQuery } = ProductApi;

export { ProductApi, useGetAllProductsQuery };

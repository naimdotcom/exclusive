import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const ProductApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    GetAllProducts: builder.query<any, void>({
      query: () => "/products",
    }),
    BestSelling: builder.query<any, void>({
      query: () => "/products/category/smartphones",
    }),
  }),
});

const { useGetAllProductsQuery, useBestSellingQuery } = ProductApi;

export { ProductApi, useGetAllProductsQuery, useBestSellingQuery };

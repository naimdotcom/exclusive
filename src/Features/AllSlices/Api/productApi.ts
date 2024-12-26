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
    GetAllCategoryList: builder.query<any, void>({
      query: () => "/products/category-list",
    }),
  }),
});

const {
  useGetAllProductsQuery,
  useBestSellingQuery,
  useGetAllCategoryListQuery,
} = ProductApi;

export {
  ProductApi,
  useGetAllProductsQuery,
  useBestSellingQuery,
  useGetAllCategoryListQuery,
};

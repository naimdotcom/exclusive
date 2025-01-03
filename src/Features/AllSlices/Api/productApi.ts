import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const ProductApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    GetAllProducts: builder.query<any, void>({
      query: () => "/products",
    }),
    GetProductByLimit: builder.query<any, number>({
      query: (limit: number = 30) => `products?limit=${limit}`,
    }),
    GetProductById: builder.query<any, number>({
      query: (id: number) => `/products/${id}`,
    }),
    BestSelling: builder.query<any, void>({
      query: () => "/products/category/smartphones",
    }),
    GetAllCategoryList: builder.query<any, void>({
      query: () => "/products/category-list",
    }),
    GetProductByCategory: builder.query<any, string>({
      query: (category: string) => `/products/category/${category}`,
    }),
  }),
});

const {
  useGetAllProductsQuery,
  useBestSellingQuery,
  useGetAllCategoryListQuery,
  useGetProductByLimitQuery,
  useGetProductByIdQuery,
  useGetProductByCategoryQuery,
} = ProductApi;

export {
  ProductApi,
  useGetAllProductsQuery,
  useBestSellingQuery,
  useGetAllCategoryListQuery,
  useGetProductByLimitQuery,
  useGetProductByIdQuery,
  useGetProductByCategoryQuery,
};

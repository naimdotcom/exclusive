import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const ProductApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/v1" }),
  endpoints: (builder) => ({
    GetAllProducts: builder.query<any, void>({
      query: () => "/product",
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
    GetBanner: builder.query<any, void>({
      query: () => `/banner`,
    }),
    GetFlashSales: builder.query<any, void>({
      query: () => `/flashsales`,
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
  useGetBannerQuery,
  useGetFlashSalesQuery,
} = ProductApi;

export {
  ProductApi,
  useGetAllProductsQuery,
  useBestSellingQuery,
  useGetAllCategoryListQuery,
  useGetProductByLimitQuery,
  useGetProductByIdQuery,
  useGetProductByCategoryQuery,
  useGetBannerQuery,
  useGetFlashSalesQuery,
};

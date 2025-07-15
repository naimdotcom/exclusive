import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const ProductApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      import.meta.env.VITE_BACKEND_DOMAIN_NAME ||
      "http://localhost:3000/api/v1",
  }),
  endpoints: (builder) => ({
    GetAllProducts: builder.query<any, void>({
      query: () => "/product",
    }),
    GetProductByLimit: builder.query<any, number>({
      query: (limit: number = 30) => `products?limit=${limit}`,
    }),
    GetProductById: builder.query<any, string>({
      query: (id: string) => `/product/${id}`,
    }),
    BestSelling: builder.query<any, void>({
      query: () => "/products/category/smartphones",
    }),
    GetAllCategoryList: builder.query<any, void>({
      query: () => "/category",
    }),
    GetProductByCategory: builder.query<any, string>({
      query: (category: string) => `/category/${category}`,
    }),
    GetBanner: builder.query<any, void>({
      query: () => `/banner`,
    }),
    GetFlashSales: builder.query<any, void>({
      query: () => `/flashsales`,
    }),
    GetCategory: builder.query<any, void>({
      query: () => `category`,
    }),
    GetBestSallingProduct: builder.query<any, void>({
      query: () => `category/mobile`,
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
  useGetCategoryQuery,
  useGetBestSallingProductQuery,
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
  useGetCategoryQuery,
  useGetBestSallingProductQuery,
};

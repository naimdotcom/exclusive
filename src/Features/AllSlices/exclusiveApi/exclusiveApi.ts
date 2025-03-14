import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const ExclusiveApi = createApi({
  reducerPath: "exclusiveApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/v1",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    GetAllBanner: builder.query<any, void>({
      query: () => "/banner",
    }),
    GetAllFlashSales: builder.query<any, void>({
      query: () => "/flashsales",
    }),
    GetAllCategory: builder.query<any, void>({
      query: () => "/category",
    }),
    GetSingleCategory: builder.query<any, string>({
      query: (id: string) => `/category/${id}`,
    }),
    GetSingleProduct: builder.query<any, string>({
      query: (id: string) => `/product/${id}`,
    }),
    GetAllProduct: builder.query<any, void>({
      query: () => "/product",
    }),
    GetAddToCart: builder.mutation<any, any>({
      query: (data) => ({
        url: "/cart",
        method: "POST",
        body: data,
      }),
    }),
    GetCart: builder.query<any, void>({
      query: () => "/cart",
    }),
    RemoveCart: builder.mutation<any, any>({
      query: (id: string) => ({
        url: `/cart/${id}`,
        method: "DELETE",
      }),
    }),
    placeOrder: builder.mutation<any, any>({
      query: (data) => ({
        url: "/order/place-order",
        method: "POST",
        body: data,
      }),
    }),
  }),
});
export const {
  useGetAllBannerQuery,
  useGetAllFlashSalesQuery,
  useGetAddToCartMutation,
  useGetAllCategoryQuery,
  useGetSingleCategoryQuery,
  useGetAllProductQuery,
  useGetSingleProductQuery,
  useGetCartQuery,
  useRemoveCartMutation,
  usePlaceOrderMutation,
} = ExclusiveApi;

export default ExclusiveApi;
